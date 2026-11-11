import { useT } from "../i18n/useT";
import { canSpeak, speakFrench } from "../lib/speak";

/** Small "play" button. Renders nothing where the browser cannot speak. */
export function SpeakButton({ text }: { text: string }) {
  const { t } = useT();
  if (!canSpeak()) return null;
  return (
    <button
      type="button"
      className="speak"
      aria-label={t("detail.listen", { text })}
      title={t("detail.listen", { text })}
      onClick={(event) => {
        event.stopPropagation();
        speakFrench(text);
      }}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
        <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </button>
  );
}
