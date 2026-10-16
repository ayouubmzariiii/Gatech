import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { VendorLogo } from "@/components/VendorLogo";
import { Breadcrumbs, CheckList, CtaBanner, FaqSection, PageHero, PostsBand, SectionHeading, btnPrimary, btnSecondary } from "@/components/ui";
import { postsBySlugs } from "@/data/blog";
import { pageFaqs } from "@/data/pageFaqs";
import type { Vendor } from "@/data/types";
import { getDictionary } from "@/dictionaries";
import { LinkBudget, linkify } from "@/lib/autolink";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, graph, orgId, webPageSchema } from "@/lib/schema";
import { absoluteUrl, localePath, pageMetadata, routes } from "@/lib/seo";

const vendors: Vendor[] = [
  "EC-Council", "CompTIA", "ISC2", "ISACA", "PECB", "OffSec",
  "Cisco", "Fortinet", "Palo Alto Networks", "Check Point", "Microsoft", "AWS",
];

const guideSlugs = ["voucher-certification-gratuit", "certifications-cybersecurite-gratuites", "prix-certifications-cybersecurite-maroc"];

export async function generateMetadata({ params }: PageProps<"/[lang]/vouchers-examen">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({ locale: lang, path: routes.vouchers, title: dict.meta.vouchersTitle, description: dict.meta.vouchersDescription });
}

export default async function VouchersPage({ params }: PageProps<"/[lang]/vouchers-examen">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const v = dict.vouchers;
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.vouchers, href: localePath(lang, routes.vouchers) },
  ];
  const links = new LinkBudget(lang, routes.vouchers, 2);
  const contactHref = `${localePath(lang, routes.contact)}#format=voucher`;

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.vouchers, name: dict.meta.vouchersTitle, description: dict.meta.vouchersDescription }),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          faqSchema(pageFaqs.vouchers[lang]),
          {
            "@type": "Service",
            name: dict.meta.vouchersTitle,
            description: dict.meta.vouchersDescription,
            serviceType: "Certification exam vouchers",
            url: absoluteUrl(localePath(lang, routes.vouchers)),
            provider: { "@id": orgId },
            areaServed: { "@type": "Country", name: "Morocco" },
            brand: vendors.map((name) => ({ "@type": "Brand", name })),
          },
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading as="h1" eyebrow={v.eyebrow} title={dict.meta.vouchersTitle} />
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-pretty text-body sm:text-lg">{v.intro}</p>
            <Link href={contactHref} className={`${btnPrimary} mt-8`}>
              {v.cta}
            </Link>
          </div>
          <div className="card p-6">
            <h2 className="font-display text-2xl font-bold text-ink">{v.whatTitle}</h2>
            <p className="mt-3 text-sm leading-relaxed text-body">{linkify(v.whatText, links)}</p>
          </div>
        </div>
      </PageHero>

      <section aria-labelledby="vendors" className="container-page py-16 sm:py-20">
        <SectionHeading id="vendors" title={v.vendorsTitle} subtitle={v.vendorsSubtitle} />
        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {vendors.map((vendor) => (
            <li key={vendor} className="card flex h-20 items-center justify-center p-4">
              <VendorLogo vendor={vendor} height={24} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-body">{v.others}</p>
      </section>

      <section aria-labelledby="v-process" className="border-y border-line bg-surface py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading id="v-process" title={v.howTitle} />
          <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {v.steps.map((step, i) => (
              <li key={step.title}>
                <span className="cut flex size-12 items-center justify-center bg-red font-display text-xl font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink uppercase">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="validity" className="container-page grid items-start gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div>
          <SectionHeading id="validity" title={v.validityTitle} />
          <div className="mt-8">
            <CheckList items={v.validity} links={links} />
          </div>
        </div>
        <div className="card p-6 sm:p-8">
          <h2 className="font-display text-3xl font-bold text-ink">{v.bundleTitle}</h2>
          <p className="mt-3 text-base leading-relaxed text-body">{v.bundleText}</p>
          <Link href={localePath(lang, routes.certifications)} className={`${btnSecondary} mt-6`}>
            {v.bundleCta}
          </Link>
        </div>
      </section>

      <PostsBand id="voucher-guides" title={v.guidesTitle} posts={postsBySlugs(guideSlugs)} locale={lang} dict={dict} surface={true} />

      <FaqSection eyebrow={dict.faq.eyebrow} title={dict.faq.title} faqs={pageFaqs.vouchers[lang]} />

      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
