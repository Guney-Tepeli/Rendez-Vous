#!/usr/bin/env python3
"""Turn FrenchWords.xlsx into seed/raw-words.json.

Run once (or again whenever the spreadsheet changes):

    npm run seed                       # reads FrenchWords.xlsx in the repo root (git-ignored)
    npm run seed -- /path/to/file.xlsx
    npm run seed -- --families         # also list every folded family

Standard library only. An .xlsx file is a zip of XML files:
  xl/sharedStrings.xml       every distinct text, numbered from 0
  xl/worksheets/sheet1.xml   the grid; a text cell stores the NUMBER of its
                             string, not the string itself
So reading a cell means: find the cell, take its number, look the text up.

Expected layout: one column per letter (A..Y), row 1 holds the letter,
the rows below hold the words.

Output: a JSON list of {"id", "fr", "letter", "forms"}.
  - Inflected forms of one word are folded into ONE entry: "pomme" and
    "pommes" are the same word, so they are one card and count once against
    the daily new-word limit. The shortest form is the headword (masculine
    singular in practice); the others go into "forms". See FAMILY RULES.
  - `id` is the word itself, lower-cased and Unicode-normalised. Review
    progress is stored under this id, so it has to come out identical on
    every run. Accents are kept: "cote" and "côté" are different words.
  - Order is round-robin across the columns (first word of A, first of B, ...,
    second of A, ...). The app introduces new words in file order, and
    without this the first weeks would be nothing but words starting with A.
"""

import json
import re
import sys
import unicodedata
import zipfile
from pathlib import Path
from xml.etree import ElementTree

