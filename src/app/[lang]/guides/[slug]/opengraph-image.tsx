import { guides, getGuide } from "@/data/guides";
import { locales } from "@/lib/i18n";
import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "GATech — Cybersecurity guide, Morocco";

export function generateStaticParams() {
  return locales.flatMap((lang) => guides.map((g) => ({ lang, slug: g.slug })));
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const guide = getGuide(slug) ?? guides[0];
  // No Arabic font is embedded in OG images: Arabic pages use the English title.
  const l = lang === "fr" ? "fr" : "en";
  return ogCard({
    title: guide.title[l],
    subtitle: guide.excerpt[l].length > 140 ? `${guide.excerpt[l].slice(0, 137)}…` : guide.excerpt[l],
    footer: l === "fr" ? `Guide · ${guide.readingMinutes} min de lecture` : `Guide · ${guide.readingMinutes} min read`,
  });
}
