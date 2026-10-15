import type { Locale, Localized } from "@/lib/i18n";
import { routes } from "@/lib/seo";

/**
 * Keyword → page map for contextual in-text links (see lib/autolink.tsx).
 * Patterns are matched in running text; the first match of each target on a page becomes a link.
 * Order matters: more specific patterns first (e.g. "CCNA Cybersecurity" before "CCNA").
 */
export interface AutoLinkRule {
  /** Target path without locale prefix. */
  path: string;
  /** Regex source(s) per locale; Latin product names are shared by all locales. */
  patterns: Partial<Localized<string[]>> & { all?: string[] };
}

const cert = (slug: string, all: string[]): AutoLinkRule => ({ path: routes.certification(slug), patterns: { all } });
const post = (slug: string, patterns: AutoLinkRule["patterns"]): AutoLinkRule => ({ path: routes.post(slug), patterns });
const city = (slug: string, patterns: AutoLinkRule["patterns"]): AutoLinkRule => ({ path: routes.city(slug), patterns });

export const autoLinkRules: AutoLinkRule[] = [
  // Comparison / how-to articles: full phrases first, so "CEH ou OSCP+" links the comparison,
  // not the CEH course page.
  post("ceh-ou-oscp", { fr: ["CEH (?:v13 )?ou (?:l')?OSCP\\+?"], en: ["CEH (?:v13 )?(?:or|vs\\.?) OSCP\\+?"], ar: ["CEH (?:v13 )?أم OSCP\\+?"] }),
  post("security-plus-ou-ceh", { fr: ["Security\\+ ou (?:le )?CEH(?: v13)?"], en: ["Security\\+ (?:or|vs\\.?) CEH(?: v13)?"], ar: ["Security\\+‎? أم CEH(?: v13)?"] }),
  post("cissp-ou-cism", { fr: ["CISSP ou (?:le )?CISM"], en: ["CISSP (?:or|vs\\.?) CISM"], ar: ["CISSP أم CISM"] }),
  post("reussir-examen-ceh-v13", { fr: ["l'examen (?:du )?CEH(?: v13)?", "examen CEH(?: v13)?"], en: ["CEH(?: v13)? exam"], ar: ["امتحان CEH(?: v13)?"] }),
  post("preparer-oscp-maroc", { fr: ["pr[ée]par(?:er|ation)(?: de| à)? l'OSCP\\+?"], en: ["OSCP\\+? prep(?:aration)?", "prepar(?:e|ing) for (?:the )?OSCP\\+?"], ar: ["التحضير لـ? ?OSCP\\+?"] }),
  post("comptia-security-plus-sy0-701", { all: ["SY0-701"] }),
  post("ceh-v14", { all: ["CEH v14"] }),
  post("voucher-certification-gratuit", { fr: ["vouchers? (?:d'examen )?gratuits?", "vouchers? à prix réduit"], en: ["free (?:exam )?vouchers?", "discounted vouchers?"], ar: ["قسائم? (?:امتحان )?مجانية"] }),
  post("certifications-cybersecurite-gratuites", { fr: ["certifications? (?:cybersécurité )?gratuites?"], en: ["free (?:cybersecurity )?certifications?"], ar: ["شهادات? (?:الأمن السيبراني )?مجانية"] }),
  post("ccna-ou-security-plus", { fr: ["CCNA ou (?:la )?(?:CompTIA )?Security\\+"], en: ["CCNA (?:or|vs\\.?) (?:CompTIA )?Security\\+"], ar: ["CCNA أم (?:CompTIA )?Security\\+"] }),
  post("metiers-cybersecurite-maroc", { fr: ["métiers de la cybersécurité"], en: ["cybersecurity (?:jobs|careers)"], ar: ["مهن الأمن السيبراني"] }),
  post("formation-cybersecurite-en-ligne-maroc", { fr: ["formation en ligne", "classe virtuelle"], en: ["online training", "live online class(?:es)?"], ar: ["التكوين عن بعد"] }),
  post("certification-cissp-maroc", { fr: ["l'examen CISSP", "certification CISSP"], en: ["CISSP exam"], ar: ["امتحان CISSP"] }),
  post("ccna-cybersecurity-maroc", { all: ["200-201"] }),
  post("former-equipes-cybersecurite-entreprise", { fr: ["former (?:vos|ses|les) équipes", "formation intra-entreprise"], en: ["train(?:ing)? your teams", "in-house training"], ar: ["تكوين (?:فرقك|الفرق)"] }),
  post("quelle-certification-cybersecurite-choisir", { fr: ["choisir (?:sa|votre|une) certification"], en: ["choos(?:e|ing) (?:a|your) certification"], ar: ["اختيار (?:الشهادة|شهادتك)"] }),
  post("meilleur-centre-formation-cybersecurite-maroc", { fr: ["centres? de formation"], en: ["training cent(?:er|re)s?"], ar: ["مراكز? التكوين"] }),

  // Certifications (money pages) — product names are the same in every language.
  cert("cisco-ccna-cybersecurity", ["CCNA Cybersecurity", "CyberOps Associate"]),
  cert("cisco-ccna", ["CCNA(?! Cybersecurity)"]),
  cert("iso-27001-lead-implementer", ["ISO(?:/IEC)? 27001 Lead Implementer", "Lead Implementer"]),
  cert("ceh-v13", ["CEH v13", "CEH(?! Practical| Master| v\\d)"]),
  cert("oscp", ["OSCP\\+", "OSCP", "PEN-200"]),
  cert("comptia-security-plus", ["CompTIA Security\\+", "Security\\+"]),
  cert("comptia-cysa-plus", ["CompTIA CySA\\+", "CySA\\+"]),
  cert("comptia-pentest-plus", ["CompTIA PenTest\\+", "PenTest\\+"]),
  cert("cissp", ["CISSP"]),
  cert("cism", ["CISM"]),
  cert("chfi-v11", ["CHFI v11", "CHFI"]),
  cert("cnd-v3", ["CND v3", "CND"]),

  // Supporting articles, by topic.
  post("loi-05-20-cybersecurite-maroc", { fr: ["loi (?:n° ?)?05-20"], en: ["law (?:no\\.? ?)?05-20"], ar: ["القانون (?:رقم )?05-20"] }),
  post("iso-27001-maroc", { all: ["ISO(?:/IEC)? 27001(?! Lead)"] }),
  post("analyste-soc-maroc", { fr: ["analystes? SOC"], en: ["SOC analysts?"], ar: ["محللي? SOC"] }),
  post("devenir-pentester-maroc", { fr: ["pentesteurs?", "pentesters?"], en: ["pentesters?"], ar: ["مختبري? الاختراق"] }),
  post("reconversion-cybersecurite-maroc", { fr: ["reconversion"], en: ["career change"], ar: ["إعادة التوجيه المهني"] }),
  post("prix-certifications-cybersecurite-maroc", { fr: ["prix des certifications"], en: ["certification prices"], ar: ["أسعار الشهادات"] }),

  // Cities (local landing pages).
  city("casablanca", { fr: ["Casablanca"], en: ["Casablanca"], ar: ["الدار البيضاء"] }),
  city("rabat", { fr: ["Rabat"], en: ["Rabat"], ar: ["الرباط"] }),
  city("marrakech", { fr: ["Marrakech"], en: ["Marrakesh", "Marrakech"], ar: ["مراكش"] }),
  city("tanger", { fr: ["Tanger"], en: ["Tangier"], ar: ["طنجة"] }),
  city("fes", { fr: ["Fès"], en: ["Fez"], ar: ["فاس"] }),
  city("agadir", { fr: ["Agadir"], en: ["Agadir"], ar: ["أكادير"] }),
];

/** Patterns of a rule for a locale. */
export const rulePatterns = (rule: AutoLinkRule, locale: Locale) => [...(rule.patterns.all ?? []), ...(rule.patterns[locale] ?? [])];
