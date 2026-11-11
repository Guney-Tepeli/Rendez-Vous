/**
 * One active-recall card. The front shows only the French word: the learner
 * has to produce the meaning (and, for nouns, the gender) from memory before
 * turning it. That effort of retrieval is what makes the memory stick; a
 * card that shows the answer straight away trains recognition, not recall.
 */

import type { WordEntry } from "../data/vocabulary";
import { headword } from "../data/vocabulary";
import { review, newCard } from "../domain/srs";
import { RATINGS, type Rating, type SrsCard, type Timestamp } from "../domain/types";
import { useT } from "../i18n/useT";
import { GenderBadge } from "./GenderBadge";
import { SpeakButton } from "./SpeakButton";
import { displayWord } from "./WordDetail";

interface FlashcardProps {
  entry: WordEntry;
  /** Undefined when the word has never been studied. */
  card: SrsCard | undefined;
  revealed: boolean;
  now: Timestamp;
  onReveal: () => void;
  onRate: (rating: Rating) => void;
  onDetails: () => void;
}

export function Flashcard({ entry, card, revealed, now, onReveal, onRate, onDetails }: FlashcardProps) {
  const { t, l } = useT();
  const item = entry.item;

  // What each button WOULD schedule, shown on the button. Possible because
  // review() is pure: asking "what if" costs nothing and changes nothing.
  const gapAfter = (rating: Rating): string => {
    const days = review(card ?? newCard(entry.raw.id, now), rating, now).intervalDays;
    return days === 0 ? t("interval.now") : t("interval.days", { n: days });
  };

  return (
    <div className="card">
      <div className="card-face">
        {card === undefined && <span className="tag">{t("review.new")}</span>}
        <p className="fr card-word" lang="fr">
          {revealed ? displayWord(entry) : headword(entry)}
        </p>

        {revealed && (
          <div className="card-answer">
            {item === undefined ? (
              <>
                {entry.raw.forms.length > 0 && (
                  <p className="fr muted" lang="fr">
                    {entry.raw.forms.join(" · ")}
                  </p>
                )}
                <p className="muted">{t("review.notEnriched")}</p>
              </>
            ) : (
              <>
                <p className="detail-meta">
                  {item.pos === "noun" && <GenderBadge gender={item.gender} plural={item.pluralOnly === true} />}
                  <span className="ipa">/{item.ipa}/</span>
                  <SpeakButton text={displayWord(entry)} />
                </p>
                <p className="meaning">{l(item.meaning)}</p>
                <button type="button" className="link" onClick={onDetails}>
                  {t("review.details")}
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {revealed ? (
        <div className="ratings">
          {RATINGS.map((rating, index) => (
            <button key={rating} type="button" className={`btn rate rate-${rating}`} onClick={() => onRate(rating)}>
              <span className="rate-name">
                <kbd>{index + 1}</kbd> {t(`rating.${rating}`)}
              </span>
              <span className="rate-gap">{gapAfter(rating)}</span>
            </button>
          ))}
        </div>
      ) : (
        <button type="button" className="btn btn-primary btn-wide" onClick={onReveal}>
          {t("review.show")}
        </button>
      )}
    </div>
  );
}
