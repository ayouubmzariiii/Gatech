import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBanner, GuideCard, PageHero, SectionHeading } from "@/components/ui";
import { guides } from "@/data/guides";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { absoluteUrl, localePath, pageMetadata, routes } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/guides">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({ locale: lang, path: routes.guides, title: dict.meta.guidesTitle, description: dict.meta.guidesDescription });
}

export default async function GuidesPage({ params }: PageProps<"/[lang]/guides">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.guides, href: localePath(lang, routes.guides) },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.guides, name: dict.meta.guidesTitle, description: dict.meta.guidesDescription, type: "CollectionPage" }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          {
            "@type": "ItemList",
            itemListElement: guides.map((g, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absoluteUrl(localePath(lang, routes.guide(g.slug))),
              name: g.title[lang],
            })),
          },
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8">
          <SectionHeading as="h1" eyebrow={dict.guides.eyebrow} title={dict.guides.title} subtitle={dict.guides.subtitle} />
        </div>
      </PageHero>
      <section className="container-page py-16">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <li key={g.slug}>
              <GuideCard guide={g} locale={lang} dict={dict} />
            </li>
          ))}
        </ul>
      </section>
      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
