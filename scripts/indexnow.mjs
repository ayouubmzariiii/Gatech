/**
 * Submits every URL of the live sitemap to IndexNow (Bing, Yandex, Seznam, Naver…).
 * Run after each production deploy:  npm run indexnow
 * Google does not use IndexNow: use Search Console (sitemap is submitted once).
 */
const SITE = (process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL ?? "https://gatech.world").replace(/\/$/, "");
const KEY = "3dacf6067b80d516e4ebc539ab6c3c9c"; // must match public/<KEY>.txt and indexNowKey in src/lib/site.ts

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (!urlList.length) throw new Error("No URLs found in sitemap");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status}`);
if (!res.ok && res.status !== 202) process.exit(1);
