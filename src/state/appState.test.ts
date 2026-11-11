import { describe, expect, it } from "vitest";
import { DAY_MS } from "../domain/srs";
import {
  appReducer,
  initialState,
  introducedToday,
  isSessionComplete,
  todaysSession,
  type AppAction,
  type AppState,
} from "./appState";
import { BACKUP_KEY, STORAGE_KEY, loadState, saveState, type KeyValueStore } from "./storage";

// Local noon, so adding one day always lands on the next calendar day.
const T0 = new Date(2026, 10, 10, 12, 0, 0).getTime();

function run(actions: AppAction[], from: AppState = initialState()): AppState {
  return actions.reduce(appReducer, from);
}

function memoryStore(initial: Record<string, string> = {}) {
  const data = new Map(Object.entries(initial));
  const store: KeyValueStore = {
    getItem: (key) => data.get(key) ?? null,
    setItem: (key, value) => void data.set(key, value),
  };
  return { store, data };
}

describe("appReducer", () => {
  it("switches the instruction language", () => {
    expect(initialState().settings.languageMode).toBe("TR");
    expect(run([{ type: "setLanguage", mode: "EN" }]).settings.languageMode).toBe("EN");
  });

  it("creates a card on first review and counts it as introduced today", () => {
    const state = run([{ type: "reviewCard", itemId: "bain", rating: "good", now: T0 }]);
    expect(state.cards["bain"]?.intervalDays).toBe(1);
    expect(introducedToday(state, T0)).toBe(1);
  });

  it("does not count a repeat review as a new word", () => {
    const state = run([
      { type: "reviewCard", itemId: "bain", rating: "again", now: T0 },
      { type: "reviewCard", itemId: "bain", rating: "good", now: T0 },
    ]);
    expect(introducedToday(state, T0)).toBe(1);
    expect(state.cards["bain"]?.lapses).toBe(1);
  });

  it("resets the introduced count on the next calendar day", () => {
    const state = run([{ type: "reviewCard", itemId: "bain", rating: "good", now: T0 }]);
    expect(introducedToday(state, T0 + DAY_MS)).toBe(0);
    const next = appReducer(state, {
      type: "reviewCard",
      itemId: "bague",
      rating: "good",
      now: T0 + DAY_MS,
    });
    expect(introducedToday(next, T0 + DAY_MS)).toBe(1);
  });

  const PLAN = { recall: 5, grammar: 15, output: 15, phonetics: 5 };
  const START = { type: "startSession", now: T0, lessonId: "l1", phoneticsId: "p1", plan: PLAN } as const;

  it("starts a 4-module session, keeps it within the day, renews it the next day", () => {
    const started = run([START, { type: "tick", moduleId: "recall", seconds: 30 }]);
    expect(started.session?.modules.map((module) => module.id)).toEqual([
      "recall",
      "grammar",
      "output",
      "phonetics",
    ]);
    expect(started.session?.lessonId).toBe("l1");
    expect(started.session?.modules.map((module) => module.plannedMinutes)).toEqual([5, 15, 15, 5]);

    // Same day: untouched, even if another lesson is offered.
    const sameDay = appReducer(started, { ...START, now: T0 + 60_000, lessonId: "l2" });
    expect(sameDay).toBe(started);
    expect(todaysSession(started, T0 + 60_000)).toBe(started.session);

    expect(todaysSession(started, T0 + DAY_MS)).toBeNull();
    const nextDay = appReducer(started, { ...START, now: T0 + DAY_MS, lessonId: "l2" });
    expect(nextDay.session?.modules[0]?.elapsedSeconds).toBe(0);
    expect(nextDay.session?.lessonId).toBe("l2");
  });

  it("adds time to the named module only", () => {
    const state = run([
      START,
      { type: "tick", moduleId: "recall", seconds: 5 },
      { type: "tick", moduleId: "output", seconds: 7 },
    ]);
    expect(state.session?.modules.map((module) => module.elapsedSeconds)).toEqual([5, 0, 7, 0]);
  });

  it("credits late seconds to the module that earned them", () => {
    // What a closing screen does: complete first, flush the timer after.
    const state = run([
      START,
      { type: "completeModule", moduleId: "recall" },
      { type: "tick", moduleId: "recall", seconds: 9 },
    ]);
    expect(state.session?.moduleIndex).toBe(1);
    expect(state.session?.modules.map((module) => module.elapsedSeconds)).toEqual([9, 0, 0, 0]);
  });

  it("points at the next unfinished module, whatever order they are done in", () => {
    const state = run([START, { type: "completeModule", moduleId: "grammar" }]);
    expect(state.session?.moduleIndex).toBe(0);
    expect(state.session && isSessionComplete(state.session)).toBe(false);

    const done = run(
      [
        { type: "completeModule", moduleId: "recall" },
        { type: "completeModule", moduleId: "phonetics" },
        { type: "completeModule", moduleId: "output" },
      ],
      state,
    );
    expect(done.session && isSessionComplete(done.session)).toBe(true);
  });

  it("keeps one history record per day", () => {
    const state = run([
      START,
      { type: "reviewCard", itemId: "bain", rating: "again", now: T0 },
      { type: "reviewCard", itemId: "bain", rating: "good", now: T0 },
      { type: "tick", moduleId: "recall", seconds: 90 },
      { type: "completeModule", moduleId: "recall" },
      { type: "completeModule", moduleId: "recall" }, // reopened and finished again
      { type: "reviewCard", itemId: "bague", rating: "good", now: T0 + DAY_MS },
    ]);
    expect(state.history).toEqual({
      "2026-11-10": { seconds: 90, reviews: 2, newWords: 1, modulesCompleted: 1 },
      "2026-11-11": { seconds: 0, reviews: 1, newWords: 1, modulesCompleted: 0 },
    });
  });

  it("changes the daily new-word limit, never below zero", () => {
    expect(run([{ type: "setNewPerDay", count: 15 }]).settings.newPerDay).toBe(15);
    expect(run([{ type: "setNewPerDay", count: -3 }]).settings.newPerDay).toBe(0);
  });

  it("remembers an accepted answer once per exercise", () => {
    const state = run([
      { type: "acceptAnswer", exerciseId: "ex-1", answer: " On va manger " },
      { type: "acceptAnswer", exerciseId: "ex-1", answer: "On va manger" },
      { type: "acceptAnswer", exerciseId: "ex-1", answer: "   " },
      { type: "acceptAnswer", exerciseId: "ex-2", answer: "Bonsoir !" },
    ]);
    expect(state.acceptedAnswers).toEqual({ "ex-1": ["On va manger"], "ex-2": ["Bonsoir !"] });
  });

  it("records a finished lesson once", () => {
    const state = run([
      { type: "completeLesson", lessonId: "l1" },
      { type: "completeLesson", lessonId: "l2" },
      { type: "completeLesson", lessonId: "l1" },
    ]);
    expect(state.completedLessons).toEqual(["l1", "l2"]);
  });

  it("ignores session actions when there is no session", () => {
    const empty = initialState();
    expect(appReducer(empty, { type: "tick", moduleId: "recall", seconds: 1 })).toBe(empty);
    expect(appReducer(empty, { type: "completeModule", moduleId: "recall" })).toBe(empty);
  });
});

