/**
 * Daily reading texts, one per grammar lesson (78), read on the day the
 * lesson is studied.
 *
 * Rules every text follows (content.test.ts checks them):
 *   - 450 to 600 French words, in 5 to 8 paragraphs
 *   - written for the lesson's level, uses the lesson's grammar several
 *     times and no grammar from later lessons
 *   - every paragraph has a Turkish and an English translation
 *   - 5 comprehension questions, 3 or 4 French options each, one right
 *   - `id` = "reading-" + lessonId
 */

import type { ReadingText } from "../domain/types";
import { LESSONS } from "./lessons";

// Every file in readings/ default-exports an array of texts. Files are
// split so several writers never edit the same one; order comes from the
// course, not from the file names.
const FILES = import.meta.glob<{ default: readonly ReadingText[] }>("./readings/*.ts", { eager: true });
const lessonOrder = new Map(LESSONS.map((lesson, index) => [lesson.id, index]));

export const READINGS: readonly ReadingText[] = Object.values(FILES)
  .flatMap((module) => module.default)
  .sort((a, b) => (lessonOrder.get(a.lessonId) ?? 0) - (lessonOrder.get(b.lessonId) ?? 0));

export function findReading(id: string): ReadingText | undefined {
  return READINGS.find((text) => text.id === id);
}

/** The text that goes with a lesson, or undefined if it is not written yet. */
export function readingForLesson(lessonId: string): ReadingText | undefined {
  return READINGS.find((text) => text.lessonId === lessonId);
}

/** French word count, as the content rules count it. */
export function frenchWordCount(text: ReadingText): number {
  return text.paragraphs.reduce((sum, paragraph) => sum + paragraph.fr.split(/\s+/).filter((word) => /\p{L}/u.test(word)).length, 0);
}
