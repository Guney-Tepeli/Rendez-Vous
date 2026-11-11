# Français — A1 to B1

A French course for Turkish (and English) speakers, in the browser:
a daily 60-minute session with spaced-repetition flashcards, grammar
lessons, sentence-building exercises, a reading text and pronunciation
shadowing. Each day gets a summary page you can save as PDF or Word.

Content: 2,999 words with IPA, Turkish / English meanings and three example
sentences each, 78 grammar lessons (A1 25 · A2 25 · B1 28, twelve exercises
each), 78 reading texts of about 500 words (one per lesson, with five
questions), 23 pronunciation cards, 124 daily sentences.

## Use it

**In the browser:** open the published site (GitHub Pages link in the repo's
"About" box). Nothing to install: a current Safari (15.4+, macOS Monterey or
later) or Chrome is enough. Progress is saved in that browser only.

**As a Mac app:** `Rendez-Vous.app` in the repo root. Double-click it in
Finder; it runs without a server or a browser (macOS 11 or later, Apple
silicon and Intel). The app is not signed by a developer, so if macOS says
it cannot be opened, right-click it and choose Open once. Progress in the
app is separate from progress in the browser.

To rebuild the app after changing the code or content (needs the Xcode
command line tools):
```bash
./mac/build.sh
```

## Develop
Requires Node.js 20.19 or later (`.nvmrc` pins 22).

```bash
npm install
npm run dev -- --port 5173 --strictPort   # http://localhost:5173
npm test                                  # unit and content tests
npm run typecheck
npm run build                             # static site in dist/
```

`CLAUDE.md` is the decision record: layout, every design decision with its
reason, and the open list. Read it before changing behaviour.

Content lives in plain data files:
- `src/data/vocab/*.json` — words, one entry per line (format: `src/data/vocab/schema.ts`)
- `src/data/lessons/{a1,a2,b1}.ts` — grammar lessons
- `src/data/readings/*.ts` — reading texts, one per lesson
- `src/data/phonetics.ts`, `src/data/selfTalk.ts`

Check one vocabulary file while editing it:
```bash
VOCAB_FILE=src/data/vocab/extra-001.json npx vitest run src/data/vocab/check.test.ts
```

Pushes to `main` are built, tested and published by `.github/workflows/deploy.yml`.

---

**Türkçe kısa:** Siteyi açıp kullan; kurulum gerekmez. Mac'te repodaki
`Rendez-Vous.app`'e çift tıkla (ilk açılışta açılmazsa sağ tık → Aç).
Geliştirmek için Node 20.19+ kur, `npm install`, `npm run dev`. Kod ya da
içerik değişince uygulamayı `./mac/build.sh` ile yeniden derle. Değişiklikten
önce `CLAUDE.md`'yi oku.
