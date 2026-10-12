"use client";

import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { submitContact, type ContactState } from "@/app/actions";
import type { Dictionary } from "@/dictionaries";
import { CheckIcon } from "./icons";

type Labels = Dictionary["contact"];

interface Props {
  locale: string;
  labels: Labels;
  certifications: { value: string; label: string }[];
  defaults?: { certification?: string; format?: string };
}

const inputClass =
  "mt-1.5 block w-full border border-line-strong bg-white px-3.5 py-2.5 text-ink placeholder:text-muted transition focus:border-red focus:ring-3 focus:ring-red/15 focus:outline-none aria-invalid:border-red-600";

export function ContactForm({ locale, labels, certifications, defaults = {} }: Props) {
  const [state, action, pending] = useActionState<ContactState, FormData>(submitContact, { status: "idle" });
  const err = (field: keyof NonNullable<ContactState["errors"]>) => state.errors?.[field];
  const errText = (field: keyof NonNullable<ContactState["errors"]>) => {
    const e = err(field);
    return e ? (e === "invalidEmail" ? labels.invalidEmail : labels.required) : null;
  };

  if (state.status === "success") {
    return (
      <div role="status" className="card flex flex-col items-center p-10 text-center">
        <span className="inline-flex size-12 items-center justify-center rounded-full bg-ok/10 text-ok">
          <CheckIcon width={24} height={24} />
        </span>
        <p className="mt-5 text-lg text-ink">{labels.success}</p>
      </div>
    );
  }

  const field = (name: "name" | "email" | "phone", label: string, type: string, autoComplete: string) => (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink">
        {label} <span aria-hidden className="text-red-600">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        defaultValue={state.values?.[name]}
        dir={type === "tel" || type === "email" ? "ltr" : undefined}
        aria-invalid={err(name) ? true : undefined}
        aria-describedby={err(name) ? `${name}-error` : undefined}
        className={inputClass}
      />
      {errText(name) && (
        <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700">
          {errText(name)}
        </p>
      )}
    </div>
  );

  return (
    <form action={action} className="card space-y-5 border-t-4 border-t-red p-6 sm:p-8" noValidate>
      <input type="hidden" name="locale" value={locale} />
      <div aria-hidden className="absolute -left-[9999px] h-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && (
        <p role="alert" className=" border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {labels.error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {field("name", labels.name, "text", "name")}
        {field("email", labels.email, "email", "email")}
        {field("phone", labels.phone, "tel", "tel")}
        <div>
          <label htmlFor="company" className="text-sm font-medium text-ink">
            {labels.company}
          </label>
          <input id="company" name="company" type="text" autoComplete="organization" defaultValue={state.values?.company} className={inputClass} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="certification" className="text-sm font-medium text-ink">
            {labels.certification}
          </label>
          <select id="certification" name="certification" defaultValue={state.values?.certification ?? defaults.certification ?? ""} className={inputClass}>
            <option value="">{labels.certificationPlaceholder}</option>
            {certifications.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <fieldset>
          <legend className="text-sm font-medium text-ink">{labels.format}</legend>
          <div className="mt-2 flex flex-wrap gap-2">
            {(Object.entries(labels.formats) as [string, string][]).map(([value, label]) => (
              <label
                key={value}
                className="cursor-pointer border border-line-strong bg-white px-3 py-2 text-sm text-body transition has-checked:border-ink has-checked:bg-ink has-checked:text-white has-focus-visible:ring-2 has-focus-visible:ring-red"
              >
                <input type="radio" name="format" value={value} defaultChecked={(state.values?.format ?? defaults.format) === value} className="sr-only" />
                {label}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-ink">
          {labels.message}
        </label>
        <textarea id="message" name="message" rows={4} defaultValue={state.values?.message} className={inputClass} />
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-body">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={err("consent") ? true : undefined}
            className="mt-0.5 size-4 shrink-0 accent-red"
          />
          {labels.consent}
        </label>
        {errText("consent") && <p className="mt-1.5 text-sm text-red-700">{errText("consent")}</p>}
      </div>

      <button
        type="submit"
        disabled={pending}
        className="cut inline-flex w-full items-center justify-center bg-red px-6 py-4 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-red-hover disabled:opacity-60"
      >
        {pending ? labels.sending : labels.submit}
      </button>
    </form>
  );
}

/** Pre-fills the form from `?certification=` and `?format=` links. */
export function ContactFormFromQuery(props: Omit<Props, "defaults">) {
  const params = useSearchParams();
  return (
    <ContactForm
      {...props}
      defaults={{ certification: params.get("certification") ?? undefined, format: params.get("format") ?? undefined }}
    />
  );
}
