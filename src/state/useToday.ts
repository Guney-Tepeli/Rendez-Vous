import { useMemo } from "react";
import { LESSONS, findLesson } from "../data/lessons";
import { PHONETICS_CARDS, findPhoneticsCard } from "../data/phonetics";
import { findReading, readingForLesson } from "../data/readings";
import { SELF_TALK_PROMPTS } from "../data/selfTalk";
import { RAW_WORD_IDS } from "../data/vocabulary";
import { pickAtLevel, pickByDay, pickLesson, planMinutes } from "../domain/daily";
import { buildReviewQueue } from "../domain/srs";
import { localDateKey } from "../domain/time";
import { introducedToday, todaysSession } from "./appState";
import { useAppState } from "./store";

/**
 * Everything "today" means, derived from the stored state and the content.
 * Nothing here is stored twice: the queue, the plan and the picks are
 * recomputed from the cards and the date whenever the state changes.
 *
 * Once a session exists, its lesson and phonetics card win over a fresh
 * pick, so the day's content does not change halfway through.
 */
export function useToday() {
  const state = useAppState();
  return useMemo(() => {
    const now = Date.now();
    const dateKey = localDateKey(now);
    const session = todaysSession(state, now);

    const queue = buildReviewQueue(RAW_WORD_IDS, state.cards, now, {
      newPerDay: state.settings.newPerDay,
      introducedToday: introducedToday(state, now),
    });
    const queueSize = queue.due.length + queue.fresh.length;

    const lesson =
      (session && findLesson(session.lessonId)) ?? pickLesson(LESSONS, state.completedLessons, dateKey);
    const phonetics =
      (session && findPhoneticsCard(session.phoneticsId)) ?? pickByDay(PHONETICS_CARDS, dateKey);

    const reading = (session && findReading(session.readingId)) ?? readingForLesson(lesson.id);

    return {
      now,
      reading,
      session,
      queueSize,
      plan: planMinutes(queueSize),
      lesson,
      phonetics,
      selfTalk: pickAtLevel(SELF_TALK_PROMPTS, lesson.level, dateKey),
    };
  }, [state]);
}
