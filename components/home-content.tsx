"use client";

import { CategoryGrid } from "@/components/category-grid";
import { SearchBar } from "@/components/search-bar";
import { SearchResults } from "@/components/search-results";
import { useSearch } from "@/hooks/use-search";
import { useLocale } from "@/components/providers/locale-provider";
import type { CategoryMeta, RuleGroup } from "@/lib/types";

interface HomeContentProps {
  categories: CategoryMeta[];
  categoryDataMap: Record<string, RuleGroup[]>;
  previewIconsMap: Record<string, string[]>;
}

export function HomeContent({
  categories,
  categoryDataMap,
  previewIconsMap,
}: HomeContentProps) {
  const { query, setQuery, results, isSearching } = useSearch({
    categories,
    categoryDataMap,
  });
  const { t } = useLocale();

  return (
    <>
      <div className="max-w-xl mx-auto mb-8">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder={t.searchPlaceholder}
        />
      </div>

      {isSearching ? (
        <SearchResults results={results} />
      ) : (
        <CategoryGrid
          categories={categories}
          previewIconsMap={previewIconsMap}
        />
      )}
    </>
  );
}
