/**
 * Tiny Redis client for first-party analytics.
 *
 * Production: Upstash Redis over its REST API (Vercel Marketplace → Upstash, which sets
 * KV_REST_API_URL / KV_REST_API_TOKEN, or UPSTASH_REDIS_REST_URL / UPSTASH_REDIS_REST_TOKEN).
 * Without those variables an in-memory emulator is used, so the dashboard works in `next dev`
 * (data is lost on restart and is per-instance).
 */

export type Command = (string | number)[];

const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

export const storeKind: "redis" | "memory" = url && token ? "redis" : "memory";

/** Runs commands in one round trip and returns each result (null on per-command error). */
export async function pipeline(commands: Command[]): Promise<unknown[]> {
  if (commands.length === 0) return [];
  if (storeKind === "memory") return commands.map(runInMemory);
  const res = await fetch(`${url}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(commands.map((c) => c.map(String))),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Analytics store error ${res.status}`);
  const out = (await res.json()) as { result?: unknown; error?: string }[];
  return out.map((r) => (r.error ? null : r.result));
}

/* ---------- in-memory emulator (dev only) ---------- */

type Value = Map<string, number> | Set<string> | string[] | string;
const g = globalThis as unknown as { __analyticsMem?: Map<string, Value> };
const mem = (g.__analyticsMem ??= new Map());

function runInMemory(cmd: Command): unknown {
  const [op, key, ...a] = cmd.map(String);
  switch (op.toUpperCase()) {
    case "HINCRBY": {
      const h = (mem.get(key) as Map<string, number>) ?? new Map();
      h.set(a[0], (h.get(a[0]) ?? 0) + Number(a[1]));
      mem.set(key, h);
      return h.get(a[0]);
    }
    case "HGETALL": {
      const h = mem.get(key) as Map<string, number> | undefined;
      return h ? [...h].flatMap(([k, v]) => [k, String(v)]) : [];
    }
    case "PFADD": {
      const s = (mem.get(key) as Set<string>) ?? new Set();
      a.forEach((v) => s.add(v));
      mem.set(key, s);
      return 1;
    }
    case "PFCOUNT": {
      const all = new Set<string>();
      [key, ...a].forEach((k) => (mem.get(k) as Set<string> | undefined)?.forEach((v) => all.add(v)));
      return all.size;
    }
    case "LPUSH": {
      const l = (mem.get(key) as string[]) ?? [];
      l.unshift(...a.reverse());
      mem.set(key, l);
      return l.length;
    }
    case "LTRIM": {
      const l = (mem.get(key) as string[]) ?? [];
      mem.set(key, l.slice(Number(a[0]), Number(a[1]) + 1));
      return "OK";
    }
    case "LRANGE": {
      const l = (mem.get(key) as string[]) ?? [];
      const end = Number(a[1]);
      return l.slice(Number(a[0]), end < 0 ? undefined : end + 1);
    }
    case "EXPIRE":
      return 1;
    default:
      return null;
  }
}
