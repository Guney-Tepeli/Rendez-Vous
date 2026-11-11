/**
 * Progress figures. Nothing here is stored: each is computed from the cards
 * and the day history whenever it is shown, so it cannot drift out of step
 * with them.
 */

import { shiftDateKey } from "./daily";
import type { DayRecord, History, SrsCard } from "./types";

/** A day counts toward the streak once at least one module was finished. */
export function isActiveDay(day: DayRecord | undefined): boolean {
  return day !== undefined && day.modulesCompleted > 0;
}

/**
 * Consecutive active days up to today.
 *
 * If today is not active YET, the count runs up to yesterday: the streak is
 * only lost once a whole day has passed without study, not at midnight.
 */
export function currentStreak(history: History, todayKey: string): number {
  let day = isActiveDay(history[todayKey]) ? todayKey : shiftDateKey(todayKey, -1);
  let streak = 0;
  while (isActiveDay(history[day])) {
    streak += 1;
    day = shiftDateKey(day, -1);
  }
  return streak;
}

/**
 * "Learned" = recalled correctly twice in a row, so it survived at least one
 * gap of a day or more. A word seen once is "studied", not learned; a word
 * that was forgotten drops out until it is recalled twice again.
 */
export function learnedCount(cards: Readonly<Record<string, SrsCard>>): number {
  return Object.values(cards).filter((card) => card.repetitions >= 2).length;
}

export interface DaySummary {
  dateKey: string;
  minutes: number;
  active: boolean;
  isToday: boolean;
}

/** The last `count` days, oldest first, ending today. Empty days included. */
export function lastDays(history: History, todayKey: string, count: number): DaySummary[] {
  return Array.from({ length: count }, (_, index) => {
    const dateKey = shiftDateKey(todayKey, index - (count - 1));
    const day = history[dateKey];
    return {
      dateKey,
      minutes: Math.floor((day?.seconds ?? 0) / 60),
      active: isActiveDay(day),
      isToday: dateKey === todayKey,
    };
  });
}
