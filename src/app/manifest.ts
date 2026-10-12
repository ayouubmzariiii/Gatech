import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — Certifications cybersécurité Maroc`,
    short_name: site.name,
    description: "Formations et certifications en cybersécurité au Maroc : CEH v13, CISSP, OSCP+, CompTIA Security+, ISO 27001.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d3121b",
    lang: "fr-MA",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/logo.png", sizes: "512x512", type: "image/png", purpose: "any" },
    ],
  };
}
