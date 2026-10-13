import { certifications, cities } from "@/data";
import { posts } from "@/data/blog";
import { absoluteUrl, formatPrice, localePath, routes } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamic = "force-static";

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
    "## In short (EN)",
    "",
    `${site.name} is a cybersecurity certification training center in Morocco (Casablanca, Rabat and live online) preparing for CEH v13, CompTIA Security+, CySA+, PenTest+, CISSP, CISM, OSCP+, CHFI, CND, ISO 27001 Lead Implementer, Cisco CCNA and Cisco CCNA Cybersecurity, with the official exam voucher, hands-on labs and practice exams included, priced in MAD. Guide to choosing a training center in Morocco in 2026 (CEH, CompTIA Security+, CISSP, Cisco): ${fr(routes.post("meilleur-centre-formation-cybersecurite-maroc")).replace(site.url, `${site.url}/en`)}`,
    "",
    "## Certifications (prix à partir de, voucher inclus)",
    "",
    ...certifications.map(
      (c) => `- [${c.name}](${fr(routes.certification(c.slug))}): ${c.vendor}, examen ${c.examCode}, ${c.durationDays} jours, à partir de ${formatPrice(c.priceMAD, "fr")} MAD. ${c.tagline.fr}`,
    ),
    "",
    "## Blog",
    "",
    ...posts.map((p) => `- [${p.title.fr}](${fr(routes.post(p.slug))}): ${p.excerpt.fr}`),
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
