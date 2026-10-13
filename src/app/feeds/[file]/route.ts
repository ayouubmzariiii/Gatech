import { categoryLabels, posts } from "@/data/blog";
import { getDictionary } from "@/dictionaries";
import { hreflang, isLocale, locales } from "@/lib/i18n";
import { absoluteUrl, localePath, routes } from "@/lib/seo";
import { site } from "@/lib/site";

/** RSS 2.0 feed per language: /feeds/fr.xml, /feeds/ar.xml, /feeds/en.xml */
export function generateStaticParams() {
  return locales.map((l) => ({ file: `${l}.xml` }));
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const lang = file.replace(/\.xml$/, "");
  if (!isLocale(lang)) return new Response("Not found", { status: 404 });
  const dict = getDictionary(lang);
  const blogUrl = absoluteUrl(localePath(lang, routes.blog));
  const sorted = [...posts].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
  const items = sorted
    .map((p) => {
      const url = absoluteUrl(localePath(lang, routes.post(p.slug)));
      return `    <item>
      <title>${esc(p.title[lang])}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.datePublished).toUTCString()}</pubDate>
      <category>${esc(categoryLabels[p.category][lang])}</category>
      <description>${esc(p.excerpt[lang])}</description>
      <enclosure url="${absoluteUrl(`/blog/${p.slug}/og.jpg`)}" type="image/jpeg" length="0" />
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(`${site.name} — ${dict.blog.title}`)}</title>
    <link>${blogUrl}</link>
    <description>${esc(dict.meta.blogDescription)}</description>
    <language>${hreflang[lang].toLowerCase()}</language>
    <atom:link href="${absoluteUrl(`/feeds/${lang}.xml`)}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
