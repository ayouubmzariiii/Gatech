import { cookies } from "next/headers";

/** Access code for /admin. Override with ADMIN_CODE in the Vercel environment. */
const ADMIN_CODE = process.env.ADMIN_CODE ?? "Ayoub123321";
export const ADMIN_COOKIE = "gt_admin";

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

/** Session token derived from the code: changing ADMIN_CODE signs everyone out. */
export const sessionToken = () => sha256(`gatech-admin:${ADMIN_CODE}`);

/** Constant-time-ish comparison of the submitted code. */
export async function checkCode(code: string): Promise<boolean> {
  const [a, b] = await Promise.all([sha256(code), sha256(ADMIN_CODE)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

export async function isAdmin(): Promise<boolean> {
  const value = (await cookies()).get(ADMIN_COOKIE)?.value;
  return !!value && value === (await sessionToken());
}
