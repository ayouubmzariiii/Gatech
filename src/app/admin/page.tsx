import Link from "next/link";
import { isAdmin } from "@/lib/analytics/auth";
import { getReport, type Counts, type DayPoint, type Report } from "@/lib/analytics/query";
import { AI_BOTS, SEARCH_BOTS } from "@/lib/analytics/track";
import { site } from "@/lib/site";
import { logout } from "./actions";
import { LoginForm } from "./LoginForm";

export const dynamic = "force-dynamic";

const RANGES = [1, 7, 30, 90, 365];
const TABS = [{ id: "analytics", label: "Analytics" }] as const;

export default async function AdminPage({ searchParams }: { searchParams: Promise<{ days?: string; tab?: string }> }) {
  if (!(await isAdmin()))
    return (
      <main className="grid min-h-screen place-items-center px-4">
        <LoginForm />
      </main>
    );

  const sp = await searchParams;
  const days = RANGES.includes(Number(sp.days)) ? Number(sp.days) : 30;
  const tab = TABS.find((t) => t.id === sp.tab)?.id ?? "analytics";
  let report: Report | null = null;
  let error = "";
  try {
    report = await getReport(days);
  } catch (e) {
    error = e instanceof Error ? e.message : String(e);
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-line bg-canvas">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-3">
          <span className="font-semibold text-ink">GA Tech · Admin</span>
          <nav className="flex gap-1">
            {TABS.map((t) => (
              <Link
                key={t.id}
                href={`/admin?tab=${t.id}&days=${days}`}
                className={`rounded-md px-3 py-1.5 text-sm font-medium ${t.id === tab ? "bg-ink text-white" : "text-body hover:bg-surface"}`}
              >
                {t.label}
              </Link>
            ))}
          </nav>
          <form action={logout} className="ml-auto">
            <button className="text-sm text-muted hover:text-ink">Sign out</button>
          </form>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-6 px-4 py-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-semibold text-ink">Analytics</h1>
            <p className="text-sm text-muted">
              First-party, cookieless data recorded server-side (counts every visitor, even without cookie consent, plus search &amp; AI crawlers). Times in UTC.
            </p>
          </div>
          <div className="flex rounded-lg border border-line bg-canvas p-0.5 text-sm">
            {RANGES.map((r) => (
              <Link
                key={r}
                href={`/admin?tab=${tab}&days=${r}`}
                className={`rounded-md px-3 py-1 ${r === days ? "bg-ink text-white" : "text-body hover:bg-surface"}`}
              >
                {r === 1 ? "Today" : `${r}d`}
              </Link>
            ))}
          </div>
        </div>

        {report?.store === "memory" && (
          <Notice>
            No database connected: data is kept in memory and resets on restart. Add Upstash Redis to the Vercel project (Storage → Marketplace → Upstash
            Redis) so <code>KV_REST_API_URL</code> / <code>KV_REST_API_TOKEN</code> are set, then redeploy.
          </Notice>
        )}
        {error && <Notice>Could not load analytics: {error}</Notice>}
        {report && <Dashboard r={report} />}
        <ExternalTools />
      </main>
    </div>
  );
}

/* ---------------- dashboard ---------------- */

