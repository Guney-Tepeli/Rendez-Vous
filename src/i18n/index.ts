/**
 * Localization engine. Two different jobs, two functions:
 *
 *   translate(mode, key)  - UI chrome ("Again", "Grammar"): text that belongs
 *                           to the app. Looked up in tr.ts / en.ts.
 *   localize(mode, text)  - content ("çikolata" / "chocolate"): text that
 *                           belongs to a vocabulary item or lesson and
 *                           already carries both languages (type Localized).
 *
 * Both are pure functions of `mode`, so they can be tested and used outside
 * React. Components reach them through the useT() hook (see useT.ts).
 */

import type { LanguageMode, Localized } from "../domain/types";
import { en } from "./en";
import { tr, type TranslationKey } from "./tr";

export type { TranslationKey };
export type TranslationParams = Record<string, string | number>;

const DICTIONARIES: Record<LanguageMode, Record<TranslationKey, string>> = {
  TR: tr,
  EN: en,
};

export function translate(
  mode: LanguageMode,
  key: TranslationKey,
  params: TranslationParams = {},
): string {
  const template = DICTIONARIES[mode][key];
  // A placeholder with no matching param is left visible ("{n}") on purpose:
  // a bug you can see beats a silently empty string.
  return template.replace(/\{(\w+)\}/g, (placeholder, name: string) => {
    const value = params[name];
    return value === undefined ? placeholder : String(value);
  });
}

export function localize(mode: LanguageMode, text: Localized): string {
  return text[mode];
}
