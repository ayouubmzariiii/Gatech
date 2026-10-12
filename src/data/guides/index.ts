import { fixBidiDeep } from "@/lib/bidi";
import type { Guide } from "../types";

import choisir from "./quelle-certification-cybersecurite-choisir";
import cehOscp from "./ceh-ou-oscp";
import secPlusCeh from "./security-plus-ou-ceh";
import prix from "./prix-certifications-cybersecurite-maroc";
import cisspCism from "./cissp-ou-cism";
import loi0520 from "./loi-05-20-cybersecurite-maroc";
import iso27001 from "./iso-27001-maroc";
import pentester from "./devenir-pentester-maroc";

/** Fixes "+" placement in Arabic text (see lib/bidi). */
const withArabicBidi = (g: Guide): Guide => {
  const out = { ...g } as Record<string, unknown>;
  for (const [k, v] of Object.entries(g)) {
    if (v && typeof v === "object" && !Array.isArray(v) && "ar" in v) out[k] = { ...v, ar: fixBidiDeep((v as { ar: unknown }).ar) };
  }
  return out as unknown as Guide;
};

/** Display order of the guides hub (most strategic first). */
export const guides: Guide[] = [choisir, cehOscp, prix, secPlusCeh, cisspCism, loi0520, iso27001, pentester].map(withArabicBidi);

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

/** Guides that mention a certification. */
export const guidesForCert = (certSlug: string) => guides.filter((g) => g.relatedCerts.includes(certSlug));

/** Anchor id for a section heading. */
export const sectionId = (i: number) => `section-${i + 1}`;
