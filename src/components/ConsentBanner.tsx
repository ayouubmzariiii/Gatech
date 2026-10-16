"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { CONSENT_KEY } from "./GoogleTag";

const EVENT = "gatech-consent-change";

const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
};
const read = () => {
  try {
    return localStorage.getItem(CONSENT_KEY) ?? "unset";
  } catch {
    return "denied"; // storage blocked: behave as refused, never nag
  }
};

type Gtag = (...args: unknown[]) => void;

function choose(value: "granted" | "denied") {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {}
  (window as unknown as { gtag?: Gtag }).gtag?.("consent", "update", { analytics_storage: value });
  window.dispatchEvent(new Event(EVENT));
}

interface Labels {
  text: string;
  accept: string;
  reject: string;
  more: string;
}

/** Cookie banner (Consent Mode v2). Accept and refuse have equal weight, as required. */
export function ConsentBanner({ labels, privacyHref }: { labels: Labels; privacyHref: string }) {
  const state = useSyncExternalStore(subscribe, read, () => "pending");
  if (state !== "unset") return null;
  return (
    <div role="dialog" aria-live="polite" aria-label={labels.more} className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-4">
      <div className="container-page">
        <div className="flex flex-col gap-4 border border-line bg-white p-5 shadow-[0_-8px_40px_-12px_rgb(17_19_24/0.35)] sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-body">
            {labels.text}{" "}
            <Link href={privacyHref} className="font-semibold text-ink underline hover:text-red">
              {labels.more}
            </Link>
          </p>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="border-2 border-ink px-5 py-2.5 text-sm font-bold tracking-wide text-ink uppercase transition hover:bg-ink hover:text-white"
            >
              {labels.reject}
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="border-2 border-ink bg-ink px-5 py-2.5 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-red hover:border-red"
            >
              {labels.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Footer link that re-opens the banner so visitors can change their choice at any time. */
export function ConsentManageLink({ label, className }: { label: string; className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        try {
          localStorage.removeItem(CONSENT_KEY);
        } catch {}
        (window as unknown as { gtag?: Gtag }).gtag?.("consent", "update", { analytics_storage: "denied" });
        window.dispatchEvent(new Event(EVENT));
      }}
    >
      {label}
    </button>
  );
}
