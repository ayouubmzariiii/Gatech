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
import ciscoCcna from "./certs/cisco-ccna";
import ciscoCcnaCyber from "./certs/cisco-ccna-cybersecurity";
import ecCouncilCpent from "./certs/ec-council-cpent";
import ecCouncilCciso from "./certs/ec-council-cciso";
import isacaCisa from "./certs/isaca-cisa";
import isacaCrisc from "./certs/isaca-crisc";
import isoN27001LeadAuditor from "./certs/iso-27001-lead-auditor";
import isoN27005RiskManager from "./certs/iso-27005-risk-manager";
import isoN22301LeadImplementer from "./certs/iso-22301-lead-implementer";
import nisTwoLeadImplementer from "./certs/nis-2-lead-implementer";
import doraLeadManager from "./certs/dora-lead-manager";
import ebiosRiskManager from "./certs/ebios-risk-manager";
import fortinetFortigateAdministrator from "./certs/fortinet-fortigate-administrator";
import paloAltoFirewallEdu210 from "./certs/palo-alto-firewall-edu-210";
import checkPointCcsaR82 from "./certs/check-point-ccsa-r82";
import microsoftAz104 from "./certs/microsoft-az-104";
import microsoftSc200 from "./certs/microsoft-sc-200";
import awsSecuritySpecialty from "./certs/aws-security-specialty";

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
  ciscoCcna,
  ciscoCcnaCyber,
  ecCouncilCpent,
  ecCouncilCciso,
  isacaCisa,
  isacaCrisc,
  isoN27001LeadAuditor,
  isoN27005RiskManager,
  isoN22301LeadImplementer,
  nisTwoLeadImplementer,
  doraLeadManager,
  ebiosRiskManager,
  fortinetFortigateAdministrator,
  paloAltoFirewallEdu210,
  checkPointCcsaR82,
  microsoftAz104,
  microsoftSc200,
  awsSecuritySpecialty,
].map(withArabicBidi);

export const cities: City[] = [casablanca, rabat, marrakech, tanger, fes, agadir].map(withArabicBidi);

export const getCertification = (slug: string) =>
  certifications.find((c) => c.slug === slug);

export const getCity = (slug: string) => cities.find((c) => c.slug === slug);

export const vendors = [...new Set(certifications.map((c) => c.vendor))];

export const minPrice = Math.min(...certifications.map((c) => c.priceMAD));

/** Date of the last content update, used for sitemap lastModified. */
export const contentUpdatedAt = new Date("2026-10-16");
