/**
 * Domain types. No React, no storage, no I/O in this file.
 *
 * Two kinds of data live in this app and they are kept apart on purpose:
 *   - CONTENT  (VocabularyItem, GrammarLesson): the same for every learner,
 *     shipped with the app, never mutated at runtime.
 *   - PROGRESS (SrsCard, DailySessionState): belongs to one learner, changes
 *     on every click, is what gets persisted.
 * Mixing them (e.g. an `srs` field inside VocabularyItem) would mean that
 * fixing a typo in the content overwrites somebody's review history.
 */

// ---------------------------------------------------------------------------
// Localization primitives
// ---------------------------------------------------------------------------

/** Instruction language. French is always the target language. */
export type LanguageMode = "TR" | "EN";

/**
 * A piece of text that exists once per instruction language.
 * `Record<LanguageMode, string>` makes BOTH keys mandatory: adding a third
 * language to LanguageMode turns every incomplete entry into a compile error.
 */
export type Localized = Record<LanguageMode, string>;

// ---------------------------------------------------------------------------
// Vocabulary (content)
// ---------------------------------------------------------------------------

export type Gender = "m" | "f";

/** The six present-tense slots, in the order a conjugation table shows them. */
export const PERSONS = ["je", "tu", "il", "nous", "vous", "ils"] as const;
export type Person = (typeof PERSONS)[number];
export type Conjugation = Record<Person, string>;

/** A ready-to-use multi-word phrase, e.g. "prendre une décision". */
export interface Chunk {
  fr: string;
  meaning: Localized;
}

export interface ExampleSentence {
  fr: string;
  translation: Localized;
}

/** Fields every vocabulary item has, whatever its part of speech. */
interface VocabularyBase {
  /** CEFR level of the word. Decides when it enters the review queue. */
  level: CefrLevel;
  /** Stable key. SRS progress points at it, so it must never change. */
  id: string;
  /** Dictionary form, without article: "chocolat", "prendre". */
  lemma: string;
  /** IPA without the slashes: "ʃɔ.kɔ.la". */
  ipa: string;
  meaning: Localized;
  chunks: Chunk[];
  examples: ExampleSentence[];
}

/**
 * Discriminated union on `pos`.
 *
 * Why not one interface with optional `gender?`, `plural?`, `present?` ?
 * Because then a verb with a gender, or a noun without one, would type-check.
 * Here the compiler knows: if `item.pos === "noun"`, `item.gender` exists;
 * if it is a verb, `item.gender` does not exist at all.
 */
export interface NounItem extends VocabularyBase {
  pos: "noun";
  gender: Gender;
  plural: string;
  /** Set for nouns that exist only in the plural ("les vacances"). */
  pluralOnly?: true;
}

export interface VerbItem extends VocabularyBase {
  pos: "verb";
  /** 1 = -er, 2 = -ir (finir), 3 = irregular / everything else. */
  group: 1 | 2 | 3;
  present: Conjugation;
}

export interface AdjectiveItem extends VocabularyBase {
  pos: "adjective";
  /** Feminine form; equal to the lemma when invariable ("libre"). */
  feminine: string;
}

/** Idioms, fixed expressions, adverbs, prepositions: no grammar table. */
export interface ExpressionItem extends VocabularyBase {
  pos: "expression" | "other";
}

export type VocabularyItem = NounItem | VerbItem | AdjectiveItem | ExpressionItem;
export type PartOfSpeech = VocabularyItem["pos"];

/**
 * A word imported from the spreadsheet that has not been enriched yet:
 * only the French text is known. It becomes a VocabularyItem once meaning,
 * IPA and grammar data have been written and reviewed.
 */
export interface RawWord {
  id: string;
  fr: string;
  /** Spreadsheet column the word came from (A–Y). Absent for words added from seed/extra-words.json. */
  letter?: string;
  /**
   * Other inflected forms folded into this entry by the import script
   * ("pomme" carries "pommes"). One word = one card = one new-word slot.
   */
  forms: string[];
}

// ---------------------------------------------------------------------------
// Spaced repetition (progress)
// ---------------------------------------------------------------------------

/** The four confidence buttons, worst to best. */
export const RATINGS = ["again", "hard", "good", "easy"] as const;
export type Rating = (typeof RATINGS)[number];

/** Milliseconds since the Unix epoch, as returned by Date.now(). */
export type Timestamp = number;

/**
 * Review state of ONE vocabulary item for ONE learner.
 * A word with no SrsCard has simply never been studied ("new").
 */
export interface SrsCard {
  itemId: string;
  /** Successful reviews in a row. Reset to 0 by "again". */
  repetitions: number;
  /** Gap that was scheduled at the last review, in days. */
  intervalDays: number;
  /** SM-2 ease factor: how fast the interval grows. Never below 1.3. */
  easeFactor: number;
  dueAt: Timestamp;
  lastReviewedAt: Timestamp;
  /** How many times the word was forgotten. Flags "leeches". */
  lapses: number;
}

// ---------------------------------------------------------------------------
// Grammar (content)
// ---------------------------------------------------------------------------

/**
 * "B2" exists only for words: spreadsheet entries above the course's target.
 * They stay in the deck but come last. Lessons go up to B1.
 */
export type CefrLevel = "A1" | "A2" | "B1" | "B2";

export const LEVEL_ORDER: readonly CefrLevel[] = ["A1", "A2", "B1", "B2"];

export interface GrammarLesson {
  id: string;
  level: CefrLevel;
  title: Localized;
  /** Bite-sized explanation, one entry per paragraph. */
  content: Localized[];
  examples: ExampleSentence[];
  /** Output practice for THIS lesson: what was just read gets produced. */
  exercises: Exercise[];
}

