/**
 * Progress at a glance: three headline numbers and the last seven days.
 *
 * The numbers are stat tiles, not charts: one value each, nothing to compare.
 * The week IS a comparison (day against day), so it gets bars. One series,
 * one colour; today is the only bar in the accent, the rest are muted, so
 * colour says "this is today" and nothing else.
 */

import { currentStreak, lastDays, learnedCount } from "../domain/progress";
import { localDateKey } from "../domain/time";
import { useT } from "../i18n/useT";
import { useAppState } from "../state/store";

const WEEK = 7;
/** Bars are scaled so a full 40-minute day fills the height; longer days raise the scale. */
const FULL_DAY_MINUTES = 40;

export function ProgressPanel() {
  const state = useAppState();
  const { t, mode } = useT();

  const todayKey = localDateKey(Date.now());
  const week = lastDays(state.history, todayKey, WEEK);
  const scale = Math.max(FULL_DAY_MINUTES, ...week.map((day) => day.minutes));
  const todayMinutes = week.at(-1)?.minutes ?? 0;

  // "2026-11-11" -> "Çar" / "Wed". Noon avoids any daylight-saving edge.
  const weekday = new Intl.DateTimeFormat(mode === "TR" ? "tr" : "en", { weekday: "short" });
  const dayName = (dateKey: string) => weekday.format(new Date(`${dateKey}T12:00:00`));

  return (
    <section className="panel">
      <h2>{t("stats.title")}</h2>

      <dl className="tiles-row">
        <div className="stat">
          <dt>{t("stats.streak")}</dt>
          <dd>{currentStreak(state.history, todayKey)}</dd>
        </div>
        <div className="stat" title={t("stats.learned.hint", { n: Object.keys(state.cards).length })}>
          <dt>{t("stats.learned")}</dt>
          <dd>{learnedCount(state.cards)}</dd>
        </div>
        <div className="stat">
          <dt>{t("stats.today")}</dt>
          <dd>{todayMinutes}</dd>
        </div>
      </dl>

      <figure className="week">
        <figcaption className="muted small">{t("stats.week")}</figcaption>
        <ol className="week-bars">
          {week.map((day) => {
            const label = t("stats.day", { day: dayName(day.dateKey), n: day.minutes });
            return (
              // Focusable, so the value is reachable by keyboard as well as hover.
              <li key={day.dateKey} className="week-day" tabIndex={0} aria-label={label}>
                <span className="week-tip" aria-hidden="true">
                  {label}
                </span>
                <span className="week-track" aria-hidden="true">
                  <span
                    className={day.isToday ? "week-bar today" : "week-bar"}
                    style={{ height: `${(day.minutes / scale) * 100}%` }}
                  />
                </span>
                <span className="week-name" aria-hidden="true">
                  {dayName(day.dateKey)}
                </span>
              </li>
            );
          })}
        </ol>
      </figure>
    </section>
  );
}
