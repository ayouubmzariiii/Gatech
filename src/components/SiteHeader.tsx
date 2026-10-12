import Link from "next/link";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localePath, routes } from "@/lib/seo";
import { site, whatsappLink } from "@/lib/site";
import { HeaderNav } from "./HeaderNav";
import { WhatsAppIcon } from "./icons";
import { Logo } from "./Logo";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const p = (path: string) => localePath(locale, path);
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-3 focus:z-[60] focus:bg-red focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.nav.skip}
      </a>
      {/* Top bar */}
      <div className="bg-night text-white/75">
        <div className="container-page flex h-10 items-center justify-between gap-6 text-xs">
          <ul className="hidden items-center gap-6 md:flex">
            {dict.hero.trust.slice(0, 3).map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rotate-45 bg-red" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex w-full items-center justify-between gap-5 md:w-auto md:justify-end">
            <a href={`tel:${site.phone}`} className="font-semibold text-white hover:text-red" dir="ltr">
              {site.phoneDisplay}
            </a>
            <a href={whatsappLink(dict.finalCta.whatsappMessage)} target="_blank" rel="noopener" className="flex items-center gap-1.5 font-semibold text-white hover:text-[#25d366]">
              <WhatsAppIcon width={15} height={15} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
        <div className="container-page flex h-[4.5rem] items-center justify-between gap-6">
          <Link href={p(routes.home)} aria-label={`GATech — ${dict.nav.home}`}>
            <Logo />
          </Link>
          <HeaderNav
            locale={locale}
            items={[
              { href: p(routes.certifications), label: dict.nav.certifications },
              { href: p(routes.business), label: dict.nav.business },
              { href: p(routes.cities), label: dict.nav.cities },
              { href: p(routes.about), label: dict.nav.about },
              { href: p(routes.contact), label: dict.nav.contact },
            ]}
            cta={{ href: p(routes.contact), label: dict.nav.cta }}
            labels={{ menu: dict.nav.menu, close: dict.nav.close, language: dict.nav.language }}
          />
        </div>
      </header>
    </>
  );
}
