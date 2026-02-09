import type { Locale, CategoryMeta, Category } from "./types";

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
