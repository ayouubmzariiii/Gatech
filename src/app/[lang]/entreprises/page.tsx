import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CertCard, CheckList, CtaBanner, FaqSection, PageHero, PostsBand, SectionHeading, btnPrimary } from "@/components/ui";
import { pageFaqs } from "@/data/pageFaqs";
import { featuredPostSlugs, postsBySlugs } from "@/data/blog";
import { LinkBudget, linkify } from "@/lib/autolink";

import { getCertification } from "@/data";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, graph, orgId, webPageSchema } from "@/lib/schema";
import { absoluteUrl, localePath, pageMetadata, routes } from "@/lib/seo";

const teamCerts = ["iso-27001-lead-implementer", "ceh-v13", "comptia-cysa-plus", "cissp"];

export async function generateMetadata({ params }: PageProps<"/[lang]/entreprises">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({ locale: lang, path: routes.business, title: dict.meta.businessTitle, description: dict.meta.businessDescription });
}

export default async function BusinessPage({ params }: PageProps<"/[lang]/entreprises">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.business, href: localePath(lang, routes.business) },
  ];
  const certs = teamCerts.map(getCertification).filter((c) => c !== undefined);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.business, name: dict.meta.businessTitle, description: dict.meta.businessDescription }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          faqSchema(pageFaqs.business[lang]),
          {
          "@type": "Service",
          name: dict.meta.businessTitle,
          description: dict.meta.businessDescription,
          serviceType: "Corporate cybersecurity training",
          url: absoluteUrl(localePath(lang, routes.business)),
          provider: { "@id": orgId },
          areaServed: { "@type": "Country", name: "Morocco" },
          },
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading as="h1" eyebrow={dict.business.eyebrow} title={dict.meta.businessTitle} />
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-pretty text-body sm:text-lg">
              {linkify(dict.business.text, new LinkBudget(lang, routes.business, 4))}
            </p>
            <Link href={`${localePath(lang, routes.contact)}#format=intra`} className={`${btnPrimary} mt-8`}>
              {dict.business.cta}
            </Link>
          </div>
          <div className="card p-6">
            <CheckList items={dict.business.points} />
          </div>
        </div>
      </PageHero>

      <section aria-labelledby="team-paths" className="container-page py-16 sm:py-20">
        <SectionHeading id="team-paths" title={dict.paths.title} subtitle={dict.paths.subtitle} />
        <div className="mt-10 grid gap-x-10 gap-y-8 lg:grid-cols-3">
          {dict.paths.items.map((path) => (
            <div key={path.title} className="border-t-2 border-ink pt-5">
              <h3 className="font-semibold text-ink">{path.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{path.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certs.map((cert) => (
            <CertCard key={cert.slug} cert={cert} locale={lang} dict={dict} />
          ))}
        </div>
      </section>

      <section aria-labelledby="b-process" className="border-y border-line bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading id="b-process" title={dict.process.title} />
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dict.process.steps.map((step, i) => (
              <li key={step.title}>
                <span className="cut flex size-12 items-center justify-center bg-red font-display text-xl font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink uppercase">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <PostsBand id="hub-posts" title={dict.blog.related} posts={postsBySlugs(featuredPostSlugs.business)} locale={lang} dict={dict} surface={true} />

      <FaqSection eyebrow={dict.faq.eyebrow} title={dict.faq.title} faqs={pageFaqs.business[lang]} links={new LinkBudget(lang, routes.business, 6)} />

      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
