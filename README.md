# GATech — Certifications cybersécurité au Maroc

Next.js 16 (App Router, Cache Components, Tailwind CSS 4) website selling cybersecurity certification trainings (CEH v13, OSCP+, CISSP, CISM, CompTIA Security+/CySA+/PenTest+, CHFI, CND, ISO 27001 LI) to the Moroccan market, in **French (default), Arabic (RTL) and English**.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Structure

| Path | Purpose |
| --- | --- |
| `src/lib/site.ts` | **Business details** (name, phone, WhatsApp, address, socials). Fill the TODOs. |
| `src/data/certs/*.ts` | One file per certification, all text in fr/ar/en, price in MAD. |
| `src/data/cities/*.ts` | Local landing pages (Casablanca, Rabat, Marrakech, Tanger, Fès, Agadir). |
| `src/dictionaries/{fr,ar,en}.ts` | All UI copy. `ar.ts`/`en.ts` are type-checked against `fr.ts`. |
| `src/lib/seo.ts` | Routes, canonical/hreflang builder, title rules. |
| `src/lib/schema.ts` | JSON-LD (EducationalOrganization, WebSite, Course, FAQPage, BreadcrumbList, ItemList, Service). |
| `src/proxy.ts` | French served at `/`, `/fr/*` → 308 to unprefixed URL, trailing-slash normalization. |
| `src/app/actions.ts` | Contact form server action (validation + honeypot + webhook). |
| `public/logos/vendors/` | Vendor logos (sources/licenses in `CREDITS.md`), rendered by `src/components/VendorLogo.tsx`. |
| `src/app/icon.svg`, `src/components/Logo.tsx` | Brand mark (keyhole). `public/logo.png` and favicons are generated from `icon.svg`. |

URLs: `/`, `/certifications`, `/certifications/ceh-v13`, `/entreprises`, `/maroc`, `/maroc/casablanca`, `/a-propos`, `/contact` — and the same under `/ar/…` and `/en/…`.

To add a certification: create `src/data/certs/<slug>.ts` (copy an existing one) and register it in `src/data/index.ts`. Sitemap, catalog, footer, OG image and structured data pick it up automatically.

## SEO built in

- Static prerendering of every page (fast TTFB / Core Web Vitals), minimal client JS.
- Unique `<title>` (≤ 60 chars) and meta description (≤ 160) per page and language; one `<h1>` per page.
- Self-referencing canonical + `hreflang` `fr-MA` / `ar-MA` / `en-MA` / `x-default` in HTML **and** in `sitemap.xml`.
- `<html lang dir>` per locale, RTL layout for Arabic, IBM Plex Sans Arabic font.
- JSON-LD on every page (Course with MAD offers and course instances, FAQ, breadcrumbs, organization).
- Dynamic Open Graph images (site + one per certification), `robots.txt`, `sitemap.xml`, web manifest, favicons.
- Localized 404 with `noindex`, 308 redirects for duplicate URLs, security headers.
- No fake reviews/ratings/statistics: everything in structured data is verifiable (Google penalizes fabricated review markup).

## Before going live (checklist)

1. **`src/lib/site.ts`**: real phone, WhatsApp number, legal name, founding year, address (leave `streetAddress` empty if no public office), social profile URLs.
2. **Legal notice** (`legal.notice` in the dictionaries): RC, ICE, registered address, host.
3. **Prices** in `src/data/certs/*.ts` are placeholders — set your real prices; check `voucherIncluded`.
4. **Exam facts**: content was written carefully but verify each exam detail (question count, duration, passing score, CHFI v11 module list, OSCP+ dates) against the vendor sites before launch.
5. **Vendor logos**: the EC-Council file from Wikimedia is a plain text rendering, and OffSec has no logo there (a text wordmark is shown). Replace both with official files from the vendors' partner/brand kits.
6. **Partner status**: the site never claims to be an authorized partner. If you are an EC-Council ATC / CompTIA / PECB partner, say so on the relevant pages (it is a strong trust signal) — and ensure you have the right to resell vouchers.
7. **Environment variables** (see `.env.example`): `NEXT_PUBLIC_SITE_URL`, `CONTACT_WEBHOOK_URL` (otherwise leads only go to the server log), `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION`.
8. Deploy on HTTPS at `https://gatech.world`, then submit `https://gatech.world/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
9. Create a **Google Business Profile** (Casablanca/Rabat) with exactly the same name, address and phone as `site.ts`.

## Ranking #1 in Morocco — what the code can't do for you

Technical SEO is now solid; positions are won by authority and content:

- **Content**: add a blog/guides (e.g. "CEH ou OSCP : laquelle choisir ?", "Salaire pentester au Maroc", "Loi 05-20 : obligations"), in French first, then Arabic.
- **Backlinks** from Moroccan sources: schools (ENSIAS, EMSI, UIR, OFPPT), tech media (Le Desk, Médias24, TelQuel), associations, job boards (Rekrute, Emploi.ma), partners.
- **Reviews** on Google Business Profile from real learners.
- **Session dates**: publishing real upcoming session dates per certification enables richer Course data and converts better.
