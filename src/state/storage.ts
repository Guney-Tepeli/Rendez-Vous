/**
 * Persistence: AppState <-> one JSON string in localStorage.
 *
 * Whatever comes back from storage is UNTRUSTED: it may be from an older
 * version of the app, hand-edited, or cut off. So it is parsed as `unknown`
 * and checked before being treated as AppState. If the check fails the app
 * starts clean, but the unreadable text is first copied to a backup key so
 * review history is never destroyed silently.
 */

import { STATE_VERSION, initialState, type AppState } from "./appState";

export const STORAGE_KEY = "french-app/state";
export const BACKUP_KEY = "french-app/state.unreadable";

/** The two methods we need; lets tests pass a plain in-memory object. */
export type KeyValueStore = Pick<Storage, "getItem" | "setItem">;

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/**
 * Structural check of the top level. It is deliberately not a full schema
 * of every card: it guards against "wrong version / not our data", which is
 * the failure that actually happens.
 */
export function isAppState(value: unknown): value is AppState {
  if (!isObject(value) || value.version !== STATE_VERSION) return false;
  const { settings, cards, history, session, completedLessons, acceptedAnswers } = value;
  return (
    isObject(settings) &&
    (settings.languageMode === "TR" || settings.languageMode === "EN") &&
    typeof settings.newPerDay === "number" &&
    isObject(cards) &&
    isObject(history) &&
    isObject(acceptedAnswers) &&
    Array.isArray(completedLessons) &&
    (session === null ||
      (isObject(session) &&
        Array.isArray(session.modules) &&
        typeof session.lessonId === "string" &&
        typeof session.phoneticsId === "string" &&
        typeof session.readingId === "string"))
  );
}

/**
 * Bring data saved by an older version of the app up to the current shape.
 *
 * Without this, raising STATE_VERSION would make every existing save
 * "unreadable" and the learner would lose their review history on update.
 * Each step upgrades by exactly one version; a save from version 1 walks
 * 1 -> 2 (-> 3 later) through the same chain.
 */
export function migrate(value: unknown): unknown {
  if (!isObject(value)) return value;
  let state = value;

  if (state.version === 1) {
    // v2 added lesson tracking, and sessions now name their lesson. A v1
    // session cannot be completed into that, so today's module progress is
    // dropped. Cards and settings, the part that matters, carry over.
    state = { ...state, version: 2, completedLessons: [], session: null };
  }

  if (state.version === 2) {
    // v3 replaced the single "introduced today" counter with a per-day
    // history. What v2 knew about its last day is carried into that history,
    // so today's new-word limit and minutes survive the upgrade.
    const history: Record<string, unknown> = {};
    const day = (date: string) =>
      (history[date] ??= { seconds: 0, reviews: 0, newWords: 0, modulesCompleted: 0 }) as Record<string, number>;

    const { introduced, session } = state;
    if (isObject(introduced) && typeof introduced.date === "string" && introduced.date !== "") {
      const count = typeof introduced.count === "number" ? introduced.count : 0;
      day(introduced.date).newWords = count;
      day(introduced.date).reviews = count;
    }
    if (isObject(session) && typeof session.date === "string" && Array.isArray(session.modules)) {
      const modules = session.modules.filter(isObject);
      day(session.date).seconds = modules.reduce(
        (sum, module) => sum + (typeof module.elapsedSeconds === "number" ? module.elapsedSeconds : 0),
        0,
      );
      day(session.date).modulesCompleted = modules.filter((module) => module.completed === true).length;
    }

    const { introduced: _dropped, ...rest } = state;
    state = { ...rest, version: 3, history };
  }

  if (state.version === 3) {
    // v4 remembers answers the learner accepted by hand. Nothing to carry over.
    state = { ...state, version: 4, acceptedAnswers: {} };
  }

  if (state.version === 4) {
    // v5: days list their words and content (for the day summary), and the
    // day has five modules. Old days get empty lists; an unfinished
    // four-module session cannot become a five-module one, so it is dropped.
    const history: Record<string, unknown> = {};
    if (isObject(state.history)) {
      for (const [date, day] of Object.entries(state.history)) {
        history[date] = isObject(day) ? { ...day, newWordIds: [], reviewedWordIds: [] } : day;
      }
    }
    state = { ...state, version: 5, history, session: null };
  }

  return state;
}

export function loadState(store: KeyValueStore): AppState {
  let raw: string | null;
  try {
    raw = store.getItem(STORAGE_KEY);
  } catch {
    return initialState(); // storage blocked (private mode): run in memory
  }
  if (raw === null) return initialState();

  try {
    const parsed: unknown = migrate(JSON.parse(raw));
    if (isAppState(parsed)) return parsed;
  } catch {
    // not JSON: handled below, same as a failed shape check
  }

  try {
    store.setItem(BACKUP_KEY, raw);
  } catch {
    // backup is best effort
  }
  return initialState();
}

/** Returns false when the write failed (quota, blocked storage). */
export function saveState(store: KeyValueStore, state: AppState): boolean {
  try {
    store.setItem(STORAGE_KEY, JSON.stringify(state));
    return true;
  } catch {
    return false;
  }
}
