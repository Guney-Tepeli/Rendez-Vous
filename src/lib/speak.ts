/**
 * Text-to-speech through the browser's built-in Web Speech API.
 * No files, no network, no dependency; the voice is whatever French voice
 * the device ships, so quality differs between machines.
 *
 * Voice choice is explicit. Left to the browser, "fr-FR" can resolve to any
 * installed French voice, and macOS ships playful ones (Grandpa, Rocko,
 * Shelley…) next to the natural ones. A learner copying pronunciation must
 * not get those.
 */

/** Natural French voices, best first (macOS, Windows, Chrome, Android names). */
const PREFERRED = ["Thomas", "Amélie", "Audrey", "Aurélie", "Marie", "Daniel", "Google français", "Microsoft Denise", "Microsoft Henri", "Microsoft Hortense", "Microsoft Julie", "Microsoft Paul"];

/** Novelty or character voices shipped by macOS (Eloquence and fun voices). */
const AVOID = /^(Grandma|Grandpa|Rocko|Shelley|Sandy|Flo|Eddy|Reed|Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox)\b/i;

export function canSpeak(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

/**
 * The voice to use: a preferred natural France-French voice, else any
 * France-French voice that is not a novelty one, else any French voice.
 * Undefined while the browser has not loaded its voice list yet.
 */
export function pickFrenchVoice(voices: readonly SpeechSynthesisVoice[]): SpeechSynthesisVoice | undefined {
  const french = voices.filter((voice) => voice.lang.toLowerCase().startsWith("fr"));
  const france = french.filter((voice) => voice.lang.toLowerCase() === "fr-fr" && !AVOID.test(voice.name));
  for (const name of PREFERRED) {
    const match = france.find((voice) => voice.name.startsWith(name));
    if (match !== undefined) return match;
  }
  return france[0] ?? french.find((voice) => !AVOID.test(voice.name)) ?? french[0];
}

/** `rate` 1 is the voice's normal speed; below 1 is slower. */
export function speakFrench(text: string, rate = 0.9): void {
  if (!canSpeak()) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "fr-FR";
  const voice = pickFrenchVoice(window.speechSynthesis.getVoices());
  if (voice !== undefined) utterance.voice = voice;
  utterance.rate = rate; // default slightly slow: this is for learners
  window.speechSynthesis.cancel(); // stop whatever is still playing
  window.speechSynthesis.speak(utterance);
}