describe("storage", () => {
  it("round-trips state", () => {
    const { store } = memoryStore();
    const state = run([
      { type: "setLanguage", mode: "EN" },
      { type: "reviewCard", itemId: "bain", rating: "easy", now: T0 },
      {
        type: "startSession",
        now: T0,
        lessonId: "l1",
        phoneticsId: "p1",
        plan: { recall: 10, grammar: 15, output: 10, phonetics: 5 },
      },
      { type: "completeLesson", lessonId: "l1" },
    ]);
    expect(saveState(store, state)).toBe(true);
    expect(loadState(store)).toEqual(state);
  });

  it("starts clean when nothing is stored", () => {
    expect(loadState(memoryStore().store)).toEqual(initialState());
  });

  it.each([
    ["broken JSON", "{not json"],
    ["another version", JSON.stringify({ ...initialState(), version: 99 })],
    ["a foreign shape", JSON.stringify({ hello: "world" })],
  ])("falls back to a clean state on %s and keeps a backup", (_label, raw) => {
    const { store, data } = memoryStore({ [STORAGE_KEY]: raw });
    expect(loadState(store)).toEqual(initialState());
    expect(data.get(BACKUP_KEY)).toBe(raw);
  });

  it("upgrades a version 2 save, carrying its last day into the history", () => {
    const v2 = {
      version: 2,
      settings: { languageMode: "TR", newPerDay: 10 },
      cards: {},
      introduced: { date: "2026-11-10", count: 7 },
      completedLessons: ["reading-rules"],
      session: {
        date: "2026-11-10",
        moduleIndex: 2,
        lessonId: "etre-avoir",
        phoneticsId: "muet",
        modules: [
          { id: "recall", plannedMinutes: 5, elapsedSeconds: 200, completed: true },
          { id: "grammar", plannedMinutes: 15, elapsedSeconds: 100, completed: true },
          { id: "output", plannedMinutes: 15, elapsedSeconds: 0, completed: false },
          { id: "phonetics", plannedMinutes: 5, elapsedSeconds: 0, completed: false },
        ],
      },
    };
    const { store } = memoryStore({ [STORAGE_KEY]: JSON.stringify(v2) });
    const loaded = loadState(store);

    expect(loaded.version).toBe(4);
    expect(loaded.acceptedAnswers).toEqual({});
    expect(loaded.history).toEqual({
      "2026-11-10": { seconds: 300, reviews: 7, newWords: 7, modulesCompleted: 2 },
    });
    expect("introduced" in loaded).toBe(false);
    expect(loaded.completedLessons).toEqual(["reading-rules"]);
    expect(loaded.session?.lessonId).toBe("etre-avoir");
    // The limit still knows about the seven words already introduced that day.
    expect(introducedToday(loaded, new Date(2026, 10, 10, 18).getTime())).toBe(7);
  });

  it("upgrades a version 1 save and keeps its cards and settings", () => {
    const card = { itemId: "bain", repetitions: 2, intervalDays: 6, easeFactor: 2.5, dueAt: T0, lastReviewedAt: T0, lapses: 0 };
    const v1 = {
      version: 1,
      settings: { languageMode: "EN", newPerDay: 10 },
      cards: { bain: card },
      introduced: { date: "2026-11-10", count: 1 },
      session: { date: "2026-11-10", moduleIndex: 1, modules: [] },
    };
    const { store, data } = memoryStore({ [STORAGE_KEY]: JSON.stringify(v1) });
    const loaded = loadState(store);

    expect(loaded.version).toBe(4); // walked 1 -> 2 -> 3 -> 4
    expect(loaded.cards).toEqual({ bain: card });
    expect(loaded.settings.languageMode).toBe("EN");
    expect(loaded.history["2026-11-10"]?.newWords).toBe(1);
    expect(loaded.completedLessons).toEqual([]);
    expect(loaded.session).toBeNull();
    expect(data.has(BACKUP_KEY)).toBe(false); // upgraded, not thrown away
  });

  it("reports a failed write instead of throwing", () => {
    const store: KeyValueStore = {
      getItem: () => null,
      setItem: () => {
        throw new Error("QuotaExceededError");
      },
    };
    expect(saveState(store, initialState())).toBe(false);
  });
});
