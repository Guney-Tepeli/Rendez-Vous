/**
 * Check ONE vocabulary file on its own, before the whole suite sees it:
 *
 *   VOCAB_FILE=src/data/vocab/sheet-001.json npx vitest run src/data/vocab/check.test.ts
 *
 * Used while writing a batch. Skipped in a normal `npm test` run (the full
 * suite already checks every file through vocabulary.test.ts).
 */
import { describe, expect, it } from "vitest";
import extraWords from "../../../seed/extra-words.json";
import sheetWords from "../../../seed/raw-words.json";
import { parseFile } from "./schema";

// Tests run in Node, but the project has no Node type package (no
// dependency added for one variable): declare the one thing used.
declare const process: { env: Record<string, string | undefined> };

// The file is read through Vite's glob (already bundled JSON), not node:fs.
const FILES = import.meta.glob<{ default: unknown }>("./*.json", { eager: true });
const file = process.env.VOCAB_FILE;
const name = file?.split("/").pop() ?? "";

describe.skipIf(file === undefined)(`vocabulary file ${file ?? ""}`, () => {
  // A skipped describe still runs its body while collecting tests, so the
  // file is only looked up when one was named.
  const module = file === undefined ? undefined : FILES[`./${name}`];
  if (file !== undefined && module === undefined) throw new Error(`${file}: not found in src/data/vocab/`);
  const items = module === undefined ? [] : parseFile(module.default, name);
  const known = new Map<string, string>([
    ...sheetWords.map((word): [string, string] => [word.id, "sheet"]),
    ...(extraWords as { id: string; level: string }[]).map((word): [string, string] => [word.id, word.level]),
  ]);

  it("parses, with unique ids that exist in a word list", () => {
    const ids = items.map((item) => item.id);
    expect(new Set(ids).size, "duplicate id inside the file").toBe(ids.length);
    const unknown = ids.filter((id) => !known.has(id));
    expect(unknown, "ids not in seed/raw-words.json or seed/extra-words.json").toEqual([]);
  });

  it("keeps the level an extra word was listed with", () => {
    const wrong = items.filter((item) => {
      const listed = known.get(item.id);
      return listed !== undefined && listed !== "sheet" && listed !== item.level;
    });
    expect(wrong.map((item) => item.id)).toEqual([]);
  });

  it("has an example that uses the word", () => {
    // Loose check: the first 3 letters of the headword, or of one of its
    // forms (plural, feminine, a conjugated form), appear in an example.
    const missing = items.filter((item) => {
      const forms = [item.lemma];
      if (item.pos === "noun") forms.push(item.plural);
      if (item.pos === "adjective") forms.push(item.feminine);
      if (item.pos === "verb") forms.push(...Object.values(item.present));
      const stems = forms.map((form) => form.toLowerCase().replace(/^(je |tu |il |nous |vous |j'|l'|d'|se |s')/, "").slice(0, 3));
      return !item.examples.some((example) => stems.some((stem) => example.fr.toLowerCase().includes(stem)));
    });
    expect(missing.map((item) => item.id), "examples that do not contain the word").toEqual([]);
  });
});
