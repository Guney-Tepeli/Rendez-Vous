import type { Gender } from "../domain/types";
import { useT } from "../i18n/useT";

/**
 * Masculine / feminine marker. Colour is a second cue only: the badge always
 * carries the article and the word, so it reads without colour too.
 * An epicene noun ("un / une élève") gets both articles and a neutral colour.
 */
export function GenderBadge({ gender, plural = false, epicene = false }: { gender: Gender; plural?: boolean; epicene?: boolean }) {
  const { t } = useT();
  if (epicene) {
    return (
      <span className="badge badge-mf">
        le / la · un / une
        <span className="badge-label">{t("gender.mf")}</span>
      </span>
    );
  }
  return (
    <span className={`badge badge-${gender}`}>
      {plural ? "les · des" : gender === "m" ? "le · un" : "la · une"}
      <span className="badge-label">{t(`gender.${gender}`)}</span>
    </span>
  );
}
