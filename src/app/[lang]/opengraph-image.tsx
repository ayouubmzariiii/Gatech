import { minPrice } from "@/data";
import { isLocale, locales } from "@/lib/i18n";
import { ogCard, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "GATech — Cybersecurity certifications in Morocco: CEH v13, CISSP, OSCP+, Security+";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function Image({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const fr = isLocale(lang) && lang === "fr";
  return ogCard({
    title: fr ? "Certifications cybersécurité au Maroc" : "Cybersecurity certifications in Morocco",
    subtitle: fr
      ? "CEH v13, OSCP+, CISSP, CompTIA, ISO 27001. Formation + voucher d'examen officiel."
      : "CEH v13, OSCP+, CISSP, CompTIA, ISO 27001. Training + official exam voucher.",
    footer: fr ? `À partir de ${minPrice.toLocaleString("fr-FR")} MAD` : `From ${minPrice.toLocaleString("en-US")} MAD`,
  });
}
