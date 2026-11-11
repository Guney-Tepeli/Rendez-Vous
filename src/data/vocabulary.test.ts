import { describe, expect, it } from "vitest";
import { LEVEL_ORDER, PERSONS } from "../domain/types";
import { parseEntry } from "./vocab/schema";
import { ENRICHED_ITEMS, EXTRA_WORDS, RAW_WORD_IDS, RAW_WORDS, SHEET_WORDS, WORDS, findWord } from "./vocabulary";

describe("seed data", () => {
  it("has unique ids", () => {
    expect(new Set(RAW_WORD_IDS).size).toBe(RAW_WORD_IDS.length);
  });

  it("folds inflected forms into one entry", () => {
    expect(findWord("petit")?.raw.forms).toEqual(["petite", "petits", "petites"]);
    expect(findWord("petites")).toBeUndefined();
    expect(findWord("beau")?.raw.forms).toContain("bel");
  });

  it("folds an elided article into its noun, but not a different word", () => {
    expect(findWord("eau")?.raw.forms).toEqual(["eaux", "d'eau", "l'eau"]);
    expect(findWord("l'eau")).toBeUndefined();
    expect(findWord("d'eau")).toBeUndefined();
    // "usually" is not "habit"; "the most" is not "more".
    expect(findWord("d'habitude")).toBeDefined();
    expect(findWord("habitude")?.raw.forms).toEqual([]);
    expect(findWord("le plus")).toBeDefined();
  });

  it("keeps look-alike words apart", () => {
    for (const id of ["mer", "mère", "moi", "mois", "le", "les", "un", "une"]) {
      expect(findWord(id), id).toBeDefined();
    }
    expect(findWord("mer")?.raw.forms).toEqual([]);
  });

  it("adds extra words that are new lemmas, not sheet words or their forms", () => {
    const sheetIds = new Set(SHEET_WORDS.map((word) => word.id));
    const sheetForms = new Set(SHEET_WORDS.flatMap((word) => word.forms.map((form) => form.toLowerCase())));
    const seen = new Set<string>();
    for (const word of EXTRA_WORDS) {
      expect(word.id, word.fr).toBe(word.fr.toLowerCase());
      expect(sheetIds.has(word.id), `${word.id} is already in the sheet`).toBe(false);
      expect(sheetForms.has(word.id), `${word.id} is a folded sheet form`).toBe(false);
      expect(seen.has(word.id), `${word.id} listed twice`).toBe(false);
      expect(LEVEL_ORDER.slice(0, 3), word.id).toContain(word.level);
      seen.add(word.id);
    }
    // A plural or feminine of a word already in the deck is the same word.
    // The ending rule is a heuristic; these pass it by accident and are
    // different words ("danse" is not a form of "dans").
    const NOT_A_FORM = new Set(["danse", "cuire", "base", "course"]);
    const all = new Set([...sheetIds, ...seen]);
    for (const word of EXTRA_WORDS) {
      if (NOT_A_FORM.has(word.id)) continue;
      for (const ending of ["s", "x", "e", "es"]) {
        if (word.id.endsWith(ending)) {
          const stem = word.id.slice(0, -ending.length);
          expect(all.has(stem) && stem.length > 2, `${word.id} looks like a form of ${stem}`).toBe(false);
        }
      }
    }
  });

  it("never lists a form that is also an entry of its own", () => {
    const ids = new Set(RAW_WORD_IDS);
    for (const word of RAW_WORDS) {
      for (const form of word.forms) expect(ids.has(form.toLowerCase()), form).toBe(false);
    }
  });
});

