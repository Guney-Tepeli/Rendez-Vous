/**
 * Spaced repetition scheduler: SM-2 (SuperMemo 2, 1987) with four buttons.
 *
 * Everything here is a PURE function: same input, same output, nothing read
 * from the clock or from storage. The current time is always a parameter.
 * That is what makes the tests deterministic.
 *
 * The idea in one paragraph: each successful review multiplies the gap until
 * the next one by the card's "ease factor" (1 day, 6 days, 15 days, ...).
 * Each rating nudges the ease factor up or down, so easy words spread out
 * fast and hard words stay close. Forgetting a word restarts its gaps but
 * keeps the lowered ease factor, so it comes back more often than before.
 */

import type { Rating, SrsCard, Timestamp } from "./types";

export const DAY_MS = 24 * 60 * 60 * 1000;

export const INITIAL_EASE = 2.5;
export const MIN_EASE = 1.3;

/** Gaps for the first two successful reviews; after that, gap * ease. */
const FIRST_INTERVAL_DAYS = 1;
const SECOND_INTERVAL_DAYS = 6;

/**
 * Not part of the original SM-2 (borrowed from Anki): "easy" stretches the
 * gap a bit further, and an "easy" on a brand-new card skips the 1-day step.
 * This is what lets already-known spreadsheet words leave the queue quickly.
 */
const EASY_BONUS = 1.3;
const EASY_FIRST_INTERVAL_DAYS = 4;

/**
 * SM-2 grades recall on a 0–5 scale; below 3 means "forgotten".
 * Our four buttons map onto the part of that scale that is actually used.
 */
const QUALITY: Record<Rating, number> = {
  again: 2,
  hard: 3,
  good: 4,
  easy: 5,
};

/** A card as it is the moment a word is studied for the first time. */
export function newCard(itemId: string, now: Timestamp): SrsCard {
  return {
    itemId,
    repetitions: 0,
    intervalDays: 0,
    easeFactor: INITIAL_EASE,
    dueAt: now,
    lastReviewedAt: now,
    lapses: 0,
  };
}

/**
 * The SM-2 ease update, verbatim from the original paper:
 *   EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
 * q=5 -> +0.10, q=4 -> 0, q=3 -> -0.14, q=2 -> -0.32. Floored at 1.3,
 * otherwise a hard card's gaps would stop growing at all.
 */
export function nextEase(easeFactor: number, rating: Rating): number {
  const miss = 5 - QUALITY[rating];
  const updated = easeFactor + (0.1 - miss * (0.08 + miss * 0.02));
  return Math.max(MIN_EASE, updated);
}

/** Apply one review. Returns a new card; the input is not modified. */
export function review(card: SrsCard, rating: Rating, now: Timestamp): SrsCard {
  const easeFactor = nextEase(card.easeFactor, rating);

  if (rating === "again") {
    // Forgotten: restart the ladder, due immediately (same session).
    return {
      ...card,
      repetitions: 0,
      intervalDays: 0,
      easeFactor,
      dueAt: now,
      lastReviewedAt: now,
      lapses: card.lapses + 1,
    };
  }

  let intervalDays: number;
  if (card.repetitions === 0) {
    intervalDays = rating === "easy" ? EASY_FIRST_INTERVAL_DAYS : FIRST_INTERVAL_DAYS;
  } else if (card.repetitions === 1) {
    intervalDays = SECOND_INTERVAL_DAYS;
  } else {
    // The gap grows by the ease the card had BEFORE this review, as in SM-2.
    intervalDays = Math.round(card.intervalDays * card.easeFactor);
  }
  if (rating === "easy" && card.repetitions > 0) {
    intervalDays = Math.round(intervalDays * EASY_BONUS);
  }

  return {
    ...card,
    repetitions: card.repetitions + 1,
    intervalDays,
    easeFactor,
    dueAt: now + intervalDays * DAY_MS,
    lastReviewedAt: now,
  };
}

export function isDue(card: SrsCard, now: Timestamp): boolean {
  return card.dueAt <= now;
}

export interface ReviewQueue {
  /** Item ids already studied whose review time has come, most overdue first. */
  due: string[];
  /** Item ids never studied, capped at the daily limit, in content order. */
  fresh: string[];
}

/**
 * Decide what today's recall module shows.
 *
 * Words without a card are "new". Only `newPerDay` of them are let in per
 * day: this is what keeps a 1,400-word import from landing all at once.
 * Words introduced earlier today count against the limit, so reopening the
 * app does not hand out another batch.
 */
export function buildReviewQueue(
  itemIds: readonly string[],
  cards: Readonly<Record<string, SrsCard>>,
  now: Timestamp,
  options: { newPerDay: number; introducedToday: number },
): ReviewQueue {
  const due: SrsCard[] = [];
  const unseen: string[] = [];

  for (const id of itemIds) {
    const card = cards[id];
    if (card === undefined) unseen.push(id);
    else if (isDue(card, now)) due.push(card);
  }

  due.sort((a, b) => a.dueAt - b.dueAt);
  const room = Math.max(0, options.newPerDay - options.introducedToday);

  return {
    due: due.map((card) => card.itemId),
    fresh: unseen.slice(0, room),
  };
}
