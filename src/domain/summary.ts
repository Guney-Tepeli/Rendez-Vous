/**
 * What one day of study contained, as plain data. The summary screen shows
 * it and the exporters (PDF via print, Word) write it out; both read this
 * one structure, so the page and the files never disagree.
 */

import type { DayRecord, GrammarLesson, LanguageMode, PhoneticsCard, ReadingText, VocabularyItem } from "./types";

export interface SummaryWord {
  fr: string;
  ipa: string;
  meaning: string;
  example: { fr: string; translation: string } | undefined;
}

export interface DaySummary {
  dateKey: string;
  minutes: number;
  modulesCompleted: number;
  newWords: SummaryWord[];
  reviewedWords: SummaryWord[];
  lesson: { title: string; level: string; content: string[]; examples: { fr: string; translation: string }[] } | undefined;
  reading: { title: string; paragraphs: string[] } | undefined;
  phonetics: { title: string; tip: string } | undefined;
}

export interface SummarySources {
  word: (id: string) => { fr: string; item: VocabularyItem | undefined } | undefined;
  lesson: (id: string) => GrammarLesson | undefined;
  reading: (id: string) => ReadingText | undefined;
  phonetics: (id: string) => PhoneticsCard | undefined;
}

export function buildDaySummary(dateKey: string, day: DayRecord, mode: LanguageMode, from: SummarySources): DaySummary {
  const toWord = (id: string): SummaryWord | undefined => {
    const found = from.word(id);
    if (found === undefined) return undefined;
    const item = found.item;
    const example = item?.examples[0];
    return {
      fr: item?.lemma ?? found.fr,
      ipa: item?.ipa ?? "",
      meaning: item?.meaning[mode] ?? "",
      example: example && { fr: example.fr, translation: example.translation[mode] },
    };
  };
  const words = (ids: readonly string[]) => ids.map(toWord).filter((word): word is SummaryWord => word !== undefined);

  const lesson = day.lessonId === undefined ? undefined : from.lesson(day.lessonId);
  const reading = day.readingId === undefined ? undefined : from.reading(day.readingId);
  const phonetics = day.phoneticsId === undefined ? undefined : from.phonetics(day.phoneticsId);

  return {
    dateKey,
    minutes: Math.floor(day.seconds / 60),
    modulesCompleted: day.modulesCompleted,
    newWords: words(day.newWordIds),
    reviewedWords: words(day.reviewedWordIds),
    lesson: lesson && {
      title: lesson.title[mode],
      level: lesson.level,
      content: lesson.content.map((paragraph) => paragraph[mode]),
      examples: lesson.examples.map((example) => ({ fr: example.fr, translation: example.translation[mode] })),
    },
    reading: reading && { title: reading.title[mode], paragraphs: reading.paragraphs.map((paragraph) => paragraph.fr) },
    phonetics: phonetics && { title: phonetics.title[mode], tip: phonetics.tip[mode] },
  };
}

/** Days worth a summary, newest first: something was studied or opened. */
export function summaryDays(history: Readonly<Record<string, DayRecord>>): string[] {
  return Object.entries(history)
    .filter(([, day]) => day.newWordIds.length + day.reviewedWordIds.length > 0 || day.lessonId !== undefined)
    .map(([date]) => date)
    .sort()
    .reverse();
}
