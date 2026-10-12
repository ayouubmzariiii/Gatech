import type { Locale } from "@/lib/i18n";
import { fixBidiDeep } from "@/lib/bidi";
import fr, { type Dictionary } from "./fr";
import ar from "./ar";
import en from "./en";

const dictionaries: Record<Locale, Dictionary> = { fr, ar: fixBidiDeep(ar), en };

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];

export type { Dictionary };

/** Replaces `{key}` placeholders. */
export const fmt = (template: string, values: Record<string, string | number>) =>
  template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`));
