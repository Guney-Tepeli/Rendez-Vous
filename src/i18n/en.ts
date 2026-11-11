import type { TranslationKey } from "./tr";

/**
 * English UI strings. `Record<TranslationKey, string>` means a key missing
 * here, or a key that does not exist in tr.ts, fails the type check.
 */
export const en: Record<TranslationKey, string> = {
  "app.title": "French",
  "language.label": "Instruction language",
  "language.TR": "Turkish",
  "language.EN": "English",

  "module.recall": "Active Recall",
  "module.grammar": "Grammar",
  "module.output": "Sentence Building",
  "module.phonetics": "Phonetics & Shadowing",
  "module.minutes": "{n} min",

  "rating.again": "Again",
  "rating.hard": "Hard",
  "rating.good": "Good",
  "rating.easy": "Easy",

  "gender.m": "masculine",
  "gender.f": "feminine",

  "pos.noun": "noun",
  "pos.verb": "verb",
  "pos.adjective": "adjective",
  "pos.expression": "expression",
  "pos.other": "other",

  "review.show": "Show answer",
  "review.back": "Back",
  "review.details": "Details",
  "review.new": "new",
  "review.progress": "{done} / {total}",
  "review.keys": "Space: show answer · 1–4: rate",
  "review.done.title": "Done for today",
  "review.done.body": "{n} words studied.",
  "review.notEnriched": "Details for this word have not been added yet. Do you remember what it means?",

  "interval.now": "now",
  "interval.days": "{n} d",

  "detail.plural": "Plural",
  "detail.feminine": "Feminine",
  "detail.forms": "Other forms",
  "detail.present": "Present tense",
  "detail.group": "Group {n} verb",
  "detail.chunks": "Chunks",
  "detail.examples": "Example sentences",
  "detail.close": "Close",
  "detail.listen": "Listen: {text}",

  "words.title": "Words",
  "words.search": "Search words",
  "words.more": "+{n} more words",
  "words.none": "No matches.",

  "dash.today": "Today's session",
  "dash.summary": "{done} / 4 modules · {minutes} / {planned} min",
  "dash.start": "Start",
  "dash.continue": "Continue",
  "dash.reopen": "Open again",
  "dash.done": "Today's session is complete.",
  "dash.lesson": "Today's lesson: {title}",
  "dash.cards": "{n} cards",
  "dash.selfTalk": "Sentence of the day",
  "dash.selfTalk.hint": "Say it aloud today while you are doing it.",

  "module.clock": "{elapsed} / {n} min",
  "module.finish": "Finish module",
  "module.check": "Check",
  "module.continue": "Continue",
  "module.step": "{n} / {total}",

  "grammar.tapHint": "Tap a sentence to see its translation.",
  "grammar.done": "Got it, finish",

  "output.fill": "Fill in the blank",
  "output.build": "Put the words in order",
  "output.free": "Write the sentence",
  "output.placeholder": "Type in French",
  "output.correct": "Correct!",
  "output.accents": "Right, but mind the accents:",
  "output.wrong": "Correct answer:",
  "output.score": "{right} / {total} correct",

  "phon.steps": "1 Listen · 2 Say it along with the audio · 3 Say it on your own",
  "phon.listen": "Listen",
  "phon.slow": "Slow",
  "phon.next": "Said it, next",
  "phon.noAudio": "No audio in this browser; say it from the IPA.",

  "review.empty": "Nothing to review right now.",

  "stats.title": "Progress",
  "stats.streak": "Day streak",
  "stats.learned": "Words learned",
  "stats.learned.hint": "Words recalled twice in a row. Studied: {n}.",
  "stats.today": "Minutes today",
  "stats.week": "Last 7 days, minutes",
  "stats.day": "{day}: {n} min",

  "settings.title": "Settings",
  "settings.newPerDay": "New words per day",

  "error.save": "Progress could not be saved. Browser storage may be full or blocked; work from this visit will be lost when the page closes.",

  "output.override": "My answer was right too",
  "output.override.title": "Are you sure? Check first:",
  "output.override.checks": "Accents (é, è, à, ç) · Article and gender (le / la, un / une) · Verb ending and person · Word order · ne ... pas in negatives",
  "output.override.yours": "Your answer:",
  "output.override.expected": "Expected:",
  "output.override.confirm": "Yes, it was right",
  "output.override.cancel": "Cancel",
  "output.override.note": "This answer will count as correct for this question from now on.",
  "output.accepted": "Accepted.",
};
