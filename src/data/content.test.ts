import { describe, expect, it } from "vitest";
import { checkAnswer } from "../domain/answers";
import { parseMarked, plainText } from "../domain/phonetics";
import type { Localized } from "../domain/types";
import { LESSONS } from "./lessons";
import { PHONETICS_CARDS } from "./phonetics";
import { SELF_TALK_PROMPTS } from "./selfTalk";

const complete = (text: Localized) => text.TR.trim() !== "" && text.EN.trim() !== "";

describe("lessons", () => {
  it("run the whole course, A1 to B1, in level order", () => {
    const levels = LESSONS.map((lesson) => lesson.level);
    expect(levels.filter((level) => level === "A1").length).toBe(25);
    expect(levels.filter((level) => level === "A2").length).toBe(25);
    expect(levels.filter((level) => level === "B1").length).toBe(28);
    expect(levels).toEqual([...levels].sort());
  });

  it("have unique lesson and exercise ids", () => {
    const lessonIds = LESSONS.map((lesson) => lesson.id);
    const exerciseIds = LESSONS.flatMap((lesson) => lesson.exercises.map((exercise) => exercise.id));
    expect(new Set(lessonIds).size).toBe(lessonIds.length);
    expect(new Set(exerciseIds).size).toBe(exerciseIds.length);
  });

  it("are bilingual throughout and bring all three exercise types", () => {
    for (const lesson of LESSONS) {
      expect(complete(lesson.title), lesson.id).toBe(true);
      expect(lesson.content.every(complete), lesson.id).toBe(true);
      expect(lesson.examples.length, lesson.id).toBeGreaterThanOrEqual(2);
      expect(lesson.examples.every((example) => complete(example.translation)), lesson.id).toBe(true);
      const types = new Set(lesson.exercises.map((exercise) => exercise.type));
      expect([...types].sort(), lesson.id).toEqual(["build", "fill", "free"]);
    }
  });

  it("have well-formed exercises that accept their own answers", () => {
    for (const exercise of LESSONS.flatMap((lesson) => lesson.exercises)) {
      switch (exercise.type) {
        case "fill":
          expect(exercise.text.split("___"), exercise.id).toHaveLength(2);
          expect(complete(exercise.translation), exercise.id).toBe(true);
          expect(checkAnswer(exercise.answers[0] ?? "", exercise.answers), exercise.id).toBe("correct");
          break;
        case "build":
          expect(exercise.tokens.length, exercise.id).toBeGreaterThanOrEqual(3);
          expect(complete(exercise.translation), exercise.id).toBe(true);
          // Two identical tiles would make a right answer look wrong.
          expect(new Set(exercise.tokens).size, exercise.id).toBe(exercise.tokens.length);
          break;
        case "free":
          expect(complete(exercise.prompt), exercise.id).toBe(true);
          expect(checkAnswer(exercise.answers[0] ?? "", exercise.answers), exercise.id).toBe("correct");
          break;
      }
    }
  });
});

describe("phonetics cards", () => {
  it("are bilingual and have balanced markup", () => {
    for (const card of PHONETICS_CARDS) {
      expect(complete(card.title) && complete(card.tip), card.id).toBe(true);
      expect(card.items.length, card.id).toBeGreaterThanOrEqual(3);
      for (const item of card.items) {
        expect(complete(item.meaning), item.marked).toBe(true);
        expect(plainText(item.marked), item.marked).not.toMatch(/[()‿]/);
        const rebuilt = parseMarked(item.marked).map((part) => part.text).join("");
        expect(rebuilt, item.marked).toBe(item.marked.replace(/[()]/g, ""));
      }
    }
  });

  it("cover every focus type, with unique ids", () => {
    const ids = PHONETICS_CARDS.map((card) => card.id);
    expect(new Set(ids).size).toBe(ids.length);
    const focuses = new Set(PHONETICS_CARDS.map((card) => card.focus));
    for (const focus of ["vowel", "nasal", "consonant", "muet", "liaison", "rhythm", "intonation"]) {
      expect(focuses.has(focus as never), focus).toBe(true);
    }
  });

  it("the silent-letter card actually marks silent letters", () => {
    const muet = PHONETICS_CARDS.find((card) => card.focus === "muet");
    expect(muet?.items.every((item) => parseMarked(item.marked).some((part) => part.silent))).toBe(true);
  });
});

describe("self-talk prompts", () => {
  it("cover every course level with enough variety", () => {
    for (const level of ["A1", "A2", "B1"] as const) {
      expect(SELF_TALK_PROMPTS.filter((prompt) => prompt.level === level).length, level).toBeGreaterThanOrEqual(30);
    }
  });

  it("cover a week and are bilingual", () => {
    expect(SELF_TALK_PROMPTS.length).toBeGreaterThanOrEqual(7);
    expect(SELF_TALK_PROMPTS.every((prompt) => complete(prompt.meaning))).toBe(true);
  });
});
