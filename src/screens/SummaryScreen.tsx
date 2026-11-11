/**
 * Day summaries: one page per study day with what was learned, ready to
 * keep as a PDF (print panel → Save as PDF) or a Word file.
 *
 * Print styling lives in styles.css (@media print): controls are hidden and
 * only the summary article is printed.
 */

import { useMemo, useState } from "react";
import { findLesson } from "../data/lessons";
import { findPhoneticsCard } from "../data/phonetics";
import { findReading } from "../data/readings";
import { findWord, headword } from "../data/vocabulary";
import { buildDaySummary, summaryDays, type DaySummary, type SummaryWord } from "../domain/summary";
import { useT } from "../i18n/useT";
import { summaryToDocx } from "../lib/docx";
import { printPage, saveFile } from "../lib/native";
import { useAppState } from "../state/store";

const SOURCES = {
  word: (id: string) => {
    const entry = findWord(id);
    return entry && { fr: headword(entry), item: entry.item };
  },
  lesson: findLesson,
  reading: findReading,
  phonetics: findPhoneticsCard,
};

export function SummaryScreen({ onExit }: { onExit: () => void }) {
  const state = useAppState();
  const { t, mode } = useT();
  const days = useMemo(() => summaryDays(state.history), [state.history]);
  const [selected, setSelected] = useState<string | undefined>(days[0]);
  const [busy, setBusy] = useState(false);

  const record = selected === undefined ? undefined : state.history[selected];
  const summary = record && selected ? buildDaySummary(selected, record, mode, SOURCES) : undefined;

  const longDate = (dateKey: string) =>
    new Intl.DateTimeFormat(mode === "TR" ? "tr" : "en", { dateStyle: "full" }).format(new Date(`${dateKey}T12:00:00`));

  const exportWord = async () => {
    if (summary === undefined) return;
    setBusy(true);
    try {
      const blob = await summaryToDocx(summary, {
        title: `${t("summary.title")} — ${longDate(summary.dateKey)}`,
        stats: t("summary.stats", { minutes: summary.minutes, modules: summary.modulesCompleted }),
        newWords: t("summary.newWords"),
        reviewedWords: t("summary.reviewedWords"),
        lesson: t("module.grammar"),
        reading: t("module.reading"),
        phonetics: t("module.phonetics"),
      });
      await saveFile(`francais-${summary.dateKey}.docx`, blob);
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="page">
      <header className="bar no-print">
        <button type="button" className="link" onClick={onExit}>
          ← {t("review.back")}
        </button>
      </header>
      <h1 className="no-print">{t("summary.title")}</h1>

      {days.length === 0 ? (
        <p className="muted">{t("summary.empty")}</p>
      ) : (
        <>
          <div className="summary-controls no-print">
            <select
              className="search"
              value={selected}
              onChange={(event) => setSelected(event.target.value)}
              aria-label={t("summary.pickDay")}
            >
              {days.map((day) => (
                <option key={day} value={day}>
                  {longDate(day)}
                </option>
              ))}
            </select>
            <div className="summary-actions">
              <button type="button" className="btn" onClick={printPage} disabled={summary === undefined}>
                {t("summary.pdf")}
              </button>
              <button type="button" className="btn" onClick={exportWord} disabled={summary === undefined || busy}>
                {t("summary.word")}
              </button>
            </div>
          </div>
          {summary && <SummaryArticle summary={summary} title={`${t("summary.title")} — ${longDate(summary.dateKey)}`} />}
        </>
      )}
    </main>
  );
}

function SummaryArticle({ summary, title }: { summary: DaySummary; title: string }) {
  const { t } = useT();
  return (
    <article className="panel summary">
      <h2>{title}</h2>
      <p className="muted">{t("summary.stats", { minutes: summary.minutes, modules: summary.modulesCompleted })}</p>

      <WordList title={t("summary.newWords")} words={summary.newWords} />
      <WordList title={t("summary.reviewedWords")} words={summary.reviewedWords} />

      {summary.lesson && (
        <section>
          <h3>
            {t("module.grammar")}: {summary.lesson.title} ({summary.lesson.level})
          </h3>
          {summary.lesson.content.map((paragraph, index) => (
            <p key={index} className="lesson-text">
              {paragraph}
            </p>
          ))}
          <ul className="summary-list">
            {summary.lesson.examples.map((example) => (
              <li key={example.fr}>
                <span className="fr" lang="fr">
                  {example.fr}
                </span>{" "}
                <span className="muted">({example.translation})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {summary.reading && (
        <section>
          <h3>
            {t("module.reading")}: {summary.reading.title}
          </h3>
          {summary.reading.paragraphs.map((paragraph, index) => (
            <p key={index} className="fr" lang="fr">
              {paragraph}
            </p>
          ))}
        </section>
      )}

      {summary.phonetics && (
        <section>
          <h3>
            {t("module.phonetics")}: {summary.phonetics.title}
          </h3>
          <p>{summary.phonetics.tip}</p>
        </section>
      )}
    </article>
  );
}

function WordList({ title, words }: { title: string; words: SummaryWord[] }) {
  if (words.length === 0) return null;
  return (
    <section>
      <h3>
        {title} ({words.length})
      </h3>
      <ul className="summary-list">
        {words.map((word) => (
          <li key={word.fr}>
            <strong className="fr" lang="fr">
              {word.fr}
            </strong>
            {word.ipa && <span className="ipa"> /{word.ipa}/</span>}
            {word.meaning && <span> — {word.meaning}</span>}
            {word.example && (
              <div className="muted small">
                <span className="fr" lang="fr">
                  {word.example.fr}
                </span>{" "}
                ({word.example.translation})
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
