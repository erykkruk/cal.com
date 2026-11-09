import { describe, expect, it } from "vitest";

import { normalizeRequestedLocale } from "./normalizeLocale";

describe("normalizeRequestedLocale", () => {
  it.each(["nb", "nb-NO", "nn", "nn-NO", "NB-no"])("maps %s to no", (requested) => {
    expect(normalizeRequestedLocale(requested)).toBe("no");
  });

  it.each(["en-US", "no", "no-NO", "pl", "sv-SE", "da-DK", "de"])("keeps %s", (requested) => {
    expect(normalizeRequestedLocale(requested)).toBe(requested);
  });
});
