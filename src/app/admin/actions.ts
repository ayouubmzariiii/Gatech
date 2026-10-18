"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, checkCode, sessionToken } from "@/lib/analytics/auth";

export async function login(_prev: { error?: boolean }, data: FormData): Promise<{ error?: boolean }> {
  const code = String(data.get("code") ?? "");
  if (!(await checkCode(code))) {
    await new Promise((r) => setTimeout(r, 800)); // slow down guessing
    return { error: true };
  }
  (await cookies()).set(ADMIN_COOKIE, await sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete(ADMIN_COOKIE);
  redirect("/admin");
}
