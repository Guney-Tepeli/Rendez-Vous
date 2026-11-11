/**
 * The JSON format vocabulary files are written in, and the code that turns
 * an entry into a VocabularyItem.
 *
 * Why JSON and not TypeScript: there are thousands of entries, written in
 * batches (some by hand, some generated). JSON is plain data: no imports, no
 * helper functions, nothing that can run. The price is that the compiler no
 * longer checks it, so `parseEntry` does at load time what the type checker
 * did before, and the test suite runs it over every file.
 *
 * One entry, one line:
 *   {"id":"pomme","level":"A1","pos":"noun","gender":"f","plural":"pommes",
 *    "ipa":"pɔm","tr":"elma","en":"apple",
 *    "chunks":[["une pomme de terre","patates","a potato"], ...],
 *    "examples":[["Je mange une pomme.","Bir elma yiyorum.","I'm eating an apple."], ...]}
 *
 * Per part of speech:
 *   noun        gender "m"|"f", plural; optional pluralOnly: true
 *   verb        group 1|2|3, present: [je, tu, il, nous, vous, ils] (verb forms only, no pronouns)
 *   adjective   feminine
 *   expression  (nothing extra) fixed phrases, conjugated chunks
 *   other       (nothing extra) adverbs, determiners, pronouns, prepositions, titles, months
 * A field that does not belong to the part of speech is an error.
 */

import {
  LEVEL_ORDER,
  type CefrLevel,
  type Chunk,
  type ExampleSentence,
  type VocabularyItem,
} from "../../domain/types";

const POS = ["noun", "verb", "adjective", "expression", "other"] as const;
const EXTRA_FIELDS: Record<(typeof POS)[number], readonly string[]> = {
  noun: ["gender", "plural", "pluralOnly"],
  verb: ["group", "present"],
  adjective: ["feminine"],
  expression: [],
  other: [],
};
const COMMON = ["id", "lemma", "level", "pos", "ipa", "tr", "en", "chunks", "examples"];

export class VocabFormatError extends Error {}

function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function text(entry: Record<string, unknown>, key: string, where: string): string {
  const value = entry[key];
  if (typeof value !== "string" || value.trim() === "") throw new VocabFormatError(`${where}: "${key}" must be a non-empty string`);
  if (value !== value.trim()) throw new VocabFormatError(`${where}: "${key}" has leading or trailing spaces`);
  return value;
}

function triples(entry: Record<string, unknown>, key: string, where: string): [string, string, string][] {
  const value = entry[key];
  if (!Array.isArray(value) || value.length < 2) throw new VocabFormatError(`${where}: "${key}" needs at least 2 items`);
  return value.map((item, index) => {
    if (!Array.isArray(item) || item.length !== 3 || item.some((part) => typeof part !== "string" || part.trim() === "")) {
      throw new VocabFormatError(`${where}: ${key}[${index}] must be [French, Turkish, English], all non-empty`);
    }
    return item as [string, string, string];
  });
}

/** Validate one raw JSON entry and build the item. Throws with the file and id on any problem. */
export function parseEntry(raw: unknown, file: string): VocabularyItem {
  if (!isObject(raw)) throw new VocabFormatError(`${file}: entry is not an object`);
  const id = text(raw, "id", file);
  const where = `${file} "${id}"`;

  const pos = raw.pos;
  if (typeof pos !== "string" || !(POS as readonly string[]).includes(pos)) {
    throw new VocabFormatError(`${where}: "pos" must be one of ${POS.join(", ")}`);
  }
  const kind = pos as (typeof POS)[number];
  const allowed = new Set([...COMMON, ...EXTRA_FIELDS[kind]]);
  for (const key of Object.keys(raw)) {
    if (!allowed.has(key)) throw new VocabFormatError(`${where}: field "${key}" is not allowed for pos "${kind}"`);
  }

  const level = raw.level;
  if (typeof level !== "string" || !(LEVEL_ORDER as readonly string[]).includes(level)) {
    throw new VocabFormatError(`${where}: "level" must be one of ${LEVEL_ORDER.join(", ")}`);
  }
  const ipa = text(raw, "ipa", where);
  if (/[/[\]]/.test(ipa)) throw new VocabFormatError(`${where}: write IPA without slashes or brackets`);

  const base = {
    id,
    lemma: raw.lemma === undefined ? id : text(raw, "lemma", where),
    level: level as CefrLevel,
    ipa,
    meaning: { TR: text(raw, "tr", where), EN: text(raw, "en", where) },
    chunks: triples(raw, "chunks", where).map(([fr, TR, EN]): Chunk => ({ fr, meaning: { TR, EN } })),
    examples: triples(raw, "examples", where).map(([fr, TR, EN]): ExampleSentence => ({ fr, translation: { TR, EN } })),
  };

  switch (kind) {
    case "noun": {
      const gender = raw.gender;
      if (gender !== "m" && gender !== "f") throw new VocabFormatError(`${where}: noun needs "gender": "m" or "f"`);
      const plural = text(raw, "plural", where);
      if (raw.pluralOnly !== undefined && raw.pluralOnly !== true) {
        throw new VocabFormatError(`${where}: "pluralOnly" may only be true`);
      }
      return raw.pluralOnly === true
        ? { ...base, pos: "noun", gender, plural, pluralOnly: true }
        : { ...base, pos: "noun", gender, plural };
    }
    case "verb": {
      const group = raw.group;
      if (group !== 1 && group !== 2 && group !== 3) throw new VocabFormatError(`${where}: verb needs "group": 1, 2 or 3`);
      const present = raw.present;
      if (!Array.isArray(present) || present.length !== 6 || present.some((form) => typeof form !== "string" || form.trim() === "")) {
        throw new VocabFormatError(`${where}: verb needs "present" with 6 forms (je, tu, il, nous, vous, ils)`);
      }
      const [je, tu, il, nous, vous, ils] = present as string[];
      // Subject pronouns are not part of the form ("parle", not "je parle").
      // Checked on the je slot only: a pronominal verb legitimately starts
      // its nous / vous forms with the reflexive pronoun ("nous levons").
      if (/^(je |j')/i.test(je ?? "")) {
        throw new VocabFormatError(`${where}: "present" holds verb forms only, without subject pronouns`);
      }
      return {
        ...base,
        pos: "verb",
        group,
        present: { je: je ?? "", tu: tu ?? "", il: il ?? "", nous: nous ?? "", vous: vous ?? "", ils: ils ?? "" },
      };
    }
    case "adjective":
      return { ...base, pos: "adjective", feminine: text(raw, "feminine", where) };
    case "expression":
    case "other":
      return { ...base, pos: kind };
  }
}

/** Parse a whole file. `entries` is the file's default export (a JSON array). */
export function parseFile(entries: unknown, file: string): VocabularyItem[] {
  if (!Array.isArray(entries)) throw new VocabFormatError(`${file}: must contain a JSON array`);
  return entries.map((entry) => parseEntry(entry, file));
}
