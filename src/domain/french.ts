/**
 * Small French spelling rules the UI needs to print a word correctly.
 * Pure string functions, no data.
 */

import type { Gender, Person } from "./types";

/**
 * Does the word start with a vowel sound, so that "le/la/je" contract?
 *
 * Simplification: every initial "h" is treated as silent (h muet: l'hôtel,
 * j'habite). French also has the "h aspiré" (le héros, je hais), which
 * spelling cannot reveal. Those words must be listed here when they enter
 * the vocabulary.
 */
const H_ASPIRE = new Set(["haricot", "héros", "hasard", "haut", "hall", "hamburger", "handball", "haïr"]);

export function startsWithVowelSound(word: string): boolean {
  const lower = word.toLowerCase();
  if (H_ASPIRE.has(lower)) return false;
  // "y" before a vowel is a consonant sound /j/: le yaourt, le yoga.
  if (/^y[aeiouàâéèêëîïôöùûü]/.test(lower)) return false;
  return /^[aeiouyàâäéèêëîïôöùûüœæh]/.test(lower);
}

/** "le chat", "la maison", "l'école" */
export function withDefiniteArticle(noun: string, gender: Gender): string {
  if (startsWithVowelSound(noun)) return `l'${noun}`;
  return `${gender === "m" ? "le" : "la"} ${noun}`;
}

/** "un chat", "une maison" */
export function withIndefiniteArticle(noun: string, gender: Gender): string {
  return `${gender === "m" ? "un" : "une"} ${noun}`;
}

const PRONOUN_LABEL: Record<Person, string> = {
  je: "je",
  tu: "tu",
  il: "il / elle",
  nous: "nous",
  vous: "vous",
  ils: "ils / elles",
};

/** Pronoun as shown in a conjugation table; "je" contracts: "j'habite". */
export function subjectPronoun(person: Person, verbForm: string): string {
  if (person === "je" && startsWithVowelSound(verbForm)) return "j'";
  return PRONOUN_LABEL[person];
}

/** "je gagne", "j'habite", "il / elle gagne" */
export function conjugated(person: Person, verbForm: string): string {
  const pronoun = subjectPronoun(person, verbForm);
  return pronoun.endsWith("'") ? `${pronoun}${verbForm}` : `${pronoun} ${verbForm}`;
}
