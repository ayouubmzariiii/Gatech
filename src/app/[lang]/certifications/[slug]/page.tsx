import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CertCard, CheckList, CtaBanner, FaqList, OffersList, PostCard, btnPrimary, btnSecondary } from "@/components/ui";
import { postsForCert } from "@/data/blog";
import { VendorLogo } from "@/components/VendorLogo";
import { certifications, getCertification } from "@/data";
import type { Certification } from "@/data/types";
import { fmt, getDictionary } from "@/dictionaries";
import { fixBidi } from "@/lib/bidi";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { breadcrumbSchema, courseSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { absoluteUrl, formatPrice, localePath, pageMetadata, routes } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return locales.flatMap((lang) => certifications.map((c) => ({ lang, slug: c.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/certifications/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const cert = getCertification(slug);
  if (!isLocale(lang) || !cert) return {};
  return pageMetadata({
    locale: lang,
    path: routes.certification(slug),
    title: cert.seoTitle[lang],
    description: cert.seoDescription[lang],
    hasOwnImage: true,
  });
}

/** Certifications sharing the category first, then the rest, excluding the current one. */
function related(cert: Certification) {
  const others = certifications.filter((c) => c.slug !== cert.slug);
  return [...others.filter((c) => c.category === cert.category), ...others.filter((c) => c.category !== cert.category)].slice(0, 3);
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="mb-6 font-display text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export default async function CertificationPage({ params }: PageProps<"/[lang]/certifications/[slug]">) {
  const { lang, slug } = await params;
  const cert = getCertification(slug);
  if (!isLocale(lang) || !cert) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const t = dict.cert;
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(locale, routes.home) },
    { name: dict.nav.certifications, href: localePath(locale, routes.certifications) },
    { name: cert.shortName, href: localePath(locale, routes.certification(cert.slug)) },
  ];
  const contactHref = `${localePath(locale, routes.contact)}?certification=${cert.slug}`;
  const waHref = whatsappLink(fmt(t.whatsappMessage, { name: cert.shortName }));

  const facts = [
    { label: dict.labels.vendor, value: cert.vendor },
    { label: dict.labels.examCode, value: cert.examCode },
    { label: dict.labels.duration, value: `${cert.durationDays} ${dict.labels.days} · ${cert.hours} ${dict.labels.hours}` },
    { label: dict.labels.level, value: dict.labels.levels[cert.level] },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            locale,
            path: routes.certification(cert.slug),
            name: cert.seoTitle[locale],
            description: cert.seoDescription[locale],
            type: "ItemPage",
            mainEntity: `${absoluteUrl(localePath(locale, routes.certification(cert.slug)))}#course`,
          }),
          courseSchema(cert, locale),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          faqSchema(cert.faqs[locale]),
        )}
      />

      <div className="relative overflow-hidden bg-night text-white">
        <div aria-hidden className="absolute -end-56 -top-56 size-[38rem] rotate-45 border-[56px] border-red/10" />
        <div className="container-page relative pt-10 pb-14 sm:pb-20 lg:pe-[25rem]">
          <Breadcrumbs items={crumbs} dark />
          <span className="mt-10 inline-flex bg-white px-3 py-2">
            <VendorLogo vendor={cert.vendor} height={24} />
          </span>
          <h1 className="mt-6 font-display text-[2.75rem] leading-[0.98] font-extrabold tracking-tight text-balance sm:text-7xl">
            {locale === "ar" ? fixBidi(fmt(t.h1, { name: cert.shortName })) : fmt(t.h1, { name: cert.shortName })}
          </h1>
          <p className="mt-3 text-sm text-white/55" dir="ltr">
            {cert.name}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/80">{cert.tagline[locale]}</p>
          <dl className="mt-10 grid max-w-3xl grid-cols-2 border-t border-night-line sm:grid-cols-4">
            {facts.map(({ label, value }, i) => (
              <div key={label} className={`flex flex-col gap-1 py-5 sm:pe-4 ${i ? "sm:border-s sm:border-night-line sm:ps-5" : ""}`}>
                <dt className="text-[0.6875rem] font-semibold tracking-wider text-white/50 uppercase">{label}</dt>
                <dd className="font-display text-xl font-bold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="container-page grid gap-12 pb-12 lg:grid-cols-[1fr_22rem] lg:gap-16">
        <div className="min-w-0 space-y-16 pt-14">
          <Section id="overview" title={t.overview}>
            <div className="prose-body text-base sm:text-[1.0625rem]">
              {cert.overview[locale].map((para) => (
                <p key={para.slice(0, 40)}>{para}</p>
              ))}
            </div>
          </Section>

          <div className="grid gap-12 md:grid-cols-2">
            <Section id="audience" title={t.audience}>
              <CheckList items={cert.audience[locale]} />
            </Section>
            <Section id="prerequisites" title={t.prerequisites}>
              <CheckList items={cert.prerequisites[locale]} />
            </Section>
          </div>

          <Section id="outcomes" title={t.outcomes}>
            <CheckList items={cert.outcomes[locale]} />
          </Section>

          <Section id="modules" title={t.modules}>
            <ol className="grid border-s border-t border-line sm:grid-cols-2">
              {cert.modules[locale].map((item, i) => (
                <li key={item} className="flex gap-4 border-e border-b border-line px-5 py-4 text-sm text-ink">
                  <span className="font-display text-lg leading-5 font-bold text-red tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  {item}
                </li>
              ))}
            </ol>
          </Section>

          <Section id="exam" title={t.exam}>
            <div className="border-t-2 border-ink">
              <table className="w-full text-start text-sm">
                <caption className="sr-only">
                  {t.exam} {cert.shortName}
                </caption>
                <tbody>
                  {[
                    [dict.labels.examCode, cert.examCode],
                    [t.examFormat, cert.exam.format[locale]],
                    [t.examDuration, cert.exam.duration[locale]],
                    [t.passingScore, cert.exam.passingScore[locale]],
                    [t.validity, cert.exam.validity[locale]],
                  ].map(([k, v]) => (
                    <tr key={k} className="border-b border-line">
                      <th scope="row" className="w-1/3 py-4 pe-4 text-start text-xs font-bold tracking-wider text-muted uppercase">
                        {k}
                      </th>
                      <td className="py-4 font-medium text-ink">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>

          <Section id="careers" title={t.careers}>
            <CheckList items={cert.careers[locale]} />
          </Section>

          <Section id="faq" title={t.faq}>
            <FaqList faqs={cert.faqs[locale]} />
          </Section>
        </div>

        <aside aria-label={t.included} className="lg:sticky lg:top-24 lg:-mt-72 lg:self-start">
          <div className="relative border border-line bg-white shadow-[0_24px_60px_-30px_rgb(17_19_24/0.5)]">
            <div className="h-1.5 bg-red" />
            <div className="p-7">
              <p className="text-xs font-bold tracking-wider text-muted uppercase">{dict.labels.from}</p>
              <p className="mt-1 font-display text-5xl leading-none font-extrabold text-ink">
                {formatPrice(cert.priceMAD, locale)} <span className="text-2xl">{dict.labels.currency}</span>
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted">{t.priceNote}</p>
              <div className="mt-6 flex flex-col gap-2.5">
                <Link href={contactHref} className={btnPrimary}>
                  {dict.labels.enroll}
                </Link>
                <a href={waHref} target="_blank" rel="noopener" className={btnSecondary}>
                  <WhatsAppIcon width={18} height={18} />
                  {t.askWhatsapp}
                </a>
              </div>
              <p className="mt-7 border-t border-line pt-6 font-display text-lg font-bold text-ink uppercase">{t.included}</p>
              <div className="mt-4 text-sm">
                <CheckList items={t.includedItems.filter((_, i) => cert.voucherIncluded || i !== 1)} />
                {!cert.voucherIncluded && <p className="mt-3 text-muted">{t.voucherNotIncluded}</p>}
              </div>
              <OffersList locale={locale} dict={dict} />
              <p className="mt-6 bg-surface px-4 py-3 text-xs leading-relaxed text-body">{t.sessions}</p>
            </div>
          </div>
        </aside>
      </div>

      <section aria-labelledby="related" className="border-t border-line bg-surface py-16">
        <div className="container-page">
          <h2 id="related" className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {t.related}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related(cert).map((c) => (
              <CertCard key={c.slug} cert={c} locale={locale} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      {postsForCert(cert.slug).length > 0 && (
        <section aria-labelledby="cert-posts" className="container-page py-16">
          <h2 id="cert-posts" className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {dict.blog.related}
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {postsForCert(cert.slug)
              .slice(0, 3)
              .map((post) => (
                <PostCard key={post.slug} post={post} locale={locale} dict={dict} />
              ))}
          </div>
        </section>
      )}

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
