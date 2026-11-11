/**
 * Daily reading: one ~500-word text that uses the day's grammar, read
 * paragraph by paragraph. Translations are hidden by default: the learner
 * reads the French first and opens a translation only where stuck.
 * Five comprehension questions follow; they check understanding of the
 * whole text, not single words.
 */

import { useState } from "react";
import { SpeakButton } from "../components/SpeakButton";
import { frenchWordCount } from "../data/readings";
import type { ReadingText } from "../domain/types";
import { useT } from "../i18n/useT";

export function ReadingModule({ text, onComplete }: { text: ReadingText | undefined; onComplete: () => void }) {
  const { t, l, mode } = useT();
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());
  const [picked, setPicked] = useState<Record<number, number>>({});

  if (text === undefined) {
    return (
      <section className="empty">
        <p className="muted">{t("reading.missing")}</p>
        <button type="button" className="btn btn-primary" onClick={onComplete}>
          {t("module.finish")}
        </button>
      </section>
    );
  }

  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (!next.delete(index)) next.add(index);
      return next;
    });

  const answered = Object.keys(picked).length;
  const right = text.questions.filter((question, index) => picked[index] === question.answer).length;

  return (
    <>
      <section className="panel reading">
        <p className="muted small">
          {text.level} · {t("reading.words", { n: frenchWordCount(text) })}
        </p>
        <h2>{l(text.title)}</h2>
        {text.paragraphs.map((paragraph, index) => (
          <div key={index} className="reading-paragraph">
            <p className="fr reading-text" lang="fr">
              {paragraph.fr}
            </p>
            <div className="reading-tools">
              <SpeakButton text={paragraph.fr} />
              <button type="button" className="link small" aria-expanded={open.has(index)} onClick={() => toggle(index)}>
                {open.has(index) ? t("reading.hideTranslation") : t("reading.showTranslation")}
              </button>
            </div>
            {open.has(index) && <p className="gloss">{paragraph[mode]}</p>}
          </div>
        ))}
      </section>

      <section className="panel">
        <h3>{t("reading.questions")}</h3>
        <ol className="questions">
          {text.questions.map((question, index) => {
            const choice = picked[index];
            return (
              <li key={index}>
                <p className="fr" lang="fr">
                  {question.question.fr}
                </p>
                <p className="muted small">{question.question[mode]}</p>
                <div className="choices">
                  {question.options.map((option, optionIndex) => {
                    const state =
                      choice === undefined
                        ? ""
                        : optionIndex === question.answer
                          ? " choice-right"
                          : optionIndex === choice
                            ? " choice-wrong"
                            : "";
                    return (
                      <button
                        key={option}
                        type="button"
                        className={`btn choice fr${state}`}
                        lang="fr"
                        disabled={choice !== undefined}
                        onClick={() => setPicked((current) => ({ ...current, [index]: optionIndex }))}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </ol>
        {answered === text.questions.length && (
          <p className="feedback-title">{t("output.score", { right, total: text.questions.length })}</p>
        )}
      </section>

      <button type="button" className="btn btn-primary btn-wide" onClick={onComplete}>
        {t("module.finish")}
      </button>
    </>
  );
}
