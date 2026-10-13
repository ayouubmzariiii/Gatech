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

**Indexing & crawling**
- Every page statically prerendered; all translated text is in the server HTML (verified without JavaScript).
- Self-referencing canonical + `hreflang` `fr-MA` / `ar-MA` / `en-MA` / `x-default` in HTML **and** `sitemap.xml`.
- `sitemap.xml` with hreflang alternates, `lastmod` and image entries (generated OG images).
- `robots.txt` is environment-aware: Vercel **preview** deployments are `Disallow: /` + `X-Robots-Tag: noindex`.
- 308 redirects: `/fr/*` → unprefixed, trailing slash removed (www → apex is set in Vercel Domains).
- Localized 404 (`noindex`) for unknown URLs.
- IndexNow key (`public/<key>.txt`) + `npm run indexnow` to push all URLs to Bing/Yandex after a deploy.
- `/llms.txt`: markdown site map for AI assistants (ChatGPT, Perplexity, Gemini…).

**On-page**
- Unique `<title>` (≤ 60 chars) and description (110–160 chars) per page and language; one `<h1>` per page.
- `<html lang dir>` per locale, RTL Arabic layout, Arabic font.
- Visible breadcrumbs on every inner page, FAQ sections on every commercial page, strong internal linking
  (catalog ⇄ certifications ⇄ guides ⇄ cities, footer).
- 8 long-form guides in 3 languages targeting informational searches (comparisons, prices, law 05-20, ISO 27001, careers).

**Structured data (JSON-LD, one `@graph` per page)**
- `EducationalOrganization` (+ `OfferCatalog`, `ContactPoint`, served cities) and `WebSite` on every page.
- `WebPage` / `CollectionPage` / `ItemPage` / `AboutPage` / `ContactPage` node on every page.
- `Course` with MAD `Offer`, `CourseInstance` (Casablanca, Rabat, online), credential and image.
- `Article` for guides, `FAQPage` wherever FAQs are shown, `BreadcrumbList`, `ItemList`, city `Service`.
- No fake reviews/ratings/statistics (Google penalizes fabricated review markup).

**Performance & monitoring**
- Static HTML from the edge, `next/font`, optimized images, minimal client JS.
- Vercel Analytics (cookieless) and Speed Insights (real-user Core Web Vitals).
- Security headers (HSTS, nosniff, frame, referrer, permissions), `/.well-known/security.txt`.

## Blog

`/blog` (+ `/blog/categorie/<category>`, `/blog/<slug>`, RSS at `/feeds/fr.xml`, `/feeds/ar.xml`, `/feeds/en.xml`).

To publish a post:
1. Create `src/data/blog/<slug>.ts` (copy an existing post: fr/ar/en texts, category, related certifications, FAQs).
2. Add photos in `public/blog/<slug>/`: `cover.webp` (1600×900), `og.jpg` (1200×630, social sharing), `figure.webp` (1200×800).
   Use free-license photos (Unsplash License) and fill author + URL in `src/data/blog/images.ts`.
3. Register the post in `src/data/blog/index.ts`.
Sitemap (with image), RSS, llms.txt, BlogPosting + FAQ schema, category pages and internal links are automatic.

## Prices & offers

- Prices: `priceMAD` in each `src/data/certs/*.ts` (market-based, Oct 2026: voucher cost at 9.85 MAD/USD + training).
  Prices are also quoted inside FAQ/blog texts: search the old amount when you change one.
- Offers (early-bird −10 %, group −15 %, student −15 %, 3 interest-free instalments): `src/data/offers.ts`.
  They are public commitments shown on every course page — edit or remove them there.

## Deploying on Vercel (go-live runbook)

1. **Import** the GitHub repo in Vercel → framework "Next.js" is detected, no build settings to change.
2. **Environment variables** (Project → Settings → Environment Variables, *Production*):
   - `SITE_URL` = `https://gatech.world` (no trailing slash; redeploy after changing it)
   - `CONTACT_WEBHOOK_URL` = your Zapier / Make / n8n / CRM webhook (otherwise leads only appear in Vercel logs)
   - `GOOGLE_SITE_VERIFICATION`, `BING_SITE_VERIFICATION` = tokens from Search Console / Bing Webmaster Tools (HTML-tag method)
3. **Domains** (Project → Settings → Domains): add `gatech.world` (primary) **and** `www.gatech.world`
   (set it to redirect to `gatech.world`). Point DNS as Vercel instructs.
4. **Analytics**: enable *Web Analytics* and *Speed Insights* in the Vercel project (Analytics tab).
5. **Deploy**, then check: `https://gatech.world/robots.txt` shows `Allow: /` and the sitemap;
   a preview URL (`*.vercel.app`) shows `Disallow: /`.
6. **Google Search Console**: add the *Domain* property, verify, submit `https://gatech.world/sitemap.xml`,
   then request indexing for the home page and the top certification pages.
7. **Bing Webmaster Tools**: import from Search Console, then run `npm run indexnow`.
8. **Rich results**: test a certification page and a guide in https://search.google.com/test/rich-results.
9. **Google Business Profile**: create it with exactly the same name, phone (+212 6 84 19 94 00) and address as `site.ts`.

## Before going live (content checklist)

1. **`src/lib/site.ts`**: legal name, founding year, address (leave `streetAddress` empty if no public office), social profile URLs.
2. **Legal notice** (`legal.notice` in the dictionaries): RC, ICE, registered address, host (Vercel Inc.).
3. **Prices** in `src/data/certs/*.ts` are placeholders — set your real prices; check `voucherIncluded`.
4. **Exam & legal facts**: verify exam details (question count, duration, passing score, CHFI v11 module list,
   OSCP+ dates) and the legal references in the guides (law 05-20, Code pénal 607-3 and following) before launch.
5. **Vendor logos**: replace the EC-Council (text rendering) and OffSec (text wordmark) logos with official files.
6. **Partner status**: the site never claims to be an authorized partner. If you are one, say so — it is a strong trust signal.

## Ranking #1 in Morocco — the ongoing work

The technical and on-page foundation is complete; positions are then won by authority and freshness:

- **Publish** one new blog post per month (see "Blog" below). Update `dateModified` when you refresh a post.
- **Backlinks** from Moroccan sources: schools (ENSIAS, EMSI, UIR, OFPPT), tech media (Le Desk, Médias24, TelQuel),
  associations, job boards (Rekrute, Emploi.ma), partners.
- **Reviews** on Google Business Profile from real learners (never add rating markup to the site yourself).
- **Session dates**: publishing real upcoming dates per certification enables richer Course data and converts better.
- **Social profiles**: create LinkedIn / Facebook / Instagram pages and add their URLs to `site.social` (feeds `sameAs`).
