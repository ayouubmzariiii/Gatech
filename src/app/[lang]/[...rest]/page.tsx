import { notFound } from "next/navigation";

/** Catches unknown URLs so they render the localized 404 inside the site layout. */
export default function CatchAll() {
  notFound();
}
