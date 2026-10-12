import type { Localized } from "@/lib/i18n";

export type Vendor = "EC-Council" | "CompTIA" | "ISC2" | "ISACA" | "OffSec" | "PECB";
export type Level = "beginner" | "intermediate" | "advanced" | "expert";
export type Category = "offensive" | "defensive" | "governance" | "forensics";

export interface Faq {
  q: string;
  a: string;
}

export interface Certification {
  /** URL slug, identical in every locale, e.g. "ceh-v13". */
  slug: string;
  /** Full official name, e.g. "Certified Ethical Hacker v13 (CEH AI)". */
  name: string;
  /** Short name used in cards and breadcrumbs, e.g. "CEH v13". */
  shortName: string;
  vendor: Vendor;
  /** Official exam code, e.g. "312-50". */
  examCode: string;
  level: Level;
  category: Category;
  /** Shown on the home page "popular" section. */
  popular?: boolean;
  /** Training length. */
  durationDays: number;
  hours: number;
  /** Public "from" price in Moroccan dirhams (training + exam voucher). Edit in one place. */
  priceMAD: number;
  /** Whether the exam voucher is included in priceMAD. */
  voucherIncluded: boolean;
  exam: {
    /** e.g. "125 QCM" / "125 أسئلة متعددة الاختيارات" */
    format: Localized;
    /** e.g. "4 heures" */
    duration: Localized;
    /** e.g. "60 % – 85 % (selon la forme de l'examen)" */
    passingScore: Localized;
    /** Validity / renewal, e.g. "3 ans, renouvelable via 120 ECE" */
    validity: Localized;
  };
  /** SEO <title> (max ~60 chars, includes "Maroc" in fr / "المغرب" in ar / "Morocco" in en). */
  seoTitle: Localized;
  /** SEO meta description (140–160 chars, compelling, includes a CTA). */
  seoDescription: Localized;
  /** One-line hook under the H1. */
  tagline: Localized;
  /** 2–3 rich paragraphs, unique content, naturally mentions Morocco. */
  overview: Localized<string[]>;
  /** Who should take it (4–5 items). */
  audience: Localized<string[]>;
  /** Prerequisites (2–4 items). */
  prerequisites: Localized<string[]>;
  /** What you will be able to do (5–6 items). */
  outcomes: Localized<string[]>;
  /** Official curriculum modules (technical names; may stay in English inside the fr version if that is how they are taught). */
  modules: Localized<string[]>;
  /** Jobs this certification leads to (4–5 items). */
  careers: Localized<string[]>;
  /** 5 FAQs, specific to this certification and to Morocco (price in MAD, exam center/online proctoring, payment, language). */
  faqs: Localized<Faq[]>;
}

export interface City {
  slug: string;
  name: Localized;
  /** Region name, e.g. "Casablanca-Settat". */
  region: Localized;
  geo: { latitude: number; longitude: number };
  seoTitle: Localized;
  seoDescription: Localized;
  /** H1 for the page. */
  heading: Localized;
  /** 2–3 paragraphs of unique local content: local job market, sectors hiring (banks, offshoring, telecom, public sector, ...), how training works there. */
  intro: Localized<string[]>;
  /** 3–4 local sectors / employers types that recruit security talent. */
  sectors: Localized<string[]>;
  /** Slugs of the certifications most relevant to this city's market. */
  featuredCerts: string[];
  faqs: Localized<Faq[]>;
}
