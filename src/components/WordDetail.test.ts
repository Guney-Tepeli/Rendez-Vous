import { describe, expect, it } from "vitest";
import { ENRICHED_ITEMS, WORDS, findWord } from "../data/vocabulary";
import { displayWord, spokenWord } from "./WordDetail";

const word = (id: string) => {
  const entry = findWord(id);
  if (!entry) throw new Error(`no word "${id}"`);
  return entry;
};

// What is shown and what is spoken differ for epicene nouns: the screen says
// "le / la journaliste", but a speech voice reads "/" aloud ("barre
// oblique"; measured with macOS `say`: "le / la journaliste" lasts exactly
// as long as "le barre oblique la journaliste").
describe("spoken word", () => {
  it("speaks an epicene noun with one article", () => {
    expect(displayWord(word("journaliste"))).toBe("le / la journaliste");
    expect(spokenWord(word("journaliste"))).toBe("le journaliste");
    expect(spokenWord(word("élève"))).toBe("l'élève");
  });

  it("speaks every other word as it is shown", () => {
    for (const id of ["pomme", "vacances", "manger"]) {
      expect(spokenWord(word(id)), id).toBe(displayWord(word(id)));
    }
  });

  it("never contains a slash, for any word, chunk or example", () => {
    const spoken = [
      ...WORDS.map((entry) => spokenWord(entry)),
      ...ENRICHED_ITEMS.flatMap((item) => [...item.chunks.map((chunk) => chunk.fr), ...item.examples.map((example) => example.fr)]),
    ];
    expect(spoken.filter((text) => text.includes("/"))).toEqual([]);
  });
});
