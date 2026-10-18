import { pipeline, storeKind } from "./store";

export const DIMENSIONS = [
  "page", "land", "ch", "ref", "se", "seland", "sedevice", "secountry", "ai", "ailand",
  "country", "city", "device", "browser", "os", "locale", "utm", "hour", "bot", "botpage", "leadcert",
] as const;
export type Dimension = (typeof DIMENSIONS)[number];
export type Counts = Record<string, number>;

export interface DayPoint {
  date: string;
  pv: number;
  uv: number;
  ent: number;
  se: number;
  ai: number;
  bot: number;
  lead: number;
}

export interface Report {
  store: typeof storeKind;
  days: number;
  series: DayPoint[];
  totals: Omit<DayPoint, "date">;
  previous: Omit<DayPoint, "date">;
  dims: Record<Dimension, Counts>;
  recent: { t: number; path: string; channel: string; source: string; country: string; city: string; device: string; browser: string }[];
  recentBots: { t: number; bot: string; path: string; country: string }[];
}

const dayList = (n: number, offset = 0) =>
  Array.from({ length: n }, (_, i) => {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - offset - (n - 1 - i));
    return d.toISOString().slice(0, 10);
  });

const toCounts = (raw: unknown): Counts => {
  const out: Counts = {};
  if (Array.isArray(raw)) for (let i = 0; i < raw.length; i += 2) out[String(raw[i])] = Number(raw[i + 1]);
  else if (raw && typeof raw === "object") for (const [k, v] of Object.entries(raw)) out[k] = Number(v);
  return out;
};

const empty = () => ({ pv: 0, uv: 0, ent: 0, se: 0, ai: 0, bot: 0, lead: 0 });

export async function getReport(days: number): Promise<Report> {
  const cur = dayList(days);
  const prev = dayList(days, days);

  const cmds = [
    ...cur.map((d) => ["HGETALL", `a:${d}:t`]),
    ...cur.map((d) => ["PFCOUNT", `a:${d}:uv`]),
    ...prev.map((d) => ["HGETALL", `a:${d}:t`]),
    ["PFCOUNT", ...cur.map((d) => `a:${d}:uv`)],
    ["PFCOUNT", ...prev.map((d) => `a:${d}:uv`)],
    ...DIMENSIONS.flatMap((dim) => cur.map((d) => ["HGETALL", `a:${d}:${dim}`])),
    ["LRANGE", "a:recent", 0, 49],
    ["LRANGE", "a:recentbots", 0, 49],
  ];
  const res = await pipeline(cmds);
  let i = 0;
  const curT = cur.map(() => toCounts(res[i++]));
  const curUv = cur.map(() => Number(res[i++] ?? 0));
  const prevT = prev.map(() => toCounts(res[i++]));
  const uvTotal = Number(res[i++] ?? 0);
  const uvPrev = Number(res[i++] ?? 0);

  const dims = {} as Record<Dimension, Counts>;
  for (const dim of DIMENSIONS) {
    const acc: Counts = {};
    for (let j = 0; j < cur.length; j++) for (const [k, v] of Object.entries(toCounts(res[i++]))) acc[k] = (acc[k] ?? 0) + v;
    dims[dim] = acc;
  }
  const parse = <T,>(raw: unknown): T[] =>
    Array.isArray(raw) ? raw.flatMap((s) => { try { return [JSON.parse(String(s)) as T]; } catch { return []; } }) : [];
  const recent = parse<Report["recent"][number]>(res[i++]);
  const recentBots = parse<Report["recentBots"][number]>(res[i++]);

  const point = (t: Counts) => ({ pv: t.pv ?? 0, ent: t.ent ?? 0, se: t.se ?? 0, ai: t.ai ?? 0, bot: t.bot ?? 0, lead: t.lead ?? 0 });
  const series = cur.map((date, j) => ({ date, uv: curUv[j], ...point(curT[j]) }));
  const sum = (rows: Counts[], uv: number): Omit<DayPoint, "date"> =>
    rows.reduce<Omit<DayPoint, "date">>((a, t) => {
      const p = point(t);
      return { ...a, pv: a.pv + p.pv, ent: a.ent + p.ent, se: a.se + p.se, ai: a.ai + p.ai, bot: a.bot + p.bot, lead: a.lead + p.lead };
    }, { ...empty(), uv });

  return { store: storeKind, days, series, totals: sum(curT, uvTotal), previous: sum(prevT, uvPrev), dims, recent, recentBots };
}
