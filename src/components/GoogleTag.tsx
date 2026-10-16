import Script from "next/script";

/** GA4 measurement ID. */
export const GA_ID = "G-N0J1QEX7NX";

/** localStorage key holding the visitor's analytics choice: "granted" | "denied". */
export const CONSENT_KEY = "gatech-consent";

/**
 * Google tag with Consent Mode v2. Defaults are set BEFORE gtag.js loads: everything denied
 * (cookieless pings only) unless the visitor already accepted analytics. Ads storage is
 * always denied — the site does not use advertising.
 */
export function GoogleTag() {
  return (
    <>
      <Script id="ga-consent-default" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;
var c=null;try{c=localStorage.getItem('${CONSENT_KEY}');}catch(e){}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:c==='granted'?'granted':'denied',wait_for_update:500});
gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
    </>
  );
}
