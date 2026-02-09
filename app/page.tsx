import { Header } from "@/components/header";
import { HomeContent } from "@/components/home-content";
import { getLocale } from "@/lib/get-locale";
import { getCategories, getCategoryData, getRuleIndex, linkifyDescriptions } from "@/lib/data";
import { getUIStrings } from "@/lib/i18n";
import { GiRollingDices } from "react-icons/gi";
import type { RuleGroup } from "@/lib/types";

export default async function HomePage() {
  const locale = await getLocale();
  const categories = getCategories(locale);
  const t = getUIStrings(locale);

  const ruleIndex = getRuleIndex(locale);
  const categoryDataMap: Record<string, RuleGroup[]> = {};
  const previewIconsMap: Record<string, string[]> = {};

  for (const cat of categories) {
    const data = getCategoryData(locale, cat.slug);
    if (data) {
      categoryDataMap[cat.slug] = linkifyDescriptions(data, ruleIndex, cat.slug);
      const icons: string[] = [];
      for (const group of data) {
        for (const rule of group.rules) {
          if (rule.icon && icons.length < 3) {
            icons.push(rule.icon);
          }
        }
      }
      previewIconsMap[cat.slug] = icons;
    }
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-10">
          <GiRollingDices className="size-16 text-primary mx-auto mb-4 opacity-80" />
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            {t.appTitle}
          </h1>
          <p className="text-muted-foreground mt-2 text-lg max-w-lg mx-auto">
            {t.appSubtitle}
          </p>
        </div>

        <HomeContent
          categories={categories}
          categoryDataMap={categoryDataMap}
          previewIconsMap={previewIconsMap}
        />
      </main>
    </div>
  );
}
