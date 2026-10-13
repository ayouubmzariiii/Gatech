import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsAppIcon } from "@/components/icons";
import { JsonLd } from "@/components/JsonLd";
import { LogoMark } from "@/components/Logo";
import { Breadcrumbs, CertCard, CtaBanner, FaqList, PostCard, formatDate } from "@/components/ui";
import { getCertification } from "@/data";
import { categoryLabels, getPost, posts, relatedPosts, sectionId } from "@/data/blog";
import type { BlogImage } from "@/data/types";
import { fmt, getDictionary } from "@/dictionaries";
import { isLocale, locales, type Locale } from "@/lib/i18n";
import { articleSchema, breadcrumbSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { absoluteUrl, localePath, pageMetadata, routes } from "@/lib/seo";

export function generateStaticParams() {
  return locales.flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!isLocale(lang) || !post) return {};
  return pageMetadata({
    locale: lang,
    path: routes.post(slug),
    title: post.seoTitle[lang],
    description: post.seoDescription[lang],
    type: "article",
    publishedTime: post.datePublished,
    modifiedTime: post.dateModified,
    image: absoluteUrl(`/blog/${post.slug}/og.jpg`),
  });
}

function Credit({ image, label }: { image: BlogImage; label: string }) {
  return (
    <>
      {label} :{" "}
      <a href={image.credit.url} target="_blank" rel="noopener nofollow" className="underline hover:text-red">
        {image.credit.author}
      </a>{" "}
      / Unsplash
    </>
  );
}

export default async function PostPage({ params }: PageProps<"/[lang]/blog/[slug]">) {
  const { lang, slug } = await params;
  const post = getPost(slug);
  if (!isLocale(lang) || !post) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);
  const t = dict.blog;
  const path = routes.post(post.slug);
  const url = absoluteUrl(localePath(locale, path));
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(locale, routes.home) },
    { name: dict.nav.blog, href: localePath(locale, routes.blog) },
    { name: categoryLabels[post.category][locale], href: localePath(locale, routes.blogCategory(post.category)) },
    { name: post.title[locale], href: localePath(locale, path) },
  ];
  const sections = post.sections[locale];
  const certs = post.relatedCerts.map(getCertification).filter((c) => c !== undefined).slice(0, 3);
  const shareText = encodeURIComponent(`${post.title[locale]} ${url}`);
  const shares = [
    { label: "WhatsApp", href: `https://wa.me/?text=${shareText}` },
    { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({
            locale,
            path,
            name: post.seoTitle[locale],
            description: post.seoDescription[locale],
            mainEntity: `${url}#article`,
            dateModified: post.dateModified,
          }),
          articleSchema(post, locale),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          faqSchema(post.faqs[locale]),
        )}
      />

      <header className="border-b border-line bg-surface">
        <div className="container-page pt-10 pb-12 sm:pb-14">
          <Breadcrumbs items={crumbs} />
          <div className="mx-auto mt-10 max-w-4xl">
            <Link href={localePath(locale, routes.blogCategory(post.category))} className="eyebrow hover:text-red-hover">
              {categoryLabels[post.category][locale]}
            </Link>
            <h1 className="mt-5 font-display text-[2.5rem] leading-[1.02] font-extrabold tracking-tight text-balance text-ink sm:text-6xl">
              {post.title[locale]}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-pretty text-body">{post.excerpt[locale]}</p>
            <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
              <span className="flex items-center gap-2 font-semibold text-ink">
                <LogoMark size={22} />
                {t.author}
              </span>
              <span>
                {t.updated} <time dateTime={post.dateModified}>{formatDate(post.dateModified, locale)}</time>
              </span>
              <span>{fmt(t.minutes, { n: post.readingMinutes })}</span>
            </p>
          </div>
        </div>
      </header>

      <figure className="container-page -mt-px">
        <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden bg-surface">
          <Image
            src={post.cover.src}
            alt={post.cover.alt[locale]}
            fill
            priority
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mx-auto mt-2 max-w-5xl text-end text-xs text-muted">
          <Credit image={post.cover} label={t.photo} />
        </figcaption>
      </figure>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-[15rem_1fr] lg:gap-16 xl:grid-cols-[16rem_1fr_12rem]">
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
                <a href="#post-faq" className="text-body hover:text-red">
                  {t.faqTitle}
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 max-w-3xl">
          {sections.map((s, i) => (
            <div key={s.heading}>
              <section aria-labelledby={sectionId(i)} className="mb-12">
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
              {post.figure && post.figure.afterSection === i && (
                <figure className="mb-12">
                  <Image
                    src={post.figure.src}
                    alt={post.figure.alt[locale]}
                    width={post.figure.width}
                    height={post.figure.height}
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="h-auto w-full"
                  />
                  <figcaption className="mt-2 text-xs text-muted">
                    {post.figure.alt[locale]} — <Credit image={post.figure} label={t.photo} />
                  </figcaption>
                </figure>
              )}
            </div>
          ))}

          <section aria-labelledby="post-faq">
            <h2 id="post-faq" className="mb-6 scroll-mt-28 font-display text-3xl font-bold text-ink sm:text-4xl">
              {t.faqTitle}
            </h2>
            <FaqList faqs={post.faqs[locale]} />
          </section>

          <div className="mt-12 flex gap-5 border-t-2 border-ink pt-8">
            <LogoMark size={48} />
            <div>
              <p className="font-bold text-ink">{t.author}</p>
              <p className="mt-1 text-sm leading-relaxed text-body">{t.authorBio}</p>
              <p className="mt-3 text-xs text-muted">
                {t.published} <time dateTime={post.datePublished}>{formatDate(post.datePublished, locale)}</time>
              </p>
            </div>
          </div>
        </article>

        <aside aria-label={t.share} className="hidden xl:block xl:sticky xl:top-28 xl:self-start">
          <p className="text-xs font-bold tracking-wider text-muted uppercase">{t.share}</p>
          <ul className="mt-3 space-y-2">
            {shares.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener nofollow"
                  className="flex items-center gap-2 border border-line-strong px-3 py-2 text-sm font-semibold text-ink transition hover:border-red hover:text-red"
                >
                  {s.label === "WhatsApp" && <WhatsAppIcon width={16} height={16} />}
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <div className="container-page -mt-6 pb-12 xl:hidden">
        <p className="text-xs font-bold tracking-wider text-muted uppercase">{t.share}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {shares.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener nofollow"
                className="flex items-center gap-2 border border-line-strong px-3 py-2 text-sm font-semibold text-ink hover:border-red hover:text-red"
              >
                {s.label === "WhatsApp" && <WhatsAppIcon width={16} height={16} />}
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {certs.length > 0 && (
        <section aria-labelledby="post-certs" className="border-t border-line bg-surface py-16">
          <div className="container-page">
            <h2 id="post-certs" className="font-display text-3xl font-bold text-ink sm:text-4xl">
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

      <section aria-labelledby="related-posts" className="container-page py-16">
        <h2 id="related-posts" className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {t.related}
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {relatedPosts(post).map((p) => (
            <PostCard key={p.slug} post={p} locale={locale} dict={dict} />
          ))}
        </div>
      </section>

      <CtaBanner locale={locale} dict={dict} />
    </>
  );
}
