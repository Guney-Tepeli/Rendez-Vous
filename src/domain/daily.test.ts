import { describe, expect, it } from "vitest";
import { checkAnswer, fillIn, normalizeAnswer, shuffledOrder } from "./answers";
import { dayNumber, formatClock, pickAtLevel, pickByDay, pickLesson, planMinutes } from "./daily";
import { parseMarked, plainText } from "./phonetics";

describe("day rotation", () => {
  it("numbers consecutive days consecutively, across a month end", () => {
    expect(dayNumber("2026-12-01") - dayNumber("2026-11-30")).toBe(1);
    expect(dayNumber("2027-01-01") - dayNumber("2026-12-31")).toBe(1);
  });

  it("rotates one item per day and wraps around", () => {
    const items = ["a", "b", "c"];
    const picks = ["2026-11-10", "2026-11-11", "2026-11-12", "2026-11-13"].map((day) =>
      pickByDay(items, day),
    );
    expect(new Set(picks.slice(0, 3)).size).toBe(3);
    expect(picks[3]).toBe(picks[0]);
  });
});

describe("pickAtLevel", () => {
  const items = [
    { level: "A1", id: "a" },
    { level: "A2", id: "b" },
    { level: "B1", id: "c" },
  ] as const;

  it("never picks above the given level", () => {
    for (let day = 1; day <= 28; day++) {
      const key = `2026-11-${String(day).padStart(2, "0")}`;
      expect(pickAtLevel(items, "A1", key).id).toBe("a");
      expect(pickAtLevel(items, "A2", key).id).not.toBe("c");
    }
  });
});

describe("pickLesson", () => {
  const lessons = [{ id: "l1" }, { id: "l2" }, { id: "l3" }];

  it("gives the first unfinished lesson in course order", () => {
    expect(pickLesson(lessons, [], "2026-11-10").id).toBe("l1");
    expect(pickLesson(lessons, ["l1"], "2026-11-10").id).toBe("l2");
    expect(pickLesson(lessons, ["l2", "l1"], "2026-11-10").id).toBe("l3");
  });

  it("revises by rotation once everything is finished", () => {
    const all = ["l1", "l2", "l3"];
    const a = pickLesson(lessons, all, "2026-11-10").id;
    const b = pickLesson(lessons, all, "2026-11-11").id;
    expect(a).not.toBe(b);
  });
});

describe("planMinutes", () => {
  const total = (plan: Record<string, number>) => Object.values(plan).reduce((a, b) => a + b, 0);

  it("keeps the base split on a full day", () => {
    expect(planMinutes(30)).toEqual({ recall: 10, grammar: 15, output: 10, phonetics: 5 });
  });

  it("moves spare recall time to output and always totals 40", () => {
    expect(planMinutes(10)).toEqual({ recall: 5, grammar: 15, output: 15, phonetics: 5 });
    expect(planMinutes(0)).toEqual({ recall: 2, grammar: 15, output: 18, phonetics: 5 });
    for (const size of [0, 1, 7, 10, 19, 20, 200]) expect(total(planMinutes(size))).toBe(40);
  });
});

describe("formatClock", () => {
  it("formats minutes and seconds", () => {
    expect(formatClock(0)).toBe("0:00");
    expect(formatClock(187)).toBe("3:07");
    expect(formatClock(600)).toBe("10:00");
  });
});

describe("checkAnswer", () => {
  it("ignores capitals, final punctuation, spacing and apostrophe style", () => {
    expect(normalizeAnswer("  J’ai   vingt ans. ")).toBe("j'ai vingt ans");
    expect(checkAnswer("j'ai vingt ans", ["J'ai vingt ans."])).toBe("correct");
    expect(checkAnswer("Où habitez-vous", ["Où habitez-vous ?"])).toBe("correct");
  });

  it("ignores commas", () => {
    expect(checkAnswer("Oui je viens demain", ["Oui, je viens demain."])).toBe("correct");
    expect(checkAnswer("D'abord, je mange, ensuite je pars", ["D'abord je mange ensuite je pars."])).toBe("correct");
  });

  it("accepts any listed answer", () => {
    const accepted = ["Nous allons manger.", "On va manger."];
    expect(checkAnswer("on va manger", accepted)).toBe("correct");
  });

  it("flags a missing accent instead of failing it", () => {
    expect(checkAnswer("Je parle francais", ["Je parle français."])).toBe("accents");
    expect(checkAnswer("ou est la gare", ["Où est la gare ?"])).toBe("accents");
    expect(checkAnswer("tres bien", ["Très bien."])).toBe("accents");
    // Turkish keyboard: dotless ı for i, capital İ.
    expect(checkAnswer("Je suıs ıcı", ["Je suis ici."])).toBe("accents");
    expect(checkAnswer("İl est là", ["Il est là."])).toBe("accents");
  });

  it("rejects a different sentence and an empty answer", () => {
    expect(checkAnswer("Je parle anglais", ["Je parle français."])).toBe("wrong");
    expect(checkAnswer("   ", ["suis"])).toBe("wrong");
  });
});

describe("fillIn", () => {
  it("puts the answer in the gap, joining after an apostrophe", () => {
    expect(fillIn("Je ___ turc.", "suis")).toBe("Je suis turc.");
    expect(fillIn("Elle ___ aime pas le poisson.", "n'")).toBe("Elle n'aime pas le poisson.");
  });
});

describe("shuffledOrder", () => {
  const tokens = ["Nous", "ne", "sommes", "pas", "fatigués"];

  it("is a permutation, stable for the same seed", () => {
    const order = shuffledOrder(tokens, "ex-1");
    expect([...order].sort()).toEqual([0, 1, 2, 3, 4]);
    expect(shuffledOrder(tokens, "ex-1")).toEqual(order);
  });

  it("never hands out the solved order", () => {
    for (let seed = 0; seed < 200; seed++) {
      const order = shuffledOrder(["Je", "parle"], `s${seed}`);
      expect(order).toEqual([1, 0]);
    }
    for (let seed = 0; seed < 200; seed++) {
      const order = shuffledOrder(tokens, `s${seed}`);
      expect(order.map((i) => tokens[i]).join(" ")).not.toBe(tokens.join(" "));
    }
  });
});

describe("phonetics markup", () => {
  it("splits silent letters from sounded ones", () => {
    expect(parseMarked("peti(t)")).toEqual([
      { text: "peti", silent: false },
      { text: "t", silent: true },
    ]);
    expect(parseMarked("il(s) parl(ent)").filter((part) => part.silent).map((part) => part.text)).toEqual([
      "s",
      "ent",
    ]);
  });

  it("recovers the ordinary spelling for speech", () => {
    expect(plainText("vou(s) parle(z)")).toBe("vous parlez");
    expect(plainText("les‿amis")).toBe("les amis");
  });
});
