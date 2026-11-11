/**
 * The vocabulary the app works with.
 *
 * Two word lists:
 *   seed/raw-words.json    the owner's spreadsheet, folded by scripts/import_xlsx.py
 *   seed/extra-words.json  words added to reach the end of B1 (not in the sheet)
 * and one set of details:
 *   src/data/vocab/*.json  enriched entries (meaning, IPA, grammar), any number
 *                          of files, picked up automatically
 *
 * Queue order: by CEFR level (A1, A2, B1, then B2), and within a level in
 * list order (spreadsheet first). A word with no details yet has no level and
 * goes last.
 */

import { LEVEL_ORDER, type CefrLevel, type RawWord, type VocabularyItem } from "../domain/types";
import extraWords from "../../seed/extra-words.json";
import sheetWords from "../../seed/raw-words.json";
import { parseFile } from "./vocab/schema";

/** A word added from seed/extra-words.json. */
export interface ExtraWord {
  id: string;
  fr: string;
  level: CefrLevel;
}

export const SHEET_WORDS: readonly RawWord[] = sheetWords;
export const EXTRA_WORDS: readonly ExtraWord[] = extraWords as ExtraWord[];

// Vite reads every matching file at build time (`eager`: bundled, not
// fetched later). Adding a batch file needs no change here.
const FILES = import.meta.glob<{ default: unknown }>("./vocab/*.json", { eager: true });

/** Every enriched item, from every file, validated. Throws on a malformed entry. */
export const ENRICHED_ITEMS: readonly VocabularyItem[] = Object.entries(FILES)
  .sort(([a], [b]) => a.localeCompare(b))
  .flatMap(([file, module]) => parseFile(module.default, file));

/**
 * One study unit. `item` is undefined until the word has been enriched;
 * the UI must cope with both cases.
 */
export interface WordEntry {
  raw: RawWord;
  item: VocabularyItem | undefined;
}

const ITEM_BY_ID = new Map(ENRICHED_ITEMS.map((item) => [item.id, item]));

const UNRANKED = LEVEL_ORDER.length;
const rank = (entry: WordEntry) => (entry.item ? LEVEL_ORDER.indexOf(entry.item.level) : UNRANKED);

const ALL_RAW: readonly RawWord[] = [
  ...SHEET_WORDS,
  ...EXTRA_WORDS.map((word): RawWord => ({ id: word.id, fr: word.fr, forms: [] })),
];

// Array.prototype.sort is stable: entries of the same level keep list order.
export const WORDS: readonly WordEntry[] = ALL_RAW.map((raw) => ({ raw, item: ITEM_BY_ID.get(raw.id) })).sort(
  (a, b) => rank(a) - rank(b),
);

export const RAW_WORDS: readonly RawWord[] = WORDS.map((entry) => entry.raw);
export const RAW_WORD_IDS: readonly string[] = WORDS.map((entry) => entry.raw.id);

const WORD_BY_ID = new Map(WORDS.map((entry) => [entry.raw.id, entry]));

export function findWord(id: string): WordEntry | undefined {
  return WORD_BY_ID.get(id);
}

/** Text to show (and speak) as the word itself. */
export function headword(entry: WordEntry): string {
  return entry.item?.lemma ?? entry.raw.fr;
}
