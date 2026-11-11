/**
 * Full breakdown of one word. Two layers:
 *   WordDetail        what is shown (pure rendering of a WordEntry)
 *   WordDetailDialog  how it is shown (a native <dialog> modal around it)
 * Keeping them apart means the same breakdown can later sit on its own page.
 */

import { useEffect, useRef } from "react";
import type { WordEntry } from "../data/vocabulary";
import { headword } from "../data/vocabulary";
import { conjugated, withDefiniteArticle } from "../domain/french";
import { PERSONS, type LanguageMode, type VocabularyItem } from "../domain/types";
import { useT } from "../i18n/useT";
import { GenderBadge } from "./GenderBadge";
import { SpeakButton } from "./SpeakButton";

const OTHER: Record<LanguageMode, LanguageMode> = { TR: "EN", EN: "TR" };

/** The word as you would say it: nouns carry their article. */
export function displayWord(entry: WordEntry): string {
  const item = entry.item;
  if (item?.pos === "noun") {
    return item.pluralOnly ? `les ${item.lemma}` : withDefiniteArticle(item.lemma, item.gender);
  }
  return headword(entry);
}

export function WordDetail({ entry }: { entry: WordEntry }) {
  const { t, l, mode } = useT();
  const item = entry.item;
  const word = displayWord(entry);

  return (
    <article className="detail">
      <header className="detail-head">
        <h2 className="fr detail-word" lang="fr">
          {word}
        </h2>
        <SpeakButton text={word} />
      </header>

      {item === undefined ? (
        <>
          <FormsLine forms={entry.raw.forms} />
          <p className="muted">{t("review.notEnriched")}</p>
        </>
      ) : (
        <>
          <p className="detail-meta">
            <span className="pos">{t(`pos.${item.pos}`)}</span>
            {item.pos === "noun" && <GenderBadge gender={item.gender} plural={item.pluralOnly === true} />}
            {item.pos === "verb" && <span className="pos">{t("detail.group", { n: item.group })}</span>}
            <span className="ipa">/{item.ipa}/</span>
          </p>

          <p className="meaning">{l(item.meaning)}</p>
          <p className="meaning-other">
            <span className="lang-tag">{OTHER[mode]}</span> {item.meaning[OTHER[mode]]}
          </p>

          <GrammarSpecs item={item} />
          <FormsLine forms={otherForms(entry)} />

          <section>
            <h3>{t("detail.chunks")}</h3>
            <ul className="pairs">
              {item.chunks.map((chunk) => (
                <li key={chunk.fr}>
                  <span className="fr" lang="fr">
                    {chunk.fr}
                  </span>
                  <SpeakButton text={chunk.fr} />
                  <span className="gloss">{l(chunk.meaning)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3>{t("detail.examples")}</h3>
            <ul className="pairs">
              {item.examples.map((example) => (
                <li key={example.fr}>
                  <span className="fr" lang="fr">
                    {example.fr}
                  </span>
                  <SpeakButton text={example.fr} />
                  <span className="gloss">{l(example.translation)}</span>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
}

/**
 * Spreadsheet forms folded into this word that the grammar line does not
 * already show: for "eau" the plural "eaux" is there, "d'eau" and "l'eau"
 * are not.
 */
function otherForms(entry: WordEntry): string[] {
  const item = entry.item;
  const shown = item?.pos === "noun" ? item.plural : item?.pos === "adjective" ? item.feminine : undefined;
  return entry.raw.forms.filter((form) => form !== shown);
}

function FormsLine({ forms }: { forms: readonly string[] }) {
  const { t } = useT();
  if (forms.length === 0) return null;
  return (
    <p className="spec">
      <span className="spec-label">{t("detail.forms")}</span>
      <span className="fr" lang="fr">
        {forms.join(" · ")}
      </span>
    </p>
  );
}

/**
 * Part-of-speech specific grammar. The `switch` on `item.pos` is where the
 * discriminated union pays off: inside `case "verb"` TypeScript knows
 * `item.present` exists, inside `case "noun"` it knows `item.plural` does.
 */
function GrammarSpecs({ item }: { item: VocabularyItem }) {
  const { t } = useT();
  switch (item.pos) {
    case "noun":
      if (item.pluralOnly) return null;
      return (
        <p className="spec">
          <span className="spec-label">{t("detail.plural")}</span>
          <span className="fr" lang="fr">
            les {item.plural}
          </span>
        </p>
      );
    case "adjective":
      return (
        <p className="spec">
          <span className="spec-label">{t("detail.feminine")}</span>
          <span className="fr" lang="fr">
            {item.feminine}
          </span>
        </p>
      );
    case "verb":
      return (
        <section>
          <h3>{t("detail.present")}</h3>
          <table className="conjugation" lang="fr">
            <tbody>
              {PERSONS.map((person) => (
                <tr key={person}>
                  <td className="fr">{conjugated(person, item.present[person])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      );
    case "expression":
    case "other":
      return null;
  }
}

export function WordDetailDialog({ entry, onClose }: { entry: WordEntry; onClose: () => void }) {
  const { t } = useT();
  const ref = useRef<HTMLDialogElement>(null);

  // showModal() is what makes it a real modal: the browser traps focus,
  // dims the page and closes on Escape. None of that has to be rebuilt.
  useEffect(() => {
    const dialog = ref.current;
    if (dialog !== null && !dialog.open) dialog.showModal();
  }, []);

  return (
    <dialog
      ref={ref}
      className="dialog"
      onClose={onClose}
      onClick={(event) => {
        // A click on the dimmed area lands on the <dialog> element itself.
        if (event.target === ref.current) ref.current?.close();
      }}
    >
      <div className="dialog-body">
        <WordDetail entry={entry} />
        <div className="dialog-actions">
          <button type="button" className="btn" onClick={() => ref.current?.close()}>
            {t("detail.close")}
          </button>
        </div>
      </div>
    </dialog>
  );
}
