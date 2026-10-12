import { certifications, getCertification } from "@/data";
import { locales } from "@/lib/i18n";
import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "GATech — Cybersecurity certification training in Morocco";

export function generateStaticParams() {
  return locales.flatMap((lang) => certifications.map((c) => ({ lang, slug: c.slug })));
}

export default async function Image({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  const cert = getCertification(slug) ?? certifications[0];
  const fr = lang === "fr";
  return ogCard({
    title: fr ? `Formation ${cert.shortName} au Maroc` : `${cert.shortName} Training in Morocco`,
    subtitle: cert.name,
    footer: fr
      ? `${cert.durationDays} jours · À partir de ${cert.priceMAD.toLocaleString("fr-FR")} MAD`
      : `${cert.durationDays} days · From ${cert.priceMAD.toLocaleString("en-US")} MAD`,
    vendor: cert.vendor,
  });
}
