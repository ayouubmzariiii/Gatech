import Image from "next/image";
import type { Vendor } from "@/data/types";

/** Logo files in /public/logos/vendors (sources in CREDITS.md there). Width/height = intrinsic aspect ratio. */
const logos: Partial<Record<Vendor, { src: string; width: number; height: number }>> = {
  "EC-Council": { src: "/logos/vendors/ec-council.png", width: 600, height: 114 },
  CompTIA: { src: "/logos/vendors/comptia.svg", width: 198, height: 42 },
  ISC2: { src: "/logos/vendors/isc2.svg", width: 508, height: 185 },
  ISACA: { src: "/logos/vendors/isaca.png", width: 600, height: 146 },
  PECB: { src: "/logos/vendors/pecb.png", width: 196, height: 55 },
};

/** Optical size correction so all logos look equally big at the same `height`. */
const scale: Record<Vendor, number> = {
  "EC-Council": 0.9,
  CompTIA: 0.95,
  ISC2: 1.2,
  ISACA: 1.05,
  PECB: 0.9,
  OffSec: 1.1,
};

/** Renders the vendor's logo at a fixed height; falls back to a text wordmark when no file exists. */
export function VendorLogo({ vendor, height: base = 22, className = "" }: { vendor: Vendor; height?: number; className?: string }) {
  const logo = logos[vendor];
  const height = Math.round(base * scale[vendor]);
  if (!logo) {
    return (
      <span
        className={`inline-flex items-center font-bold tracking-tight text-ink ${className}`}
        style={{ height, fontSize: height * 0.82 }}
        dir="ltr"
      >
        {vendor}
      </span>
    );
  }
  const width = Math.round((logo.width / logo.height) * height);
  return (
    <Image
      src={logo.src}
      alt={vendor}
      width={width}
      height={height}
      className={`object-contain ${className}`}
      style={{ height, width: "auto", maxWidth: width }}
    />
  );
}
