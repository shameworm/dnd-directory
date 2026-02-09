"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import type { CategoryMeta, Rule, RuleGroup } from "@/lib/types";

export interface SearchResult {
  category: CategoryMeta;
  rules: Rule[];
}

interface UseSearchProps {
  categories: CategoryMeta[];
  categoryDataMap: Record<string, RuleGroup[]>;
}

export function useSearch({ categories, categoryDataMap }: UseSearchProps) {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setDebouncedQuery(value);
    }, 200);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const results = useMemo<SearchResult[]>(() => {
    const q = debouncedQuery.toLowerCase().trim();
    if (!q) return [];

    return categories
      .map((cat) => {
        const groups = categoryDataMap[cat.slug] || [];
        const matchingRules: Rule[] = [];

        const catMatches =
          cat.title.toLowerCase().includes(q) ||
          (cat.subtitle?.toLowerCase().includes(q) ?? false);

        for (const group of groups) {
          for (const rule of group.rules) {
            if (
              catMatches ||
              rule.title.toLowerCase().includes(q) ||
              (rule.subtitle?.toLowerCase().includes(q) ?? false) ||
              (rule.reference?.toLowerCase().includes(q) ?? false)
            ) {
              matchingRules.push(rule);
            }
          }
        }

        if (matchingRules.length > 0) {
          return { category: cat, rules: matchingRules };
        }
        return null;
      })
      .filter((r): r is SearchResult => r !== null);
  }, [debouncedQuery, categories, categoryDataMap]);

  return {
    query,
    setQuery: handleQueryChange,
    results,
    isSearching: debouncedQuery.length > 0,
  };
}
