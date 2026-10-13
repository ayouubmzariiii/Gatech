import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogFilter } from "@/components/CatalogFilter";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CertCard, CtaBanner, FaqSection, OffersBand, PageHero, PostsBand, SectionHeading } from "@/components/ui";
import { pageFaqs } from "@/data/pageFaqs";
import { featuredPostSlugs, postsBySlugs } from "@/data/blog";

import { certifications, vendors } from "@/data";
import type { Category, Level } from "@/data/types";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, graph, itemListSchema, webPageSchema } from "@/lib/schema";
import { localePath, pageMetadata, routes } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/certifications">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({
    locale: lang,
    path: routes.certifications,
    title: dict.meta.catalogTitle,
    description: dict.meta.catalogDescription,
  });
}

const levelOrder: Level[] = ["beginner", "intermediate", "advanced", "expert"];
const categoryOrder: Category[] = ["offensive", "defensive", "governance", "forensics"];

export default async function CatalogPage({ params }: PageProps<"/[lang]/certifications">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.certifications, href: localePath(lang, routes.certifications) },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.certifications, name: dict.meta.catalogTitle, description: dict.meta.catalogDescription, type: "CollectionPage" }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          itemListSchema(lang, certifications),
          faqSchema(pageFaqs.catalog[lang]),
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8">
          <SectionHeading as="h1" eyebrow={dict.catalog.eyebrow} title={dict.catalog.title} subtitle={dict.catalog.subtitle} />
        </div>
      </PageHero>

      <section className="container-page py-14">
        <CatalogFilter
          items={certifications.map((cert) => ({
            slug: cert.slug,
            vendor: cert.vendor,
            level: cert.level,
            category: cert.category,
            node: <CertCard cert={cert} locale={lang} dict={dict} />,
          }))}
          vendors={vendors.map((v) => ({ value: v, label: v }))}
          levels={levelOrder.map((l) => ({ value: l, label: dict.labels.levels[l] }))}
          categories={categoryOrder.map((c) => ({ value: c, label: dict.labels.categories[c] }))}
          labels={{
            all: dict.labels.all,
            vendor: dict.labels.filterVendor,
            level: dict.labels.filterLevel,
            category: dict.labels.filterCategory,
            results: dict.labels.results,
            noResults: dict.labels.noResults,
            reset: dict.labels.reset,
          }}
        />
      </section>

      <PostsBand id="hub-posts" title={dict.blog.related} posts={postsBySlugs(featuredPostSlugs.catalog)} locale={lang} dict={dict} surface={true} />

      <OffersBand locale={lang} dict={dict} />

      <FaqSection eyebrow={dict.faq.eyebrow} title={dict.faq.title} faqs={pageFaqs.catalog[lang]} />

      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
