/**
 * In right-to-left text, a trailing "+" after a Latin name ("Security+", "OSCP+")
 * is displayed on the wrong side. A left-to-right mark after the "+" keeps it attached.
 */
const LRM = "‎";
export const fixBidi = (text: string) => text.replace(/([A-Za-z0-9])\+(?!‎)/g, `$1+${LRM}`);

/** Deep-applies fixBidi to every string of a value. */
export function fixBidiDeep<T>(value: T): T {
  if (typeof value === "string") return fixBidi(value) as T;
  if (Array.isArray(value)) return value.map(fixBidiDeep) as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, fixBidiDeep(v)])) as T;
  }
  return value;
}
