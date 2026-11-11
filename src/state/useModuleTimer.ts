import { useEffect, useRef, useState } from "react";
import type { ModuleId } from "../domain/types";
import { useAppDispatch } from "./store";

/** Seconds are handed to the store in batches of this size. */
const FLUSH_SECONDS = 10;

/**
 * Counts the time a module screen is open and reports it to the store.
 *
 * Returns the seconds counted but not yet reported, so the caller can show
 * `stored + pending` as a clock that moves every second.
 *
 * Why batch instead of dispatching every second: each dispatch re-renders
 * every component that reads the state and rewrites localStorage. Ten
 * seconds of local counting costs nothing; the store hears about it once.
 * The remainder is flushed when the screen closes, so nothing is lost.
 *
 * Time only counts while the tab is visible: a session left open in the
 * background should not report 40 minutes of study.
 */
export function useModuleTimer(moduleId: ModuleId): number {
  const dispatch = useAppDispatch();
  const pendingRef = useRef(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const flush = () => {
      if (pendingRef.current === 0) return;
      dispatch({ type: "tick", moduleId, seconds: pendingRef.current });
      pendingRef.current = 0;
    };

    const interval = window.setInterval(() => {
      if (document.hidden) return;
      pendingRef.current += 1;
      if (pendingRef.current >= FLUSH_SECONDS) flush();
      setPending(pendingRef.current);
    }, 1000);

    // Cleanup runs when the screen closes: stop the clock, report the rest.
    return () => {
      window.clearInterval(interval);
      flush();
    };
  }, [dispatch, moduleId]);

  return pending;
}
