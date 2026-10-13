import Link from "next/link";
import type { ReactNode } from "react";
import { autoLinkRules, rulePatterns } from "@/data/autolinks";
import type { Locale } from "./i18n";
import { localePath } from "./seo";

/**
 * Per-page link budget: each target is linked at most once per page, never to the page
 * itself, and at most `max` contextual links are added (avoids over-optimisation).
 */
export class LinkBudget {
  private used = new Set<string>();
  private count = 0;
  constructor(
    private readonly locale: Locale,
    /** Current page path without locale prefix, e.g. "/certifications/ceh-v13". */
    self: string,
    private readonly max = 8,
  ) {
    this.used.add(self);
  }
  take(path: string) {
    if (this.count >= this.max || this.used.has(path)) return false;
    this.used.add(path);
    this.count++;
    return true;
  }
  get lang() {
    return this.locale;
  }
}

const cache = new Map<Locale, RegExp>();
/** One regex per locale: one capturing group per rule, letter/number boundaries around every match. */
function matcher(locale: Locale) {
  let re = cache.get(locale);
  if (!re) {
    const groups = autoLinkRules.map((r) => `(${rulePatterns(r, locale).join("|")})`);
    re = new RegExp(`(?<![\\p{L}\\p{N}])(?:${groups.join("|")})(?![\\p{L}\\p{N}])`, "gu");
    cache.set(locale, re);
  }
  return re;
}

const linkClass = "font-medium text-ink underline decoration-red/50 decoration-2 underline-offset-2 transition hover:text-red";

/** Turns the first mention of known products, topics and cities into internal links. */
export function linkify(text: string, budget: LinkBudget): ReactNode {
  const re = matcher(budget.lang);
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(re)) {
    const i = m.slice(1).findIndex((g) => g !== undefined);
    const rule = autoLinkRules[i];
    if (!rule || !budget.take(rule.path)) continue;
    const start = m.index ?? 0;
    parts.push(text.slice(last, start));
    parts.push(
      <Link key={start} href={localePath(budget.lang, rule.path)} className={linkClass}>
        {m[0]}
      </Link>,
    );
    last = start + m[0].length;
  }
  if (!parts.length) return text;
  parts.push(text.slice(last));
  return parts;
}
