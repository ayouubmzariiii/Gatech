import type { MetadataRoute } from "next";
import { isProduction, site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Preview deployments (*.vercel.app) must never be indexed.
  if (!isProduction) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
