import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBanner, FaqSection, PageHero, PostsBand, SectionHeading } from "@/components/ui";
import { pageFaqs } from "@/data/pageFaqs";
import { featuredPostSlugs, postsBySlugs } from "@/data/blog";
import { LinkBudget } from "@/lib/autolink";

import { cities } from "@/data";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { localePath, pageMetadata, routes } from "@/lib/seo";

export async function generateMetadata({ params }: PageProps<"/[lang]/maroc">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({ locale: lang, path: routes.cities, title: dict.meta.citiesTitle, description: dict.meta.citiesDescription });
}

export default async function CitiesPage({ params }: PageProps<"/[lang]/maroc">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.cities, href: localePath(lang, routes.cities) },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.cities, name: dict.meta.citiesTitle, description: dict.meta.citiesDescription, type: "CollectionPage" }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          faqSchema(pageFaqs.cities[lang]),
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8">
          <SectionHeading as="h1" title={dict.meta.citiesTitle} subtitle={dict.citiesSection.subtitle} />
        </div>
      </PageHero>
      <section className="container-page py-14">
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <li key={city.slug}>
              <Link
                href={localePath(lang, routes.city(city.slug))}
                className="card group flex h-full flex-col p-6 transition hover:border-line-strong hover:shadow-[0_6px_24px_-12px_rgb(11_18_32/0.25)]"
              >
                <span className="text-xs text-muted">{city.region[lang]}</span>
                <h2 className="mt-1 text-xl font-semibold text-ink">{city.name[lang]}</h2>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-body">{city.seoDescription[lang]}</p>
                <span className="mt-auto pt-4 text-muted transition group-hover:text-red">
                  <ArrowIcon width={18} height={18} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <PostsBand id="hub-posts" title={dict.blog.related} posts={postsBySlugs(featuredPostSlugs.cities)} locale={lang} dict={dict} surface={false} />

      <FaqSection eyebrow={dict.faq.eyebrow} title={dict.faq.title} faqs={pageFaqs.cities[lang]} links={new LinkBudget(lang, routes.cities, 6)} surface />

      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
