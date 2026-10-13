import type { NextConfig } from "next";

/** Same rule as `isProduction` in src/lib/site.ts (next.config can't import app modules). */
const isProduction = (process.env.VERCEL_ENV ?? "production") === "production";

const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  trailingSlash: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          ...securityHeaders,
          // Belt and braces with robots.ts: preview deployments are never indexed.
          ...(isProduction ? [] : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
        ],
      },
      {
        source: "/logos/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // Blog photos (public/blog/<slug>/*.webp|jpg); replace the file name to bust the cache.
        source: "/blog/:slug/:file(.+\\.(?:webp|jpg))",
        headers: [{ key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" }],
      },
    ];
  },
  async redirects() {
    return [
      // The guides section became the blog.
      { source: "/guides", destination: "/blog", permanent: true },
      { source: "/guides/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/:lang(ar|en)/guides", destination: "/:lang/blog", permanent: true },
      { source: "/:lang(ar|en)/guides/:slug", destination: "/:lang/blog/:slug", permanent: true },
      // One canonical host: www.gatech.world -> gatech.world (also add both domains in Vercel).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.gatech.world" }],
        destination: "https://gatech.world/:path*",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
