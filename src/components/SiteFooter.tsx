import Link from "next/link";
import { certifications, cities } from "@/data";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localePath, routes } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (path: string) => localePath(locale, path);
  const linkClass = "text-sm text-white/65 transition hover:text-white";
  const headingClass = "mb-5 font-display text-lg font-bold tracking-wide text-white uppercase";
  return (
    <footer className="border-t-4 border-red bg-night">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <Link href={p(routes.home)} aria-label="GATech" className="inline-block">
            <Logo inverted />
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-white/65">{dict.footer.tagline}</p>
          <ul className="space-y-1.5 text-sm">
            <li>
              <a href={`tel:${site.phone}`} className={linkClass} dir="ltr">
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className={linkClass}>
                {site.email}
              </a>
            </li>
            <li>
              <a href={whatsappLink()} rel="noopener" target="_blank" className={linkClass}>
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <nav aria-labelledby="footer-certs">
          <h2 id="footer-certs" className={headingClass}>
            {dict.footer.certifications}
          </h2>
          <ul className="space-y-2">
            {certifications.map((c) => (
              <li key={c.slug}>
                <Link href={p(routes.certification(c.slug))} className={linkClass}>
                  <bdi>{c.shortName}</bdi>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-cities">
          <h2 id="footer-cities" className={headingClass}>
            {dict.footer.cities}
          </h2>
          <ul className="space-y-2">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link href={p(routes.city(c.slug))} className={linkClass}>
                  {c.name[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-company">
          <h2 id="footer-company" className={headingClass}>
            {dict.footer.company}
          </h2>
          <ul className="space-y-2">
            <li><Link href={p(routes.about)} className={linkClass}>{dict.nav.about}</Link></li>
            <li><Link href={p(routes.business)} className={linkClass}>{dict.nav.business}</Link></li>
            <li><Link href={p(routes.contact)} className={linkClass}>{dict.nav.contact}</Link></li>
            <li><Link href={p(routes.privacy)} className={linkClass}>{dict.footer.privacy}</Link></li>
            <li><Link href={p(routes.legal)} className={linkClass}>{dict.footer.legal}</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-night-line">
        <div className="container-page space-y-2 py-6 text-xs leading-relaxed text-white/45">
          <p>{dict.footer.trademarks}</p>
          <p>
            © {site.foundingYear} {site.legalName}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
