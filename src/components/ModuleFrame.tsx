import { useEffect, type ReactNode } from "react";
import { formatClock } from "../domain/daily";
import type { ModuleProgress } from "../domain/types";
import { useT } from "../i18n/useT";
import { useModuleTimer } from "../state/useModuleTimer";

/**
 * The shell every module screen shares: back link, title, running clock.
 * It also owns the timer, so a module's content never deals with time.
 */
export function ModuleFrame({
  progress,
  onExit,
  children,
}: {
  progress: ModuleProgress;
  onExit: () => void;
  children: ReactNode;
}) {
  const { t } = useT();
  const pending = useModuleTimer(progress.id);
  const elapsed = progress.elapsedSeconds + pending;

  // Without a router, the browser keeps the dashboard's scroll position
  // when a module replaces it; start every module at the top.
  // Braces matter: an effect may only return a cleanup function, and newer
  // browsers return a Promise from scrollTo(), which React would then try
  // to call as the cleanup.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page">
      <header className="bar">
        <button type="button" className="link" onClick={onExit}>
          ← {t("review.back")}
        </button>
        <span className="muted clock">
          {t("module.clock", { elapsed: formatClock(elapsed), n: progress.plannedMinutes })}
        </span>
      </header>
      <h1>{t(`module.${progress.id}`)}</h1>
      {children}
    </main>
  );
}
