import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { TrainingFormats } from "@/components/TrainingFormats";
import { Breadcrumbs, CheckList, CtaBanner, FaqSection, PageHero, SectionHeading, btnPrimary } from "@/components/ui";
import { getCertification } from "@/data";
import { pageFaqs } from "@/data/pageFaqs";
import { getDictionary } from "@/dictionaries";
import { LinkBudget, linkify } from "@/lib/autolink";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, graph, orgId, webPageSchema } from "@/lib/schema";
import { absoluteUrl, localePath, pageMetadata, routes } from "@/lib/seo";

/** Training that matches each service (only existing certifications are shown). */
const relatedCerts: Record<string, string[]> = {
  pentest: ["ceh-v13", "oscp", "comptia-pentest-plus"],
  audit: ["iso-27001-lead-auditor", "cism"],
  iso27001: ["iso-27001-lead-implementer", "iso-27001-lead-auditor"],
  awareness: ["comptia-security-plus"],
  soc: ["comptia-cysa-plus", "cnd-v3"],
};

const serviceTypes: Record<string, string> = {
  pentest: "Penetration testing",
  audit: "Information security audit",
  iso27001: "ISO/IEC 27001 ISMS implementation support",
  awareness: "Security awareness and phishing simulation",
  soc: "SOC and blue team coaching",
};

export async function generateMetadata({ params }: PageProps<"/[lang]/services">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({ locale: lang, path: routes.services, title: dict.meta.servicesTitle, description: dict.meta.servicesDescription });
}

export default async function ServicesPage({ params }: PageProps<"/[lang]/services">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const url = absoluteUrl(localePath(lang, routes.services));
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.services, href: localePath(lang, routes.services) },
  ];
  const links = new LinkBudget(lang, routes.services, 3);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.services, name: dict.meta.servicesTitle, description: dict.meta.servicesDescription }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          faqSchema(pageFaqs.services[lang]),
          ...dict.services.items.map((item) => ({
            "@type": "Service",
            "@id": `${url}#${item.key}`,
            name: item.title,
            description: item.text,
            serviceType: serviceTypes[item.key],
            url: `${url}#${item.key}`,
            provider: { "@id": orgId },
            areaServed: { "@type": "Country", name: "Morocco" },
          })),
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 max-w-4xl">
          <SectionHeading as="h1" eyebrow={dict.services.eyebrow} title={dict.meta.servicesTitle} />
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-pretty text-body sm:text-lg">{dict.services.intro}</p>
          <Link href={`${localePath(lang, routes.contact)}#format=intra`} className={`${btnPrimary} mt-8`}>
            {dict.services.cta}
          </Link>
        </div>
      </PageHero>

      {dict.services.items.map((item, i) => {
        const certs = (relatedCerts[item.key] ?? []).map(getCertification).filter((c) => c !== undefined);
        return (
          <section
            key={item.key}
            id={item.key}
            aria-labelledby={`${item.key}-title`}
            className={i % 2 === 1 ? "border-y border-line bg-surface py-16 sm:py-20" : "py-16 sm:py-20"}
          >
            <div className="container-page grid items-start gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <SectionHeading id={`${item.key}-title`} title={item.title} />
                <p className="mt-5 text-base leading-relaxed text-pretty text-body">{linkify(item.text, links)}</p>
                {certs.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold tracking-wide text-ink uppercase">{dict.services.relatedTraining}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {certs.map((cert) => (
                        <li key={cert.slug}>
                          <Link
                            href={localePath(lang, routes.certification(cert.slug))}
                            className="inline-block border border-line-strong bg-white px-3 py-1.5 text-sm text-ink transition hover:border-ink"
                          >
                            <bdi>{cert.shortName}</bdi>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="card p-6">
                <CheckList items={item.points} />
              </div>
            </div>
          </section>
        );
      })}

      <TrainingFormats id="formats" dict={dict} />

      <FaqSection eyebrow={dict.faq.eyebrow} title={dict.faq.title} faqs={pageFaqs.services[lang]} />

      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
