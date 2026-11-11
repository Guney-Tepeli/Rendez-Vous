/**
 * What a given day contains. All pure: the day is a parameter.
 */

import { DAY_MS } from "./srs";
import { DAILY_MODULES, LEVEL_ORDER, type CefrLevel, type ModuleId } from "./types";

/** Whole days since 1970 for a "YYYY-MM-DD" key. Consecutive days differ by 1. */
export function dayNumber(dateKey: string): number {
  const [year = 1970, month = 1, day = 1] = dateKey.split("-").map(Number);
  return Math.floor(Date.UTC(year, month - 1, day) / DAY_MS);
}

/** The date key `days` after (or, if negative, before) the given one. */
export function shiftDateKey(dateKey: string, days: number): string {
  return new Date((dayNumber(dateKey) + days) * DAY_MS).toISOString().slice(0, 10);
}

/** Rotate through a list, one item per day. The list must not be empty. */
export function pickByDay<T>(items: readonly T[], dateKey: string): T {
  const item = items[dayNumber(dateKey) % items.length];
  if (item === undefined) throw new Error("pickByDay: empty list");
  return item;
}

/**
 * Today's grammar lesson: the first one not finished yet, in course order.
 * When the course is finished, lessons come round again as revision.
 */
export function pickLesson<T extends { id: string }>(
  lessons: readonly T[],
  completedIds: readonly string[],
  dateKey: string,
): T {
  const done = new Set(completedIds);
  return lessons.find((lesson) => !done.has(lesson.id)) ?? pickByDay(lessons, dateKey);
}

/**
 * Pick by day among the items at or below `level`, so the sentence of the
 * day never uses grammar the course has not taught yet.
 */
export function pickAtLevel<T extends { level: CefrLevel }>(items: readonly T[], level: CefrLevel, dateKey: string): T {
  const limit = LEVEL_ORDER.indexOf(level);
  const reachable = items.filter((item) => LEVEL_ORDER.indexOf(item.level) <= limit);
  return pickByDay(reachable.length > 0 ? reachable : items, dateKey);
}

const SECONDS_PER_CARD = 30;
const MIN_RECALL_MINUTES = 2;

/**
 * Recommended minutes per module for today.
 *
 * The 10/15/10/5 split is a base, not a rule. The one thing known in advance
 * is how many cards wait in recall: on a light day recall needs less than
 * its 10 minutes, and the freed time goes to output, where producing French
 * is the best use of it. The total stays 40.
 */
export function planMinutes(queueSize: number): Record<ModuleId, number> {
  const plan = Object.fromEntries(
    DAILY_MODULES.map((spec) => [spec.id, spec.baseMinutes]),
  ) as Record<ModuleId, number>;

  const needed = Math.ceil((queueSize * SECONDS_PER_CARD) / 60);
  const recall = Math.min(plan.recall, Math.max(MIN_RECALL_MINUTES, needed));
  plan.output += plan.recall - recall;
  plan.recall = recall;
  return plan;
}

/** "3:07" */
export function formatClock(seconds: number): string {
  const whole = Math.max(0, Math.floor(seconds));
  return `${Math.floor(whole / 60)}:${String(whole % 60).padStart(2, "0")}`;
}
