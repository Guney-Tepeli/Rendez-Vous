/**
 * Daily dashboard: today's four modules, the sentence of the day, and the
 * word browser.
 */

import { useMemo, useRef, useState } from "react";
import { ProgressPanel } from "../components/ProgressPanel";
import { SpeakButton } from "../components/SpeakButton";
import { WordDetailDialog } from "../components/WordDetail";
import { WORDS, type WordEntry } from "../data/vocabulary";
import { formatClock } from "../domain/daily";
import { DAILY_MODULES, type LanguageMode, type ModuleId } from "../domain/types";
import { useT } from "../i18n/useT";
import { fold } from "../lib/search";
import { isSessionComplete } from "../state/appState";
import { useAppDispatch, useAppState } from "../state/store";
import { useToday } from "../state/useToday";

const LANGUAGES: readonly LanguageMode[] = ["TR", "EN"];
const LIST_LIMIT = 30;
const NEW_PER_DAY_CHOICES = [5, 10, 15, 20] as const;

export function HomeScreen({
  onOpenModule,
  onOpenSummary,
}: {
  onOpenModule: (id: ModuleId) => void;
  onOpenSummary: () => void;
}) {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const { mode, t, l } = useT();
  const today = useToday();
  const { session } = today;

  // One row per module. Before the session starts there is no stored
  // progress yet, so the row is built from today's plan instead.
  const rows = DAILY_MODULES.map((spec, index) => {
    const progress = session?.modules[index];
    return {
      id: spec.id,
      plannedMinutes: progress?.plannedMinutes ?? today.plan[spec.id],
      elapsedSeconds: progress?.elapsedSeconds ?? 0,
      completed: progress?.completed ?? false,
      isNext: session === null ? index === 0 : index === session.moduleIndex && !progress?.completed,
    };
  });
  const doneCount = rows.filter((row) => row.completed).length;
  const elapsedMinutes = Math.floor(rows.reduce((sum, row) => sum + row.elapsedSeconds, 0) / 60);
  const plannedTotal = rows.reduce((sum, row) => sum + row.plannedMinutes, 0);
  const dayDone = session !== null && isSessionComplete(session);

  const detail: Record<ModuleId, string> = {
    recall: t("dash.cards", { n: today.queueSize }),
    grammar: l(today.lesson.title),
    output: l(today.lesson.title),
    reading: today.reading ? l(today.reading.title) : "—",
    phonetics: l(today.phonetics.title),
  };

  return (
    <main className="page">
      <header className="bar">
        <h1>{t("app.title")}</h1>
        <div className="segmented" role="group" aria-label={t("language.label")}>
          {LANGUAGES.map((language) => (
            <button
              key={language}
              type="button"
              aria-pressed={mode === language}
              onClick={() => dispatch({ type: "setLanguage", mode: language })}
            >
              {language}
            </button>
          ))}
        </div>
      </header>

      <section className="panel">
        <h2>{t("dash.today")}</h2>
        <p className="muted">
          {t("dash.summary", { done: doneCount, total: DAILY_MODULES.length, minutes: elapsedMinutes, planned: plannedTotal })}
        </p>
        <progress className="progress" value={doneCount} max={rows.length} />
        {dayDone && <p className="day-done">{t("dash.done")}</p>}

        <ol className="modules">
          {rows.map((row, index) => (
            <li key={row.id} className={row.completed ? "module done" : "module"}>
              <span className="module-mark" aria-hidden="true">
                {row.completed ? "✓" : index + 1}
              </span>
              <span className="module-text">
                <span className="module-name">{t(`module.${row.id}`)}</span>
                <span className="muted small">
                  {detail[row.id]} ·{" "}
                  {row.elapsedSeconds > 0
                    ? t("module.clock", { elapsed: formatClock(row.elapsedSeconds), n: row.plannedMinutes })
                    : t("module.minutes", { n: row.plannedMinutes })}
                </span>
              </span>
              <button
                type="button"
                className={row.isNext ? "btn btn-primary" : "btn"}
                onClick={() => onOpenModule(row.id)}
              >
                {row.completed
                  ? t("dash.reopen")
                  : row.elapsedSeconds > 0
                    ? t("dash.continue")
                    : t("dash.start")}
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="panel">
        <h2>{t("dash.selfTalk")}</h2>
        <p className="self-talk">
          <span className="fr" lang="fr">
            {today.selfTalk.fr}
          </span>
          <SpeakButton text={today.selfTalk.fr} />
        </p>
        <p className="muted">{l(today.selfTalk.meaning)}</p>
        <p className="muted small">{t("dash.selfTalk.hint")}</p>
      </section>

      <ProgressPanel />

      <button type="button" className="btn btn-wide" onClick={onOpenSummary}>
        {t("summary.open")}
      </button>

      <WordBrowser />

      <section className="panel">
        <h2>{t("settings.title")}</h2>
        <div className="setting">
          <span id="new-per-day">{t("settings.newPerDay")}</span>
          <div className="segmented" role="group" aria-labelledby="new-per-day">
            {NEW_PER_DAY_CHOICES.map((count) => (
              <button
                key={count}
                type="button"
                aria-pressed={state.settings.newPerDay === count}
                onClick={() => dispatch({ type: "setNewPerDay", count })}
              >
                {count}
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function WordBrowser() {
  const { t, l } = useT();
  const [query, setQuery] = useState("");
  // `n` changes on every open. Without it, a close and a re-open landing in
  // the same React update (Escape, then Space at once) leave the state equal
  // to what it was, so nothing re-renders and the closed <dialog> stays
  // mounted and shut. The key below remounts the dialog on each open.
  const [opened, setOpened] = useState<{ entry: WordEntry; n: number } | null>(null);
  const openCount = useRef(0);

  const matches = useMemo(() => {
    const needle = fold(query.trim());
    if (needle === "") return WORDS;
    return WORDS.filter(({ raw, item }) => {
      const haystack = [raw.fr, ...raw.forms, item?.meaning.TR ?? "", item?.meaning.EN ?? ""];
      return haystack.some((text) => fold(text).includes(needle));
    });
  }, [query]);

  return (
    <section className="panel">
      <h2>
        {t("words.title")} <span className="muted count">{WORDS.length}</span>
      </h2>
      <input
        type="search"
        className="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t("words.search")}
        aria-label={t("words.search")}
      />
      {matches.length === 0 ? (
        <p className="muted">{t("words.none")}</p>
      ) : (
        <ul className="word-list">
          {matches.slice(0, LIST_LIMIT).map((entry) => (
            <li key={entry.raw.id}>
              <button type="button" className="word-row" onClick={() => setOpened({ entry, n: ++openCount.current })}>
                <span className="fr" lang="fr">
                  {entry.raw.fr}
                </span>
                <span className="gloss">{entry.item === undefined ? "" : l(entry.item.meaning)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
      {matches.length > LIST_LIMIT && (
        <p className="muted">{t("words.more", { n: matches.length - LIST_LIMIT })}</p>
      )}
      {opened !== null && (
        <WordDetailDialog key={opened.n} entry={opened.entry} onClose={() => setOpened(null)} />
      )}
    </section>
  );
}
