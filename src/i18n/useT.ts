import { useCallback } from "react";
import type { Localized } from "../domain/types";
import { useAppState } from "../state/store";
import { localize, translate, type TranslationKey, type TranslationParams } from "./index";

/**
 * The hook components use for text. It binds the active language so call
 * sites read `t("rating.good")` and `l(item.meaning)`.
 */
export function useT() {
  const mode = useAppState().settings.languageMode;
  const t = useCallback(
    (key: TranslationKey, params?: TranslationParams) => translate(mode, key, params),
    [mode],
  );
  const l = useCallback((text: Localized) => localize(mode, text), [mode]);
  return { mode, t, l };
}
