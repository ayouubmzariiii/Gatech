/**
 * Business details used across the site, metadata and structured data.
 * Fill in every TODO before going live: Google cross-checks these against
 * your Google Business Profile, so they must match it exactly (NAP consistency).
 */
export const site = {
  name: "GATech",
  legalName: "GATech World", // TODO: registered company name (raison sociale)
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://gatech.world").replace(/\/$/, ""),
  email: "contact@gatech.world",
  /** E.164 format, used for tel: links and structured data. */
  phone: "+212684199400",
  phoneDisplay: "+212 6 84 19 94 00",
  /** Digits only, used for https://wa.me/<number>. */
  whatsapp: "212684199400",
  foundingYear: 2024, // TODO
  /**
   * Physical address. Leave `streetAddress` empty if you have no public
   * office yet: the address is then omitted from structured data instead of
   * publishing a fake one.
   */
  address: {
    streetAddress: "", // TODO e.g. "Bd Zerktouni, Tour X, 5e étage"
    addressLocality: "Casablanca",
    addressRegion: "Casablanca-Settat",
    postalCode: "", // TODO e.g. "20000"
    addressCountry: "MA",
  },
  geo: { latitude: 33.5731, longitude: -7.5898 },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 09:00-13:00"],
  social: {
    linkedin: "", // TODO e.g. "https://www.linkedin.com/company/gatech-world"
    facebook: "",
    instagram: "",
    youtube: "",
  },
  /** Google Search Console / Bing verification tokens. */
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? "",
    bing: process.env.BING_SITE_VERIFICATION ?? "",
  },
} as const;

export const sameAs = Object.values(site.social).filter(Boolean);

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
