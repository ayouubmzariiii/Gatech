import type { Certification, City, Faq } from "@/data/types";
import { hreflang, type Locale } from "./i18n";
import { absoluteUrl, localePath, routes } from "./seo";
import { sameAs, site } from "./site";

/** schema.org JSON-LD builders. Every node links to the organization by @id. */

export const orgId = `${site.url}/#organization`;
export const websiteId = `${site.url}/#website`;

const postalAddress = () =>
  site.address.streetAddress
    ? {
        "@type": "PostalAddress",
        streetAddress: site.address.streetAddress,
        addressLocality: site.address.addressLocality,
        addressRegion: site.address.addressRegion,
        postalCode: site.address.postalCode || undefined,
        addressCountry: site.address.addressCountry,
      }
    : undefined;

export function organizationSchema(locale: Locale, description: string) {
  return {
    "@type": "EducationalOrganization",
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: { "@type": "ImageObject", url: `${site.url}/logo.png`, width: 512, height: 512 },
    description,
    email: site.email,
    telephone: site.phone,
    foundingDate: String(site.foundingYear),
    address: postalAddress(),
    areaServed: { "@type": "Country", name: "Morocco", identifier: "MA" },
    knowsLanguage: ["fr", "ar", "en"],
    sameAs: sameAs.length ? sameAs : undefined,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phone,
      email: site.email,
      areaServed: "MA",
      availableLanguage: ["French", "Arabic", "English"],
    },
    inLanguage: hreflang[locale],
  };
}

export function websiteSchema(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: site.url,
    name: site.name,
    inLanguage: ["fr-MA", "ar-MA", "en-MA"],
    publisher: { "@id": orgId },
    // Locale-specific entry point, useful for AI/search engines.
    mainEntityOfPage: absoluteUrl(localePath(locale)),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function courseSchema(cert: Certification, locale: Locale) {
  const url = absoluteUrl(localePath(locale, routes.certification(cert.slug)));
  return {
    "@type": "Course",
    "@id": `${url}#course`,
    name: cert.name,
    description: cert.seoDescription[locale],
    url,
    courseCode: cert.examCode,
    inLanguage: hreflang[locale],
    educationalLevel: cert.level,
    teaches: cert.outcomes[locale],
    coursePrerequisites: cert.prerequisites[locale],
    provider: { "@id": orgId },
    educationalCredentialAwarded: {
      "@type": "EducationalOccupationalCredential",
      name: cert.name,
      credentialCategory: "certification",
      recognizedBy: { "@type": "Organization", name: cert.vendor },
    },
    offers: {
      "@type": "Offer",
      category: "Paid",
      price: cert.priceMAD,
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
      url,
      seller: { "@id": orgId },
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "Onsite",
        location: { "@type": "Place", name: "Casablanca", address: { "@type": "PostalAddress", addressLocality: "Casablanca", addressCountry: "MA" } },
        courseWorkload: `PT${cert.hours}H`,
      },
      {
        "@type": "CourseInstance",
        courseMode: "Onsite",
        location: { "@type": "Place", name: "Rabat", address: { "@type": "PostalAddress", addressLocality: "Rabat", addressCountry: "MA" } },
        courseWorkload: `PT${cert.hours}H`,
      },
      {
        "@type": "CourseInstance",
        courseMode: "Online",
        courseWorkload: `PT${cert.hours}H`,
      },
    ],
  };
}

export function itemListSchema(locale: Locale, certs: Certification[]) {
  return {
    "@type": "ItemList",
    itemListElement: certs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: absoluteUrl(localePath(locale, routes.certification(c.slug))),
      name: c.name,
    })),
  };
}

export function cityServiceSchema(city: City, locale: Locale) {
  const url = absoluteUrl(localePath(locale, routes.city(city.slug)));
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: city.heading[locale],
    serviceType: "Cybersecurity certification training",
    url,
    provider: { "@id": orgId },
    areaServed: {
      "@type": "City",
      name: city.name.en,
      containedInPlace: { "@type": "AdministrativeArea", name: city.region.en },
      geo: { "@type": "GeoCoordinates", ...city.geo },
    },
  };
}

/** Wraps nodes in a single @graph document. */
export const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });
