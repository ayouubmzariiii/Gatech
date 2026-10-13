import Link from "next/link";
import type { ReactNode } from "react";
import Image from "next/image";
import type { BlogPost, Certification, Faq } from "@/data/types";
import { categoryLabels } from "@/data/blog";
import { offers, offersNote } from "@/data/offers";
import { fmt, type Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { formatPrice, localePath, routes } from "@/lib/seo";
import { whatsappLink } from "@/lib/site";
import { ArrowIcon, ChevronIcon, WhatsAppIcon } from "./icons";
import { VendorLogo } from "./VendorLogo";

export const btnPrimary =
  "cut inline-flex items-center justify-center gap-2 bg-red px-6 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-red-hover";
export const btnSecondary =
  "inline-flex items-center justify-center gap-2 border-2 border-ink px-6 py-3 text-sm font-bold tracking-wide text-ink uppercase transition hover:bg-ink hover:text-white";
export const btnGhostLight =
  "inline-flex items-center justify-center gap-2 border-2 border-white/40 px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:border-white hover:bg-white hover:text-ink";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  as: Tag = "h2",
  center = false,
  dark = false,
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
  center?: boolean;
  dark?: boolean;
  id?: string;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag
        id={id}
        className={`font-display leading-[1.02] font-bold tracking-tight text-balance ${dark ? "text-white" : "text-ink"} ${
          Tag === "h1" ? "text-[2.6rem] uppercase sm:text-6xl" : "text-[2.1rem] sm:text-5xl"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${dark ? "text-white/70" : "text-body"}`}>{subtitle}</p>
      )}
    </div>
  );
}

export function CertCard({ cert, locale, dict }: { cert: Certification; locale: Locale; dict: Dictionary }) {
  const href = localePath(locale, routes.certification(cert.slug));
  return (
    <article className="card group relative flex h-full flex-col transition duration-200 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_40px_-24px_rgb(17_19_24/0.45)]">
      <span aria-hidden className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-red transition duration-300 group-hover:scale-x-100 rtl:origin-right" />
      <div className="flex items-center justify-between gap-3 border-b border-line px-6 py-4">
        <span className="flex h-7 items-center">
          <VendorLogo vendor={cert.vendor} height={20} />
        </span>
        <span className="text-xs font-semibold tracking-wider text-muted uppercase">{dict.labels.levels[cert.level]}</span>
      </div>
      <div className="flex flex-1 flex-col px-6 pt-5 pb-6">
        <h3 className="font-display text-[1.75rem] leading-tight font-bold text-ink">
          <Link href={href} className="after:absolute after:inset-0">
            <bdi>{cert.shortName}</bdi>
          </Link>
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-body">{cert.tagline[locale]}</p>
        <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium text-muted">
          <span>
            {cert.durationDays} {dict.labels.days} · {cert.hours} h
          </span>
          {cert.voucherIncluded && <span className="text-ok">✓ {dict.labels.voucherIncluded}</span>}
        </p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <p className="leading-tight">
            <span className="block text-xs text-muted">{dict.labels.from}</span>
            <span className="font-display text-2xl font-bold text-ink">
              {formatPrice(cert.priceMAD, locale)} <span className="text-base">{dict.labels.currency}</span>
            </span>
          </p>
          <span className="cut flex size-10 items-center justify-center bg-ink text-white transition group-hover:bg-red">
            <ArrowIcon width={18} height={18} />
          </span>
        </div>
      </div>
    </article>
  );
}

