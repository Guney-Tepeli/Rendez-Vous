/**
 * The grammar course, A1 to B1, one lesson per day in this order.
 *
 * Rules every lesson follows (content.test.ts checks them):
 *   - small: two to four short paragraphs, at least two examples
 *   - bilingual: every text has TR and EN
 *   - brings its own output exercises, all three kinds (fill, build, free),
 *     so what was read in the grammar module is produced minutes later
 *   - ids unique across the whole course; never renamed once published,
 *     because finished lessons are stored by id
 *
 * Paragraphs may contain line breaks; they are shown as written.
 */

import type { GrammarLesson } from "../domain/types";
import { A1_LESSONS } from "./lessons/a1";
import { A2_LESSONS } from "./lessons/a2";
import { B1_LESSONS } from "./lessons/b1";

export const LESSONS: readonly GrammarLesson[] = [...A1_LESSONS, ...A2_LESSONS, ...B1_LESSONS];

export function findLesson(id: string): GrammarLesson | undefined {
  return LESSONS.find((lesson) => lesson.id === id);
}
