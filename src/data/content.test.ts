import { describe, expect, it } from "vitest";
import { checkAnswer } from "../domain/answers";
import { parseMarked, plainText } from "../domain/phonetics";
import type { Localized } from "../domain/types";
import { LESSONS } from "./lessons";
import { READINGS, frenchWordCount } from "./readings";
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

  it("are bilingual throughout and bring all four exercise types", () => {
    for (const lesson of LESSONS) {
      expect(complete(lesson.title), lesson.id).toBe(true);
      expect(lesson.content.every(complete), lesson.id).toBe(true);
      expect(lesson.examples.length, lesson.id).toBeGreaterThanOrEqual(6);
      expect(lesson.examples.every((example) => complete(example.translation)), lesson.id).toBe(true);
      const types = new Set(lesson.exercises.map((exercise) => exercise.type));
      for (const type of ["build", "fill", "free", "choice"]) expect(types.has(type as never), `${lesson.id} ${type}`).toBe(true);
    }
  });

  it("are long enough to reinforce: 12 or more exercises, at least 5 paragraphs", () => {
    for (const lesson of LESSONS) {
      expect(lesson.exercises.length, lesson.id).toBeGreaterThanOrEqual(12);
      expect(lesson.content.length, lesson.id).toBeGreaterThanOrEqual(5);
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
        case "choice":
          expect(exercise.options.length, exercise.id).toBeGreaterThanOrEqual(2);
          expect(exercise.options.length, exercise.id).toBeLessThanOrEqual(5);
          expect(new Set(exercise.options).size, exercise.id).toBe(exercise.options.length);
          expect(exercise.options[exercise.answer], exercise.id).toBeDefined();
          expect(exercise.text.split("___").length, exercise.id).toBeLessThanOrEqual(2);
          expect(complete(exercise.translation), exercise.id).toBe(true);
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

describe("reading texts", () => {
  const lessonIds = new Set(LESSONS.map((lesson) => lesson.id));
  const lessonLevel = new Map(LESSONS.map((lesson) => [lesson.id, lesson.level]));

  it("cover every lesson", () => {
    const covered = new Set(READINGS.map((text) => text.lessonId));
    expect([...lessonIds].filter((id) => !covered.has(id))).toEqual([]);
    expect(READINGS.length).toBe(LESSONS.length);
  });

  it("belong to an existing lesson, one each, with matching id and level", () => {
    const seen = new Set<string>();
    for (const text of READINGS) {
      expect(lessonIds.has(text.lessonId), text.id).toBe(true);
      expect(text.id, text.id).toBe(`reading-${text.lessonId}`);
      expect(seen.has(text.lessonId), `${text.lessonId} has two texts`).toBe(false);
      expect(text.level, text.id).toBe(lessonLevel.get(text.lessonId));
      seen.add(text.lessonId);
    }
  });

  it("are about 500 words, bilingual, with 5 well-formed questions", () => {
    for (const text of READINGS) {
      const words = frenchWordCount(text);
      expect(words, `${text.id}: ${words} words`).toBeGreaterThanOrEqual(450);
      expect(words, `${text.id}: ${words} words`).toBeLessThanOrEqual(600);
      expect(text.paragraphs.length, text.id).toBeGreaterThanOrEqual(5);
      expect(text.paragraphs.length, text.id).toBeLessThanOrEqual(8);
      expect(complete(text.title), text.id).toBe(true);
      for (const paragraph of text.paragraphs) {
        expect([paragraph.fr, paragraph.TR, paragraph.EN].every((part) => part.trim() !== ""), text.id).toBe(true);
      }
      expect(text.questions.length, text.id).toBe(5);
      for (const question of text.questions) {
        expect(complete(question.question) && question.question.fr.trim() !== "", text.id).toBe(true);
        expect(question.options.length, text.id).toBeGreaterThanOrEqual(3);
        expect(question.options.length, text.id).toBeLessThanOrEqual(4);
        expect(new Set(question.options).size, text.id).toBe(question.options.length);
        expect(question.options[question.answer], text.id).toBeDefined();
      }
    }
  });
});

// ---------------------------------------------------------------------------
// Grammar from later lessons
// ---------------------------------------------------------------------------
//
// A reading text may only use grammar taught up to its own lesson. Checking
// that fully needs a person; this catches the forms that are easy to spot.
// Each marker names the lesson that teaches it: a text for an EARLIER lesson
// must not contain it. Markers are a best-effort net, not a parser: they miss
// things (irregular present tense, for example) but every hit is real.
//
// Word edges are written as (?<!\p{L}) and (?!\p{L}), not \b: in JavaScript
// \b only knows ASCII letters, so it sees an edge inside "déjà" (after "dé").
// The regexes only read the text; nothing is changed.

const L = "(?<!\\p{L})";
const R = "(?!\\p{L})";
const marker = (words: string) => new RegExp(`${L}(?:${words})${R}`, "giu");

const LATER_GRAMMAR: readonly { lesson: string; name: string; pattern: RegExp }[] = [
  {
    lesson: "passe-compose-avoir",
    name: "passé composé with avoir",
    pattern: marker(
      "(?:j'ai|tu as|il a|elle a|on a|nous avons|vous avez|ils ont|elles ont) (?:\\p{L}+é|fini|pris|fait|vu|eu|été|dit|mis|lu|bu|choisi|écrit|ouvert)",
    ),
  },
  {
    lesson: "passe-compose-etre",
    name: "passé composé with être",
    pattern: marker(
      "(?:je suis|il est|elle est|nous sommes|ils sont|elles sont) (?:allée?s?|venue?s?|partie?s?|arrivée?s?|née?s?|restée?s?|rentrée?s?|tombée?s?|sortie?s?|montée?s?|descendue?s?)",
    ),
  },
  {
    lesson: "imparfait",
    name: "imparfait",
    pattern: marker("étais|était|étions|étaient|avais|avait|avaient|faisait|allait|pouvait|voulait|habitait|aimait"),
  },
  {
    lesson: "futur-simple",
    name: "futur simple",
    pattern: marker("serai|sera|serons|seront|aurai|aura|auront|ferai|fera|irai|ira|pourra|viendra|verra"),
  },
  // "Je voudrais" is taught as a fixed polite phrase with the modal verbs,
  // long before the conditionnel itself.
  { lesson: "modal-verbs", name: "je voudrais (fixed phrase)", pattern: marker("je voudrais") },
  {
    lesson: "conditionnel-politeness",
    name: "conditionnel",
    pattern: marker("(?<!je )voudrais|voudrait|pourrais|pourrait|aimerais|aimerait|serait|aurait|devrais|devrait"),
  },
  { lesson: "relative-dont", name: "dont", pattern: marker("dont") },
  {
    lesson: "subjonctif-formation",
    name: "subjonctif",
    pattern: marker("que je sois|qu'il soit|qu'elle soit|qu'il fasse|qu'il aille|qu'il puisse|que tu sois|que nous soyons"),
  },
  // en + present participle. Nouns that end in -ant after "en" are not
  // gérondifs: "transformée en restaurant", "en argent", "en avant".
  // "En attendant," with a comma is the fixed adverb "meanwhile", not a
  // gérondif of attendre.
  { lesson: "gerondif", name: "gérondif (en + -ant)", pattern: marker("en (?!(?:restaurant|argent|avant)(?!\\p{L})|attendant,)\\p{L}+ant") },
];

describe("reading texts and later grammar", () => {
  const order = new Map(LESSONS.map((lesson, index) => [lesson.id, index]));

  it("name lessons that exist", () => {
    expect(LATER_GRAMMAR.map((entry) => entry.lesson).filter((id) => !order.has(id))).toEqual([]);
  });

  it("use no marked grammar from a later lesson, in paragraphs or questions", () => {
    const found: string[] = [];
    for (const text of READINGS) {
      const at = order.get(text.lessonId) ?? 0;
      const french = [
        ...text.paragraphs.map((paragraph) => paragraph.fr),
        ...text.questions.flatMap((question) => [question.question.fr, ...question.options]),
      ].join(" ");
      for (const entry of LATER_GRAMMAR) {
        if ((order.get(entry.lesson) ?? 0) <= at) continue;
        for (const match of french.matchAll(entry.pattern)) {
          found.push(`${text.id}: "${match[0]}" is ${entry.name}, taught in ${entry.lesson}`);
        }
      }
    }
    expect(found).toEqual([]);
  });
});
