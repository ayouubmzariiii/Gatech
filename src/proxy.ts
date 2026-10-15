import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/lib/i18n";

/**
 * French (default) URLs have no prefix: `/certifications` is rewritten to
 * `/fr/certifications`. Requests to `/fr/...` are permanently redirected to
 * the unprefixed URL so each page has exactly one indexable address.
 */
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
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
  matcher: ["/((?!_next|api|icon|apple-icon|opengraph-image|.*\\..*).*)"],
};
