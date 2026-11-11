/**
 * Checking what the learner typed or assembled. Pure functions.
 */

import { fold } from "../lib/search";

export type Verdict = "correct" | "accents" | "wrong";

/**
 * Remove differences that are not mistakes: capitals, the curly apostrophe
 * phones insert, commas, doubled spaces, final punctuation.
 */
export function normalizeAnswer(text: string): string {
  return text
    .normalize("NFC")
    .replace(/[’ʼ`]/g, "'")
    .replace(/\s*'\s*/g, "'")
    // A comma is punctuation, not French: "Oui, je viens" = "Oui je viens".
    .replace(/\s*,\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    // After trimming, so "ans. " and the French "vous ?" both lose the mark.
    .replace(/\s*[.!?…]+$/, "")
    .toLowerCase();
}

/**
 * Three outcomes, not two. "francais" for "français" shows the learner knew
 * the sentence; marking it plain wrong would punish the keyboard, and marking
 * it plain right would let accents slide forever. So it passes, flagged.
 */
export function checkAnswer(input: string, accepted: readonly string[]): Verdict {
  const given = normalizeAnswer(input);
  if (given === "") return "wrong";
  const targets = accepted.map(normalizeAnswer);
  if (targets.includes(given)) return "correct";
  if (targets.some((target) => fold(target) === fold(given))) return "accents";
  return "wrong";
}

/** The solved sentence of a fill exercise: "Elle ___ aime" + "n'" -> "Elle n'aime". */
export function fillIn(text: string, answer: string): string {
  return answer.endsWith("'") ? text.replace(/___\s*/, answer) : text.replace("___", answer);
}

/** Small deterministic random generator (mulberry32) seeded from a string. */
function seededRandom(seed: string): () => number {
  let state = 0;
  for (const char of seed) state = (Math.imul(state, 31) + char.charCodeAt(0)) | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Shuffle the word tiles of a sentence-building exercise.
 *
 * Seeded by the exercise id instead of Math.random(): the same exercise
 * always shows the same order, so React re-rendering does not reshuffle the
 * tiles under the learner's finger, and tests can assert on it.
 * Returns positions into `tokens`, never the solved order.
 */
export function shuffledOrder(tokens: readonly string[], seed: string): number[] {
  const order = tokens.map((_, index) => index);
  const random = seededRandom(seed);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const a = order[i];
    const b = order[j];
    if (a === undefined || b === undefined) continue;
    order[i] = b;
    order[j] = a;
  }
  const solved = order.every((position, index) => tokens[position] === tokens[index]);
  if (solved && order.length > 1) order.push(order.shift() as number);
  return order;
}
