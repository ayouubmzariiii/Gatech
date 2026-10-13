import type { Localized } from "@/lib/i18n";

export type Vendor = "EC-Council" | "CompTIA" | "ISC2" | "ISACA" | "OffSec" | "PECB" | "Cisco";
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

export interface GuideSection {
  /** H2 heading of the section. */
  heading: string;
  /** 1–4 paragraphs. */
  paragraphs: string[];
  /** Optional bullet list rendered after the paragraphs. */
  list?: string[];
}

export type BlogCategory = "certifications" | "comparatifs" | "carrieres" | "conformite" | "entreprises";

/** A photo used on the blog (stored in public/blog/<slug>/). */
export interface BlogImage {
  /** Public path, e.g. "/blog/ceh-ou-oscp/cover.webp". */
  src: string;
  width: number;
  height: number;
  /** Descriptive alt text (what the photo shows, in context of the article). */
  alt: Localized;
  /** Photographer credit (Unsplash License: free for commercial use). */
  credit: { author: string; url: string };
}

/** Blog article targeting an informational search intent. */
export interface Guide {
  /** URL slug, identical in every locale (French words), e.g. "ceh-ou-oscp". */
  slug: string;
  category: BlogCategory;
  /** ISO dates, e.g. "2026-10-12". */
  datePublished: string;
  dateModified: string;
  /** Approximate reading time in minutes (based on the French version). */
  readingMinutes: number;
  /** Slugs of the certifications discussed (links + structured data `about`). */
  relatedCerts: string[];
  /** H1 / article headline (max ~70 chars). */
  title: Localized;
  /** SEO <title>, max 60 chars, no brand name. */
  seoTitle: Localized;
  /** Meta description, 140–160 chars, with a call to action. */
  seoDescription: Localized;
  /** 1–2 sentence summary shown in listings and as the article intro. */
  excerpt: Localized;
  /** 5–7 sections forming the body (aim for 1,000–1,400 words in French). */
  sections: Localized<GuideSection[]>;
  /** 4–5 FAQs specific to the article topic. */
  faqs: Localized<Faq[]>;
}

/** Blog post = guide content + photos (photos live in src/data/blog/images.ts, keyed by slug). */
export type BlogPost = Guide & { cover: BlogImage; figure?: BlogImage & { afterSection: number } };

/** FAQs for listing / service pages, keyed by page. */
export type PageFaqKey = "catalog" | "business" | "cities" | "contact" | "about";
