import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogListing } from "@/components/BlogListing";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBanner, PageHero, SectionHeading } from "@/components/ui";
import { blogCategories, categoryLabels, postsInCategory } from "@/data/blog";
import type { BlogCategory } from "@/data/types";
import { fmt, getDictionary } from "@/dictionaries";
import { isLocale, locales } from "@/lib/i18n";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { absoluteUrl, localePath, pageMetadata, routes } from "@/lib/seo";

const isCategory = (c: string): c is BlogCategory => (blogCategories as string[]).includes(c);

export function generateStaticParams() {
  return locales.flatMap((lang) => blogCategories.map((category) => ({ lang, category })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/categorie/[category]">): Promise<Metadata> {
  const { lang, category } = await params;
  if (!isLocale(lang) || !isCategory(category)) return {};
  const dict = getDictionary(lang);
  const label = categoryLabels[category][lang];
  return pageMetadata({
    locale: lang,
    path: routes.blogCategory(category),
    title: fmt(dict.meta.blogCategoryTitle, { category: label }),
    description: fmt(dict.meta.blogCategoryDescription, { category: label }),
  });
}

export default async function BlogCategoryPage({ params }: PageProps<"/[lang]/blog/categorie/[category]">) {
  const { lang, category } = await params;
  if (!isLocale(lang) || !isCategory(category)) notFound();
  const dict = getDictionary(lang);
  const label = categoryLabels[category][lang];
  const items = postsInCategory(category);
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.blog, href: localePath(lang, routes.blog) },
    { name: label, href: localePath(lang, routes.blogCategory(category)) },
  ];
  const title = fmt(dict.meta.blogCategoryTitle, { category: label });
  const description = fmt(dict.meta.blogCategoryDescription, { category: label });

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.blogCategory(category), name: title, description, type: "CollectionPage" }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          {
            "@type": "ItemList",
            itemListElement: items.map((p, i) => ({
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
          <SectionHeading as="h1" eyebrow={fmt(dict.blog.count, { n: items.length })} title={label} subtitle={description} />
        </div>
      </PageHero>
      <BlogListing posts={items} locale={lang} dict={dict} active={category} />
      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
