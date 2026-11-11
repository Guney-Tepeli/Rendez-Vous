import type { Gender } from "../domain/types";
import { useT } from "../i18n/useT";

/**
 * Masculine / feminine marker. Colour is a second cue only: the badge always
 * carries the article and the word, so it reads without colour too.
 */
export function GenderBadge({ gender, plural = false }: { gender: Gender; plural?: boolean }) {
  const { t } = useT();
  return (
    <span className={`badge badge-${gender}`}>
      {plural ? "les · des" : gender === "m" ? "le · un" : "la · une"}
      <span className="badge-label">{t(`gender.${gender}`)}</span>
    </span>
  );
}
