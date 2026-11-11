import type { Timestamp } from "./types";

/**
 * Local calendar day of a timestamp, "YYYY-MM-DD".
 * Local, not UTC: for a learner in Istanbul the day must roll over at their
 * midnight, not at 03:00. (toISOString() would give the UTC day.)
 */
export function localDateKey(now: Timestamp): string {
  const date = new Date(now);
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}
