import Image from "next/image";
import type { Vendor } from "@/data/types";

/** Logo files in /public/logos/vendors (sources in CREDITS.md there). Width/height = intrinsic aspect ratio. */
const logos: Partial<Record<Vendor, { src: string; width: number; height: number }>> = {
  "EC-Council": { src: "/logos/vendors/ec-council.png", width: 600, height: 114 },
  CompTIA: { src: "/logos/vendors/comptia.svg", width: 198, height: 42 },
  ISC2: { src: "/logos/vendors/isc2.svg", width: 508, height: 185 },
  ISACA: { src: "/logos/vendors/isaca.png", width: 600, height: 146 },
  PECB: { src: "/logos/vendors/pecb.png", width: 196, height: 55 },
  Cisco: { src: "/logos/vendors/cisco.svg", width: 216, height: 114 },
  Fortinet: { src: "/logos/vendors/fortinet.svg", width: 1024, height: 124 },
  "Palo Alto Networks": { src: "/logos/vendors/palo-alto-networks.svg", width: 390, height: 71 },
  "Check Point": { src: "/logos/vendors/check-point.svg", width: 385, height: 184 },
  Microsoft: { src: "/logos/vendors/microsoft.svg", width: 338, height: 72 },
  AWS: { src: "/logos/vendors/aws.svg", width: 304, height: 182 },
};

/** Optical size correction so all logos look equally big at the same `height`. */
const scale: Record<Vendor, number> = {
  "EC-Council": 0.9,
  CompTIA: 0.95,
  ISC2: 1.2,
  ISACA: 1.05,
  PECB: 0.9,
  OffSec: 1.1,
  Cisco: 1.35,
  Fortinet: 0.85,
  "Palo Alto Networks": 1,
  "Check Point": 1.4,
  Microsoft: 1,
  AWS: 1.4,
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
