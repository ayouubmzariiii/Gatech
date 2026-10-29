import Script from "next/script";

/** GA4 measurement ID. */
export const GA_ID = "G-Q4HG64VW69";

/** localStorage key holding the visitor's analytics choice: "granted" | "denied". */
export const CONSENT_KEY = "gatech-consent";

/**
 * Consent Mode v2, advanced implementation, following
 * https://developers.google.com/tag-platform/security/guides/consent?consentmode=advanced
 *
 * 1. Inline in <head>, BEFORE the gtag.js loader and before any `config`:
 *    `consent default` with all four v2 types denied (+ wait_for_update for the async banner).
 * 2. The stored choice is re-sent on every page with `consent update` (consent mode does not persist it).
 * 3. ads_data_redaction + url_passthrough are set before `config`.
 * The site runs no advertising: ad_* types stay denied even when analytics is accepted.
 */
export const consentInitScript = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500});
gtag('set','ads_data_redaction',true);
gtag('set','url_passthrough',true);
try{var c=localStorage.getItem('${CONSENT_KEY}');if(c==='granted'||c==='denied'){gtag('consent','update',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':c});}}catch(e){}
gtag('js',new Date());
gtag('config','${GA_ID}');`;

/** Inline consent defaults + config; render inside <head>. */
export function GoogleTagHead() {
  return <script id="ga-consent-default" dangerouslySetInnerHTML={{ __html: consentInitScript }} />;
}

/** The gtag.js loader (async, after the consent defaults). */
export function GoogleTagLoader() {
  return <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />;
}

/** Full consent update: every consent type is set explicitly (ads are never used on this site). */
export const consentUpdate = (analytics: "granted" | "denied") => ({
  ad_storage: "denied",
  ad_user_data: "denied",
  ad_personalization: "denied",
  analytics_storage: analytics,
});
