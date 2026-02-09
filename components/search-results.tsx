"use client";

import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { RuleEntry } from "@/components/rule-entry";
import { getCategoryColors } from "@/lib/colors";
import type { SearchResult } from "@/hooks/use-search";

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  if (results.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-lg">No results found</p>
        <p className="text-sm mt-1">Try a different search term</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {results.map(({ category, rules }) => {
        const colors = getCategoryColors(category.color);
        return (
          <div key={category.slug}>
            <Link
              href={`/${category.slug}`}
              className="inline-flex items-center gap-2 mb-2 hover:opacity-80 transition-opacity"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: colors.border }}
              />
              <h3
                className="font-display font-semibold text-sm"
                style={{ color: colors.text }}
              >
                {category.title}
              </h3>
              <span className="text-xs text-muted-foreground">
                ({rules.length})
              </span>
            </Link>
            <Accordion type="multiple" className="w-full">
              {rules.slice(0, 10).map((rule, idx) => (
                <RuleEntry
                  key={idx}
                  rule={rule}
                  index={idx}
                  accentColor={colors.text}
                />
              ))}
            </Accordion>
            {rules.length > 10 && (
              <Link
                href={`/${category.slug}`}
                className="text-xs text-primary hover:underline mt-2 inline-block"
              >
                View all {rules.length} results in {category.title}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
