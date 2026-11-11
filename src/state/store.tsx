/**
 * Connects the reducer to React: one provider at the top, two hooks below.
 *
 * State and dispatch live in two separate contexts. `dispatch` never changes
 * identity, so a component that only sends actions (a button) does not
 * re-render every time the state changes.
 */

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
  type Dispatch,
  type ReactNode,
} from "react";
import { appReducer, type AppAction, type AppState } from "./appState";
import { translate } from "../i18n";
import { loadState, saveState } from "./storage";

const StateContext = createContext<AppState | null>(null);
const DispatchContext = createContext<Dispatch<AppAction> | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  // The third argument runs once, on first render: storage is read one time.
  const [state, dispatch] = useReducer(appReducer, undefined, () => loadState(localStorage));

  // Persist after every change. Saving is a side effect, so it lives in an
  // effect and not in the reducer.
  // A failed save is shown, not just logged: the learner must know that
  // what they are doing right now will not be there tomorrow.
  const [saveFailed, setSaveFailed] = useState(false);
  useEffect(() => {
    setSaveFailed(!saveState(localStorage, state));
  }, [state]);

  // Tell the browser which language the page is in. Not cosmetic: CSS
  // `text-transform: uppercase` follows it, and under lang="tr" an English
  // "i" is capitalised to the Turkish dotted "İ" ("FİLL İN THE BLANK").
  const languageMode = state.settings.languageMode;
  useEffect(() => {
    document.documentElement.lang = languageMode === "TR" ? "tr" : "en";
  }, [languageMode]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {saveFailed && (
          <p className="notice" role="alert">
            {translate(languageMode, "error.save")}
          </p>
        )}
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useAppState(): AppState {
  const state = useContext(StateContext);
  if (state === null) throw new Error("useAppState must be used inside <AppStateProvider>");
  return state;
}

export function useAppDispatch(): Dispatch<AppAction> {
  const dispatch = useContext(DispatchContext);
  if (dispatch === null) throw new Error("useAppDispatch must be used inside <AppStateProvider>");
  return dispatch;
}
