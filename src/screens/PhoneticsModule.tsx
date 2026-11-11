/**
 * Module 4, shadowing: hear a phrase, say it with the audio, say it alone.
 * The app cannot hear the learner (no microphone on purpose), so the step
 * forward is the learner's own "said it".
 */

import { useState } from "react";
import { parseMarked, plainText } from "../domain/phonetics";
import type { PhoneticsCard } from "../domain/types";
import { useT } from "../i18n/useT";
import { canSpeak, speakFrench } from "../lib/speak";

const NORMAL_RATE = 0.9;
// Measured with macOS "Thomas" in Chrome: rate 0.6 was only ~11% slower than
// 0.9, and nothing below 0.4 is slower still. 0.4 gives the largest real slow-down.
const SLOW_RATE = 0.4;

export function PhoneticsModule({ card, onComplete }: { card: PhoneticsCard; onComplete: () => void }) {
  const { t, l } = useT();
  const [index, setIndex] = useState(0);
  const item = card.items[index];
  const isLast = index === card.items.length - 1;

  if (item === undefined) return null;
  const text = plainText(item.marked);

  return (
    <>
      <section className="panel">
        <h2>{l(card.title)}</h2>
        <p className="lesson-text">{l(card.tip)}</p>
      </section>

      <div className="step-row">
        <progress className="progress" value={index} max={card.items.length} />
        <span className="muted">{t("module.step", { n: index + 1, total: card.items.length })}</span>
      </div>

      <section className="card-face shadow">
        <p className="fr card-word" lang="fr" aria-label={text}>
          {parseMarked(item.marked).map((part, position) =>
            part.silent ? (
              <span key={position} className="silent">
                {part.text}
              </span>
            ) : (
              <span key={position}>{part.text}</span>
            ),
          )}
        </p>
        <p className="ipa">/{item.ipa}/</p>
        <p className="muted">{l(item.meaning)}</p>

        {canSpeak() ? (
          <div className="shadow-actions">
            <button type="button" className="btn" onClick={() => speakFrench(text, NORMAL_RATE)}>
              {t("phon.listen")}
            </button>
            <button type="button" className="btn" onClick={() => speakFrench(text, SLOW_RATE)}>
              {t("phon.slow")}
            </button>
          </div>
        ) : (
          <p className="muted">{t("phon.noAudio")}</p>
        )}
        <p className="hint">{t("phon.steps")}</p>
      </section>

      <button
        type="button"
        className="btn btn-primary btn-wide"
        onClick={isLast ? onComplete : () => setIndex(index + 1)}
      >
        {isLast ? t("module.finish") : t("phon.next")}
      </button>
    </>
  );
}
