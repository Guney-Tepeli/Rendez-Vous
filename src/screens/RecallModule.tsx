/**
 * Module 1, active recall: walks through today's queue one card at a time.
 *
 * Where each piece of state lives, and why:
 *   - cards (review history)  -> global store: must survive a reload
 *   - queue, revealed, done   -> useState here: only matters while this
 *                                screen is open, so it is not persisted
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Flashcard } from "../components/Flashcard";
import { WordDetailDialog } from "../components/WordDetail";
import { RAW_WORD_IDS, findWord } from "../data/vocabulary";
import { buildReviewQueue } from "../domain/srs";
import { RATINGS, type Rating } from "../domain/types";
import { useT } from "../i18n/useT";
import { introducedToday } from "../state/appState";
import { useAppDispatch, useAppState } from "../state/store";

export function RecallModule({ onComplete }: { onComplete: () => void }) {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const { t } = useT();

  // The queue is fixed ONCE, when the screen opens (lazy initialiser).
  // Rebuilding it on every render would reshuffle cards under the learner
  // each time a rating changes the store.
  const [startedAt] = useState(() => Date.now());
  const [queue, setQueue] = useState<string[]>(() => {
    const built = buildReviewQueue(RAW_WORD_IDS, state.cards, startedAt, {
      newPerDay: state.settings.newPerDay,
      introducedToday: introducedToday(state, startedAt),
    });
    return [...built.due, ...built.fresh];
  });
  const [total] = useState(queue.length);
  const [finished, setFinished] = useState(0);
  const [revealed, setRevealed] = useState(false);
  // A number, not a boolean, for the same reason as in HomeScreen: each open
  // gets a new value, so a close + re-open in one update still remounts.
  const [detailsKey, setDetailsKey] = useState<number | null>(null);
  const detailsOpen = detailsKey !== null;
  const detailsCount = useRef(0); // only ever grows, so no two opens share a key

  const currentId = queue[0];
  const entry = currentId === undefined ? undefined : findWord(currentId);

  const rate = useCallback(
    (rating: Rating) => {
      if (currentId === undefined) return;
      dispatch({ type: "reviewCard", itemId: currentId, rating, now: Date.now() });
      // "Again" sends the card to the back of today's queue; anything else
      // means it is finished for today.
      setQueue((ids) => (rating === "again" ? [...ids.slice(1), currentId] : ids.slice(1)));
      if (rating !== "again") setFinished((count) => count + 1);
      setRevealed(false);
    },
    [currentId, dispatch],
  );

  // Keyboard: Space/Enter turns the card, 1–4 rate it.
  //
  // The listener is attached ONCE and reads the latest values through a ref.
  // Re-attaching it on every change (the obvious version) leaves a gap of a
  // few milliseconds after each change, e.g. right after the details dialog
  // closes, in which a key press finds no listener. The E2E tests hit that gap.
  // Updated in a layout effect, not during render: React expects render to
  // be pure, and a layout effect still runs before any key can be pressed.
  const latest = useRef({ revealed, detailsOpen, rate, currentId });
  useLayoutEffect(() => {
    latest.current = { revealed, detailsOpen, rate, currentId };
  });

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const now = latest.current;
      if (now.detailsOpen || event.metaKey || event.ctrlKey || event.altKey) return;
      if (now.currentId === undefined) return;
      if (!now.revealed && (event.key === " " || event.key === "Enter")) {
        event.preventDefault();
        setRevealed(true);
        return;
      }
      const rating = now.revealed ? RATINGS[Number(event.key) - 1] : undefined;
      if (rating !== undefined) {
        event.preventDefault();
        now.rate(rating);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="step-row">
        <progress className="progress" value={finished} max={Math.max(total, 1)} />
        <span className="muted">{t("review.progress", { done: finished, total })}</span>
      </div>

      {entry === undefined ? (
        <section className="empty">
          <h2>{total === 0 ? t("review.empty") : t("review.done.title")}</h2>
          {total > 0 && <p className="muted">{t("review.done.body", { n: total })}</p>}
          <button type="button" className="btn btn-primary" onClick={onComplete}>
            {t("module.finish")}
          </button>
        </section>
      ) : (
        <>
          <Flashcard
            key={entry.raw.id}
            entry={entry}
            card={state.cards[entry.raw.id]}
            revealed={revealed}
            now={startedAt}
            onReveal={() => setRevealed(true)}
            onRate={rate}
            onDetails={() => setDetailsKey(++detailsCount.current)}
          />
          <p className="hint">{t("review.keys")}</p>
          {detailsKey !== null && (
            <WordDetailDialog key={detailsKey} entry={entry} onClose={() => setDetailsKey(null)} />
          )}
        </>
      )}
    </>
  );
}
