/**
 * The French letters a Turkish or English keyboard does not have in easy
 * reach. A tap inserts the letter at the cursor of the given input.
 *
 * Buttons use onPointerDown + preventDefault so the input keeps focus (and
 * the phone keyboard stays open) while the letter goes in.
 */

import type { RefObject } from "react";

const LETTERS = ["é", "è", "ê", "à", "â", "ç", "ù", "û", "î", "ï", "ô", "ë", "œ"] as const;

export function AccentBar({
  inputRef,
  value,
  onChange,
  disabled = false,
}: {
  inputRef: RefObject<HTMLInputElement | null>;
  value: string;
  onChange: (next: string) => void;
  disabled?: boolean;
}) {
  if (disabled) return null;

  const insert = (letter: string) => {
    const input = inputRef.current;
    const start = input?.selectionStart ?? value.length;
    const end = input?.selectionEnd ?? value.length;
    onChange(value.slice(0, start) + letter + value.slice(end));
    // Put the cursor after the inserted letter once React has re-rendered.
    requestAnimationFrame(() => {
      input?.focus();
      input?.setSelectionRange(start + letter.length, start + letter.length);
    });
  };

  return (
    <div className="accent-bar" role="group" aria-label="Accents">
      {LETTERS.map((letter) => (
        <button
          key={letter}
          type="button"
          className="accent-key fr"
          onPointerDown={(event) => event.preventDefault()}
          onClick={() => insert(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
