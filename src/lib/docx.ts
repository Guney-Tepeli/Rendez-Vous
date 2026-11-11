/**
 * Word (.docx) export of a day summary, built with the `docx` library.
 * Loaded on demand (dynamic import), so the library only downloads when
 * someone actually exports.
 */

import type { DaySummary, SummaryWord } from "../domain/summary";

export interface DocxLabels {
  title: string;
  stats: string;
  newWords: string;
  reviewedWords: string;
  lesson: string;
  reading: string;
  phonetics: string;
}

export async function summaryToDocx(summary: DaySummary, labels: DocxLabels): Promise<Blob> {
  const { Document, HeadingLevel, Packer, Paragraph, TextRun } = await import("docx");

  const heading = (text: string, level: (typeof HeadingLevel)[keyof typeof HeadingLevel]) =>
    new Paragraph({ text, heading: level, spacing: { before: 240, after: 120 } });
  const plain = (text: string) => new Paragraph({ children: [new TextRun(text)] });

  const wordLines = (words: SummaryWord[]) =>
    words.flatMap((word) => {
      const lines = [
        new Paragraph({
          bullet: { level: 0 },
          children: [
            new TextRun({ text: word.fr, bold: true }),
            new TextRun(word.ipa ? `  /${word.ipa}/` : ""),
            new TextRun(word.meaning ? `  —  ${word.meaning}` : ""),
          ],
        }),
      ];
      if (word.example) {
        lines.push(
          new Paragraph({
            bullet: { level: 1 },
            children: [new TextRun({ text: word.example.fr, italics: true }), new TextRun(`  (${word.example.translation})`)],
          }),
        );
      }
      return lines;
    });

  const children = [
    heading(labels.title, HeadingLevel.TITLE),
    plain(labels.stats),
  ];
  if (summary.newWords.length > 0) children.push(heading(labels.newWords, HeadingLevel.HEADING_1), ...wordLines(summary.newWords));
  if (summary.reviewedWords.length > 0) {
    children.push(heading(labels.reviewedWords, HeadingLevel.HEADING_1), ...wordLines(summary.reviewedWords));
  }
  if (summary.lesson) {
    children.push(heading(`${labels.lesson}: ${summary.lesson.title} (${summary.lesson.level})`, HeadingLevel.HEADING_1));
    for (const paragraph of summary.lesson.content) for (const line of paragraph.split("\n")) children.push(plain(line));
    for (const example of summary.lesson.examples) {
      children.push(
        new Paragraph({
          bullet: { level: 0 },
          children: [new TextRun({ text: example.fr, italics: true }), new TextRun(`  (${example.translation})`)],
        }),
      );
    }
  }
  if (summary.reading) {
    children.push(heading(`${labels.reading}: ${summary.reading.title}`, HeadingLevel.HEADING_1));
    for (const paragraph of summary.reading.paragraphs) children.push(plain(paragraph));
  }
  if (summary.phonetics) {
    children.push(heading(`${labels.phonetics}: ${summary.phonetics.title}`, HeadingLevel.HEADING_1), plain(summary.phonetics.tip));
  }

  return Packer.toBlob(new Document({ sections: [{ children }] }));
}
