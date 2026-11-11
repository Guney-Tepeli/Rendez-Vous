# French-App

Personal French learning app. Instruction language switches between Turkish
and English. Built in four phases; this file is the decision record.

## Where we are

**Content reaches the end of B1 (11–12 Nov 2026).** Every word in the deck
has full details; the grammar course runs A1 to B1.

| Content | Amount | Days at the default pace |
|---|---|---|
| Words (all enriched, 3 examples each) | 2,999: A1 774 · A2 993 · B1 1,224 · above B1 8 | 300 at 10 new words a day |
| Grammar lessons | 78: A1 25 · A2 25 · B1 28; about 6 paragraphs (rule, exceptions, typical mistakes, tip), 6 examples, 12 exercises each (fill, build, free, choice) | 78, then revision |
| Reading texts | 78, one per lesson, 450–600 French words, 5 questions each | read on the lesson's day |
| Phonetics cards | 23, every focus type | rotate every 23 days |
| Self-talk prompts | 124: A1 41 · A2 41 · B1 42, shown at or below the current lesson level | |

**Day plan is 60 minutes (11 Nov 2026):** recall 10 · grammar 20 · output 15 ·
reading 10 · phonetics 5. Each day has a summary page (words, lesson,
reading, phonetics) that saves as PDF (print) or Word (.docx). A native
macOS app (`Rendez-Vous.app`, built by `mac/build.sh`) runs the same build
without a server.

Written answers: a wrong verdict offers "my answer was right too", behind a
check-first warning; an accepted answer is remembered per exercise.

