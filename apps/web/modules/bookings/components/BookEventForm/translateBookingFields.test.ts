import { describe, expect, it } from "vitest";

import { translateBookingFields } from "./translateBookingFields";

type Fields = Parameters<typeof translateBookingFields>[0];

const fields = [
  {
    name: "budget",
    type: "multiselect",
    label: "What is your budget?",
    options: [
      { label: "up to $10,000", value: "up to $10,000" },
      { label: "$$50,000+", value: "$$50,000+" },
      { label: "Custom", value: "Custom" },
    ],
  },
  { name: "notes", type: "textarea", defaultLabel: "additional_notes", placeholder: "Provide details" },
  { name: "name", type: "name", defaultLabel: "your_name" },
] as unknown as Fields;

describe("translateBookingFields", () => {
  it.each(["en", "fr"])("returns the fields untouched for %s", (locale) => {
    expect(translateBookingFields(fields, locale)).toBe(fields);
  });

  it("translates labels and option labels and keeps option values", () => {
    const [budget] = translateBookingFields(fields, "de");
    expect(budget.label).toBe("Wie hoch ist dein Budget?");
    expect(budget.options?.[0]).toEqual({ label: "bis $10,000", value: "up to $10,000" });
    expect(budget.options?.[1]).toEqual({ label: "$50,000+", value: "$$50,000+" });
  });

  it("keeps an option label it has no translation for", () => {
    const [budget] = translateBookingFields(fields, "pl");
    expect(budget.options?.[2]).toEqual({ label: "Custom", value: "Custom" });
  });

  it("translates a custom placeholder but adds no label to a system field", () => {
    const notes = translateBookingFields(fields, "sv")[1];
    expect(notes.placeholder).toContain("Krav");
    expect(notes.label).toBeUndefined();
  });

  it.each(["pl", "de", "no", "sv", "da"])("has every question in %s", (locale) => {
    const [budget] = translateBookingFields(fields, locale);
    expect(budget.label).not.toBe("What is your budget?");
  });
});
