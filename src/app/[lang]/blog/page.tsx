import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "@/components/BlogListing";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBanner, PageHero, SectionHeading } from "@/components/ui";
import { posts } from "@/data/blog";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, graph, orgId, webPageSchema } from "@/lib/schema";
import { absoluteUrl, localePath, pageMetadata, routes } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/blog">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  const meta = pageMetadata({ locale: lang, path: routes.blog, title: dict.meta.blogTitle, description: dict.meta.blogDescription });
  // Advertise the RSS feed of this language.
  return { ...meta, alternates: { ...meta.alternates, types: { "application/rss+xml": absoluteUrl(`/feeds/${lang}.xml`) } } };
}

export default async function BlogPage({ params }: PageProps<"/[lang]/blog">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const url = absoluteUrl(localePath(lang, routes.blog));
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.blog, href: localePath(lang, routes.blog) },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.blog, name: dict.meta.blogTitle, description: dict.meta.blogDescription, type: "CollectionPage" }),
          {
            "@type": "Blog",
            "@id": `${url}#blog`,
            url,
            name: dict.blog.title,
            description: dict.meta.blogDescription,
            publisher: { "@id": orgId },
            inLanguage: lang,
            blogPost: posts.map((p) => ({ "@id": `${absoluteUrl(localePath(lang, routes.post(p.slug)))}#article` })),
          },
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          {
            "@type": "ItemList",
            itemListElement: posts.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absoluteUrl(localePath(lang, routes.post(p.slug))),
              name: p.title[lang],
            })),
          },
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8">
          <SectionHeading as="h1" eyebrow={dict.blog.eyebrow} title={dict.blog.title} subtitle={dict.blog.subtitle} />
        </div>
      </PageHero>
      <BlogListing posts={posts} locale={lang} dict={dict} />
      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
