import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ContactForm, ContactFormFromQuery } from "@/components/ContactForm";
import { WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, FaqSection, PageHero, SectionHeading } from "@/components/ui";
import { pageFaqs } from "@/data/pageFaqs";

import { certifications } from "@/data";
import { getDictionary } from "@/dictionaries";
import { isLocale } from "@/lib/i18n";
import { breadcrumbSchema, faqSchema, graph, orgId, webPageSchema } from "@/lib/schema";
import { localePath, pageMetadata, routes } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/contact">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({ locale: lang, path: routes.contact, title: dict.meta.contactTitle, description: dict.meta.contactDescription });
}

export default async function ContactPage({ params }: PageProps<"/[lang]/contact">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const c = dict.contact;
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.contact, href: localePath(lang, routes.contact) },
  ];
  const formProps = {
    locale: lang,
    labels: c,
    certifications: certifications.map((cert) => ({ value: cert.slug, label: cert.shortName })),
  };

  const channels = [
    { label: c.phoneLabel, value: site.phoneDisplay, href: `tel:${site.phone}` },
    { label: c.emailLabel, value: site.email, href: `mailto:${site.email}` },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.contact, name: dict.meta.contactTitle, description: dict.meta.contactDescription, type: "ContactPage", mainEntity: orgId }),
          breadcrumbSchema(crumbs.map((x) => ({ name: x.name, path: x.href }))),
          faqSchema(pageFaqs.contact[lang]),
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8">
          <SectionHeading as="h1" eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
        </div>
      </PageHero>

      <section className="container-page grid gap-10 py-14 lg:grid-cols-[1.6fr_1fr]">
        <Suspense fallback={<ContactForm {...formProps} />}>
          <ContactFormFromQuery {...formProps} />
        </Suspense>

        <aside aria-labelledby="direct" className="card self-start bg-surface p-6">
          <h2 id="direct" className="font-display text-2xl font-bold text-ink uppercase">
            {c.direct}
          </h2>
          <a
            href={whatsappLink(dict.finalCta.whatsappMessage)}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 bg-[#1fa855] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1a9049]"
          >
            <WhatsAppIcon width={18} height={18} />
            {c.whatsapp}
          </a>
          <dl className="mt-6 space-y-4 text-sm">
            {channels.map(({ label, value, href }) => (
              <div key={label}>
                <dt className="text-muted">{label}</dt>
                <dd>
                  <a href={href} className="font-medium text-ink hover:text-red hover:underline" dir="ltr">
                    {value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 border-t border-line pt-4 text-sm text-body">{c.hours}</p>
        </aside>
      </section>

      <FaqSection eyebrow={dict.faq.eyebrow} title={dict.faq.title} faqs={pageFaqs.contact[lang]} surface />
    </>
  );
}
