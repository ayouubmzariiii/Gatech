"use client";

import { useActionState } from "react";
import { login } from "./actions";

export function LoginForm() {
  const [state, action, pending] = useActionState(login, {});
  return (
    <form action={action} className="w-full max-w-sm rounded-xl border border-line bg-canvas p-8 shadow-sm">
      <h1 className="text-xl font-semibold text-ink">GA Tech admin</h1>
      <p className="mt-1 text-sm text-muted">Enter your access code.</p>
      <input
        name="code"
        type="password"
        autoFocus
        autoComplete="current-password"
        aria-label="Access code"
        className="mt-6 w-full rounded-lg border border-line-strong px-3 py-2 text-ink outline-none focus:border-ink"
      />
      {state.error && <p className="mt-2 text-sm text-red">Wrong code.</p>}
      <button disabled={pending} className="mt-4 w-full rounded-lg bg-ink py-2 font-medium text-white disabled:opacity-60">
        {pending ? "Checking…" : "Sign in"}
      </button>
    </form>
  );
}
