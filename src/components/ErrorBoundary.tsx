import { Component, type ErrorInfo, type ReactNode } from "react";

/**
 * Last line of defence: if rendering throws anywhere below, show a message
 * instead of a blank page.
 *
 * Why a class: React only offers this through the class lifecycle methods
 * `getDerivedStateFromError` / `componentDidCatch`; there is no hook for it.
 * It catches errors thrown while rendering and in effects, not errors in
 * click handlers or timers.
 *
 * The text is fixed and bilingual on purpose. This sits above the state
 * provider, so it cannot ask which language is active, and it must not
 * depend on anything that may be the thing that broke.
 */
export class ErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  override state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("french-app: render failed", error, info.componentStack);
  }

  override render() {
    if (!this.state.failed) return this.props.children;
    return (
      <main className="page">
        <section className="panel" role="alert">
          <h1>Bir şeyler ters gitti · Something went wrong</h1>
          <p>İlerlemen kayıtlı. Sayfayı yeniden yüklemeyi dene.</p>
          <p>Your progress is saved. Try reloading the page.</p>
          <button type="button" className="btn btn-primary" onClick={() => window.location.reload()}>
            Yeniden yükle · Reload
          </button>
        </section>
      </main>
    );
  }
}
