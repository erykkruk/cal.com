import type { RouterOutputs } from "@calcom/trpc/react";

type Fields = NonNullable<RouterOutputs["viewer"]["public"]["event"]>["bookingFields"];
type Field = Fields[number];

type FieldTranslation = {
  label?: string;
  placeholder?: string;
  options?: Record<string, string>;
};
type LocaleTranslations = Record<string, FieldTranslation>;

const MEETING_TOPIC_FIELD = "whatisthemeetingabout";
const BUDGET_FIELD = "budget";
const NDA_FIELD = "nda";
const NOTES_FIELD = "notes";

const BUDGET_UP_TO_10K = "up to $10,000";
const BUDGET_10K_25K = "$$10,000-$25,000";
const BUDGET_25K_50K = "$$25,000-$50,000";
const BUDGET_OVER_50K = "$$50,000+";
const TOPIC_NEW = "New Project Development";
const TOPIC_EXISTING = "Existing App Improvement";
const TOPIC_RESCUE = "Project Rescue or Takeover";
const TOPIC_CONSULTATION = "General Consultation";
const TOPIC_OTHER = "Other";

const budgetOptions = (upTo: string, over: string): Record<string, string> => ({
  [BUDGET_UP_TO_10K]: `${upTo} $10,000`,
  [BUDGET_10K_25K]: "$10,000-$25,000",
  [BUDGET_25K_50K]: "$25,000-$50,000",
  [BUDGET_OVER_50K]: over,
});

