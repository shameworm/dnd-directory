import { CategoryCard } from "@/components/category-card";
import type { CategoryMeta } from "@/lib/types";

interface CategoryGridProps {
  categories: CategoryMeta[];
  previewIconsMap?: Record<string, string[]>;
}

export function CategoryGrid({
  categories,
  previewIconsMap = {},
}: CategoryGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.slug}
          category={category}
          previewIcons={previewIconsMap[category.slug]}
        />
      ))}
    </div>
  );
}
