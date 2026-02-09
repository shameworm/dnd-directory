import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GameIcon } from "@/components/game-icon";
import { getCategoryColors } from "@/lib/colors";
import type { CategoryMeta } from "@/lib/types";

interface CategoryCardProps {
  category: CategoryMeta;
  previewIcons?: string[];
}

export function CategoryCard({ category, previewIcons = [] }: CategoryCardProps) {
  const colors = getCategoryColors(category.color);

  return (
    <Link href={`/${category.slug}`} className="group block">
      <Card
        className="relative overflow-hidden transition-all duration-200 hover:scale-[1.02] hover:shadow-lg h-full"
        style={{ borderColor: colors.border }}
      >
        <div
          className="absolute top-0 left-0 w-1 h-full"
          style={{ backgroundColor: colors.border }}
        />
        <CardHeader className="pl-5">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <CardTitle
                className="font-display text-xl leading-tight group-hover:opacity-90 transition-opacity"
                style={{ color: colors.text }}
              >
                {category.title}
              </CardTitle>
              {category.subtitle && (
                <CardDescription className="mt-1 text-base">
                  {category.subtitle}
                </CardDescription>
              )}
            </div>
            {previewIcons.length > 0 && (
              <div className="flex gap-1 shrink-0 opacity-50 group-hover:opacity-80 transition-opacity">
                {previewIcons.slice(0, 3).map((icon, i) => (
                  <GameIcon
                    key={i}
                    name={icon}
                    size={22}
                    color={colors.text}
                  />
                ))}
              </div>
            )}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
