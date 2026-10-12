import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/dictionaries";
import { localePath, routes } from "@/lib/seo";
import { Breadcrumbs, PageHero } from "./ui";

export function LegalPage({
  locale,
  dict,
  title,
  path,
  sections,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  path: string;
  sections: { h: string; p: string }[];
}) {
  return (
    <>
      <PageHero>
        <Breadcrumbs
          items={[
            { name: dict.breadcrumbs.home, href: localePath(locale, routes.home) },
            { name: title, href: localePath(locale, path) },
          ]}
        />
        <h1 className="mt-8 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{title}</h1>
      </PageHero>
      <article className="container-page py-14">
        <div className="prose-body max-w-3xl">
        {sections.map((s) => (
          <section key={s.h}>
            <h2>{s.h}</h2>
            <p>{s.p}</p>
          </section>
        ))}
        </div>
      </article>
    </>
  );
}
