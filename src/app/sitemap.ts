import type { MetadataRoute } from "next";
import { certifications, cities, contentUpdatedAt } from "@/data";
import { locales } from "@/lib/i18n";
import { absoluteUrl, languageAlternates, localePath, routes } from "@/lib/seo";

type Entry = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] };

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: routes.home, priority: 1, changeFrequency: "weekly" },
    { path: routes.certifications, priority: 0.9, changeFrequency: "weekly" },
    ...certifications.map((c) => ({ path: routes.certification(c.slug), priority: 0.9, changeFrequency: "monthly" as const })),
    { path: routes.business, priority: 0.8, changeFrequency: "monthly" },
    { path: routes.cities, priority: 0.7, changeFrequency: "monthly" },
    ...cities.map((c) => ({ path: routes.city(c.slug), priority: 0.7, changeFrequency: "monthly" as const })),
    { path: routes.about, priority: 0.5, changeFrequency: "yearly" },
    { path: routes.contact, priority: 0.6, changeFrequency: "yearly" },
    { path: routes.privacy, priority: 0.2, changeFrequency: "yearly" },
    { path: routes.legal, priority: 0.2, changeFrequency: "yearly" },
  ];

  // One <url> per language version, each listing all its hreflang alternates.
  return entries.flatMap(({ path, priority, changeFrequency }) =>
    locales.map((locale) => ({
      url: absoluteUrl(localePath(locale, path)),
      lastModified: contentUpdatedAt,
      changeFrequency,
      priority,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
