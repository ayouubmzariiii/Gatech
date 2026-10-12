import { cities, getCity } from "@/data";
import { locales } from "@/lib/i18n";
import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "GATech — Cybersecurity training in Morocco";

export function generateStaticParams() {
  return locales.flatMap((lang) => cities.map((c) => ({ lang, city: c.slug })));
}

export default async function Image({ params }: { params: Promise<{ lang: string; city: string }> }) {
  const { lang, city: slug } = await params;
  const city = getCity(slug) ?? cities[0];
  const l = lang === "fr" ? "fr" : "en";
  return ogCard({
    title: l === "fr" ? `Formations cybersécurité à ${city.name.fr}` : `Cybersecurity training in ${city.name.en}`,
    subtitle: "CEH v13 · OSCP+ · CISSP · CompTIA Security+ · ISO 27001",
    footer: l === "fr" ? `${city.region.fr} · Voucher d'examen inclus` : `${city.region.en} · Exam voucher included`,
  });
}