const TRANSLATIONS: Record<string, LocaleTranslations> = {
  pl: {
    [MEETING_TOPIC_FIELD]: {
      label: "O czym chcesz porozmawiać?",
      options: {
        [TOPIC_NEW]: "Nowy projekt",
        [TOPIC_EXISTING]: "Rozwój istniejącej aplikacji",
        [TOPIC_RESCUE]: "Ratowanie lub przejęcie projektu",
        [TOPIC_CONSULTATION]: "Ogólna konsultacja",
        [TOPIC_OTHER]: "Inne",
      },
    },
    [BUDGET_FIELD]: { label: "Jaki masz budżet?", options: budgetOptions("do", "$50,000+") },
    [NDA_FIELD]: {
      label: "Umowa o zachowaniu poufności (NDA)",
      placeholder:
        "Jeśli potrzebujesz NDA, przygotuj i wyślij wcześniej dane firmy (nazwa, adres, NIP itd.). Dzięki temu podpiszemy i odeślemy NDA przed spotkaniem.",
    },
    [NOTES_FIELD]: {
      placeholder:
        "Wymagania, projekty, kod, cele, najważniejsze pytania, budżet, termin albo przykłady. Wszystko, co pomoże nam się przygotować.",
    },
  },
  de: {
    [MEETING_TOPIC_FIELD]: {
      label: "Worum geht es?",
      options: {
        [TOPIC_NEW]: "Neues Projekt",
        [TOPIC_EXISTING]: "Bestehende App verbessern",
        [TOPIC_RESCUE]: "Projekt retten oder übernehmen",
        [TOPIC_CONSULTATION]: "Allgemeine Beratung",
        [TOPIC_OTHER]: "Sonstiges",
      },
    },
    [BUDGET_FIELD]: { label: "Wie hoch ist dein Budget?", options: budgetOptions("bis", "$50,000+") },
    [NDA_FIELD]: {
      label: "Geheimhaltungsvereinbarung (NDA)",
      placeholder:
        "Wenn du ein NDA brauchst, schick uns vorab deine Firmendaten (Name, Adresse, Steuernummer usw.). So können wir es vor dem Termin unterschreiben und zurücksenden.",
    },
    [NOTES_FIELD]: {
      placeholder:
        "Anforderungen, Designs, Code, Ziele, wichtige Fragen, Budget, Zeitplan oder Beispiele: alles, was uns bei der Vorbereitung hilft.",
    },
  },
  no: {
    [MEETING_TOPIC_FIELD]: {
      label: "Hva vil du snakke om?",
      options: {
        [TOPIC_NEW]: "Nytt prosjekt",
        [TOPIC_EXISTING]: "Forbedre en eksisterende app",
        [TOPIC_RESCUE]: "Redde eller overta et prosjekt",
        [TOPIC_CONSULTATION]: "Generell rådgivning",
        [TOPIC_OTHER]: "Annet",
      },
    },
    [BUDGET_FIELD]: { label: "Hva er budsjettet ditt?", options: budgetOptions("opptil", "$50,000+") },
    [NDA_FIELD]: {
      label: "Taushetsavtale (NDA)",
      placeholder:
        "Trenger du en NDA, send oss firmaopplysningene dine på forhånd (navn, adresse, organisasjonsnummer osv.). Da kan vi signere og sende den tilbake før møtet.",
    },
    [NOTES_FIELD]: {
      placeholder:
        "Krav, design, kode, mål, viktige spørsmål, budsjett, tidsplan eller eksempler: alt som hjelper oss å forberede oss.",
    },
  },
  sv: {
    [MEETING_TOPIC_FIELD]: {
      label: "Vad vill du prata om?",
      options: {
        [TOPIC_NEW]: "Nytt projekt",
        [TOPIC_EXISTING]: "Förbättra en befintlig app",
        [TOPIC_RESCUE]: "Rädda eller ta över ett projekt",
        [TOPIC_CONSULTATION]: "Allmän rådgivning",
        [TOPIC_OTHER]: "Annat",
      },
    },
    [BUDGET_FIELD]: { label: "Vad är din budget?", options: budgetOptions("upp till", "$50,000+") },
    [NDA_FIELD]: {
      label: "Sekretessavtal (NDA)",
      placeholder:
        "Behöver du ett NDA, skicka dina företagsuppgifter i förväg (namn, adress, organisationsnummer osv.). Då kan vi skriva under och skicka tillbaka det före mötet.",
    },
    [NOTES_FIELD]: {
      placeholder:
        "Krav, design, kod, mål, viktiga frågor, budget, tidsplan eller exempel: allt som hjälper oss att förbereda oss.",
    },
  },
  da: {
    [MEETING_TOPIC_FIELD]: {
      label: "Hvad vil du tale om?",
      options: {
        [TOPIC_NEW]: "Nyt projekt",
        [TOPIC_EXISTING]: "Forbedring af en eksisterende app",
        [TOPIC_RESCUE]: "Redning eller overtagelse af et projekt",
        [TOPIC_CONSULTATION]: "Generel rådgivning",
        [TOPIC_OTHER]: "Andet",
      },
    },
    [BUDGET_FIELD]: { label: "Hvad er dit budget?", options: budgetOptions("op til", "$50,000+") },
    [NDA_FIELD]: {
      label: "Fortrolighedsaftale (NDA)",
      placeholder:
        "Har du brug for en NDA, så send os dine firmaoplysninger på forhånd (navn, adresse, CVR-nummer osv.). Så kan vi underskrive og sende den retur før mødet.",
    },
    [NOTES_FIELD]: {
      placeholder:
        "Krav, design, kode, mål, vigtige spørgsmål, budget, tidsplan eller eksempler: alt, der hjælper os med at forberede os.",
    },
  },
};

// Cal stores custom questions in one language. Only what the visitor sees changes:
// option values stay English, so bookings and notification emails keep the original answers.
const translateField = (field: Field, translation: FieldTranslation): Field => ({
  ...field,
  ...(translation.label && field.label ? { label: translation.label, labelAsSafeHtml: undefined } : {}),
  ...(translation.placeholder && field.placeholder ? { placeholder: translation.placeholder } : {}),
  ...(translation.options && field.options
    ? {
        options: field.options.map((option) => ({
          ...option,
          label: translation.options?.[option.value] ?? option.label,
        })),
      }
    : {}),
});

export const translateBookingFields = (fields: Fields, locale: string): Fields => {
  const localeTranslations = TRANSLATIONS[locale];
  if (!localeTranslations) return fields;
  return fields.map((field) => {
    const translation = localeTranslations[field.name];
    return translation ? translateField(field, translation) : field;
  }) as Fields;
};
