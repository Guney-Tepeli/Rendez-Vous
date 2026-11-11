import { describe, expect, it } from "vitest";
import { buildDaySummary, summaryDays } from "./summary";
import type { DayRecord, VocabularyItem } from "./types";

const day = (extra: Partial<DayRecord> = {}): DayRecord => ({
  seconds: 1830, reviews: 3, newWords: 1, modulesCompleted: 5, newWordIds: ["eau"], reviewedWordIds: ["pain", "inconnu"], ...extra,
});

const eau = {
  id: "eau", lemma: "eau", level: "A1", pos: "noun", gender: "f", plural: "eaux", ipa: "o",
  meaning: { TR: "su", EN: "water" }, chunks: [],
  examples: [{ fr: "Je bois de l'eau.", translation: { TR: "Su içiyorum.", EN: "I'm drinking water." } }],
} as VocabularyItem;

const sources = {
  word: (id: string) => (id === "eau" ? { fr: "eau", item: eau } : id === "pain" ? { fr: "pain", item: undefined } : undefined),
  lesson: () => undefined,
  reading: () => undefined,
  phonetics: () => undefined,
};

describe("buildDaySummary", () => {
  it("lists the day's words in the chosen language and skips unknown ids", () => {
    const summary = buildDaySummary("2026-11-11", day(), "TR", sources);
    expect(summary.minutes).toBe(30);
    expect(summary.newWords).toEqual([{ fr: "eau", ipa: "o", meaning: "su", example: { fr: "Je bois de l'eau.", translation: "Su içiyorum." } }]);
    expect(summary.reviewedWords.map((word) => word.fr)).toEqual(["pain"]);
    expect(summary.lesson).toBeUndefined();
  });
});

describe("summaryDays", () => {
  it("lists days with study, newest first", () => {
    const history = {
      "2026-11-09": day(),
      "2026-11-11": day(),
      "2026-11-10": day({ newWordIds: [], reviewedWordIds: [] }),
    };
    expect(summaryDays(history)).toEqual(["2026-11-11", "2026-11-09"]);
  });
});