**Test pass (11 Nov 2026), temporary tools since removed.** With Playwright +
Testing Library + jsdom installed for one session (then uninstalled at
the owner's request, browser cache deleted): 21 component tests and 49 E2E tests
(desktop + Pixel 7) all passed, 3 repeated runs green. Covered: full day,
persistence, migration v1/v2/v3 to v4, corrupt storage, day rollover and
streak with a fake clock, new-word limit, keyboard-only use, no console
errors, no horizontal overflow at 320 px, search. One race fixed (recall key
listener re-bound after the dialog closed). Content: 80 random entries
reviewed, 30 checked against fr.wiktionary.org: 30 / 30 matched.
To run such tests again the tools must be reinstalled; the test files were
deleted with them.

**Content was written by subagents and is not reviewed by a human.** Most
vocabulary agents had no web access, so IPA, gender and meanings come from
the model's knowledge. See Open.

## Commands

| Command | What |
|---|---|
| `npm run dev` | Vite dev server |
| `npm test` | Vitest, 109 tests (+3 single-file checks), all deterministic (fixed clock) |
| `./mac/build.sh` | Build `Rendez-Vous.app` (web build + universal Swift binary + icon, ad-hoc signed). `SKIP_WEB=1` reuses `dist/`. `RENDEZVOUS_SELFTEST=1 Rendez-Vous.app/Contents/MacOS/Rendez-Vous` prints a JSON self-check and quits |
| `npm run typecheck` | `tsc --noEmit`, strict |
| `VOCAB_FILE=src/data/vocab/x.json npx vitest run src/data/vocab/check.test.ts` | Check one vocabulary file while writing it |
| `npm run seed` | Rebuild `seed/raw-words.json` from `FrenchWords.xlsx` in the repo root (git-ignored); add `-- --families` to list folded word families |

## Layout

| Path | Role |
|---|---|
| `src/domain/types.ts` | All types. Content (vocabulary, lessons) vs progress (cards, session) kept apart |
| `src/domain/srs.ts` | SM-2 scheduler + daily queue. Pure functions, time is a parameter |
| `src/i18n/` | `tr.ts` defines the keys, `en.ts` must match (compile error otherwise) |
| `src/state/appState.ts` | State shape + reducer (pure; `now` travels in the action) |
| `src/state/storage.ts` | localStorage load/save, validates, backs up unreadable data |
| `src/state/store.tsx` | React provider and hooks |
| `scripts/import_xlsx.py` | Spreadsheet to JSON, standard library only |
| `seed/raw-words.json` | 1,262 spreadsheet words (133 forms folded in) |
| `seed/extra-words.json` | 1,737 words added to reach B1 (not in the sheet), with level |
| `src/domain/french.ts` | Article and pronoun elision (l', j'), h aspiré list |
| `src/data/vocab/*.json` | All word details, one entry per line. `sheet-*` = spreadsheet words, `extra-*` = added words |
| `src/data/vocab/schema.ts` | The JSON format (header comment) and its validator `parseEntry` |
| `src/domain/progress.ts` | Streak, learned count, last-N-days summary (all derived, none stored) |
| `src/components/ProgressPanel.tsx` | Three stat tiles + 7-day minutes bars |
| `src/components/ErrorBoundary.tsx` | Message instead of a blank page when rendering throws |
| `src/data/vocabulary.ts` | Joins raw words with enriched entries (`WordEntry`) |
| `src/components/` | `Flashcard`, `WordDetail` (+ dialog), `GenderBadge`, `SpeakButton` |
| `src/screens/` | `HomeScreen` (dashboard), `RecallModule`, `GrammarModule`, `OutputModule`, `PhoneticsModule` |
| `src/components/ModuleFrame.tsx` | Shell shared by the modules: back, title, clock; owns the timer |
| `src/domain/daily.ts` | Lesson pick, day rotation, `planMinutes`, clock format |
| `src/domain/answers.ts` | Answer check (correct / accents / wrong), seeded tile shuffle |
| `src/domain/phonetics.ts` | Reads the `(x)` silent and `‿` liaison markup |
| `src/data/lessons/{a1,a2,b1}.ts` | Grammar lessons by level; `lessons.ts` joins them |
| `src/data/phonetics.ts`, `selfTalk.ts` | Phonetics cards, self-talk prompts (with level) |
| `src/state/useToday.ts` | Derives today's queue, plan, lesson, card from state |
| `src/state/useModuleTimer.ts` | Counts visible time, reports to the store in batches |
| `src/styles.css` | All styling; colour tokens with light and dark values; `@media print` for the PDF |
| `src/data/readings.ts`, `src/data/readings/*.ts` | Reading texts (one file per writer, sorted by lesson order) and their rules |
| `src/screens/ReadingModule.tsx` | Text with per-paragraph translation and audio, then 5 questions |
| `src/domain/summary.ts`, `src/screens/SummaryScreen.tsx` | Day summary built from history; PDF via print, Word via `src/lib/docx.ts` |
| `src/lib/native.ts` | Save / print through the Mac app's bridge, browser fallback |
| `mac/` | `RendezVous.swift` (AppKit + WKWebView, `rendezvous://` scheme), `icon.swift`, `build.sh` |

## Decisions

| # | Decision | Why | Rejected |
|---|---|---|---|
| D1 | Vite + React + TypeScript, client only | Chosen by the owner; no server concepts to carry | Next.js, Expo |
| D2 | No state library; `useReducer` + Context | One session object and one card table | Redux, Zustand |
| D3 | No i18n library; typed dictionaries | Two languages, fixed keys; missing key = type error | i18next |
| D4 | SM-2 scheduler, plus Anki-style easy bonus (x1.3, first "easy" = 4 days) | ~20 lines, explainable; bonus lets known words leave fast | FSRS (revisit once SM-2 is understood) |
| D5 | Words have no card until first studied; `newPerDay` = 10 (owner's choice) | Spreadsheet words "may be forgotten": not marked known, and not the whole sheet due at once | Pre-creating cards as known / all due |
| D6 | Progress in localStorage, versioned (`STATE_VERSION`) | No backend yet | Database. Cost: progress stays on one browser |
| D7 | Word id = lower-cased NFC text, accents kept | Must be stable across imports; "cote" is not "côté" | Numeric ids (shift when the sheet changes) |
| D8 | New-word order = round-robin across spreadsheet columns | Sheet is alphabetical; otherwise weeks of only "A" words | Alphabetical |
| D10 | Inflected forms are ONE word: "pomme/pommes", "petit/petite/petits/petites" fold into one entry, one card, one daily slot (owner's rule). Done in the import script by ending rules + an exclusion list | Spelling rules over-match ("mer/mère"), so exclusions are explicit and reviewable | One card per spelling; counting families only in the queue |
| D11 | Grammar words stay separate (le/les, un/une, il/ils, ce/ces, de/des...) | Each form is its own thing to learn | Folding them |
| D12 | Conjugated chunks stay separate from their infinitive ("j'achète" vs "acheter") | They are chunks, learned as said. Open to change | Folding verb forms |
| D13 | Audio = browser `speechSynthesis` for now | No dependency, no files; enough to build the UI | Recorded audio (decide in Phase 3, phonetics module) |
| D14 | Modal = native `<dialog>` | Focus trap, Escape, backdrop for free | Hand-built overlay, UI library |
| D15 | No router; screen is a `useState` in `App.tsx` | Two screens | react-router |
| D16 | Enrichment follows queue order; batch 1 = first 12 words | Day one shows full cards | Enriching alphabetically or by theme |
| D17 | State is versioned and MIGRATED (`migrate()` in `storage.ts`), now v2 | Raising the version must not wipe review history | Discarding old saves |
| D18 | A session fixes its lesson, phonetics card and time plan at start | Otherwise output would practise the NEXT lesson after grammar finished this one, and the plan would shrink as cards get reviewed | Deriving them on every render |
| D19 | `tick` and `completeModule` name their module | A closing screen flushes its timer after the "current module" pointer already moved | Acting on the current module |
| D20 | Time plan: recall = 30 s per waiting card (2 to 10 min); spare minutes go to output; total stays 40 | Only recall's load is known in advance | Fixed 10/15/10/5 |
| D21 | Timer counts only while the tab is visible, flushes every 10 s and on close | Honest minutes; no store write every second | Dispatch per second |
| D22 | Exercises belong to a lesson | Output practises what grammar just taught | A separate exercise pool |
| D23 | Missing accents pass with a warning ("accents" verdict) | Not a failure of knowledge, but must not go unnoticed | Strict fail; silent pass |
| D24 | Shadowing has no microphone; the learner confirms "said it" | No permission prompt, no speech-recognition dependency | Recording / recognition |
| D25 | One lesson per day in course order; after the last, lessons rotate as revision | Simple and predictable | Learner picks freely |
| D26 | Modules can be done in any order and reopened | "Flexible" in the brief | Locked sequence |
| D27 | `<html lang>` follows the instruction language | Under `lang="tr"`, CSS uppercase turns English "i" into "İ" | Fixed lang |
| D28 | State v3: `history` (one `DayRecord` per active day) replaces the `introduced` counter | One source for the daily limit, minutes, streak; the counter was a second copy of the same fact | Keeping both |
| D29 | Streak day = at least one module finished; today not yet active does not break it | Opening the app is not studying; the streak is lost after a full missed day, not at midnight | Any activity counts; strict "today or zero" |
| D30 | "Learned" = recalled twice in a row (`repetitions >= 2`) | Survived at least one real gap; seen-once is only "studied" | Any card; interval threshold |
| D31 | Progress figures are computed on display, never stored | Cannot drift from the cards and history | Stored counters |
| D32 | Week chart: one series, today in the accent, other days muted grey; value on hover and on keyboard focus | Colour only marks "today"; both greys pass 3:1 on the surface | A colour per day; a number on every bar |
| D33 | Batch 2 written with constructor helpers; batch 1 left spelled out | Half the length per entry; batch 1 stays as the readable reference | Rewriting batch 1 |
| D34 | Plural-only nouns carry `pluralOnly` ("les vacances") | "la vacances" would be wrong | Treating them as expressions (loses gender) |
| D35 | Month names and determiners are `other`, not nouns | They take no article in normal use | Noun with a misleading "l'octobre" |
| D36 | Save failure is shown as a banner | The learner must know today's work will not persist | Console only |
| D37 | An entry that is `l'` or `d'` + another entry is that same word: "l'eau", "d'eau" fold into "eau" (owner's rule, 11 Nov). Only the two elided forms; exclusion: "d'habitude" | Same word in different clothes. Full articles are NOT folded: "le plus", "la leur" mean something else | Three cards; folding le/la/les/un/une too |
| D38 | No elision before y + vowel ("le yaourt"); titles like "madame" are `other` | y is a consonant sound there; titles take no article | Treating y as a vowel |
| D39 | Vocabulary details are JSON validated at load (`schema.ts`), not TypeScript | Thousands of generated entries; plain data, one format, checked by tests | TS helper calls (D33, replaced) |
| D40 | Queue order = CEFR level, then list order (sheet first) | A1 words before B1 words, whatever the sheet order | Sheet order (D8 kept inside a level) |
| D41 | Words above B1 stay in the deck as "B2" and come last | They are the owner's own words | Dropping them |
| D42 | Self-talk shows prompts at or below today's lesson level | No sentence uses untaught grammar | Rotation over all |
| D43 | Option A: "my answer was right too" after a wrong verdict, with checklist and side-by-side compare; accepted answers stored per exercise (state v4) | Fixed answer lists miss valid French; the warning keeps it from waving errors away | Machine translation check (forgives errors); LLM judge (needs server, key, cost: not chosen yet) |
| D44 | Answer check ignores commas | Punctuation, not French | Strict |
| D45 | Pronominal verbs: present slots hold the reflexive pronoun ("me lève", "nous levons"); the table adds the subject | Displays "nous nous levons" correctly | Bare forms |
| D46 | Proper nouns (countries, Noël) are `other`; seasons are nouns | No invented plurals ("afriques") | Nouns with fake plurals |
| D47 | Grammar topics kept as briefed even where the Inventaire (Eaquals/CIEP 2015) puts them at B2: futur antérieur, conditionnel passé, concordance des temps, participe présent, some conjunctions | "Finish B1" read as "nothing missing", a little beyond is acceptable | Cutting them |
| D48 | Accent bar (é è ê à â ç ù û î ï ô ë œ) under typed answers; "ı" matches "i" | Turkish / English keyboards; accent-only mistakes already pass as "accents" | Leniency only |
| D49 | Recall key listener bound once, reads state through a ref updated in a layout effect | Re-binding on each change left a gap where keys were lost | Re-bind per change |
| D50 | Speech picks a voice explicitly: natural France-French first (Thomas, Amélie, Marie…), novelty voices (Grandpa, Rocko…) never | Measured: with no voice set, utterances ended in ~130 ms (nothing spoken) in the test browser; with Thomas set, 4.9 s for two sentences | Leaving it to the browser |
| D51 | "Slow" speech rate 0.4 | Measured with Thomas: 0.6 only ~11% slower than 0.9; 0.4 is the floor (+42% vs 1.0) | 0.6 |
| D52 | Word dialog remounts on every open (ever-growing key) | A close and a re-open in the same React update left a closed dialog mounted: 5 of 8 keyboard re-opens failed on the phone view; 8 of 8 after the fix | Boolean / entry state |
| D53 | State v5: each day records new / reviewed word ids and the day's lesson, reading, phonetics ids; v4 days get empty lists | The summary page needs what was learned that day, which counts alone cannot give | Rebuilding it from SRS cards (loses the day) |
| D54 | Day plan 60 minutes: recall 10 · grammar 20 · output 15 · reading 10 · phonetics 5 | Owner asked for more grammar and sentence work and a daily reading | Keeping 40 and squeezing reading in |
| D55 | New exercise type `choice` (options + answer index); no "my answer was right" override on it | Reinforcement with less typing; a choice cannot be "also right" | Only typed exercises |
| D56 | Lessons grow to about 6 paragraphs, 6 examples, 12 exercises; old exercise ids unchanged | Owner asked for a wider, more reinforcing grammar part; stored accepted answers point at ids | Rewriting lessons |
| D57 | One reading text per lesson (78), 450–600 words, 5 questions, using only grammar taught so far (best effort) | Owner asked for ~500 words daily; tying it to the lesson repeats the day's grammar | Free-standing texts by level |
| D58 | Day summary: PDF through the print dialog with print CSS, Word through the `docx` package loaded on demand | Print-to-PDF needs no library; Word cannot be made without one (dependency approved by the owner); lazy load keeps it out of the main bundle | A PDF library; Markdown only |
| D59 | Mac app is a small Swift/AppKit wrapper (WKWebView, custom `rendezvous://` scheme serving the bundled build), ad-hoc signed, no DMG | No server or browser, real localStorage, icon in Finder; owner said DMG not needed. A custom scheme instead of `file://` because ES modules and storage are unreliable there | Electron / Tauri (new dependencies, 100+ MB); a localhost server |
| D60 | Word entries need at least 3 examples (schema) | Owner asked for three sentences per word | Two |
| D9 | Default instruction language TR | Assumption, one line in `initialState()` | EN |

## Open

- **Human review of content.** 2,999 word entries (3 examples each), 78 lessons,
  78 reading texts, 23 phonetics cards, 124 prompts were written by subagents.
  Reading texts and the lesson expansion (11 Nov 2026) are not read by a
  person: Turkish translations not checked by a native speaker; some texts
  and exercises use grammar from later lessons (small items, not tested);
  a few readings sit just above the 450-word floor. Checked: ~150 word entries
  read, 110 verified on fr.wiktionary (109 / 110 match; 1 IPA fixed: auberge de jeunesse), 1 lesson read. Lessons,
  phonetics IPA and example sentences beyond that are unverified.
- No automated UI tests remain in the repo (removed with their tools).
- Epicene nouns (journaliste, collègue…) record only one gender ("m").
- Some uncountable nouns carry a filler plural ("humours", "chômages").
- Spreadsheet typos stay as ids (heuresement, felicitations, depecher, celibataire,
  memoire, meme si, peut-etre, naitre, siecle, reparer); the shown lemma is
  correct. Fixing them in the sheet changes ids.
- Spreadsheet fragments that overlap other entries (ne se, ne te, n'y avait,
  il n'y avait, ce sont des / les / mes, est-ce qu', pas d', jusqu', en fiche,
  travaillent-elles, pêché…) are kept as cards. Candidates for removal from the sheet.
- Grammar scope vs the Inventaire: A1 passé composé with être is at full
  scope (A2-ish); no lessons for "il fait" weather or voici / voilà;
  nominalisation and participle agreement with a preceding object (only
  touched in A2) have no lesson of their own.
- Pace mismatch: grammar ends after 78 days, words after 300 at 10 a day
  (200 at 15, 150 at 20).
- Bundle is 2.1 MB (640 KB gzipped) because all vocabulary is bundled.
- An LLM answer judge (option B) is not built.
- `Rendez-Vous.app` in the repo is a build artifact: it must be rebuilt with
  `mac/build.sh` after code or content changes, or it shows old content.
  Not checked: opening a downloaded copy on another Mac (Gatekeeper).
- Browser check (11 Nov 2026): reading module (translation toggle, right /
  wrong marking, score), choice exercise, 3 examples on the card back, day
  summary, Word file (valid .docx, 11.9 KB) all work, no console errors.
  Not checked: the PDF print dialog (needs a person), the Mac app's save
  panel by hand (bridge reported present by the self-test).
- Audio: technically verified (voice found, speech runs, slow is slower); not judged by ear.
- Position inside a module is not saved; free-text answers are a fixed list
  plus what the learner accepted.
- Progress lives in one browser; no export / sync.
- History is never pruned; `isAppState` checks the top-level shape only.
- h aspiré words are listed by hand in `french.ts`.
