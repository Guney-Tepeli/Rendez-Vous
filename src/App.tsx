/**
 * Top level: the dashboard, or one open module. Still no router; "which
 * module is open" is one piece of state.
 *
 * This is also the one place that starts the day: opening any module
 * dispatches `startSession` with today's lesson, phonetics card and time
 * plan. The reducer ignores it if today's session already exists, so it is
 * safe to send every time.
 */

import { useState } from "react";
import { ModuleFrame } from "./components/ModuleFrame";
import { findLesson } from "./data/lessons";
import { findPhoneticsCard } from "./data/phonetics";
import { findReading } from "./data/readings";
import type { ModuleId } from "./domain/types";
import { GrammarModule } from "./screens/GrammarModule";
import { HomeScreen } from "./screens/HomeScreen";
import { OutputModule } from "./screens/OutputModule";
import { PhoneticsModule } from "./screens/PhoneticsModule";
import { ReadingModule } from "./screens/ReadingModule";
import { RecallModule } from "./screens/RecallModule";
import { SummaryScreen } from "./screens/SummaryScreen";
import { useAppDispatch, useAppState } from "./state/store";
import { useToday } from "./state/useToday";

export function App() {
  const state = useAppState();
  const dispatch = useAppDispatch();
  const today = useToday();
  const [openId, setOpenId] = useState<ModuleId | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const openModule = (id: ModuleId) => {
    dispatch({
      type: "startSession",
      now: Date.now(),
      lessonId: today.lesson.id,
      phoneticsId: today.phonetics.id,
      readingId: today.reading?.id ?? "",
      plan: today.plan,
    });
    setOpenId(id);
  };
  const close = () => setOpenId(null);

  // The open module reads the stored session, not `today.session`: if the
  // clock passes midnight mid-module, the learner finishes what they started.
  const session = state.session;
  const progress = session?.modules.find((module) => module.id === openId);
  const lesson = session ? findLesson(session.lessonId) : undefined;
  const card = session ? findPhoneticsCard(session.phoneticsId) : undefined;

  if (showSummary) return <SummaryScreen onExit={() => setShowSummary(false)} />;

  if (openId === null || progress === undefined || lesson === undefined || card === undefined) {
    return <HomeScreen onOpenModule={openModule} onOpenSummary={() => setShowSummary(true)} />;
  }

  const complete = () => {
    if (openId === "grammar") dispatch({ type: "completeLesson", lessonId: lesson.id });
    dispatch({ type: "completeModule", moduleId: openId });
    close();
  };

  return (
    // `key`: switching module mounts a fresh frame, so each gets its own timer.
    <ModuleFrame key={openId} progress={progress} onExit={close}>
      {openId === "recall" && <RecallModule onComplete={complete} />}
      {openId === "grammar" && <GrammarModule lesson={lesson} onComplete={complete} />}
      {openId === "output" && <OutputModule lesson={lesson} onComplete={complete} />}
      {openId === "reading" && <ReadingModule text={session ? findReading(session.readingId) : undefined} onComplete={complete} />}
      {openId === "phonetics" && <PhoneticsModule card={card} onComplete={complete} />}
    </ModuleFrame>
  );
}
