import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { trackRequest } from "@/lib/analytics/track";
import { defaultLocale, locales } from "@/lib/i18n";

/**
 * French (default) URLs have no prefix: `/certifications` is rewritten to
 * `/fr/certifications`. Requests to `/fr/...` are permanently redirected to
 * the unprefixed URL so each page has exactly one indexable address.
 */
export function proxy(request: NextRequest, event: NextFetchEvent) {
  const { pathname, search } = request.nextUrl;

  // First-party analytics (views, sources, crawlers); never delays the response.
  const tracking = trackRequest(request, request.nextUrl.hostname);
  if (tracking) event.waitUntil(tracking);

  // Crawl tracking only for these files; the admin area lives outside [lang].
  if (/^\/(robots\.txt|sitemap\.xml|llms\.txt)$/.test(pathname) || pathname === "/admin" || pathname.startsWith("/admin/")) return;

  const segments = pathname.split("/");
  const first = segments[1];
  const last = segments[segments.length - 1];

  // Generated metadata images (e.g. /fr/certifications/ceh-v13/opengraph-image-x1y2) are served as-is.
  if (/^(opengraph|twitter)-image/.test(last)) return;

  if (first === defaultLocale) {
    const url = request.nextUrl.clone();
    // Also drop any trailing slash here so /fr/x/ reaches /x in a single redirect.
    url.pathname = pathname.slice(defaultLocale.length + 1).replace(/\/+$/, "") || "/";
    url.search = search;
    return NextResponse.redirect(url, 308);
  }

  if ((locales as readonly string[]).includes(first)) return;

  // Strip trailing slashes for a single canonical form.
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/\/+$/, "");
    return NextResponse.redirect(url, 308);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes, metadata routes and any file with an extension.
  matcher: ["/((?!_next|api|icon|apple-icon|opengraph-image|.*\\..*).*)", "/robots.txt", "/sitemap.xml", "/llms.txt"],
};