describe("enriched items", () => {
  it("each matches exactly one imported word", () => {
    const ids = ENRICHED_ITEMS.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const id of ids) expect(RAW_WORD_IDS, id).toContain(id);
    expect(WORDS.filter((entry) => entry.item !== undefined)).toHaveLength(ids.length);
  });

  it("gives an extra word the level the list promised", () => {
    for (const word of EXTRA_WORDS) {
      const item = findWord(word.id)?.item;
      if (item !== undefined) expect(item.level, word.id).toBe(word.level);
    }
  });

  it("has details for every word in the deck", () => {
    const bare = WORDS.filter((entry) => entry.item === undefined).map((entry) => entry.raw.id);
    expect(bare).toEqual([]);
  });

  it("orders the queue by level, unenriched words last", () => {
    const ranks = WORDS.map((entry) => (entry.item ? LEVEL_ORDER.indexOf(entry.item.level) : LEVEL_ORDER.length));
    expect(ranks).toEqual([...ranks].sort((x, y) => x - y));
  });

  it("each has both translations everywhere, 2+ chunks and 2+ examples", () => {
    for (const item of ENRICHED_ITEMS) {
      const texts = [
        item.meaning,
        ...item.chunks.map((chunk) => chunk.meaning),
        ...item.examples.map((example) => example.translation),
      ];
      for (const text of texts) {
        expect(text.TR.trim(), item.id).not.toBe("");
        expect(text.EN.trim(), item.id).not.toBe("");
      }
      expect(item.chunks.length, item.id).toBeGreaterThanOrEqual(2);
      expect(item.examples.length, item.id).toBeGreaterThanOrEqual(2);
      expect(item.ipa, item.id).not.toMatch(/[/[\]]/);
    }
  });

  it("verbs have all six present-tense forms", () => {
    for (const item of ENRICHED_ITEMS) {
      if (item.pos !== "verb") continue;
      for (const person of PERSONS) expect(item.present[person], `${item.id} ${person}`).toBeTruthy();
    }
  });
});

describe("vocabulary file format", () => {
  const good = {
    id: "pomme", level: "A1", pos: "noun", gender: "f", plural: "pommes", ipa: "pɔm", tr: "elma", en: "apple",
    chunks: [["une pomme de terre", "patates", "a potato"], ["une tarte aux pommes", "elmalı turta", "an apple pie"]],
    examples: [["Je mange une pomme.", "Bir elma yiyorum.", "I'm eating an apple."], ["Les pommes sont rouges.", "Elmalar kırmızı.", "The apples are red."]],
  };

  it("accepts a pronominal verb, whose nous form starts with the reflexive nous", () => {
    const lever = {
      id: "se lever", level: "A1", pos: "verb", group: 1, ipa: "sə lə.ve", tr: "kalkmak", en: "to get up",
      present: ["me lève", "te lèves", "se lève", "nous levons", "vous levez", "se lèvent"],
      chunks: good.chunks, examples: good.examples,
    };
    expect(parseEntry(lever, "test.json")).toMatchObject({ pos: "verb", present: { nous: "nous levons" } });
  });

  it("accepts a well-formed entry", () => {
    const item = parseEntry(good, "test.json");
    expect(item).toMatchObject({ id: "pomme", lemma: "pomme", pos: "noun", gender: "f", meaning: { TR: "elma", EN: "apple" } });
  });

  it.each([
    ["a field from another part of speech", { ...good, present: ["a", "b", "c", "d", "e", "f"] }],
    ["a missing gender", { ...good, gender: undefined }],
    ["a level outside the scale", { ...good, level: "C1" }],
    ["IPA in slashes", { ...good, ipa: "/pɔm/" }],
    ["only one example", { ...good, examples: [good.examples[0]] }],
    ["a chunk without English", { ...good, chunks: [["une pomme", "bir elma"], good.chunks[1]] }],
    ["a verb with pronouns in the table", { ...good, pos: "verb", gender: undefined, plural: undefined, group: 1, present: ["je mange", "tu manges", "il mange", "nous mangeons", "vous mangez", "ils mangent"] }],
  ])("rejects %s", (_label, entry) => {
    const clean = Object.fromEntries(Object.entries(entry).filter(([, value]) => value !== undefined));
    expect(() => parseEntry(clean, "test.json")).toThrow();
  });
});
