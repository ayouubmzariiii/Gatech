import Link from "next/link";
import { lang } from "next/root-params";
import { CertCard, btnPrimary } from "@/components/ui";
import { certifications } from "@/data";
import { getDictionary } from "@/dictionaries";
import { defaultLocale, isLocale } from "@/lib/i18n";
import { localePath, routes } from "@/lib/seo";

export default async function NotFound() {
  const value = await lang();
  const locale = value && isLocale(value) ? value : defaultLocale;
  const dict = getDictionary(locale);
  return (
    <section className="container-page py-24 text-center">
      <p className="text-sm font-semibold text-red">404</p>
      <h1 className="mt-3 text-4xl font-bold text-ink">{dict.notFound.title}</h1>
      <p className="mx-auto mt-4 max-w-xl text-body">{dict.notFound.text}</p>
      <Link href={localePath(locale, routes.home)} className={`${btnPrimary} mt-8`}>
        {dict.notFound.home}
      </Link>
      <div className="mt-16 grid gap-5 text-start sm:grid-cols-2 lg:grid-cols-3">
        {certifications
          .filter((c) => c.popular)
          .slice(0, 3)
          .map((c) => (
            <CertCard key={c.slug} cert={c} locale={locale} dict={dict} />
          ))}
      </div>
    </section>
  );
}