// ---------------------------------------------------------------------------
// Output exercises (content)
// ---------------------------------------------------------------------------

/** Type the missing word. `text` contains exactly one "___". */
export interface FillExercise {
  type: "fill";
  id: string;
  text: string;
  /** Every spelling that counts as right. The first is shown as the answer. */
  answers: string[];
  translation: Localized;
}

/** Put the words in order. `tokens` is the correct order. */
export interface BuildExercise {
  type: "build";
  id: string;
  tokens: string[];
  translation: Localized;
}

/** Write the whole sentence in French from a prompt. */
export interface FreeExercise {
  type: "free";
  id: string;
  prompt: Localized;
  answers: string[];
}

/**
 * Pick the right option. `text` may contain one "___" (the gap the option
 * fills) or be a whole question. `answer` is the index of the right option.
 */
export interface ChoiceExercise {
  type: "choice";
  id: string;
  text: string;
  options: string[];
  answer: number;
  translation: Localized;
}

export type Exercise = FillExercise | BuildExercise | FreeExercise | ChoiceExercise;

// ---------------------------------------------------------------------------
// Daily reading (content)
// ---------------------------------------------------------------------------

/** One paragraph of a reading text, with its translations. */
export interface ReadingParagraph {
  fr: string;
  TR: string;
  EN: string;
}

/** A comprehension question about the text, in French, with translations. */
export interface ReadingQuestion {
  question: { fr: string; TR: string; EN: string };
  /** Options in French. */
  options: string[];
  answer: number;
}

/**
 * About 500 words of French, written for the level of one grammar lesson
 * and using that lesson's grammar. One text per lesson; read on the day the
 * lesson is studied.
 */
export interface ReadingText {
  id: string;
  /** The GrammarLesson this text goes with. */
  lessonId: string;
  level: CefrLevel;
  title: Localized;
  paragraphs: ReadingParagraph[];
  questions: ReadingQuestion[];
}

// ---------------------------------------------------------------------------
// Phonetics and self-talk (content)
// ---------------------------------------------------------------------------

export type PhoneticsFocus =
  | "vowel" // oral vowels: u / ou, é / è, eu, the e of "le"
  | "nasal" // on, an / en, in
  | "consonant" // r, gn, ill, ch / j, final consonants
  | "muet" // silent letters
  | "liaison" // liaison and enchaînement
  | "rhythm" // syllable timing, group stress
  | "intonation"; // questions, lists, emphasis

export interface ShadowingItem {
  /**
   * The phrase, with silent letters in parentheses and liaisons as "‿":
   * "peti(t)", "les‿amis". See domain/phonetics.ts for how it is read.
   */
  marked: string;
  ipa: string;
  meaning: Localized;
}

export interface PhoneticsCard {
  id: string;
  focus: PhoneticsFocus;
  title: Localized;
  tip: Localized;
  items: ShadowingItem[];
}

/** A sentence to say aloud while doing the thing it describes. */
export interface SelfTalkPrompt {
  /** Lowest lesson level whose grammar the sentence uses. */
  level: CefrLevel;
  fr: string;
  meaning: Localized;
}

// ---------------------------------------------------------------------------
// Daily session (progress)
// ---------------------------------------------------------------------------

export type ModuleId = "recall" | "grammar" | "output" | "reading" | "phonetics";

export interface ModuleSpec {
  id: ModuleId;
  /** Recommended length. A guide for the timer, not a hard limit. */
  baseMinutes: number;
}

/** The 60-minute day: 10 + 20 + 15 + 10 + 5. Order is the order of play. */
export const DAILY_MODULES: readonly ModuleSpec[] = [
  { id: "recall", baseMinutes: 10 },
  { id: "grammar", baseMinutes: 20 },
  { id: "output", baseMinutes: 15 },
  { id: "reading", baseMinutes: 10 },
  { id: "phonetics", baseMinutes: 5 },
];

export interface ModuleProgress {
  id: ModuleId;
  /** Today's recommended length, fixed when the session starts. */
  plannedMinutes: number;
  elapsedSeconds: number;
  completed: boolean;
}

export interface DailySessionState {
  /** Local calendar day, "YYYY-MM-DD". A new day means a new session. */
  date: string;
  /** Index into `modules` of the module to do next. */
  moduleIndex: number;
  modules: ModuleProgress[];
  /**
   * Content chosen for the day, fixed when the session starts. Without this
   * the output module would look for "the first unfinished lesson" AFTER the
   * grammar module had just finished it, and practise the wrong one.
   */
  lessonId: string;
  phoneticsId: string;
  readingId: string;
}

// ---------------------------------------------------------------------------
// History (progress)
// ---------------------------------------------------------------------------

/** What was done on one calendar day. Days with no activity have no record. */
export interface DayRecord {
  /** Time spent inside modules. */
  seconds: number;
  /** Cards rated (a card rated twice counts twice). */
  reviews: number;
  /** Words studied for the first time. Also what the daily limit counts. */
  newWords: number;
  /** How many of the day's modules were finished. */
  modulesCompleted: number;
  /** Words studied for the first time that day, in order. */
  newWordIds: string[];
  /** Words reviewed that day (studied before), each once. */
  reviewedWordIds: string[];
  /** Content of the day's session, for the day summary. */
  lessonId?: string;
  readingId?: string;
  phoneticsId?: string;
}

/** Keyed by local date, "YYYY-MM-DD". */
export type History = Record<string, DayRecord>;
