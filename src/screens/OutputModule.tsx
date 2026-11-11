/**
 * Module 3, output: the learner produces French. Three exercise kinds share
 * one flow: answer -> verdict with the right sentence -> continue.
 *
 * Each kind is its own small component that only collects an answer and
 * reports the raw text upward. Checking, feedback, scoring, the override and
 * moving on live here once, not three times.
 *
 * The override ("my answer was right too") exists because the check compares
 * against a fixed list, and French usually allows more than one correct
 * sentence. It is deliberately not one click: it first shows the learner's
 * sentence next to the expected one with a checklist of the usual mistakes,
 * so it is used for a real alternative, not to wave away an error.
 */

import { useRef, useState, type FormEvent } from "react";
import { AccentBar } from "../components/AccentBar";
import { SpeakButton } from "../components/SpeakButton";
import { checkAnswer, fillIn, normalizeAnswer, shuffledOrder, type Verdict } from "../domain/answers";
import type { BuildExercise, ChoiceExercise, Exercise, FillExercise, FreeExercise, GrammarLesson } from "../domain/types";
import { useT } from "../i18n/useT";
import { useAppDispatch, useAppState } from "../state/store";

/** The sentence shown as the right answer. */
function solution(exercise: Exercise): string {
  switch (exercise.type) {
    case "fill":
      return fillIn(exercise.text, exercise.answers[0] ?? "");
    case "build":
      return exercise.tokens.join(" ");
    case "free":
      return exercise.answers[0] ?? "";
    case "choice": {
      const right = exercise.options[exercise.answer] ?? "";
      return exercise.text.includes("___") ? fillIn(exercise.text, right) : right;
    }
  }
}

/** The learner's answer as a whole sentence, for showing next to the solution. */
function asSentence(exercise: Exercise, given: string): string {
  if (exercise.type === "fill" || (exercise.type === "choice" && exercise.text.includes("___"))) {
    return fillIn(exercise.text, given);
  }
  return given;
}

/** Check an answer against the built-in answers plus any the learner accepted earlier. */
function judge(exercise: Exercise, given: string, accepted: readonly string[]): Verdict {
  switch (exercise.type) {
    case "fill":
    case "free":
      return checkAnswer(given, [...exercise.answers, ...accepted]);
    case "build": {
      // Tiles cannot be mistyped, so only the exact order (or an accepted one) counts.
      const options = [exercise.tokens.join(" "), ...accepted].map(normalizeAnswer);
      return options.includes(normalizeAnswer(given)) ? "correct" : "wrong";
    }
    case "choice":
      // A choice cannot be "almost right": it is the option or it is not.
      return given === exercise.options[exercise.answer] ? "correct" : "wrong";
  }
}

type Outcome = { given: string; verdict: Verdict | "accepted" };

export function OutputModule({ lesson, onComplete }: { lesson: GrammarLesson; onComplete: () => void }) {
  const { t, l } = useT();
  const dispatch = useAppDispatch();
  const acceptedAnswers = useAppState().acceptedAnswers;
  const exercises = lesson.exercises;
  const [index, setIndex] = useState(0);
  const [outcome, setOutcome] = useState<Outcome | null>(null);
  const [confirming, setConfirming] = useState(false);
  const [right, setRight] = useState(0);

  const exercise = exercises[index];

  const answer = (given: string) => {
    if (exercise === undefined) return;
    const verdict = judge(exercise, given, acceptedAnswers[exercise.id] ?? []);
    setOutcome({ given, verdict });
    if (verdict !== "wrong") setRight((count) => count + 1);
  };

  const accept = () => {
    if (exercise === undefined || outcome === null) return;
    dispatch({ type: "acceptAnswer", exerciseId: exercise.id, answer: outcome.given });
    setOutcome({ ...outcome, verdict: "accepted" });
    setRight((count) => count + 1);
    setConfirming(false);
  };

  const next = () => {
    setOutcome(null);
    setConfirming(false);
    setIndex((current) => current + 1);
  };

  if (exercise === undefined) {
    return (
      <section className="empty">
        <h2>{t("output.score", { right, total: exercises.length })}</h2>
        <button type="button" className="btn btn-primary" onClick={onComplete}>
          {t("module.finish")}
        </button>
      </section>
    );
  }

  const locked = outcome !== null;
  const verdict = outcome?.verdict;

  return (
    <>
      <div className="step-row">
        <progress className="progress" value={index} max={exercises.length} />
        <span className="muted">{t("module.step", { n: index + 1, total: exercises.length })}</span>
      </div>

      <section className="panel exercise">
        <h3>{t(`output.${exercise.type}`)}</h3>
        <p className="prompt">{l(exercise.type === "free" ? exercise.prompt : exercise.translation)}</p>
        {exercise.type === "choice" && (
          <p className="fr sentence" lang="fr">
            {exercise.text}
          </p>
        )}

        {/* `key` gives every exercise a fresh component, so typed text and
            placed tiles from the previous one cannot leak into the next. */}
        {exercise.type === "fill" && <FillInput key={exercise.id} exercise={exercise} locked={locked} onAnswer={answer} />}
        {exercise.type === "build" && <BuildInput key={exercise.id} exercise={exercise} locked={locked} onAnswer={answer} />}
        {exercise.type === "free" && <FreeInput key={exercise.id} exercise={exercise} locked={locked} onAnswer={answer} />}
        {exercise.type === "choice" && (
          <ChoiceInput key={exercise.id} exercise={exercise} locked={locked} onAnswer={answer} picked={outcome?.given} />
        )}

        {outcome !== null && verdict !== undefined && (
          <div className={`feedback feedback-${verdict === "accepted" ? "correct" : verdict}`} role="status">
            <p className="feedback-title">{verdict === "accepted" ? t("output.accepted") : t(`output.${verdict}`)}</p>
            <p className="feedback-answer">
              <span className="fr" lang="fr">
                {solution(exercise)}
              </span>
              <SpeakButton text={solution(exercise)} />
            </p>

            {verdict === "wrong" && exercise.type !== "choice" && !confirming && (
              <button type="button" className="link" onClick={() => setConfirming(true)}>
                {t("output.override")}
              </button>
            )}

            {confirming && (
              <div className="override" role="group" aria-label={t("output.override")}>
                <p className="override-title">{t("output.override.title")}</p>
                <p className="small">{t("output.override.checks")}</p>
                <dl className="override-compare">
                  <dt>{t("output.override.yours")}</dt>
                  <dd className="fr" lang="fr">
                    {asSentence(exercise, outcome.given)}
                  </dd>
                  <dt>{t("output.override.expected")}</dt>
                  <dd className="fr" lang="fr">
                    {solution(exercise)}
                  </dd>
                </dl>
                <p className="muted small">{t("output.override.note")}</p>
                <div className="override-actions">
                  <button type="button" className="btn" onClick={accept}>
                    {t("output.override.confirm")}
                  </button>
                  <button type="button" className="btn" autoFocus onClick={() => setConfirming(false)}>
                    {t("output.override.cancel")}
                  </button>
                </div>
              </div>
            )}

            {!confirming && (
              <button type="button" className="btn btn-primary" autoFocus onClick={next}>
                {t("module.continue")}
              </button>
            )}
          </div>
        )}
      </section>
    </>
  );
}

