import type { Dictionary } from "@/dictionaries";
import { SectionHeading } from "./ui";

/** The three training formats (inter-company, live online, on-site intra) and session languages. */
export function TrainingFormats({ id, dict }: { id: string; dict: Dictionary }) {
  return (
    <section aria-labelledby={id} className="container-page py-16 sm:py-20">
      <SectionHeading id={id} title={dict.formats.title} subtitle={dict.formats.subtitle} />
      <div className="mt-10 grid gap-x-10 gap-y-8 lg:grid-cols-3">
        {dict.formats.items.map((item) => (
          <div key={item.title} className="border-t-2 border-ink pt-5">
            <h3 className="font-semibold text-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
