import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Breadcrumbs, CertCard, CheckList, CtaBanner, FaqList, PageHero, SectionHeading } from "@/components/ui";
import { cities, getCertification, getCity } from "@/data";
import { getDictionary } from "@/dictionaries";
import { isLocale, locales } from "@/lib/i18n";
import { breadcrumbSchema, cityServiceSchema, faqSchema, graph, webPageSchema } from "@/lib/schema";
import { localePath, pageMetadata, routes } from "@/lib/seo";

/** Only the slugs generated at build time exist; anything else is a 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) => cities.map((c) => ({ lang, city: c.slug })));
}

export async function generateMetadata({ params }: PageProps<"/[lang]/maroc/[city]">): Promise<Metadata> {
  const { lang, city: slug } = await params;
  const city = getCity(slug);
  if (!isLocale(lang) || !city) return {};
  return pageMetadata({
    locale: lang,
    path: routes.city(slug),
    title: city.seoTitle[lang],
    description: city.seoDescription[lang],
    hasOwnImage: true,
  });
}

export default async function CityPage({ params }: PageProps<"/[lang]/maroc/[city]">) {
  const { lang, city: slug } = await params;
  const city = getCity(slug);
  if (!isLocale(lang) || !city) notFound();
  const dict = getDictionary(lang);
  const crumbs = [
    { name: dict.breadcrumbs.home, href: localePath(lang, routes.home) },
    { name: dict.nav.cities, href: localePath(lang, routes.cities) },
    { name: city.name[lang], href: localePath(lang, routes.city(city.slug)) },
  ];
  const featured = city.featuredCerts.map(getCertification).filter((c) => c !== undefined);

  return (
    <>
      <JsonLd
        data={graph(
          webPageSchema({ locale: lang, path: routes.city(city.slug), name: city.seoTitle[lang], description: city.seoDescription[lang] }),
          cityServiceSchema(city, lang),
          breadcrumbSchema(crumbs.map((c) => ({ name: c.name, path: c.href }))),
          faqSchema(city.faqs[lang]),
        )}
      />
      <PageHero>
        <Breadcrumbs items={crumbs} />
        <div className="mt-8">
          <SectionHeading as="h1" eyebrow={`${city.name[lang]} · ${city.region[lang]}`} title={city.heading[lang]} />
        </div>
      </PageHero>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-[1fr_20rem]">
        <div className="prose-body max-w-3xl text-base sm:text-[1.0625rem]">
          {city.intro[lang].map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
        </div>
        <aside aria-labelledby="sectors" className="card self-start bg-surface p-6">
          <h2 id="sectors" className="mb-4 font-semibold text-ink">
            {dict.city.sectors}
          </h2>
          <div className="text-sm">
            <CheckList items={city.sectors[lang]} />
          </div>
        </aside>
      </div>

      <section aria-labelledby="featured" className="border-y border-line bg-surface py-16">
        <div className="container-page">
          <SectionHeading id="featured" title={dict.city.featured} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((cert) => (
              <CertCard key={cert.slug} cert={cert} locale={lang} dict={dict} />
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="city-faq" className="container-page py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr]">
          <SectionHeading id="city-faq" title={dict.faq.eyebrow} />
          <FaqList faqs={city.faqs[lang]} />
        </div>
      </section>

      <nav aria-labelledby="other-cities" className="container-page">
        <h2 id="other-cities" className="font-semibold text-ink">
          {dict.city.otherCities}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {cities
            .filter((c) => c.slug !== city.slug)
            .map((c) => (
              <li key={c.slug}>
                <Link
                  href={localePath(lang, routes.city(c.slug))}
                  className="inline-flex border border-line-strong px-4 py-2 text-sm font-medium text-ink hover:border-red hover:text-red"
                >
                  {c.name[lang]}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <CtaBanner locale={lang} dict={dict} />
    </>
  );
}
