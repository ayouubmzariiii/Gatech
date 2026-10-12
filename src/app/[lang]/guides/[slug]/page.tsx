import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CertCard, CtaBanner, FaqList, GuideCard, formatDate } from "@/components/ui";
import { getCertification } from "@/data";
import { getGuide, guides, sectionId } from "@/data/guides";
import { fmt, getDictionary } from "@/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { articleSchema, breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { absoluteUrl, localePath, ogImageUrl, pageMetadata, routes } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((lang) => guides.map((g) => ({ lang, slug: g.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/guides/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const guide = getGuide(slug);
  if (!isLocale(lang) || !guide) return {};
  return pageMetadata({
    locale: lang,
    path: routes.guide(slug),
    title: guide.seoTitle[lang],
    description: guide.seoDescription[lang],
    type: "article",
    publishedTime: guide.datePublished,
    modifiedTime: guide.dateModified,
    hasOwnImage: true,
  });
}

export default async function GuidePage({ params }: PageProps<"/[lang]/guides/[slug]">) {
  const { lang, slug } = await params;
  const guide = getGuide(slug);
  if (!isLocale(lang) || !guide) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const t = dict.guides;
  const path = routes.guide(guide.slug);
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(locale, routes.home) },
    { name: dict.nav.guides, href: localePath(locale, routes.guides) },
    { name: guide.title[locale], href: localePath(locale, path) },
  ];
  const sections = guide.sections[locale];
  const certs = guide.relatedCerts.map(getCertification).filter((c) => c !== undefined).slice(0, 3);
  const others = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            locale,
            path,
            name: guide.seoTitle[locale],
            description: guide.seoDescription[locale],
            mainEntity: `${absoluteUrl(localePath(locale, path))}#article`,
            dateModified: guide.dateModified,
          }),
          articleSchema(guide, locale, ogImageUrl(locale, path)),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          faqSchema(guide.faqs[locale]),
        )}
      />

      <header className="relative overflow-hidden border-b border-line bg-surface">
        <div aria-hidden className="bg-hatch absolute inset-y-0 end-0 hidden w-[30%] lg:block" />
        <div className="container-page relative py-12 sm:py-16">
          <Breadcrumbs items={crumbs} />
          <p className="eyebrow mt-10">{t.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl font-display text-[2.5rem] leading-[1.02] font-extrabold tracking-tight text-balance text-ink sm:text-6xl">
            {guide.title[locale]}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-pretty text-body">{guide.excerpt[locale]}</p>
          <p className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="font-semibold text-ink">{t.author}</span>
            <span>
              {t.updated} <time dateTime={guide.dateModified}>{formatDate(guide.dateModified, locale)}</time>
            </span>
            <span>{fmt(t.minutes, { n: guide.readingMinutes })}</span>
          </p>
        </div>
      </header>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <nav aria-labelledby="toc" className="border-t-4 border-red bg-surface p-5">
            <h2 id="toc" className="font-display text-lg font-bold tracking-wide text-ink uppercase">
              {t.toc}
            </h2>
            <ol className="mt-3 space-y-2 text-sm">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#${sectionId(i)}`} className="text-body hover:text-red">
                    {s.heading}
                  </a>
                </li>
              ))}
              <li>
                <a href="#guide-faq" className="text-body hover:text-red">
                  {t.faqTitle}
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 max-w-3xl">
          {sections.map((s, i) => (
            <section key={s.heading} aria-labelledby={sectionId(i)} className="mb-12 scroll-mt-28">
              <h2 id={sectionId(i)} className="scroll-mt-28 font-display text-3xl font-bold text-ink sm:text-4xl">
                {s.heading}
              </h2>
              <div className="prose-body mt-5 text-base sm:text-[1.0625rem]">
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 48)}>{p}</p>
                ))}
              </div>
              {s.list && (
                <ul className="mt-5 space-y-2.5">
                  {s.list.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-body">
                      <span aria-hidden className="mt-2.5 size-2 shrink-0 rotate-45 bg-red" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section aria-labelledby="guide-faq" className="scroll-mt-28">
            <h2 id="guide-faq" className="mb-6 font-display text-3xl font-bold text-ink sm:text-4xl">
              {t.faqTitle}
            </h2>
            <FaqList faqs={guide.faqs[locale]} />
          </section>

          <p className="mt-10 text-sm text-muted">
            {t.published} <time dateTime={guide.datePublished}>{formatDate(guide.datePublished, locale)}</time> ·{" "}
            <Link href={localePath(locale, routes.guides)} className="font-semibold text-ink hover:text-red">
              {dict.guides.viewAll}
            </Link>
          </p>
        </article>
      </div>

      {certs.length > 0 && (
        <section aria-labelledby="guide-certs" className="border-t border-line bg-surface py-16">
          <div className="container-page">
            <h2 id="guide-certs" className="font-display text-3xl font-bold text-ink sm:text-4xl">
              {t.relatedCerts}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {certs.map((c) => (
                <CertCard key={c.slug} cert={c} locale={locale} dict={dict} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section aria-labelledby="more-guides" className="container-page py-16">
        <h2 id="more-guides" className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {t.related}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((g) => (
            <GuideCard key={g.slug} guide={g} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