export function Breadcrumbs({ items, dark = false }: { items: { name: string; href: string }[]; dark?: boolean }) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${dark ? "text-white/60" : "text-muted"}`}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={item.href} className="inline-flex items-center gap-1.5">
            {i > 0 && <span aria-hidden>/</span>}
            {i === items.length - 1 ? (
              <span aria-current="page" className={dark ? "text-white" : "text-ink"}>
                <bdi>{item.name}</bdi>
              </span>
            ) : (
              <Link href={item.href} className={dark ? "hover:text-white" : "hover:text-red"}>
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="border-t-2 border-ink">
      {faqs.map((f) => (
        <details key={f.q} className="group border-b border-line">
          <summary className="flex cursor-pointer items-center justify-between gap-4 py-5 text-start">
            <h3 className="text-base font-semibold text-ink group-open:text-red">{f.q}</h3>
            <span className="flex size-8 shrink-0 items-center justify-center border border-line-strong text-ink transition group-open:rotate-180 group-open:border-red group-open:bg-red group-open:text-white">
              <ChevronIcon width={16} height={16} />
            </span>
          </summary>
          <p className="pe-12 pb-6 leading-relaxed text-body">{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section aria-labelledby="final-cta" className="relative overflow-hidden bg-red">
      <div aria-hidden className="absolute inset-y-0 end-0 w-1/2 bg-[linear-gradient(135deg,transparent_0_40%,rgb(0_0_0/0.18)_40%_100%)] rtl:-scale-x-100" />
      <div className="container-page relative flex flex-col gap-8 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 id="final-cta" className="font-display text-4xl leading-none font-bold text-balance text-white uppercase sm:text-5xl">
            {dict.finalCta.title}
          </h2>
          <p className="mt-4 text-pretty text-white/85 sm:text-lg">{dict.finalCta.text}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href={localePath(locale, routes.contact)}
            className="cut inline-flex items-center justify-center gap-2 bg-ink px-6 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-black"
          >
            {dict.finalCta.primary}
            <ArrowIcon width={18} height={18} />
          </Link>
          <a href={whatsappLink(dict.finalCta.whatsappMessage)} target="_blank" rel="noopener" className={btnGhostLight}>
            <WhatsAppIcon width={18} height={18} />
            {dict.finalCta.whatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Inner-page header band: light, with an angular red accent on the end side. */
export function PageHero({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden border-b border-line bg-surface">
      <div aria-hidden className="bg-hatch absolute inset-y-0 end-0 hidden w-[38%] [clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)] lg:block rtl:[clip-path:polygon(0_0,82%_0,100%_100%,0_100%)]" />
      <div aria-hidden className="absolute end-0 bottom-0 hidden h-2 w-[38%] bg-red lg:block" />
      <div className="container-page relative py-12 sm:py-16">{children}</div>
    </div>
  );
}

export function CheckList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className={`flex gap-3 leading-relaxed ${dark ? "text-white/80" : "text-body"}`}>
          <span aria-hidden className="mt-2 size-2 shrink-0 rotate-45 bg-red" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const formatDate = (iso: string, locale: Locale) =>
  new Intl.DateTimeFormat({ fr: "fr-FR", ar: "ar-MA-u-nu-latn", en: "en-GB" }[locale], { dateStyle: "long" }).format(new Date(iso));

export function PostCard({ post, locale, dict, featured = false }: { post: BlogPost; locale: Locale; dict: Dictionary; featured?: boolean }) {
  const href = localePath(locale, routes.post(post.slug));
  // The featured post opens a listing: its title is the first sub-heading after the page <h1>.
  const Heading = featured ? "h2" : "h3";
  return (
    <article
      className={`card group relative flex h-full overflow-hidden transition duration-200 hover:-translate-y-1 hover:border-ink hover:shadow-[0_18px_40px_-24px_rgb(17_19_24/0.45)] ${
        featured ? "flex-col lg:flex-row" : "flex-col"
      }`}
    >
      <div className={`relative overflow-hidden bg-surface ${featured ? "aspect-[16/9] lg:aspect-auto lg:w-[58%]" : "aspect-[16/9]"}`}>
        <Image
          src={post.cover.src}
          alt={post.cover.alt[locale]}
          width={post.cover.width}
          height={post.cover.height}
          sizes={featured ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          priority={featured}
          quality={60}
        />
        <span className="absolute start-4 top-4 bg-red px-2.5 py-1 text-[0.6875rem] font-bold tracking-wider text-white uppercase">
          {categoryLabels[post.category][locale]}
        </span>
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-7 lg:p-10" : "p-6"}`}>
        <p className="text-xs font-semibold tracking-wider text-muted uppercase">
          <time dateTime={post.datePublished}>{formatDate(post.datePublished, locale)}</time> · {fmt(dict.blog.minutes, { n: post.readingMinutes })}
        </p>
        <Heading className={`mt-3 font-display leading-tight font-bold text-ink group-hover:text-red ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
          <Link href={href} className="after:absolute after:inset-0">
            {post.title[locale]}
          </Link>
        </Heading>
        <p className={`mt-3 leading-relaxed text-body ${featured ? "text-base" : "line-clamp-3 text-sm"}`}>{post.excerpt[locale]}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-bold tracking-wide text-ink uppercase group-hover:text-red">
          {dict.blog.readMore}
          <ArrowIcon width={16} height={16} />
        </span>
      </div>
    </article>
  );
}

/** FAQ block with its own heading, used on listing and service pages. */
export function FaqSection({ id = "faq", title, eyebrow, faqs, surface = false }: { id?: string; title: string; eyebrow?: string; faqs: Faq[]; surface?: boolean }) {
  return (
    <section aria-labelledby={id} className={surface ? "bg-surface py-20" : "py-20"}>
      <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.7fr]">
        <SectionHeading id={id} eyebrow={eyebrow} title={title} />
        <FaqList faqs={faqs} />
      </div>
    </section>
  );
}

/** Offers band (home, catalog). */
export function OffersBand({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section aria-labelledby="offers" className="border-y border-line bg-surface py-16">
      <div className="container-page">
        <SectionHeading id="offers" title={dict.cert.offersTitle} subtitle={dict.cert.offersSubtitle} />
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((o) => (
            <li key={o.id} className="card flex flex-col border-t-4 border-t-red p-6">
              <span className="font-display text-4xl leading-none font-extrabold text-red">{o.badge[locale]}</span>
              <h3 className="mt-4 font-bold text-ink">{o.title[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{o.text[locale]}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-xs text-muted">{offersNote[locale]}</p>
      </div>
    </section>
  );
}

/** Compact offers list for the certification price card. */
export function OffersList({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="mt-6 border-t border-line pt-6">
      <p className="font-display text-lg font-bold text-ink uppercase">{dict.cert.offersTitle}</p>
      <ul className="mt-3 space-y-2.5">
        {offers.map((o) => (
          <li key={o.id} className="flex items-start gap-3 text-sm">
            <span className="cut min-w-12 shrink-0 bg-red px-1.5 py-0.5 text-center text-xs font-bold text-white">{o.badge[locale]}</span>
            <span className="text-body">
              <span className="font-semibold text-ink">{o.title[locale]}</span>
              <span className="block text-xs text-muted">{o.text[locale]}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[0.6875rem] text-muted">{offersNote[locale]}</p>
    </div>
  );
}
