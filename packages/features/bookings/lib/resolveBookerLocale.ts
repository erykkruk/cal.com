import { i18n } from "@calcom/i18n/next-i18next.config";

export { BOOKER_LOCALE_QUERY_PARAM } from "./bookerLocaleQueryParam";

// The site that embeds the booker passes its own language. An explicit, supported
// request wins over the event type's language; anything else is ignored.
export const resolveBookerLocale = (
  requestedLocale: string | string[] | undefined,
  interfaceLanguage: string | null | undefined
): string | null | undefined => {
  const requested = Array.isArray(requestedLocale) ? requestedLocale[0] : requestedLocale;
  return requested && i18n.locales.includes(requested) ? requested : interfaceLanguage;
};