function Dashboard({ r }: { r: Report }) {
  const { totals: t, previous: p, dims } = r;
  const split = (set: Set<string>, inSet: boolean) => Object.fromEntries(Object.entries(dims.bot).filter(([k]) => set.has(k) === inSet));
  const otherBots = Object.fromEntries(Object.entries(dims.bot).filter(([k]) => !SEARCH_BOTS.has(k) && !AI_BOTS.has(k)));
  const hours: Counts = Object.fromEntries(Array.from({ length: 24 }, (_, h) => [`${String(h).padStart(2, "0")}h`, dims.hour[h] ?? 0]));

  return (
    <>
      <section className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8">
        <Kpi label="Visitors" value={t.uv} prev={p.uv} />
        <Kpi label="Page views" value={t.pv} prev={p.pv} />
        <Kpi label="Sessions" value={t.ent} prev={p.ent} />
        <Kpi label="Views / session" value={t.ent ? +(t.pv / t.ent).toFixed(2) : 0} prev={p.ent ? +(p.pv / p.ent).toFixed(2) : 0} />
        <Kpi label="Organic search" value={t.se} prev={p.se} />
        <Kpi label="From AI assistants" value={t.ai} prev={p.ai} />
        <Kpi label="Crawler hits" value={t.bot} prev={p.bot} />
        <Kpi label="Leads (form)" value={t.lead} prev={p.lead} sub={t.ent ? `${((t.lead / t.ent) * 100).toFixed(2)}% conv.` : undefined} />
      </section>

      <Card title="Traffic over time">
        <TrendChart series={r.series} />
      </Card>

      <h2 className="pt-2 text-lg font-semibold text-ink">Search engines &amp; SEO</h2>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Organic visits by search engine">
          <Bars data={dims.se} total={t.se} />
        </Card>
        <Card title="Organic landing pages" className="lg:col-span-2">
          <Bars data={dims.seland} total={t.se} link />
        </Card>
        <Card title="Organic visits by device">
          <Bars data={dims.sedevice} total={t.se} />
        </Card>
        <Card title="Organic visits by country">
          <Bars data={dims.secountry} total={t.se} />
        </Card>
        <Card title="Traffic channels">
          <Bars data={dims.ch} total={t.ent} />
        </Card>
      </div>

      <h2 className="pt-2 text-lg font-semibold text-ink">Crawlers (search &amp; AI bots)</h2>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Search engine crawlers">
          <Bars data={split(SEARCH_BOTS, true)} />
        </Card>
        <Card title="AI crawlers">
          <Bars data={split(AI_BOTS, true)} />
        </Card>
        <Card title="SEO tools & other bots">
          <Bars data={otherBots} />
        </Card>
        <Card title="Most crawled URLs" className="lg:col-span-2">
          <Bars data={dims.botpage} total={t.bot} link />
        </Card>
        <Card title="Latest crawler hits">
          <Feed rows={r.recentBots.map((b) => ({ t: b.t, main: b.path, meta: `${b.bot} · ${b.country}` }))} />
        </Card>
      </div>

      <h2 className="pt-2 text-lg font-semibold text-ink">AI assistants (GEO)</h2>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card title="Visits from AI assistants">
          <Bars data={dims.ai} total={t.ai} />
        </Card>
        <Card title="Pages AI assistants send visitors to" className="lg:col-span-2">
          <Bars data={dims.ailand} total={t.ai} link />
        </Card>
      </div>

      <h2 className="pt-2 text-lg font-semibold text-ink">Content</h2>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card title="Top pages (views)">
          <Bars data={dims.page} total={t.pv} link limit={20} />
        </Card>
        <Card title="Landing pages (entries, all channels)">
          <Bars data={dims.land} total={t.ent} link limit={20} />
        </Card>
        <Card title="Referring websites">
          <Bars data={dims.ref} total={t.ent} />
        </Card>
        <Card title="Campaigns (utm_source / medium / campaign)">
          <Bars data={dims.utm} />
        </Card>
      </div>

      <h2 className="pt-2 text-lg font-semibold text-ink">Audience</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card title="Countries">
          <Bars data={dims.country} total={t.ent} />
        </Card>
        <Card title="Cities">
          <Bars data={dims.city} total={t.ent} />
        </Card>
        <Card title="Site language">
          <Bars data={dims.locale} total={t.ent} />
        </Card>
        <Card title="Devices">
          <Bars data={dims.device} total={t.ent} />
        </Card>
        <Card title="Browsers">
          <Bars data={dims.browser} total={t.ent} />
        </Card>
        <Card title="Operating systems">
          <Bars data={dims.os} total={t.ent} />
        </Card>
        <Card title="Views by hour (UTC)" className="md:col-span-2">
          <Bars data={hours} total={t.pv} keepOrder limit={24} />
        </Card>
        <Card title="Leads by certification">
          <Bars data={dims.leadcert} total={t.lead} />
        </Card>
      </div>

      <Card title="Latest visits">
        <Feed
          rows={r.recent.map((v) => ({
            t: v.t,
            main: v.path,
            meta: `${v.channel} (${v.source}) · ${v.city === "Unknown" ? v.country : `${v.city}, ${v.country}`} · ${v.device} · ${v.browser}`,
          }))}
        />
      </Card>
    </>
  );
}

