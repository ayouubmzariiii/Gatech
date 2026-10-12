"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/seo";
import { CloseIcon, MenuIcon } from "./icons";

interface NavItem {
  href: string;
  label: string;
}

interface Props {
  locale: Locale;
  items: NavItem[];
  cta: NavItem;
  labels: { menu: string; close: string; language: string };
}

/**
 * Path without the locale prefix: "/ar/certifications" -> "/certifications".
 * French pages are prerendered internally under "/fr/..." (see src/proxy.ts),
 * so the "fr" prefix is stripped too; server HTML and browser then agree.
 */
function basePath(pathname: string) {
  const first = pathname.split("/")[1];
  const path = (locales as readonly string[]).includes(first) ? pathname.slice(first.length + 1) : pathname;
  return path === "/" ? "" : path;
}

function isActive(current: string, href: string) {
  if (href === "/" || /^\/(ar|en)$/.test(href)) return current === href;
  return current === href || current.startsWith(`${href}/`);
}

const shortNames: Record<Locale, string> = { fr: "FR", ar: "AR", en: "EN" };

/**
 * Compact language menu. A native <details> element: it works without JavaScript
 * and all three links are always present in the HTML for crawlers.
 */
function LanguageMenu({ locale, path, label, align = "end" }: { locale: Locale; path: string; label: string; align?: "start" | "end" }) {
  const ref = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current?.open && !ref.current.contains(e.target as Node)) ref.current.open = false;
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  return (
    <details ref={ref} className="group relative">
      <summary
        aria-label={`${label}: ${localeNames[locale]}`}
        className="flex h-9 cursor-pointer items-center gap-1.5 border border-line-strong px-2.5 text-xs font-bold tracking-wider text-ink transition select-none hover:border-ink group-open:border-ink"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.6 5.7 3.6 9s-1.1 6.3-3.6 9c-2.5-2.7-3.6-5.7-3.6-9S9.5 5.7 12 3Z" />
        </svg>
        {shortNames[locale]}
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden className="transition group-open:rotate-180">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ul
        className={`absolute top-full z-50 mt-1.5 w-40 border border-line bg-white py-1 shadow-[0_12px_32px_-12px_rgb(17_19_24/0.35)] ${
          align === "end" ? "end-0" : "start-0"
        }`}
      >
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={localePath(l, path)}
              hrefLang={l}
              lang={l}
              aria-current={l === locale ? "true" : undefined}
              onClick={() => ref.current && (ref.current.open = false)}
              className="flex items-center justify-between px-3.5 py-2 text-sm text-body transition hover:bg-surface hover:text-ink aria-[current=true]:font-semibold aria-[current=true]:text-red"
            >
              {localeNames[l]}
              <span className="text-[0.6875rem] font-bold tracking-wider text-muted">{shortNames[l]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}

export function HeaderNav({ locale, items, cta, labels }: Props) {
  const path = basePath(usePathname());
  const current = localePath(locale, path);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav aria-label="Main" className="hidden h-full items-stretch lg:flex">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive(current, item.href) ? "page" : undefined}
            className="relative flex items-center px-3.5 text-[0.8125rem] font-bold tracking-wider whitespace-nowrap text-ink uppercase transition after:absolute after:inset-x-3.5 after:bottom-0 after:h-[3px] after:scale-x-0 after:bg-red after:transition hover:text-red hover:after:scale-x-100 aria-[current=page]:text-red aria-[current=page]:after:scale-x-100"
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="hidden items-center gap-4 lg:flex">
        <LanguageMenu locale={locale} path={path} label={labels.language} />
        <Link
          href={cta.href}
          className="cut bg-red px-5 py-3 text-[0.8125rem] font-bold tracking-wider whitespace-nowrap text-white uppercase transition hover:bg-red-hover"
        >
          {cta.label}
        </Link>
      </div>

      <div className="flex items-center gap-1 lg:hidden">
        <LanguageMenu locale={locale} path={path} label={labels.language} />
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex size-11 items-center justify-center text-ink"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={labels.menu}
        >
          <MenuIcon width={24} height={24} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" role="dialog" aria-modal="true" aria-label={labels.menu} className="fixed inset-0 z-50 bg-white lg:hidden">
          <div className="container-page flex h-16 items-center justify-end">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex size-11 items-center justify-center text-ink"
              aria-label={labels.close}
            >
              <CloseIcon width={24} height={24} />
            </button>
          </div>
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 pt-4">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(current, item.href) ? "page" : undefined}
                className="border-b border-line px-1 py-4 font-display text-2xl font-bold text-ink uppercase aria-[current=page]:text-red"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={cta.href}
              onClick={() => setOpen(false)}
              className="cut mt-8 bg-red px-5 py-4 text-center font-bold tracking-wide text-white uppercase"
            >
              {cta.label}
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
