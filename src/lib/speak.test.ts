import { describe, expect, it } from "vitest";
import { pickFrenchVoice } from "./speak";

const voice = (name: string, lang: string) => ({ name, lang }) as SpeechSynthesisVoice;

describe("pickFrenchVoice", () => {
  it("prefers a natural France-French voice over novelty and Canadian ones", () => {
    const voices = [
      voice("Grandpa (French (France))", "fr-FR"),
      voice("Amélie", "fr-CA"),
      voice("Rocko (French (France))", "fr-FR"),
      voice("Thomas", "fr-FR"),
      voice("Samantha", "en-US"),
    ];
    expect(pickFrenchVoice(voices)?.name).toBe("Thomas");
  });

  it("falls back to any non-novelty France-French voice, then any French one", () => {
    expect(pickFrenchVoice([voice("Grandma", "fr-FR"), voice("Jacques", "fr-FR")])?.name).toBe("Jacques");
    expect(pickFrenchVoice([voice("Grandma", "fr-FR"), voice("Amélie", "fr-CA")])?.name).toBe("Amélie");
    expect(pickFrenchVoice([voice("Samantha", "en-US")])).toBeUndefined();
  });
});
