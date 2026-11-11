import { describe, expect, it } from "vitest";
import { localize, translate } from "./index";
import { en } from "./en";
import { tr } from "./tr";

describe("translate", () => {
  it("picks the dictionary for the active language", () => {
    expect(translate("TR", "rating.again")).toBe("Tekrar");
    expect(translate("EN", "rating.again")).toBe("Again");
  });

  it("fills placeholders and leaves unknown ones visible", () => {
    expect(translate("EN", "module.minutes", { n: 10 })).toBe("10 min");
    expect(translate("TR", "module.minutes", { n: 10 })).toBe("10 dk");
    expect(translate("EN", "module.minutes")).toBe("{n} min");
  });

  it("uses the same placeholders in both languages", () => {
    const placeholders = (text: string) => (text.match(/\{\w+\}/g) ?? []).sort();
    for (const key of Object.keys(tr) as (keyof typeof tr)[]) {
      expect(placeholders(en[key]), key).toEqual(placeholders(tr[key]));
    }
  });
});

describe("localize", () => {
  it("returns the content text for the active language", () => {
    const meaning = { TR: "çikolata", EN: "chocolate" };
    expect(localize("TR", meaning)).toBe("çikolata");
    expect(localize("EN", meaning)).toBe("chocolate");
  });
});
