"use client";

import { useMemo, useState, type ReactNode } from "react";

interface Item {
  slug: string;
  vendor: string;
  level: string;
  category: string;
  /** Server-rendered card. */
  node: ReactNode;
}

interface Option {
  value: string;
  label: string;
}

interface Props {
  items: Item[];
  vendors: Option[];
  levels: Option[];
  categories: Option[];
  labels: { all: string; vendor: string; level: string; category: string; results: string; noResults: string; reset: string };
}

type Filters = { vendor: string; level: string; category: string };
const empty: Filters = { vendor: "", level: "", category: "" };

function Chips({
  legend,
  options,
  value,
  allLabel,
  onChange,
}: {
  legend: string;
  options: Option[];
  value: string;
  allLabel: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset className="flex flex-wrap items-center gap-2">
      <legend className="sr-only">{legend}</legend>
      <span aria-hidden className="me-1 w-24 shrink-0 text-sm font-medium text-ink">
        {legend}
      </span>
      {[{ value: "", label: allLabel }, ...options].map((o) => (
        <button
          key={o.value || "all"}
          type="button"
          aria-pressed={value === o.value}
          onClick={() => onChange(o.value)}
          className=" border border-line-strong bg-white px-3 py-1.5 text-sm text-body transition hover:border-ink/40 hover:text-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-white"
        >
          {o.label}
        </button>
      ))}
    </fieldset>
  );
}

export function CatalogFilter({ items, vendors, levels, categories, labels }: Props) {
  const [filters, setFilters] = useState<Filters>(empty);
  const set = (key: keyof Filters) => (value: string) => setFilters((f) => ({ ...f, [key]: value }));

  const visible = useMemo(
    () =>
      items.filter(
        (i) =>
          (!filters.vendor || i.vendor === filters.vendor) &&
          (!filters.level || i.level === filters.level) &&
          (!filters.category || i.category === filters.category),
      ),
    [items, filters],
  );
  const visibleSlugs = new Set(visible.map((v) => v.slug));

  return (
    <div>
      <div className="card space-y-3 bg-surface p-5">
        <Chips legend={labels.category} options={categories} value={filters.category} allLabel={labels.all} onChange={set("category")} />
        <Chips legend={labels.level} options={levels} value={filters.level} allLabel={labels.all} onChange={set("level")} />
        <Chips legend={labels.vendor} options={vendors} value={filters.vendor} allLabel={labels.all} onChange={set("vendor")} />
      </div>
      <h2 className="mt-6 text-sm font-semibold text-muted" aria-live="polite">
        {labels.results.replace("{count}", String(visible.length))}
      </h2>
      {/* Every card stays in the DOM (hidden when filtered) so all links remain crawlable. */}
      <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <li key={i.slug} hidden={!visibleSlugs.has(i.slug)} className="flex [&>article]:flex-1">
            {i.node}
          </li>
        ))}
      </ul>
      {visible.length === 0 && (
        <div className="mt-6 text-center text-body">
          <p>{labels.noResults}</p>
          <button type="button" onClick={() => setFilters(empty)} className="mt-3 text-sm font-semibold text-red">
            {labels.reset}
          </button>
        </div>
      )}
    </div>
  );
}
