import { describe, expect, it } from "vitest";

import { resolveBookerLocale } from "./resolveBookerLocale";

describe("resolveBookerLocale", () => {
  it.each(["en", "pl", "de", "no", "sv", "da"])("uses the requested %s", (locale) => {
    expect(resolveBookerLocale(locale, "fr")).toBe(locale);
  });

  it("uses the first value of a repeated parameter", () => {
    expect(resolveBookerLocale(["de", "pl"], null)).toBe("de");
  });

  it.each(["../../etc/passwd", "xx", "", undefined])("falls back to the event language for %s", (locale) => {
    expect(resolveBookerLocale(locale, "fr")).toBe("fr");
  });

  it("returns nothing when neither is set", () => {
    expect(resolveBookerLocale(undefined, null)).toBeNull();
  });
});
