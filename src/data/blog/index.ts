import { fixBidiDeep } from "@/lib/bidi";
import type { Localized } from "@/lib/i18n";
import type { BlogCategory, BlogPost, Guide } from "../types";
import { blogImages } from "./images";

import choisir from "./quelle-certification-cybersecurite-choisir";
import cehOscp from "./ceh-ou-oscp";
import secPlusCeh from "./security-plus-ou-ceh";
import prix from "./prix-certifications-cybersecurite-maroc";
import cisspCism from "./cissp-ou-cism";
import loi0520 from "./loi-05-20-cybersecurite-maroc";
import iso27001 from "./iso-27001-maroc";
import pentester from "./devenir-pentester-maroc";
import reussirCeh from "./reussir-examen-ceh-v13";
import securityPlus from "./comptia-security-plus-sy0-701";
import oscpPrep from "./preparer-oscp-maroc";
import soc from "./analyste-soc-maroc";
import reconversion from "./reconversion-cybersecurite-maroc";
import entreprise from "./former-equipes-cybersecurite-entreprise";
import meilleurCentre from "./meilleur-centre-formation-cybersecurite-maroc";

/** Fixes "+" placement in Arabic text (see lib/bidi). */
const withArabicBidi = (g: Guide): Guide => {
  const out = { ...g } as Record<string, unknown>;
  for (const [k, v] of Object.entries(g)) {
    if (v && typeof v === "object" && !Array.isArray(v) && "ar" in v) out[k] = { ...v, ar: fixBidiDeep((v as { ar: unknown }).ar) };
  }
  return out as unknown as Guide;
};

const withImages = (g: Guide): BlogPost => {
  const images = blogImages[g.slug];
  if (!images) throw new Error(`Missing photos for blog post "${g.slug}" in src/data/blog/images.ts`);
  return { ...g, cover: images.cover, figure: images.figure };
};

/** Editorial order: strategic posts first, newest first within the same date. */
export const posts: BlogPost[] = [
  meilleurCentre, choisir, prix, cehOscp, reussirCeh, securityPlus, secPlusCeh, oscpPrep, soc, reconversion,
  entreprise, cisspCism, loi0520, iso27001, pentester,
].map((g) => withImages(withArabicBidi(g)));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

/** Posts that mention a certification. */
export const postsForCert = (certSlug: string) => posts.filter((p) => p.relatedCerts.includes(certSlug));

export const blogCategories: BlogCategory[] = ["certifications", "comparatifs", "carrieres", "conformite", "entreprises"];

export const categoryLabels: Record<BlogCategory, Localized> = {
  certifications: { fr: "Certifications", ar: "الشهادات", en: "Certifications" },
  comparatifs: { fr: "Comparatifs", ar: "مقارنات", en: "Comparisons" },
  carrieres: { fr: "Carrières", ar: "المسارات المهنية", en: "Careers" },
  conformite: { fr: "Réglementation & conformité", ar: "التنظيم والامتثال", en: "Regulation & compliance" },
  entreprises: { fr: "Entreprises", ar: "الشركات", en: "Business" },
};

export const postsInCategory = (c: BlogCategory) => posts.filter((p) => p.category === c);

/** Related posts: same category first, then posts sharing a certification. */
export function relatedPosts(post: BlogPost, n = 3) {
  const others = posts.filter((p) => p.slug !== post.slug);
  const score = (p: BlogPost) =>
    (p.category === post.category ? 2 : 0) + p.relatedCerts.filter((c) => post.relatedCerts.includes(c)).length;
  return others.sort((a, b) => score(b) - score(a)).slice(0, n);
}

/** Anchor id for a section heading. */
export const sectionId = (i: number) => `section-${i + 1}`;
