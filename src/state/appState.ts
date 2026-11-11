/**
 * Application state and the reducer that changes it.
 *
 * A reducer is a pure function (state, action) -> new state. It must not read
 * the clock, storage or anything else from outside: whoever dispatches puts
 * the current time INTO the action (`now`). That keeps every state change
 * replayable in a test with a fixed clock.
 */

import { newCard, review } from "../domain/srs";
import { localDateKey } from "../domain/time";
import {
  DAILY_MODULES,
  type DailySessionState,
  type DayRecord,
  type History,
  type LanguageMode,
  type ModuleId,
  type Rating,
  type SrsCard,
  type Timestamp,
} from "../domain/types";

/** Bump when the stored shape changes; storage.ts refuses other versions. */
export const STATE_VERSION = 5;

/**
 * New words per day. Counted per WORD, not per spelling: the import script
 * folds "pomme"/"pommes" into one entry, so the pair uses one slot.
 */
export const DEFAULT_NEW_PER_DAY = 10;

export interface AppState {
  version: typeof STATE_VERSION;
  settings: {
    languageMode: LanguageMode;
    /** How many never-studied words the recall module lets in per day. */
    newPerDay: number;
  };
  /** Review state per vocabulary item id. No entry = never studied. */
  cards: Record<string, SrsCard>;
  /**
   * One record per active day. Streaks, minutes per day and the daily
   * new-word limit are all read from here; none of them is stored separately.
   */
  history: History;
  /** The most recent session, or null. May be from an earlier day. */
  session: DailySessionState | null;
  /** Grammar lessons finished so far, oldest first. */
  completedLessons: string[];
  /**
   * Answers the learner marked as correct after the app said wrong, per
   * exercise id. Accepted automatically from then on, so the same right
   * sentence is not failed again when the lesson comes round.
   */
  acceptedAnswers: Record<string, string[]>;
}

export type AppAction =
  | { type: "setLanguage"; mode: LanguageMode }
  | { type: "setNewPerDay"; count: number }
  | { type: "reviewCard"; itemId: string; rating: Rating; now: Timestamp }
  | {
      type: "startSession";
      now: Timestamp;
      lessonId: string;
      phoneticsId: string;
      readingId: string;
      plan: Record<ModuleId, number>;
    }
  | { type: "tick"; moduleId: ModuleId; seconds: number }
  | { type: "completeModule"; moduleId: ModuleId }
  | { type: "completeLesson"; lessonId: string }
  | { type: "acceptAnswer"; exerciseId: string; answer: string };

export function initialState(): AppState {
  return {
    version: STATE_VERSION,
    settings: { languageMode: "TR", newPerDay: DEFAULT_NEW_PER_DAY },
    cards: {},
    history: {},
    session: null,
    completedLessons: [],
    acceptedAnswers: {},
  };
}

export function newSession(
  now: Timestamp,
  lessonId: string,
  phoneticsId: string,
  readingId: string,
  plan: Record<ModuleId, number>,
): DailySessionState {
  return {
    date: localDateKey(now),
    moduleIndex: 0,
    modules: DAILY_MODULES.map((spec) => ({
      id: spec.id,
      plannedMinutes: plan[spec.id],
      elapsedSeconds: 0,
      completed: false,
    })),
    lessonId,
    phoneticsId,
    readingId,
  };
}

/** The stored session if it belongs to today, else null (yesterday's is over). */
export function todaysSession(state: AppState, now: Timestamp): DailySessionState | null {
  return state.session?.date === localDateKey(now) ? state.session : null;
}

/** New words already studied today; 0 once the calendar day has changed. */
export function introducedToday(state: AppState, now: Timestamp): number {
  return state.history[localDateKey(now)]?.newWords ?? 0;
}

export const EMPTY_DAY: DayRecord = {
  seconds: 0,
  reviews: 0,
  newWords: 0,
  modulesCompleted: 0,
  newWordIds: [],
  reviewedWordIds: [],
};

