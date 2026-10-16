import type { MetadataRoute } from "next";
import { certifications, cities, contentUpdatedAt } from "@/data";
import { blogCategories, posts } from "@/data/blog";
import { locales, type Locale } from "@/lib/i18n";
import { absoluteUrl, languageAlternates, localePath, ogImageUrl, routes } from "@/lib/seo";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified?: Date;
  /** Generated OG image for the image sitemap. */
  image?: (locale: Locale) => string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: routes.home, priority: 1, changeFrequency: "weekly", image: (l) => ogImageUrl(l) },
    { path: routes.certifications, priority: 0.9, changeFrequency: "weekly" },
    ...certifications.map((c) => ({
      path: routes.certification(c.slug),
      priority: 0.9,
      changeFrequency: "monthly" as const,
      image: (l: Locale) => ogImageUrl(l, routes.certification(c.slug)),
    })),
    { path: routes.blog, priority: 0.8, changeFrequency: "weekly" },
    ...blogCategories.map((c) => ({ path: routes.blogCategory(c), priority: 0.5, changeFrequency: "weekly" as const })),
    ...posts.map((p) => ({
      path: routes.post(p.slug),
      priority: 0.8,
      changeFrequency: "monthly" as const,
      lastModified: new Date(p.dateModified),
      image: () => absoluteUrl(p.cover.src),
    })),
    { path: routes.business, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.services, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.vouchers, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.cities, priority: 0.7, changeFrequency: "monthly" },
    ...cities.map((c) => ({
      path: routes.city(c.slug),
      priority: 0.7,
      changeFrequency: "monthly" as const,
      image: (l: Locale) => ogImageUrl(l, routes.city(c.slug)),
    })),
    { path: routes.about, priority: 0.5, changeFrequency: "yearly" },
    { path: routes.contact, priority: 0.6, changeFrequency: "yearly" },
    { path: routes.privacy, priority: 0.2, changeFrequency: "yearly" },
    { path: routes.legal, priority: 0.2, changeFrequency: "yearly" },
  ];

  // One <url> per language version, each listing all its hreflang alternates.
  return entries.flatMap(({ path, priority, changeFrequency, lastModified, image }) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      lastModified: lastModified ?? contentUpdatedAt,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
      ...(image ? { images: [image(locale)] } : {}),
    })),
  );
}
