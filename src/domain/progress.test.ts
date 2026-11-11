import { describe, expect, it } from "vitest";
import { shiftDateKey } from "./daily";
import { currentStreak, lastDays, learnedCount } from "./progress";
import { newCard } from "./srs";
import type { DayRecord, History } from "./types";

const active: DayRecord = { seconds: 1500, reviews: 12, newWords: 10, modulesCompleted: 4, newWordIds: [], reviewedWordIds: [] };
const opened: DayRecord = { seconds: 40, reviews: 2, newWords: 2, modulesCompleted: 0, newWordIds: [], reviewedWordIds: [] };
const TODAY = "2026-12-01";

describe("shiftDateKey", () => {
  it("crosses month and year ends", () => {
    expect(shiftDateKey("2026-12-01", -1)).toBe("2026-11-30");
    expect(shiftDateKey("2026-12-31", 1)).toBe("2027-01-01");
    expect(shiftDateKey("2028-03-01", -1)).toBe("2028-02-29"); // leap year
  });
});

describe("currentStreak", () => {
  it("is zero with no history", () => {
    expect(currentStreak({}, TODAY)).toBe(0);
  });

  it("counts consecutive active days ending today", () => {
    const history: History = { "2026-11-29": active, "2026-11-30": active, [TODAY]: active };
    expect(currentStreak(history, TODAY)).toBe(3);
  });

  it("is still alive before today's first module", () => {
    const history: History = { "2026-11-29": active, "2026-11-30": active, [TODAY]: opened };
    expect(currentStreak(history, TODAY)).toBe(2);
  });

  it("is lost after a full missed day", () => {
    const history: History = { "2026-11-28": active, "2026-11-29": active };
    expect(currentStreak(history, TODAY)).toBe(0);
  });

  it("stops at a gap", () => {
    const history: History = { "2026-11-27": active, "2026-11-29": active, "2026-11-30": active, [TODAY]: active };
    expect(currentStreak(history, TODAY)).toBe(3);
  });

  it("does not count a day that was only opened", () => {
    expect(currentStreak({ [TODAY]: opened }, TODAY)).toBe(0);
  });
});

describe("learnedCount", () => {
  it("counts words recalled twice in a row", () => {
    const cards = {
      a: { ...newCard("a", 0), repetitions: 0 },
      b: { ...newCard("b", 0), repetitions: 1 },
      c: { ...newCard("c", 0), repetitions: 2 },
      d: { ...newCard("d", 0), repetitions: 5 },
    };
    expect(learnedCount(cards)).toBe(2);
    expect(learnedCount({})).toBe(0);
  });
});

describe("lastDays", () => {
  it("returns the week oldest first, with empty days filled in", () => {
    const week = lastDays({ "2026-11-29": active, [TODAY]: opened }, TODAY, 7);
    expect(week.map((day) => day.dateKey)).toEqual([
      "2026-11-25", "2026-11-26", "2026-11-27", "2026-11-28", "2026-11-29", "2026-11-30", "2026-12-01",
    ]);
    expect(week.map((day) => day.minutes)).toEqual([0, 0, 0, 0, 25, 0, 0]);
    expect(week.map((day) => day.active)).toEqual([false, false, false, false, true, false, false]);
    expect(week.at(-1)?.isToday).toBe(true);
  });
});
