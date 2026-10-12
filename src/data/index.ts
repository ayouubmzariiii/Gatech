import { fixBidiDeep } from "@/lib/bidi";
import type { Certification, City } from "./types";

import cehV13 from "./certs/ceh-v13";
import comptiaSecurityPlus from "./certs/comptia-security-plus";
import oscp from "./certs/oscp";
import cissp from "./certs/cissp";
import iso27001 from "./certs/iso-27001-lead-implementer";
import comptiaCysaPlus from "./certs/comptia-cysa-plus";
import comptiaPentestPlus from "./certs/comptia-pentest-plus";
import cism from "./certs/cism";
import chfiV11 from "./certs/chfi-v11";
import cndV3 from "./certs/cnd-v3";

import casablanca from "./cities/casablanca";
import rabat from "./cities/rabat";
import marrakech from "./cities/marrakech";
import tanger from "./cities/tanger";
import fes from "./cities/fes";
import agadir from "./cities/agadir";

/** Fixes "+" placement in the Arabic version of every localized field. */
function withArabicBidi<T extends object>(item: T): T {
  const out: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(item)) {
    out[key] =
      value && typeof value === "object" && !Array.isArray(value) && "ar" in value
        ? { ...value, ar: fixBidiDeep((value as { ar: unknown }).ar) }
        : value && typeof value === "object" && !Array.isArray(value)
          ? withArabicBidi(value as object)
          : value;
  }
  return out as T;
}

/** Display order of the catalog. */
export const certifications: Certification[] = [
  cehV13,
  comptiaSecurityPlus,
  oscp,
  cissp,
  iso27001,
  comptiaCysaPlus,
  comptiaPentestPlus,
  cism,
  chfiV11,
  cndV3,
].map(withArabicBidi);

export const cities: City[] = [casablanca, rabat, marrakech, tanger, fes, agadir].map(withArabicBidi);

export const getCertification = (slug: string) =>
  certifications.find((c) => c.slug === slug);

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

export const vendors = [...new Set(certifications.map((c) => c.vendor))];

export const minPrice = Math.min(...certifications.map((c) => c.priceMAD));

/** Date of the last content update, used for sitemap lastModified. */
export const contentUpdatedAt = new Date("2026-10-12");
