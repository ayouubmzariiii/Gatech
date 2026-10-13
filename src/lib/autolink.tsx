import Link from "next/link";
import type { ReactNode } from "react";
import { autoLinkRules, rulePatterns } from "@/data/autolinks";
import type { Locale } from "./i18n";
import { localePath } from "./seo";

/**
 * Editorial guard-rails for contextual links, so they read like a human editor's choices:
 * - each target is linked at most once per page, never to the page itself;
 * - at most `max` contextual links per page;
 * - at most one link per paragraph / list item (see linkify);
 * - city pages are only linked where the location matters (`cities: true`).
 */
export class LinkBudget {
  private used = new Set<string>();
  private count = 0;
  constructor(
    private readonly locale: Locale,
    /** Current page path without locale prefix, e.g. "/certifications/ceh-v13". */
    self: string,
    private readonly max = 5,
    private readonly options: { cities?: boolean } = {},
  ) {
    this.used.add(self);
  }
  take(path: string) {
    if (this.count >= this.max || this.used.has(path)) return false;
    if (!this.options.cities && path.startsWith("/maroc/")) return false;
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

/** Turns the first eligible mention in a block of text into an internal link (one link per block). */
export function linkify(text: string, budget: LinkBudget): ReactNode {
  const re = matcher(budget.lang);
  for (const m of text.matchAll(re)) {
    const i = m.slice(1).findIndex((g) => g !== undefined);
    const rule = autoLinkRules[i];
    if (!rule || !budget.take(rule.path)) continue;
    const start = m.index ?? 0;
    return [
      text.slice(0, start),
      <Link key={start} href={localePath(budget.lang, rule.path)} className={linkClass}>
        {m[0]}
      </Link>,
      text.slice(start + m[0].length),
    ];
  }
  return text;
}
