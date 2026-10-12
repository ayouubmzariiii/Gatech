import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import type { Vendor } from "@/data/types";

export const ogSize = { width: 1200, height: 630 };

const vendorFiles: Partial<Record<Vendor, [file: string, mime: string, ratio: number]>> = {
  "EC-Council": ["ec-council.png", "image/png", 600 / 114],
  CompTIA: ["comptia.svg", "image/svg+xml", 198 / 42],
  ISC2: ["isc2.svg", "image/svg+xml", 508 / 185],
  ISACA: ["isaca.png", "image/png", 600 / 146],
  PECB: ["pecb.png", "image/png", 196 / 55],
};

async function vendorLogo(vendor: Vendor, height: number) {
  const entry = vendorFiles[vendor];
  if (!entry) return <div style={{ fontSize: height * 0.85, fontWeight: 700, color: "#111318" }}>{vendor}</div>;
  const [file, mime, ratio] = entry;
  const data = await readFile(path.join(process.cwd(), "public/logos/vendors", file));
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={`data:${mime};base64,${data.toString("base64")}`} height={height} width={Math.round(height * ratio)} alt="" />;
}

/** Shared 1200×630 social card. Text must be Latin script (no Arabic font is embedded). */
export async function ogCard({
  title,
  subtitle,
  footer,
  vendor,
}: {
  title: string;
  subtitle: string;
  footer: string;
  vendor?: Vendor;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#ffffff",
          borderTop: "14px solid #d3121b",
          color: "#111318",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="56" height="56" viewBox="0 0 32 32">
              <path d="M0 0h25l7 7v25H7l-7-7Z" fill="#d3121b" />
              <circle cx="16" cy="13.2" r="4.8" fill="#fff" />
              <path d="M13.8 16.2 12.4 24.6h7.2l-1.4-8.4Z" fill="#fff" />
            </svg>
            <div style={{ display: "flex", fontSize: 36, fontWeight: 700, color: "#111318" }}>
              GA<span style={{ color: "#d3121b" }}>Tech</span>
            </div>
          </div>
          {vendor ? await vendorLogo(vendor, 56) : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, maxWidth: 1050, letterSpacing: -1 }}>{title}</div>
          <div style={{ fontSize: 30, color: "#3d4656", marginTop: 20, maxWidth: 1050 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#667085", borderTop: "2px solid #e3e6eb", paddingTop: 24 }}>
          <span style={{ color: "#111318", fontWeight: 600 }}>{footer}</span>
          <span>gatech.world</span>
        </div>
      </div>
    ),
    ogSize,
  );
}
