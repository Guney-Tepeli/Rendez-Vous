# Français — A1 to B1

A French course for Turkish (and English) speakers, in the browser:
a daily 40-minute session with spaced-repetition flashcards, grammar
lessons, sentence-building exercises and pronunciation shadowing.

Content: 2,999 words with IPA and Turkish / English meanings, 78 grammar
lessons (A1 25 · A2 25 · B1 28), 23 pronunciation cards, 124 daily sentences.

## Use it
Open the published site (GitHub Pages link in the repo's "About" box).
Nothing to install: a current Safari (15.4+, macOS Monterey or later) or
Chrome is enough. Progress is saved in that browser only.

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
- `src/data/phonetics.ts`, `src/data/selfTalk.ts`

Check one vocabulary file while editing it:
```bash
VOCAB_FILE=src/data/vocab/extra-001.json npx vitest run src/data/vocab/check.test.ts
```

Pushes to `main` are built, tested and published by `.github/workflows/deploy.yml`.

---

**Türkçe kısa:** Siteyi açıp kullan; kurulum gerekmez. Geliştirmek için
Node 20.19+ kur, `npm install`, `npm run dev`. Değişiklikten önce `CLAUDE.md`'yi oku.
