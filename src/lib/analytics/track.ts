import type { NextRequest } from "next/server";
import { pipeline, type Command } from "./store";

/**
 * First-party, cookieless analytics recorded from the proxy: page views, entries (sessions),
 * traffic sources, search engines, AI assistants, crawler hits, geography and devices.
 * Visitors are counted with a daily hash of IP + user agent (never stored in clear).
 */

const TTL = 60 * 60 * 24 * 400; // keep ~13 months
export const RECENT_MAX = 100;

const SEARCH_ENGINES: [RegExp, string][] = [
  [/(^|\.)google\.[a-z.]+$/, "Google"],
  [/(^|\.)bing\.com$/, "Bing"],
  [/(^|\.)yahoo\.[a-z.]+$/, "Yahoo"],
  [/(^|\.)duckduckgo\.com$/, "DuckDuckGo"],
  [/(^|\.)yandex\.[a-z.]+$/, "Yandex"],
  [/(^|\.)baidu\.com$/, "Baidu"],
  [/(^|\.)ecosia\.org$/, "Ecosia"],
  [/(^|\.)qwant\.com$/, "Qwant"],
  [/^search\.brave\.com$/, "Brave Search"],
  [/(^|\.)naver\.com$/, "Naver"],
  [/(^|\.)startpage\.com$/, "Startpage"],
];
const AI_ASSISTANTS: [RegExp, string][] = [
  [/(^|\.)(chatgpt\.com|openai\.com)$/, "ChatGPT"],
  [/(^|\.)perplexity\.ai$/, "Perplexity"],
  [/^gemini\.google\.com$/, "Gemini"],
  [/^copilot\.microsoft\.com$/, "Copilot"],
  [/(^|\.)claude\.ai$/, "Claude"],
  [/(^|\.)deepseek\.com$/, "DeepSeek"],
  [/(^|\.)you\.com$/, "You.com"],
];
const SOCIAL = /(^|\.)(facebook\.com|fb\.com|instagram\.com|linkedin\.com|lnkd\.in|t\.co|twitter\.com|x\.com|youtube\.com|tiktok\.com|whatsapp\.com|reddit\.com|pinterest\.[a-z.]+|telegram\.org|t\.me|snapchat\.com)$/;

const BOTS: [RegExp, string][] = [
  [/Google-InspectionTool/i, "Google Inspection Tool"],
  [/AdsBot-Google/i, "Google AdsBot"],
  [/Storebot-Google/i, "Google Storebot"],
  [/Googlebot-Image/i, "Googlebot Image"],
  [/Googlebot/i, "Googlebot"],
  [/Google-Extended|GoogleOther/i, "Google Other"],
  [/bingbot|BingPreview|msnbot/i, "Bingbot"],
  [/YandexBot|YandexImages/i, "YandexBot"],
  [/Baiduspider/i, "Baiduspider"],
  [/DuckDuckBot|DuckAssistBot/i, "DuckDuckBot"],
  [/Applebot/i, "Applebot"],
  [/Yahoo! Slurp/i, "Yahoo Slurp"],
  [/PetalBot/i, "PetalBot"],
  [/SeznamBot/i, "SeznamBot"],
  [/OAI-SearchBot/i, "OpenAI SearchBot"],
  [/ChatGPT-User/i, "ChatGPT-User"],
  [/GPTBot/i, "GPTBot"],
  [/ClaudeBot|Claude-User|Claude-SearchBot|anthropic-ai/i, "ClaudeBot"],
  [/PerplexityBot|Perplexity-User/i, "PerplexityBot"],
  [/Bytespider/i, "Bytespider"],
  [/Amazonbot/i, "Amazonbot"],
  [/meta-externalagent|FacebookBot/i, "Meta AI"],
  [/CCBot/i, "CCBot"],
  [/AhrefsBot|AhrefsSiteAudit/i, "AhrefsBot"],
  [/SemrushBot|SiteAuditBot/i, "SemrushBot"],
  [/MJ12bot/i, "MJ12bot"],
  [/DotBot/i, "DotBot"],
  [/Screaming Frog/i, "Screaming Frog"],
  [/facebookexternalhit/i, "Facebook preview"],
  [/LinkedInBot/i, "LinkedIn preview"],
  [/Twitterbot/i, "X preview"],
  [/WhatsApp/i, "WhatsApp preview"],
  [/TelegramBot/i, "Telegram preview"],
  [/Slackbot/i, "Slack preview"],
  [/Lighthouse|Chrome-Lighthouse|PageSpeed/i, "Lighthouse"],
  [/bot\b|crawler|spider|crawling|headless|python-requests|curl\/|wget|Go-http-client|axios|node-fetch/i, "Other bot"],
];

