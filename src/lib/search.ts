/**
 * Lower-case and strip accents, so typing "cote" finds "côté".
 * Also maps the Turkish dotless "ı" to "i": a Turkish keyboard (or its
 * autocorrect) can produce it where French has a plain i.
 */
export function fold(text: string): string {
  return text
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/œ/g, "oe")
    .toLowerCase();
}