/** History with one day's record changed; the record is created if missing. */
function withDay(history: History, dateKey: string, change: (day: DayRecord) => DayRecord): History {
  return { ...history, [dateKey]: change(history[dateKey] ?? EMPTY_DAY) };
}

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "setLanguage":
      return { ...state, settings: { ...state.settings, languageMode: action.mode } };

    case "reviewCard": {
      const existing = state.cards[action.itemId];
      const card = review(existing ?? newCard(action.itemId, action.now), action.rating, action.now);
      const cards = { ...state.cards, [action.itemId]: card };
      // A word with no card yet is new: it uses up one of today's slots.
      const isNew = existing === undefined;
      const id = action.itemId;
      const history = withDay(state.history, localDateKey(action.now), (day) => ({
        ...day,
        reviews: day.reviews + 1,
        newWords: day.newWords + (isNew ? 1 : 0),
        // Lists for the day summary: each word once, in the order first met.
        newWordIds: isNew && !day.newWordIds.includes(id) ? [...day.newWordIds, id] : day.newWordIds,
        reviewedWordIds:
          !isNew && !day.newWordIds.includes(id) && !day.reviewedWordIds.includes(id)
            ? [...day.reviewedWordIds, id]
            : day.reviewedWordIds,
      }));
      return { ...state, cards, history };
    }

    case "setNewPerDay":
      return { ...state, settings: { ...state.settings, newPerDay: Math.max(0, action.count) } };

    case "startSession": {
      // Same day: keep the progress. New day (or first ever): fresh session.
      const today = localDateKey(action.now);
      if (state.session?.date === today) return state;
      const history = withDay(state.history, today, (day) => ({
        ...day,
        lessonId: action.lessonId,
        readingId: action.readingId,
        phoneticsId: action.phoneticsId,
      }));
      return {
        ...state,
        session: newSession(action.now, action.lessonId, action.phoneticsId, action.readingId, action.plan),
        history,
      };
    }

    // tick and completeModule name their module instead of relying on
    // "whichever is current": a screen flushes its last seconds while
    // closing, possibly after another action already moved the pointer.
    case "tick": {
      const session = state.session;
      if (session === null) return state;
      const modules = session.modules.map((module) =>
        module.id === action.moduleId
          ? { ...module, elapsedSeconds: module.elapsedSeconds + action.seconds }
          : module,
      );
      // Time is booked on the session's day, even if midnight has passed.
      const history = withDay(state.history, session.date, (day) => ({
        ...day,
        seconds: day.seconds + action.seconds,
      }));
      return { ...state, session: { ...session, modules }, history };
    }

    case "completeModule": {
      const session = state.session;
      if (session === null) return state;
      const modules = session.modules.map((module) =>
        module.id === action.moduleId ? { ...module, completed: true } : module,
      );
      // Point at the next unfinished module; stay put when all are done.
      const next = modules.findIndex((module) => !module.completed);
      const moduleIndex = next === -1 ? session.moduleIndex : next;
      // Set, not incremented: finishing a reopened module must not count twice.
      const history = withDay(state.history, session.date, (day) => ({
        ...day,
        modulesCompleted: modules.filter((module) => module.completed).length,
      }));
      return { ...state, session: { ...session, modules, moduleIndex }, history };
    }

    case "acceptAnswer": {
      const answer = action.answer.trim();
      const known = state.acceptedAnswers[action.exerciseId] ?? [];
      if (answer === "" || known.includes(answer)) return state;
      return {
        ...state,
        acceptedAnswers: { ...state.acceptedAnswers, [action.exerciseId]: [...known, answer] },
      };
    }

    case "completeLesson": {
      if (state.completedLessons.includes(action.lessonId)) return state;
      return { ...state, completedLessons: [...state.completedLessons, action.lessonId] };
    }
  }
}

export function isSessionComplete(session: DailySessionState): boolean {
  return session.modules.every((module) => module.completed);
}
