import { describe, expect, it } from "vitest";

import { translateBookingFields } from "./translateBookingFields";

type Fields = Parameters<typeof translateBookingFields>[0];

const fields = [
  {
    name: "budget",
    type: "multiselect",
    label: "What is your budget?",
    options: [
      { label: "Less than $15,000", value: "Less than $15,000" },
      { label: "More than $100,000", value: "More than $100,000" },
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
    expect(budget.options?.[0]).toEqual({ label: "Unter 14.000 EUR", value: "Less than $15,000" });
    expect(budget.options?.[1]).toEqual({ label: "Über 90.000 EUR", value: "More than $100,000" });
  });

  it("shows the Polish budget bands in zloty", () => {
    const [budget] = translateBookingFields(fields, "pl");
    expect(budget.options?.[0]?.label).toBe("Poniżej 50 tys. zł netto");
    expect(budget.options?.[1]?.label).toBe("Powyżej 350 tys. zł netto");
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
    expect(budget.options?.[0]?.label).not.toBe("Less than $15,000");
  });
});
