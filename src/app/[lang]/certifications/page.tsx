import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CatalogFilter } from "@/components/CatalogFilter";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CertCard, CtaBanner, PageHero, SectionHeading } from "@/components/ui";
import { certifications, vendors } from "@/data";
import type { Category, Level } from "@/data/types";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, graph, itemListSchema } from "@/lib/schema";
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
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          itemListSchema(lang, certifications),
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

      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
