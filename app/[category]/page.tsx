import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/header";
import { RuleGroup } from "@/components/rule-group";
import { getCategoryColors } from "@/lib/colors";
import { getLocale } from "@/lib/get-locale";
import {
  getCategories,
  getCategoryData,
  getCategoryMeta,
  getAllSlugs,
} from "@/lib/data";
import { ChevronRight } from "lucide-react";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const locale = await getLocale();
  const meta = getCategoryMeta(locale, category);
  if (!meta) return { title: "Not Found" };

  return {
    title: meta.title,
    description: meta.subtitle
      ? `${meta.title} - ${meta.subtitle}`
      : `D&D 5e ${meta.title} reference`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const locale = await getLocale();
  const meta = getCategoryMeta(locale, category);

  if (!meta) notFound();

  const data = getCategoryData(locale, category);
  if (!data) notFound();

  const colors = getCategoryColors(meta.color);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span style={{ color: colors.text }}>{meta.title}</span>
        </nav>

        {/* Category header */}
        <div className="mb-8">
          <div
            className="w-12 h-1 rounded-full mb-4"
            style={{ backgroundColor: colors.border }}
          />
          <h1
            className="font-display text-2xl sm:text-3xl font-bold"
            style={{ color: colors.text }}
          >
            {meta.title}
          </h1>
          {meta.subtitle && (
            <p className="text-muted-foreground mt-1 text-lg">
              {meta.subtitle}
            </p>
          )}
        </div>

        {/* Rule groups */}
        <div className="space-y-8 max-w-3xl">
          {data.map((group, idx) => (
            <RuleGroup
              key={idx}
              group={group}
              groupIndex={idx}
              accentColor={colors.text}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
