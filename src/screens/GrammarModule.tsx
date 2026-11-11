/**
 * Module 2, input: one small lesson. Reading only; producing the pattern is
 * the job of the output module that follows, using this lesson's exercises.
 */

import { useState } from "react";
import { SpeakButton } from "../components/SpeakButton";
import type { GrammarLesson } from "../domain/types";
import { useT } from "../i18n/useT";

export function GrammarModule({ lesson, onComplete }: { lesson: GrammarLesson; onComplete: () => void }) {
  const { t, l } = useT();
  // Which example translations are open. Hidden first: the learner reads
  // the French and guesses before checking.
  const [open, setOpen] = useState<ReadonlySet<number>>(new Set());

  const toggle = (index: number) =>
    setOpen((current) => {
      const next = new Set(current);
      if (!next.delete(index)) next.add(index);
      return next;
    });

  return (
    <>
      <section className="panel lesson">
        <p className="muted">{lesson.level}</p>
        <h2>{l(lesson.title)}</h2>
        {lesson.content.map((paragraph, index) => (
          <p key={index} className="lesson-text">
            {l(paragraph)}
          </p>
        ))}
      </section>

      <section className="panel">
        <h3>{t("detail.examples")}</h3>
        <p className="muted small">{t("grammar.tapHint")}</p>
        <ul className="pairs wide">
          {lesson.examples.map((example, index) => (
            <li key={example.fr}>
              <button
                type="button"
                className="example"
                aria-expanded={open.has(index)}
                onClick={() => toggle(index)}
              >
                <span className="fr" lang="fr">
                  {example.fr}
                </span>
              </button>
              <SpeakButton text={example.fr} />
              {open.has(index) && <span className="gloss">{l(example.translation)}</span>}
            </li>
          ))}
        </ul>
      </section>

      <button type="button" className="btn btn-primary btn-wide" onClick={onComplete}>
        {t("grammar.done")}
      </button>
    </>
  );
}
