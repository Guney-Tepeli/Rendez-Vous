import { describe, expect, it } from "vitest";
import { conjugated, startsWithVowelSound, withDefiniteArticle, withIndefiniteArticle } from "./french";

describe("articles", () => {
  it("uses le / la by gender", () => {
    expect(withDefiniteArticle("bagage", "m")).toBe("le bagage");
    expect(withDefiniteArticle("maison", "f")).toBe("la maison");
  });

  it("contracts before a vowel sound, whatever the gender", () => {
    expect(withDefiniteArticle("e-mail", "m")).toBe("l'e-mail");
    expect(withDefiniteArticle("école", "f")).toBe("l'école");
    expect(withDefiniteArticle("hôtel", "m")).toBe("l'hôtel");
    expect(withDefiniteArticle("œuf", "m")).toBe("l'œuf");
  });

  it("does not contract before a listed h aspiré", () => {
    expect(withDefiniteArticle("haricot", "m")).toBe("le haricot");
    expect(startsWithVowelSound("héros")).toBe(false);
  });

  it("does not contract before y + vowel, which sounds like a consonant", () => {
    expect(withDefiniteArticle("yaourt", "m")).toBe("le yaourt");
    expect(withDefiniteArticle("handball", "m")).toBe("le handball");
  });

  it("never contracts un / une", () => {
    expect(withIndefiniteArticle("e-mail", "m")).toBe("un e-mail");
    expect(withIndefiniteArticle("école", "f")).toBe("une école");
  });
});

describe("conjugated", () => {
  it("contracts je only", () => {
    expect(conjugated("je", "gagne")).toBe("je gagne");
    expect(conjugated("je", "habite")).toBe("j'habite");
    expect(conjugated("tu", "habites")).toBe("tu habites");
    expect(conjugated("il", "habite")).toBe("il / elle habite");
    expect(conjugated("ils", "gagnent")).toBe("ils / elles gagnent");
  });
});
