"use server";

import { trackLead } from "@/lib/analytics/track";

export type ContactField = "name" | "email" | "phone" | "consent";

export interface ContactState {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<ContactField, "required" | "invalidEmail">>;
  /** Submitted values, echoed back so the form keeps them after an error. */
  values?: Record<string, string>;
}

const str = (data: FormData, key: string, max = 2000) => String(data.get(key) ?? "").trim().slice(0, max);

/**
 * Receives a lead. Set CONTACT_WEBHOOK_URL (Zapier, Make, n8n, HubSpot, Slack…)
 * to forward each lead as JSON; otherwise leads are only written to the server log.
 */
export async function submitContact(_prev: ContactState, data: FormData): Promise<ContactState> {
  // Honeypot: bots fill every field, humans never see this one.
  if (str(data, "website")) return { status: "success" };

  const lead = {
    name: str(data, "name", 120),
    email: str(data, "email", 160),
    phone: str(data, "phone", 40),
    company: str(data, "company", 160),
    certification: str(data, "certification", 80),
    format: str(data, "format", 40),
    message: str(data, "message", 4000),
    locale: str(data, "locale", 5),
    consent: data.get("consent") === "on",
    receivedAt: new Date().toISOString(),
  };

  const errors: ContactState["errors"] = {};
  if (!lead.name) errors.name = "required";
  if (!lead.email) errors.email = "required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(lead.email)) errors.email = "invalidEmail";
  if (!lead.phone) errors.phone = "required";
  if (!lead.consent) errors.consent = "required";
  const values = {
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    company: lead.company,
    certification: lead.certification,
    format: lead.format,
    message: lead.message,
  };
  if (Object.keys(errors).length) return { status: "error", errors, values };

  await trackLead(lead.certification);

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[contact] webhook delivery failed", err, lead);
      return { status: "error", values };
    }
  } else {
    console.info("[contact] new lead", lead);
  }

  return { status: "success" };
}
