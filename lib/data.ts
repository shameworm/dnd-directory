import type { Locale, CategoryMeta, Category, RuleGroup } from "./types";

function extractSlug(dataset: string): string {
  const filename = dataset.split("/").pop() ?? "";
  return filename.replace(/\.json$/, "");
}

export function getCategories(locale: Locale): CategoryMeta[] {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const raw = require(`./data/${locale}/categories.json`) as Array<{
      dataset: string;
      title: string;
      subtitle?: string;
      color: string;
    }>;
    return raw.map((item) => ({
      ...item,
      slug: extractSlug(item.dataset),
    }));
  } catch {
    if (locale !== "en") return getCategories("en");
    return [];
  }
}

export function getCategoryData(
  locale: Locale,
  slug: string
): Category | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require(`./data/${locale}/${slug}.json`) as Category;
  } catch {
    if (locale !== "en") return getCategoryData("en", slug);
    return null;
  }
}

export function getCategoryMeta(
  locale: Locale,
  slug: string
): CategoryMeta | null {
  const categories = getCategories(locale);
  return categories.find((c) => c.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  const categories = getCategories("en");
  return categories.map((c) => c.slug);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\u0400-\u04ff]+/g, "-")
    .replace(/^-|-$/g, "");
}

export type RuleIndex = Map<string, { slug: string; id: string }>;

export function getRuleIndex(locale: Locale): RuleIndex {
  const index: RuleIndex = new Map();
  const categories = getCategories(locale);

  for (const cat of categories) {
    const data = getCategoryData(locale, cat.slug);
    if (!data) continue;
    for (const group of data) {
      for (const rule of group.rules) {
        const key = rule.title.toLowerCase();
        if (!index.has(key)) {
          index.set(key, { slug: cat.slug, id: slugify(rule.title) });
        }
      }
    }
  }

  return index;
}

export function linkifyDescriptions(
  data: RuleGroup[],
  ruleIndex: RuleIndex,
  currentSlug: string
): RuleGroup[] {
  return data.map((group) => ({
    ...group,
    rules: group.rules.map((rule) => ({
      ...rule,
      description: rule.description.replace(
        /<i>([^<]+)<\/i>/g,
        (_match, text: string) => {
          const entry = ruleIndex.get(text.toLowerCase());
          if (!entry) return `<i>${text}</i>`;
          const href =
            entry.slug === currentSlug
              ? `#${entry.id}`
              : `/${entry.slug}#${entry.id}`;
          return `<a href="${href}">${text}</a>`;
        }
      ),
    })),
  }));
}
