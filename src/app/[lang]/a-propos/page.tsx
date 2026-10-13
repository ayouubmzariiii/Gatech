import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CtaBanner, FaqSection, PageHero, SectionHeading } from "@/components/ui";
import { pageFaqs } from "@/data/pageFaqs";

import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, graph, orgId, webPageSchema } from "@/lib/schema";
import { localePath, pageMetadata, routes } from "@/lib/seo";
import { LinkBudget, linkify } from "@/lib/autolink";

export async function generateMetadata({ params }: PageProps<"/[lang]/a-propos">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({ locale: lang, path: routes.about, title: dict.meta.aboutTitle, description: dict.meta.aboutDescription });
}

export default async function AboutPage({ params }: PageProps<"/[lang]/a-propos">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const links = new LinkBudget(lang, routes.about, 8);
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.about, href: localePath(lang, routes.about) },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.about, name: dict.meta.aboutTitle, description: dict.meta.aboutDescription, type: "AboutPage", mainEntity: orgId }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          faqSchema(pageFaqs.about[lang]),
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8">
          <SectionHeading as="h1" eyebrow={dict.about.eyebrow} title={dict.about.title} />
        </div>
      </PageHero>
      <section className="container-page py-14">
        <div className="prose-body max-w-3xl text-base sm:text-[1.0625rem]">
          {dict.about.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{linkify(p, links)}</p>
          ))}
        </div>
        <h2 className="mt-16 text-2xl font-bold text-ink">{dict.about.valuesTitle}</h2>
        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {dict.about.values.map((v) => (
            <div key={v.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-semibold text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{v.text}</p>
            </div>
          ))}
        </div>
      </section>
      <FaqSection eyebrow={dict.faq.eyebrow} title={dict.faq.title} faqs={pageFaqs.about[lang]} surface links={links} />

      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
