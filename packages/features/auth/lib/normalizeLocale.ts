const NORWEGIAN_LANGUAGE_CODES = new Set(["nb", "nn"]);
const NORWEGIAN_LOCALE = "no";

// Browsers in Norway send nb-NO or nn-NO, while the translations live under "no".
export const normalizeRequestedLocale = (requestedLocale: string): string => {
  const [language] = requestedLocale.toLowerCase().split("-");
  return NORWEGIAN_LANGUAGE_CODES.has(language) ? NORWEGIAN_LOCALE : requestedLocale;
};
