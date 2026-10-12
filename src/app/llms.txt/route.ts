import { certifications, cities } from "@/data";
import { guides } from "@/data/guides";
import { absoluteUrl, formatPrice, localePath, routes } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * /llms.txt — a plain-markdown map of the site for AI assistants and answer engines
 * (https://llmstxt.org). Generated from the same data as the pages.
 */
export function GET() {
  const fr = (path: string) => absoluteUrl(localePath("fr", path));
  const lines = [
    `# ${site.name} — Certifications cybersécurité au Maroc`,
    "",
    `> ${site.name} (${site.url}) prépare aux certifications internationales en cybersécurité au Maroc : formation avec formateur, labs pratiques, examens blancs et voucher d'examen officiel inclus, prix en dirhams (MAD). Sessions en présentiel à Casablanca et Rabat, en classe virtuelle partout au Maroc et en intra-entreprise. Site disponible en français (${site.url}), arabe (${site.url}/ar) et anglais (${site.url}/en).`,
    "",
    `Contact : ${site.email} · Téléphone / WhatsApp : ${site.phoneDisplay}`,
    "",
    "## Certifications (prix à partir de, voucher inclus)",
    "",
    ...certifications.map(
      (c) => `- [${c.name}](${fr(routes.certification(c.slug))}): ${c.vendor}, examen ${c.examCode}, ${c.durationDays} jours, à partir de ${formatPrice(c.priceMAD, "fr")} MAD. ${c.tagline.fr}`,
    ),
    "",
    "## Guides",
    "",
    ...guides.map((g) => `- [${g.title.fr}](${fr(routes.guide(g.slug))}): ${g.excerpt.fr}`),
    "",
    "## Villes",
    "",
    ...cities.map((c) => `- [${c.heading.fr}](${fr(routes.city(c.slug))})`),
    "",
    "## Pages",
    "",
    `- [Catalogue des certifications](${fr(routes.certifications)})`,
    `- [Formation pour entreprises](${fr(routes.business)})`,
    `- [À propos](${fr(routes.about)})`,
    `- [Contact et inscription](${fr(routes.contact)})`,
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