interface InputProps<E extends Exercise> {
  exercise: E;
  /** True once answered: the input stays visible but can no longer change. */
  locked: boolean;
  /** Reports the raw answer; the parent decides whether it is right. */
  onAnswer: (given: string) => void;
}

function FillInput({ exercise, locked, onAnswer }: InputProps<FillExercise>) {
  const { t } = useT();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [before = "", after = ""] = exercise.text.split("___");

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!locked && value.trim() !== "") onAnswer(value.trim());
  };

  return (
    <form onSubmit={submit} className="answer-form">
      <p className="fr sentence" lang="fr">
        {before}
        <input
          ref={inputRef}
          className="blank"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          disabled={locked}
          autoFocus
          autoCapitalize="none"
          autoComplete="off"
          spellCheck={false}
          aria-label={t("output.fill")}
          size={Math.max(4, (exercise.answers[0]?.length ?? 4) + 1)}
        />
        {after}
      </p>
      <AccentBar inputRef={inputRef} value={value} onChange={setValue} disabled={locked} />
      {!locked && (
        <button type="submit" className="btn btn-primary" disabled={value.trim() === ""}>
          {t("module.check")}
        </button>
      )}
    </form>
  );
}

function FreeInput({ locked, onAnswer }: InputProps<FreeExercise>) {
  const { t } = useT();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!locked && value.trim() !== "") onAnswer(value.trim());
  };

  return (
    <form onSubmit={submit} className="answer-form">
      <input
        ref={inputRef}
        className="search fr"
        lang="fr"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        disabled={locked}
        autoFocus
        autoComplete="off"
        spellCheck={false}
        placeholder={t("output.placeholder")}
        aria-label={t("output.free")}
      />
      <AccentBar inputRef={inputRef} value={value} onChange={setValue} disabled={locked} />
      {!locked && (
        <button type="submit" className="btn btn-primary" disabled={value.trim() === ""}>
          {t("module.check")}
        </button>
      )}
    </form>
  );
}

/**
 * Click-to-assemble. State is the list of tile POSITIONS placed so far, not
 * the words: with positions, removing a tile puts back exactly that tile.
 */
function BuildInput({ exercise, locked, onAnswer }: InputProps<BuildExercise>) {
  const { t } = useT();
  const [bank] = useState(() => shuffledOrder(exercise.tokens, exercise.id));
  const [placed, setPlaced] = useState<number[]>([]);

  const word = (position: number) => exercise.tokens[position] ?? "";
  const complete = placed.length === exercise.tokens.length;

  return (
    <div className="answer-form">
      <div className="tiles answer-line" lang="fr" aria-live="polite">
        {placed.map((position) => (
          <button
            key={position}
            type="button"
            className="tile fr"
            disabled={locked}
            onClick={() => setPlaced((current) => current.filter((item) => item !== position))}
          >
            {word(position)}
          </button>
        ))}
      </div>
      <div className="tiles" lang="fr">
        {bank.map((position) => (
          <button
            key={position}
            type="button"
            className="tile fr"
            disabled={locked || placed.includes(position)}
            onClick={() => setPlaced((current) => [...current, position])}
          >
            {word(position)}
          </button>
        ))}
      </div>
      {!locked && (
        <button type="button" className="btn btn-primary" disabled={!complete} onClick={() => onAnswer(placed.map(word).join(" "))}>
          {t("module.check")}
        </button>
      )}
    </div>
  );
}

/** Options as buttons. After answering, the picked one stays marked. */
function ChoiceInput({
  exercise,
  locked,
  onAnswer,
  picked,
}: InputProps<ChoiceExercise> & { picked: string | undefined }) {
  return (
    <div className="choices" role="group">
      {exercise.options.map((option) => (
        <button
          key={option}
          type="button"
          className={`btn choice fr${picked === option ? " choice-picked" : ""}`}
          lang="fr"
          disabled={locked}
          aria-pressed={picked === option}
          onClick={() => onAnswer(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
