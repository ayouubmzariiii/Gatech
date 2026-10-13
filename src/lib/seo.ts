import type { Metadata } from "next";
import { defaultLocale, hreflang, locales, ogLocale, type Locale } from "./i18n";
import { site } from "./site";

/** Route paths, shared by every locale. */
export const routes = {
  home: "",
  certifications: "/certifications",
  certification: (slug: string) => `/certifications/${slug}`,
  business: "/entreprises",
  cities: "/maroc",
  city: (slug: string) => `/maroc/${slug}`,
  blog: "/blog",
  post: (slug: string) => `/blog/${slug}`,
  blogCategory: (category: string) => `/blog/categorie/${category}`,
  about: "/a-propos",
  contact: "/contact",
  privacy: "/confidentialite",
  legal: "/mentions-legales",
} as const;

/**
 * The default locale (French) is served without prefix (`/certifications`),
 * other locales are prefixed (`/ar/certifications`). `src/proxy.ts` rewrites
 * unprefixed URLs to the `[lang]` segment.
 */
export const localePath = (locale: Locale, path: string = "") => {
  const prefixed = locale === defaultLocale ? path : `/${locale}${path}`;
  return prefixed === "" ? "/" : prefixed;
};

/**
 * Absolute URL of a page's generated Open Graph image. Images are served from the
 * internal locale-prefixed route (e.g. /fr/certifications/ceh-v13/opengraph-image).
 */
export const ogImageUrl = (locale: Locale, path: string = "") => `${site.url}/${locale}${path}/opengraph-image`;

export const absoluteUrl = (path: string) => `${site.url}${path === "/" ? "" : path}` || site.url;

/** `<link rel="alternate" hreflang>` map for a path, including x-default. */
export const languageAlternates = (path: string) => {
  const languages: Record<string, string> = {};
  for (const locale of locales) languages[hreflang[locale]] = absoluteUrl(localePath(locale, path));
  languages["x-default"] = absoluteUrl(localePath(defaultLocale, path));
  return languages;
};

interface PageMetaInput {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  /** Use the title as-is, without the " | GATech" template. */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  /** Article dates (ISO), used when type is "article". */
  publishedTime?: string;
  modifiedTime?: string;
  /** Set for routes that have their own opengraph-image file. */
  hasOwnImage?: boolean;
  /** Explicit share image (absolute URL), e.g. a blog post photo. */
  image?: string;
}

export function pageMetadata({
  locale,
  path,
  title,
  description,
  absoluteTitle,
  type = "website",
  publishedTime,
  modifiedTime,
  hasOwnImage = false,
  image: explicitImage,
}: PageMetaInput): Metadata {
  const image = explicitImage ?? (hasOwnImage ? ogImageUrl(locale, path) : ogImageUrl(locale));
  const url = absoluteUrl(localePath(locale, path));
  // Keep titles within ~60 characters: drop the brand suffix when it would overflow.
  const suffix = ` | ${site.name}`;
  if (title.length + suffix.length > 60) absoluteTitle = true;
  const fullTitle = absoluteTitle ? title : `${title}${suffix}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type,
      ...(type === "article" ? { publishedTime, modifiedTime, authors: [site.url] } : {}),
      url,
      siteName: site.name,
      title: fullTitle,
      description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      // Default share image; routes with their own opengraph-image file override it.
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [image] },
  };
}

export const formatPrice = (value: number, locale: Locale) =>
  new Intl.NumberFormat({ fr: "fr-FR", ar: "fr-FR", en: "en-US" }[locale], {
    maximumFractionDigits: 0,
  }).format(value);
