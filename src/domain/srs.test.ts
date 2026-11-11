import { describe, expect, it } from "vitest";
import {
  DAY_MS,
  INITIAL_EASE,
  MIN_EASE,
  buildReviewQueue,
  isDue,
  newCard,
  nextEase,
  review,
} from "./srs";
import type { Rating, SrsCard } from "./types";

// A fixed clock. No test reads the real time.
const T0 = Date.UTC(2026, 10, 10, 9, 0, 0);

/** Apply a list of ratings, each one exactly when the card falls due. */
function replay(ratings: Rating[]): SrsCard {
  let card = newCard("chocolat", T0);
  for (const rating of ratings) card = review(card, rating, card.dueAt);
  return card;
}

describe("nextEase", () => {
  it("matches the SM-2 formula for each button", () => {
    expect(nextEase(2.5, "easy")).toBeCloseTo(2.6, 10);
    expect(nextEase(2.5, "good")).toBeCloseTo(2.5, 10);
    expect(nextEase(2.5, "hard")).toBeCloseTo(2.36, 10);
    expect(nextEase(2.5, "again")).toBeCloseTo(2.18, 10);
  });

  it("never drops below the floor", () => {
    expect(nextEase(MIN_EASE, "again")).toBe(MIN_EASE);
    expect(replay(Array<Rating>(20).fill("again")).easeFactor).toBe(MIN_EASE);
  });
});

describe("review", () => {
  it("follows the 1 / 6 / interval*ease ladder on 'good'", () => {
    expect(replay(["good"]).intervalDays).toBe(1);
    expect(replay(["good", "good"]).intervalDays).toBe(6);
    expect(replay(["good", "good", "good"]).intervalDays).toBe(15); // 6 * 2.5
    expect(replay(["good", "good", "good", "good"]).intervalDays).toBe(38); // 15 * 2.5 = 37.5
  });

  it("schedules dueAt exactly intervalDays after the review", () => {
    const card = review(newCard("chocolat", T0), "good", T0);
    expect(card.dueAt).toBe(T0 + 1 * DAY_MS);
    expect(card.lastReviewedAt).toBe(T0);
  });

  it("'again' restarts the ladder, counts a lapse and is due at once", () => {
    const learned = replay(["good", "good", "good"]);
    const now = learned.dueAt;
    const forgotten = review(learned, "again", now);

    expect(forgotten.repetitions).toBe(0);
    expect(forgotten.intervalDays).toBe(0);
    expect(forgotten.lapses).toBe(1);
    expect(isDue(forgotten, now)).toBe(true);
    // The ease penalty survives the reset: the word returns more often.
    expect(forgotten.easeFactor).toBeLessThan(learned.easeFactor);
    expect(review(forgotten, "good", now).intervalDays).toBe(1);
  });

  it("'easy' on a new card skips the one-day step", () => {
    expect(replay(["easy"]).intervalDays).toBe(4);
  });

  it("orders the next gap again < hard <= good < easy for the same card", () => {
    const card = replay(["good", "good", "good"]);
    const gap = (rating: Rating) => review(card, rating, card.dueAt).intervalDays;
    expect(gap("again")).toBeLessThan(gap("hard"));
    expect(gap("hard")).toBeLessThanOrEqual(gap("good"));
    expect(gap("good")).toBeLessThan(gap("easy"));
  });

  it("'hard' slows future growth even though this gap equals 'good'", () => {
    const viaHard = replay(["good", "good", "hard", "good"]);
    const viaGood = replay(["good", "good", "good", "good"]);
    expect(viaHard.intervalDays).toBeLessThan(viaGood.intervalDays);
  });

  it("does not mutate the card it was given", () => {
    const card = newCard("chocolat", T0);
    const snapshot = { ...card };
    review(card, "easy", T0);
    expect(card).toEqual(snapshot);
    expect(card.easeFactor).toBe(INITIAL_EASE);
  });
});

describe("buildReviewQueue", () => {
  const ids = ["a", "b", "c", "d", "e"];

  it("limits new words per day and keeps content order", () => {
    const queue = buildReviewQueue(ids, {}, T0, { newPerDay: 2, introducedToday: 0 });
    expect(queue).toEqual({ due: [], fresh: ["a", "b"] });
  });

  it("counts words already introduced today against the limit", () => {
    const options = { newPerDay: 2, introducedToday: 2 };
    expect(buildReviewQueue(ids, {}, T0, options).fresh).toEqual([]);
    // More introduced than the limit must not produce a negative slice.
    expect(buildReviewQueue(ids, {}, T0, { newPerDay: 2, introducedToday: 5 }).fresh).toEqual([]);
  });

  it("returns only due cards, most overdue first, and never as 'fresh'", () => {
    const cards: Record<string, SrsCard> = {
      a: { ...newCard("a", T0), dueAt: T0 - 1 * DAY_MS },
      b: { ...newCard("b", T0), dueAt: T0 - 3 * DAY_MS },
      c: { ...newCard("c", T0), dueAt: T0 + 2 * DAY_MS }, // not due yet
    };
    const queue = buildReviewQueue(ids, cards, T0, { newPerDay: 10, introducedToday: 0 });
    expect(queue.due).toEqual(["b", "a"]);
    expect(queue.fresh).toEqual(["d", "e"]);
  });
});
