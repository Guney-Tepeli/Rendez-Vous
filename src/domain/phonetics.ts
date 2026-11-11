/**
 * Reading the shadowing markup: "(x)" = written but silent, "‿" = liaison.
 *   "peti(t)"   -> p e t i + silent t
 *   "les‿amis"  -> the s is carried over to the next word
 */

export interface MarkedSegment {
  text: string;
  silent: boolean;
}

/** Split marked text into sounded and silent runs, for styling. */
export function parseMarked(marked: string): MarkedSegment[] {
  const segments: MarkedSegment[] = [];
  for (const part of marked.split(/(\([^)]*\))/)) {
    if (part === "") continue;
    const silent = part.startsWith("(") && part.endsWith(")");
    segments.push({ text: silent ? part.slice(1, -1) : part, silent });
  }
  return segments;
}

/** The ordinary spelling, as given to the speech engine. */
export function plainText(marked: string): string {
  return marked.replace(/[()]/g, "").replace(/‿/g, " ");
}
