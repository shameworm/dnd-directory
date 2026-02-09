export type Locale = "en" | "uk" | "ru";

export type ThemeVariant = "codex" | "scroll" | "dragon";

export interface CategoryMeta {
  dataset: string;
  title: string;
  subtitle?: string;
  color: string;
  slug: string;
}

export interface Rule {
  title: string;
  icon: string;
  subtitle?: string;
  reference?: string;
  description: string;
}

export interface RuleGroup {
  title: string;
  subtitle?: string;
  rules: Rule[];
}

export type Category = RuleGroup[];
