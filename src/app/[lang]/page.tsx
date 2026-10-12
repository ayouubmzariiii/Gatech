import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { CertCard, CheckList, CtaBanner, FaqList, SectionHeading, btnPrimary, btnSecondary } from "@/components/ui";
import { VendorLogo } from "@/components/VendorLogo";
import { certifications, cities, getCertification, vendors } from "@/data";
import type { Certification } from "@/data/types";
import { getDictionary, type Dictionary } from "@/dictionaries";
import { isLocale, type Locale } from "@/lib/i18n";
import { faqSchema, graph } from "@/lib/schema";
import { formatPrice, localePath, pageMetadata, routes } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const dict = getDictionary(lang);
  return pageMetadata({
    locale: lang,
    path: routes.home,
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
  });
}

/** Wraps the highlighted part of the title in red. */
function Highlighted({ text, highlight }: { text: string; highlight: string }) {
  const i = text.indexOf(highlight);
  if (i < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, i)}
      <span className="text-red">{highlight}</span>
      {text.slice(i + highlight.length)}
    </>
  );
}

/** Hero visual: the flagship course as a product card, with two others stacked behind it. */
function HeroCards({ locale, dict, featured, back }: { locale: Locale; dict: Dictionary; featured: Certification; back: Certification[] }) {
  const p = (path: string) => localePath(locale, path);
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div aria-hidden className="cut-lg absolute -inset-x-4 top-10 -bottom-6 bg-red sm:-end-8 sm:start-10" />
      <div aria-hidden className="bg-hatch absolute -start-6 -top-6 h-40 w-40" />

      {back.map((cert, i) => (
        <Link
          key={cert.slug}
          href={p(routes.certification(cert.slug))}
          className={`absolute z-0 hidden w-[68%] border border-line bg-white px-5 py-3.5 shadow-lg transition hover:-translate-y-1 sm:block ${
            i === 0 ? "-end-3 top-3" : "-end-9 -top-11"
          }`}
        >
          <span className="flex items-center justify-between gap-3">
            <VendorLogo vendor={cert.vendor} height={16} />
            <bdi className="font-display text-lg font-bold text-ink">{cert.shortName}</bdi>
          </span>
        </Link>
      ))}

      <article className="cut-lg relative z-10 mt-20 bg-night p-7 text-white shadow-2xl sm:p-9">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex bg-white px-3 py-2">
            <VendorLogo vendor={featured.vendor} height={20} />
          </span>
          <span className="bg-red px-2.5 py-1 text-[0.6875rem] font-bold tracking-wider uppercase">{dict.hero.panelTitle}</span>
        </div>
        <h2 className="mt-7 font-display text-6xl leading-none font-extrabold">
          <bdi>{featured.shortName}</bdi>
        </h2>
        <p className="mt-2 text-sm text-white/60" dir="ltr">
          {featured.name}
        </p>
        <dl className="mt-7 grid grid-cols-3 border-y border-night-line text-center">
          {[
            [dict.labels.duration, `${featured.durationDays} ${dict.labels.days}`],
            [dict.labels.examCode, featured.examCode],
            [dict.labels.level, dict.labels.levels[featured.level]],
          ].map(([k, v], i) => (
            <div key={k} className={`flex flex-col gap-1 py-4 ${i ? "border-s border-night-line" : ""}`}>
              <dt className="text-[0.6875rem] tracking-wider text-white/50 uppercase">{k}</dt>
              <dd className="font-display text-xl font-bold">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-7 flex items-end justify-between gap-4">
          <p className="leading-tight">
            <span className="block text-xs text-white/50">{dict.labels.from}</span>
            <span className="font-display text-4xl font-bold">
              {formatPrice(featured.priceMAD, locale)} <span className="text-xl">{dict.labels.currency}</span>
            </span>
            <span className="mt-1 block text-xs font-semibold text-[#3ddc97]">✓ {dict.labels.voucherIncluded}</span>
          </p>
          <Link href={p(routes.certification(featured.slug))} className={btnPrimary}>
            {dict.labels.learnMore}
          </Link>
        </div>
      </article>
    </div>
  );
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const p = (path: string) => localePath(locale, path);
  const ceh = getCertification("ceh-v13")!;
  const back = ["cissp", "comptia-security-plus"].map((s) => getCertification(s)!);

  return (
    <>
      <JsonLd data={graph(faqSchema(dict.faq.items))} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div aria-hidden className="absolute inset-y-0 end-0 hidden w-[44%] bg-surface lg:block" />
        <div className="container-page relative grid items-center gap-16 pt-14 pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:pb-28">
          <div>
            <p className="eyebrow">{dict.hero.trust[0]}</p>
            <h1
              className={`mt-6 font-display font-extrabold tracking-tight text-balance text-ink uppercase ${
                locale === "ar" ? "text-4xl leading-[1.25] sm:text-[3.25rem]" : "text-[2.75rem] leading-[0.98] sm:text-7xl"
              }`}
            >
              <Highlighted text={dict.hero.title} highlight={dict.hero.highlight} />
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-body">{dict.hero.subtitle}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href={p(routes.certifications)} className={btnPrimary}>
                {dict.hero.primaryCta}
                <ArrowIcon width={18} height={18} />
              </Link>
              <Link href={p(routes.contact)} className={btnSecondary}>
                {dict.hero.secondaryCta}
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-ink">
              {dict.hero.trust.slice(1).map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span aria-hidden className="size-2 rotate-45 bg-red" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <HeroCards locale={locale} dict={dict} featured={ceh} back={back} />
        </div>
      </section>

      {/* Vendor logos */}
      <section aria-labelledby="vendors" className="border-y border-line">
        <div className="container-page flex flex-col items-center gap-6 py-8 lg:flex-row lg:gap-10">
          <h2 id="vendors" className="shrink-0 text-center text-xs font-bold tracking-wider text-muted uppercase lg:max-w-52 lg:text-start">
            {dict.hero.vendors}
          </h2>
          <ul className="grid w-full grid-cols-3 items-center gap-y-6 sm:grid-cols-6 lg:border-s lg:border-line">
            {vendors.map((v) => (
              <li key={v} className="flex justify-center">
                <VendorLogo vendor={v} height={26} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CEH v13 spotlight */}
      <section aria-labelledby="spotlight" className="relative overflow-hidden bg-night py-20 sm:py-28">
        <div aria-hidden className="absolute -end-48 -top-48 size-[36rem] rotate-45 border-[48px] border-red/10" />
        <div className="container-page relative grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading id="spotlight" eyebrow={dict.spotlight.eyebrow} title={dict.spotlight.title} subtitle={dict.spotlight.text} dark />
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <Link href={p(routes.certification(ceh.slug))} className={btnPrimary}>
                {dict.spotlight.cta}
                <ArrowIcon width={18} height={18} />
              </Link>
              <p className="text-white/70">
                {dict.labels.from}{" "}
                <span className="font-display text-2xl font-bold text-white">
                  {formatPrice(ceh.priceMAD, locale)} {dict.labels.currency}
                </span>
              </p>
            </div>
          </div>
          <ol className="relative space-y-3">
            {dict.spotlight.phases.map((phase, i) => (
              <li key={phase.title} className="group flex items-center gap-5 border border-night-line bg-night-2 p-5 transition hover:border-red">
                <span className="font-display text-4xl leading-none font-extrabold text-red">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-display text-xl font-bold tracking-wide text-white uppercase">{phase.title}</span>
                  <span className="text-sm text-white/60">{phase.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Catalogue */}
      <section aria-labelledby="popular" className="container-page py-20 sm:py-28">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading id="popular" eyebrow={dict.popular.eyebrow} title={dict.popular.title} subtitle={dict.popular.subtitle} />
          <Link href={p(routes.certifications)} className={`${btnSecondary} shrink-0`}>
            {dict.popular.viewAll}
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.slice(1, 7).map((cert) => (
            <CertCard key={cert.slug} cert={cert} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      {/* Career paths */}
      <section aria-labelledby="paths" className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading id="paths" eyebrow={dict.paths.eyebrow} title={dict.paths.title} subtitle={dict.paths.subtitle} />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {dict.paths.items.map((path) => (
              <div key={path.title} className="flex flex-col border-t-4 border-red bg-white p-7 shadow-[0_1px_0_rgb(17_19_24/0.06)]">
                <h3 className="font-display text-2xl font-bold text-ink uppercase">{path.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{path.text}</p>
                <ol className="relative mt-6 space-y-2 before:absolute before:start-[0.9rem] before:top-3 before:bottom-3 before:w-px before:bg-line-strong">
                  {path.certs.map((slug, i) => {
                    const cert = getCertification(slug);
                    if (!cert) return null;
                    return (
                      <li key={slug} className="relative">
                        <Link href={p(routes.certification(slug))} className="group flex items-center gap-4 py-1.5">
                          <span className="relative flex size-7 shrink-0 items-center justify-center bg-ink text-xs font-bold text-white transition group-hover:bg-red">
                            {i + 1}
                          </span>
                          <span className="font-semibold text-ink group-hover:text-red">
                            <bdi>{cert.shortName}</bdi>
                          </span>
                          <span className="ms-auto text-xs text-muted">{dict.labels.levels[cert.level]}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section aria-labelledby="why" className="container-page py-20 sm:py-28">
        <SectionHeading id="why" eyebrow={dict.why.eyebrow} title={dict.why.title} />
        <div className="mt-14 grid border-s border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {dict.why.items.map((item, i) => (
            <div key={item.title} className="group border-e border-b border-line p-7 transition hover:bg-surface">
              <span className="font-display text-5xl leading-none font-extrabold text-line-strong transition group-hover:text-red">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process" className="bg-surface py-20 sm:py-28">
        <div className="container-page">
          <SectionHeading id="process" eyebrow={dict.process.eyebrow} title={dict.process.title} />
          <ol className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            <span aria-hidden className="absolute inset-x-0 top-6 hidden h-0.5 bg-line-strong lg:block" />
            {dict.process.steps.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="cut relative flex size-12 items-center justify-center bg-red font-display text-xl font-bold text-white">{i + 1}</span>
                <h3 className="mt-5 font-display text-2xl font-bold text-ink uppercase">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Business */}
      <section aria-labelledby="business" className="container-page py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading id="business" eyebrow={dict.business.eyebrow} title={dict.business.title} subtitle={dict.business.text} />
            <Link href={p(routes.business)} className={`${btnPrimary} mt-9`}>
              {dict.business.cta}
              <ArrowIcon width={18} height={18} />
            </Link>
          </div>
          <div className="cut-lg bg-night p-8 sm:p-10">
            <div className="text-lg">
              <CheckList items={dict.business.points} dark />
            </div>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section aria-labelledby="cities" className="border-t border-line bg-surface py-16">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="cities" className="font-display text-3xl font-bold text-ink uppercase">
              {dict.citiesSection.title}
            </h2>
            <p className="mt-2 text-body">{dict.citiesSection.subtitle}</p>
          </div>
          <ul className="flex flex-wrap gap-2.5">
            {cities.map((city) => (
              <li key={city.slug}>
                <Link
                  href={p(routes.city(city.slug))}
                  className="inline-flex border-2 border-ink bg-white px-4 py-2 text-sm font-bold tracking-wide text-ink uppercase transition hover:border-red hover:bg-red hover:text-white"
                >
                  {city.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq" className="container-page py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.7fr]">
          <div>
            <SectionHeading id="faq" eyebrow={dict.faq.eyebrow} title={dict.faq.title} />
            <a href={whatsappLink(dict.finalCta.whatsappMessage)} target="_blank" rel="noopener" className={`${btnSecondary} mt-8`}>
              <WhatsAppIcon width={18} height={18} />
              {dict.finalCta.whatsapp}
            </a>
          </div>
          <FaqList faqs={dict.faq.items} />
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