/* ---------------- building blocks ---------------- */

const nf = new Intl.NumberFormat("en");

function Notice({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">{children}</div>;
}

function Card({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <section className={`min-w-0 rounded-xl border border-line bg-canvas p-4 ${className}`}>
      <h3 className="mb-3 text-sm font-semibold text-ink">{title}</h3>
      {children}
    </section>
  );
}

function Kpi({ label, value, prev, sub }: { label: string; value: number; prev: number; sub?: string }) {
  const delta = prev ? ((value - prev) / prev) * 100 : null;
  return (
    <div className="rounded-xl border border-line bg-canvas p-3">
      <div className="text-xs text-muted">{label}</div>
      <div className="mt-1 text-2xl font-semibold tabular-nums text-ink">{nf.format(value)}</div>
      <div className="mt-0.5 text-xs tabular-nums">
        {delta === null ? (
          <span className="text-muted">no prior data</span>
        ) : (
          <span className={delta >= 0 ? "text-ok" : "text-red"}>
            {delta >= 0 ? "▲" : "▼"} {Math.abs(delta).toFixed(0)}% vs prev.
          </span>
        )}
        {sub && <span className="ml-1 text-muted">· {sub}</span>}
      </div>
    </div>
  );
}

function Bars({ data, total, link, limit = 10, keepOrder }: { data: Counts; total?: number; link?: boolean; limit?: number; keepOrder?: boolean }) {
  const rows = Object.entries(data ?? {}).filter(([, v]) => v > 0);
  if (!keepOrder) rows.sort((a, b) => b[1] - a[1]);
  const shown = rows.slice(0, limit);
  if (!shown.length) return <p className="py-4 text-center text-sm text-muted">No data yet</p>;
  const max = Math.max(...shown.map(([, v]) => v));
  const sum = total || rows.reduce((a, [, v]) => a + v, 0);
  return (
    <ul className="space-y-1">
      {shown.map(([k, v]) => (
        <li key={k} className="relative flex items-center gap-2 overflow-hidden rounded px-2 py-1 text-sm">
          <span className="absolute inset-y-0 left-0 rounded bg-red-tint" style={{ width: `${(v / max) * 100}%` }} aria-hidden />
          <span className="relative min-w-0 flex-1 truncate text-ink" title={k}>
            {link ? (
              <a href={`${site.url}${k}`} target="_blank" rel="noreferrer" className="hover:underline">
                {k}
              </a>
            ) : (
              k
            )}
          </span>
          <span className="relative tabular-nums font-medium text-ink">{nf.format(v)}</span>
          <span className="relative w-12 text-right tabular-nums text-xs text-muted">{((v / sum) * 100).toFixed(1)}%</span>
        </li>
      ))}
      {rows.length > limit && <li className="px-2 pt-1 text-xs text-muted">+ {rows.length - limit} more</li>}
    </ul>
  );
}

function Feed({ rows }: { rows: { t: number; main: string; meta: string }[] }) {
  if (!rows.length) return <p className="py-4 text-center text-sm text-muted">No data yet</p>;
  const fmt = new Intl.DateTimeFormat("en-GB", { dateStyle: "short", timeStyle: "short", timeZone: "UTC" });
  return (
    <ul className="max-h-96 divide-y divide-line overflow-y-auto text-sm">
      {rows.map((r, i) => (
        <li key={i} className="flex gap-3 py-1.5">
          <span className="shrink-0 tabular-nums text-xs leading-5 text-muted">{fmt.format(r.t)}</span>
          <span className="min-w-0">
            <span className="block truncate text-ink">{r.main}</span>
            <span className="block truncate text-xs text-muted">{r.meta}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

const SERIES = [
  { key: "pv", label: "Page views", color: "#111318" },
  { key: "uv", label: "Visitors", color: "#d3121b" },
  { key: "se", label: "Organic search", color: "#0f7a55" },
  { key: "bot", label: "Crawler hits", color: "#2563eb" },
] as const;

function TrendChart({ series }: { series: DayPoint[] }) {
  const W = 1000, H = 240, P = { l: 40, r: 10, t: 10, b: 24 };
  const max = Math.max(1, ...series.flatMap((d) => SERIES.map((s) => d[s.key])));
  const x = (i: number) => P.l + (series.length === 1 ? (W - P.l - P.r) / 2 : (i / (series.length - 1)) * (W - P.l - P.r));
  const y = (v: number) => H - P.b - (v / max) * (H - P.t - P.b);
  const ticks = [...new Set([0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(max * f)))];
  const every = Math.ceil(series.length / 10);
  return (
    <div>
      <div className="mb-2 flex flex-wrap gap-4 text-xs">
        {SERIES.map((s) => (
          <span key={s.key} className="flex items-center gap-1.5">
            <span className="h-2 w-3 rounded-sm" style={{ background: s.color }} />
            {s.label}
          </span>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Daily traffic">
        {ticks.map((v) => (
          <g key={v}>
            <line x1={P.l} x2={W - P.r} y1={y(v)} y2={y(v)} stroke="#e3e5e9" />
            <text x={P.l - 6} y={y(v) + 4} textAnchor="end" fontSize="11" fill="#6b707a">{nf.format(v)}</text>
          </g>
        ))}
        {series.map((d, i) =>
          i % every === 0 ? (
            <text key={d.date} x={x(i)} y={H - 6} textAnchor="middle" fontSize="11" fill="#6b707a">{d.date.slice(5)}</text>
          ) : null,
        )}
        {SERIES.map((s) => (
          <polyline key={s.key} fill="none" stroke={s.color} strokeWidth="2" strokeLinejoin="round"
            points={series.map((d, i) => `${x(i)},${y(d[s.key])}`).join(" ")} />
        ))}
        {series.map((d, i) => (
          <g key={d.date}>
            <rect x={x(i) - 6} y={P.t} width="12" height={H - P.t - P.b} fill="transparent">
              <title>{`${d.date}\n${SERIES.map((s) => `${s.label}: ${d[s.key]}`).join("\n")}\nSessions: ${d.ent}\nAI visits: ${d.ai}\nLeads: ${d.lead}`}</title>
            </rect>
            {series.length <= 31 && SERIES.map((s) => <circle key={s.key} cx={x(i)} cy={y(d[s.key])} r="2.5" fill={s.color} pointerEvents="none" />)}
          </g>
        ))}
      </svg>
    </div>
  );
}

function ExternalTools() {
  const host = encodeURIComponent(site.url);
  const tools = [
    ["Google Search Console", `https://search.google.com/search-console/performance/search-analytics?resource_id=sc-domain:${new URL(site.url).hostname}`, "Queries, impressions, CTR, positions"],
    ["Google Analytics 4", "https://analytics.google.com/analytics/web/", "Consent-based engagement & events"],
    ["Bing Webmaster Tools", "https://www.bing.com/webmasters/home", "Bing queries, crawl, backlinks"],
    ["Vercel Analytics", "https://vercel.com/dashboard", "Web vitals & speed insights"],
    ["PageSpeed Insights", `https://pagespeed.web.dev/analysis?url=${host}`, "Core Web Vitals audit"],
    ["Rich Results Test", `https://search.google.com/test/rich-results?url=${host}`, "Structured data check"],
  ];
  return (
    <Card title="Keywords, rankings & more (external tools)">
      <p className="mb-3 text-xs text-muted">Search engines don&apos;t pass search keywords to websites — query and ranking data only exists in their webmaster tools.</p>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map(([name, href, desc]) => (
          <a key={name} href={href} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-3 py-2 hover:border-ink">
            <div className="text-sm font-medium text-ink">{name} ↗</div>
            <div className="text-xs text-muted">{desc}</div>
          </a>
        ))}
      </div>
    </Card>
  );
}
