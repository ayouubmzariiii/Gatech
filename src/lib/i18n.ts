export const locales = ["fr", "ar", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

export const isLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** hreflang values: every language version targets the Moroccan market. */
export const hreflang: Record<Locale, string> = {
  fr: "fr-MA",
  ar: "ar-MA",
  en: "en-MA",
};

/** Open Graph locale codes. */
export const ogLocale: Record<Locale, string> = {
  fr: "fr_MA",
  ar: "ar_MA",
  en: "en_US",
};

export const dir = (locale: Locale) => (locale === "ar" ? "rtl" : "ltr");

export const localeNames: Record<Locale, string> = {
  fr: "Français",
  ar: "العربية",
  en: "English",
};

/** A value translated in every supported locale. */
export type Localized<T = string> = Record<Locale, T>;