NS = {"m": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
DEFAULT_SOURCE = Path(__file__).resolve().parent.parent / "FrenchWords.xlsx"  # git-ignored
OUTPUT = Path(__file__).resolve().parent.parent / "seed" / "raw-words.json"


# --- FAMILY RULES -----------------------------------------------------------
# Two spreadsheet entries are folded together when one is the other plus a
# regular gender/number ending, or the other behind an elided article. Spelling alone cannot tell "petit/petite"
# (same word) from "mer/mère" (sea/mother), so the rules over-match and
# NOT_THE_SAME_WORD lists the pairs to keep apart. When the spreadsheet grows,
# read the "families" printout of this script and extend the list if needed.

# (ending of the short form, ending of the long form)
INFLECTIONS = [
    ("", "s"), ("", "x"), ("", "e"), ("", "es"),      # petit -> petits/petite/petites, bateau -> bateaux
    ("", "ne"), ("", "le"), ("", "se"),               # bon -> bonne, gentil -> gentille, anglais -> anglaise
    ("al", "aux"),                                    # animal -> animaux
    ("er", "ère"),                                    # premier -> première
    ("eux", "euse"), ("eux", "euses"), ("f", "ve"),   # heureux -> heureuse(s), sportif -> sportive
]

NOT_THE_SAME_WORD = {
    # different words that only look related
    ("frais", "fraise"), ("jeu", "jeune"), ("mai", "mais"), ("mer", "mère"),
    ("moi", "mois"), ("sa", "sale"), ("si", "six"),
    # grammar words: each form is its own thing to learn
    ("au", "aux"), ("ce", "ces"), ("de", "des"), ("elle", "elles"), ("il", "ils"),
    ("le", "les"), ("leur", "leurs"), ("me", "mes"), ("se", "ses"), ("te", "tes"),
    ("un", "une"),
    # verb forms, not gender/number
    ("t'appelle", "t'appelles"),
    # "usually" is an adverb of its own, not the noun "habit" with a preposition
    ("habitude", "d'habitude"),
}

# An entry that is only an elided article or "de" stuck onto another entry is
# that same word: "l'eau" and "d'eau" are "eau". Only the two elided forms are
# folded. Full articles are left alone on purpose: in this sheet they mark
# different things ("le plus" = the most, "la leur" = theirs), not the noun.
ELIDED_PREFIXES = ("l'", "d'")

# Irregular pairs the endings above cannot find. Ignored if absent from the sheet.
ALSO_THE_SAME_WORD = [
    ("blanc", "blanche"), ("nouveau", "nouvel"), ("beau", "belle"), ("beau", "bel"),
    ("vieux", "vieille"), ("long", "longue"), ("œil", "yeux"),
]


# The shortest form is normally the dictionary form. Where it is not
# ("bel" is shorter than "beau"), name the headword here.
HEADWORDS = {"beau", "nouveau", "vieux"}


def find_families(ids: list[str]) -> dict[str, str]:
    """Map every id to the headword id of its family (itself if it has none).

    Union-find: each id starts as its own group; every accepted pair merges
    two groups. "petit-petite" and "petite-petites" therefore end up as one
    family of three without any special handling.
    """
    known = set(ids)
    parent = {word: word for word in ids}

    def root(word: str) -> str:
        while parent[word] != word:
            parent[word] = parent[parent[word]]
            word = parent[word]
        return word

    pairs = [pair for pair in ALSO_THE_SAME_WORD if pair[0] in known and pair[1] in known]
    for word in ids:
        for short_end, long_end in INFLECTIONS:
            if short_end and not word.endswith(short_end):
                continue
            longer = word[: len(word) - len(short_end)] + long_end
            if longer in known and (word, longer) not in NOT_THE_SAME_WORD:
                pairs.append((word, longer))
    for word in ids:
        for prefix in ELIDED_PREFIXES:
            bare = word[len(prefix):]
            if word.startswith(prefix) and bare in known and (bare, word) not in NOT_THE_SAME_WORD:
                pairs.append((bare, word))
    for a, b in pairs:
        parent[root(a)] = root(b)

    members: dict[str, list[str]] = {}
    for word in ids:
        members.setdefault(root(word), []).append(word)
    # Headword: a named one, else the shortest form, alphabetical on ties.
    # Deterministic across runs, which matters because it becomes the card id.
    return {word: min(group, key=lambda w: (w not in HEADWORDS, len(w), w))
            for group in members.values() for word in group}


def clean(text: str) -> str:
    """NFC form, typographic apostrophe -> ', single spaces, no edge spaces."""
    text = unicodedata.normalize("NFC", text).replace("’", "'")
    return re.sub(r"\s+", " ", text).strip()


def read_columns(path: Path) -> dict[str, list[tuple[int, str]]]:
    """Return {column letter: [(row number, cell text), ...]} for sheet 1."""
    with zipfile.ZipFile(path) as archive:
        strings_root = ElementTree.fromstring(archive.read("xl/sharedStrings.xml"))
        sheet_root = ElementTree.fromstring(archive.read("xl/worksheets/sheet1.xml"))

    # One <si> per string; a string with mixed formatting is split over
    # several <t> elements, hence the join.
    shared = ["".join(t.text or "" for t in si.iter(f"{{{NS['m']}}}t"))
              for si in strings_root.findall("m:si", NS)]

    columns: dict[str, list[tuple[int, str]]] = {}
    for cell in sheet_root.iterfind(".//m:c", NS):
        value = cell.find("m:v", NS)
        if value is None or value.text is None:
            continue
        match = re.fullmatch(r"([A-Z]+)(\d+)", cell.get("r", ""))
        if match is None:
            continue
        text = shared[int(value.text)] if cell.get("t") == "s" else value.text
        columns.setdefault(match.group(1), []).append((int(match.group(2)), text))
    return columns


def build_words(columns: dict[str, list[tuple[int, str]]]) -> tuple[list[dict], int]:
    per_letter: dict[str, list[str]] = {}
    for column in sorted(columns, key=lambda name: (len(name), name)):
        cells = sorted(columns[column])
        if not cells or cells[0][0] != 1:
            raise SystemExit(f"column {column}: no header in row 1, layout not as expected")
        letter = clean(cells[0][1])
        per_letter[letter] = [clean(text) for _, text in cells[1:] if clean(text)]

    # Round-robin over the columns, dropping exact duplicates.
    ordered: list[tuple[str, str, str]] = []  # (id, text as written, letter)
    seen: set[str] = set()
    duplicates = 0
    longest = max((len(items) for items in per_letter.values()), default=0)
    for index in range(longest):
        for letter, items in per_letter.items():
            if index >= len(items):
                continue
            fr = items[index]
            word_id = fr.lower()
            if word_id in seen:
                duplicates += 1
                continue
            seen.add(word_id)
            ordered.append((word_id, fr, letter))

    # Fold inflected forms into their headword. A family takes the queue
    # position of whichever of its forms comes first.
    headword_of = find_families([word_id for word_id, _, _ in ordered])
    text_of = {word_id: fr for word_id, fr, _ in ordered}
    letter_of = {word_id: letter for word_id, _, letter in ordered}
    entries: dict[str, dict] = {}
    for word_id, fr, _ in ordered:
        head = headword_of[word_id]
        entry = entries.setdefault(
            head, {"id": head, "fr": text_of[head], "letter": letter_of[head], "forms": []})
        if word_id != head:
            entry["forms"].append(fr)
    for entry in entries.values():
        entry["forms"].sort(key=lambda form: (len(form), form))
    return list(entries.values()), duplicates


def main() -> None:
    paths = [arg for arg in sys.argv[1:] if not arg.startswith("--")]
    source = Path(paths[0]).expanduser() if paths else DEFAULT_SOURCE
    if not source.is_file():
        raise SystemExit(f"spreadsheet not found: {source}")

    words, duplicates = build_words(read_columns(source))
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(words, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
    families = [word for word in words if word["forms"]]
    folded = sum(len(word["forms"]) for word in families)
    print(f"{len(words)} words -> {OUTPUT}")
    print(f"{duplicates} duplicates skipped, {folded} inflected forms folded into {len(families)} families")
    if "--families" in sys.argv:
        for word in families:
            print(f"  {word['fr']}: {', '.join(word['forms'])}")


if __name__ == "__main__":
    main()
