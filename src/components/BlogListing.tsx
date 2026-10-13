import Link from "next/link";
import { blogCategories, categoryLabels, postsInCategory } from "@/data/blog";
import type { BlogCategory, BlogPost } from "@/data/types";
import type { Dictionary } from "@/dictionaries";
import type { Locale } from "@/lib/i18n";
import { localePath, routes } from "@/lib/seo";
import { PostCard } from "./ui";

/** Category navigation + featured post + grid. Used by /blog and /blog/categorie/[category]. */
export function BlogListing({
  posts,
  locale,
  dict,
  active,
}: {
  posts: BlogPost[];
  locale: Locale;
  dict: Dictionary;
  active?: BlogCategory;
}) {
  const [featured, ...rest] = posts;
  const chip = (isActive: boolean) =>
    `inline-flex items-center gap-2 border-2 px-4 py-2 text-sm font-bold tracking-wide uppercase transition ${
      isActive ? "border-ink bg-ink text-white" : "border-line-strong bg-white text-ink hover:border-red hover:text-red"
    }`;
  return (
    <>
      <nav aria-label={dict.blog.categories} className="container-page pt-12">
        <ul className="flex flex-wrap gap-2.5">
          <li>
            <Link href={localePath(locale, routes.blog)} className={chip(!active)} aria-current={!active ? "page" : undefined}>
              {dict.blog.all}
            </Link>
          </li>
          {blogCategories.map((c) => (
            <li key={c}>
              <Link
                href={localePath(locale, routes.blogCategory(c))}
                className={chip(active === c)}
                aria-current={active === c ? "page" : undefined}
              >
                {categoryLabels[c][locale]}
                <span className="text-xs opacity-60">{postsInCategory(c).length}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="container-page py-12">
        {featured && <PostCard post={featured} locale={locale} dict={dict} featured />}
        {rest.length > 0 && (
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <li key={p.slug}>
                <PostCard post={p} locale={locale} dict={dict} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