export const SEARCH_BOTS = new Set(["Googlebot", "Googlebot Image", "Google Inspection Tool", "Google Storebot", "Google AdsBot", "Bingbot", "YandexBot", "Baiduspider", "DuckDuckBot", "Applebot", "Yahoo Slurp", "PetalBot", "SeznamBot"]);
export const AI_BOTS = new Set(["OpenAI SearchBot", "ChatGPT-User", "GPTBot", "ClaudeBot", "PerplexityBot", "Bytespider", "Amazonbot", "Meta AI", "CCBot", "Google Other"]);

const match = (list: [RegExp, string][], s: string) => list.find(([re]) => re.test(s))?.[1];
export const detectBot = (ua: string) => (ua ? match(BOTS, ua) : "Other bot");

function device(ua: string) {
  if (/iPad|Tablet|PlayBook|Silk/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return "Tablet";
  if (/Mobi|iPhone|Android/i.test(ua)) return "Mobile";
  return "Desktop";
}
function browser(ua: string) {
  if (/Edg\//.test(ua)) return "Edge";
  if (/OPR\/|Opera/.test(ua)) return "Opera";
  if (/SamsungBrowser/.test(ua)) return "Samsung Internet";
  if (/FBAN|FBAV|Instagram/.test(ua)) return "In-app (Meta)";
  if (/Firefox\/|FxiOS/.test(ua)) return "Firefox";
  if (/Chrome\/|CriOS/.test(ua)) return "Chrome";
  if (/Safari\//.test(ua)) return "Safari";
  return "Other";
}
function os(ua: string) {
  if (/Windows/.test(ua)) return "Windows";
  if (/Android/.test(ua)) return "Android";
  if (/iPhone|iPad|iPod/.test(ua)) return "iOS";
  if (/Mac OS X|Macintosh/.test(ua)) return "macOS";
  if (/CrOS/.test(ua)) return "ChromeOS";
  if (/Linux/.test(ua)) return "Linux";
  return "Other";
}

export type Channel = "Organic Search" | "AI Assistants" | "Social" | "Paid" | "Email" | "Referral" | "Direct";

function classify(refHost: string, params: URLSearchParams): { channel: Channel; engine?: string; ai?: string } {
  const medium = (params.get("utm_medium") ?? "").toLowerCase();
  const engine = refHost ? match(SEARCH_ENGINES, refHost) : undefined;
  const ai = refHost ? match(AI_ASSISTANTS, refHost) : undefined;
  if (params.has("gclid") || params.has("msclkid") || /^(cpc|ppc|paid|paidsearch|display|cpm)/.test(medium))
    return { channel: "Paid", engine };
  if (medium === "email" || medium === "newsletter") return { channel: "Email" };
  if (ai || /chatgpt|openai|perplexity/.test(params.get("utm_source") ?? "")) return { channel: "AI Assistants", ai: ai ?? "ChatGPT" };
  if (engine) return { channel: "Organic Search", engine };
  if (refHost && SOCIAL.test(refHost)) return { channel: "Social" };
  if (medium === "social") return { channel: "Social" };
  if (refHost) return { channel: "Referral" };
  return { channel: "Direct" };
}

const day = (d = new Date()) => d.toISOString().slice(0, 10);

async function visitorHash(ip: string, ua: string, d: string) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(`${d}|${ip}|${ua}`));
  return [...new Uint8Array(buf).slice(0, 10)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Returns the work to hand to `event.waitUntil`, or null when the request is not tracked. */
export function trackRequest(request: NextRequest, siteHost: string): Promise<unknown> | null {
  if (request.method !== "GET") return null;
  const { pathname, searchParams } = request.nextUrl;
  if (pathname.startsWith("/admin")) return null;
  const h = request.headers;
  const ua = h.get("user-agent") ?? "";
  const d = day();
  const key = (k: string) => `a:${d}:${k}`;
  const cmds: Command[] = [];
  const touched = new Set<string>();
  const incr = (k: string, field: string, by = 1) => {
    cmds.push(["HINCRBY", key(k), field.slice(0, 200), by]);
    touched.add(key(k));
  };
  const country = h.get("x-vercel-ip-country") ?? "Unknown";
  const city = decodeURIComponent(h.get("x-vercel-ip-city") ?? "") || "Unknown";
  const path = pathname || "/";

  const bot = detectBot(ua);
  if (bot) {
    incr("t", "bot");
    incr("bot", bot);
    incr("botpage", path);
    cmds.push(["LPUSH", "a:recentbots", JSON.stringify({ t: Date.now(), bot, path, country })], ["LTRIM", "a:recentbots", 0, RECENT_MAX - 1]);
    return flush(cmds, touched);
  }

  // Link prefetches are not views.
  if (h.get("next-router-prefetch") || /prefetch/i.test(h.get("purpose") ?? h.get("sec-purpose") ?? "")) return null;
  // The owner's own visits don't count.
  if (request.cookies.has("gt_admin")) return null;

  const isClientNav = h.get("rsc") === "1";
  const isDocument = h.get("sec-fetch-dest") === "document" || (!h.get("sec-fetch-dest") && (h.get("accept") ?? "").includes("text/html"));
  if (!isClientNav && !isDocument) return null;

  const ip = (h.get("x-forwarded-for") ?? "").split(",")[0].trim() || h.get("x-real-ip") || "0";

  return visitorHash(ip, ua, d).then((vid) => {
    incr("t", "pv");
    incr("page", path);
    incr("hour", String(new Date().getUTCHours()));
    cmds.push(["PFADD", key("uv"), vid]);
    touched.add(key("uv"));

    if (isDocument) {
      let refHost = "";
      try {
        refHost = h.get("referer") ? new URL(h.get("referer")!).hostname.replace(/^www\./, "") : "";
      } catch {}
      // Internal full-page loads (reloads, language switch) are not new entries.
      if (refHost && refHost === siteHost.replace(/^www\./, "")) return flush(cmds, touched);

      const { channel, engine, ai } = classify(refHost, searchParams);
      const locale = /^\/(ar|en)(\/|$)/.exec(path)?.[1] ?? "fr";
      incr("t", "ent");
      incr("land", path);
      incr("ch", channel);
      incr("country", country);
      incr("city", `${city}, ${country}`);
      incr("device", device(ua));
      incr("browser", browser(ua));
      incr("os", os(ua));
      incr("locale", locale);
      if (refHost) incr("ref", refHost);
      if (engine && channel === "Organic Search") {
        incr("t", "se");
        incr("se", engine);
        incr("seland", path);
        incr("sedevice", device(ua));
        incr("secountry", country);
      }
      if (ai) {
        incr("t", "ai");
        incr("ai", ai);
        incr("ailand", path);
      }
      const src = searchParams.get("utm_source");
      if (src) incr("utm", `${src} / ${searchParams.get("utm_medium") ?? "-"} / ${searchParams.get("utm_campaign") ?? "-"}`);
      cmds.push(
        ["LPUSH", "a:recent", JSON.stringify({ t: Date.now(), path, channel, source: engine ?? ai ?? (refHost || "direct"), country, city, device: device(ua), browser: browser(ua) })],
        ["LTRIM", "a:recent", 0, RECENT_MAX - 1],
      );
    }
    return flush(cmds, touched);
  });
}

/** Records a contact-form lead (conversion). */
export function trackLead(certification: string) {
  const k = `a:${day()}`;
  const cmds: Command[] = [["HINCRBY", `${k}:t`, "lead", 1]];
  if (certification) cmds.push(["HINCRBY", `${k}:leadcert`, certification.slice(0, 120), 1]);
  return flush(cmds, new Set([`${k}:t`, `${k}:leadcert`]));
}

function flush(cmds: Command[], touched: Set<string>) {
  touched.forEach((k) => cmds.push(["EXPIRE", k, TTL]));
  return pipeline(cmds).catch((e) => console.error("[analytics]", e));
}
