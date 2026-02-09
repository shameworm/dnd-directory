"use client";

import { ThemeProvider } from "./theme-provider";
import { LocaleProvider } from "./locale-provider";
import type { Locale } from "@/lib/types";

export function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  return (
    <ThemeProvider>
      <LocaleProvider initialLocale={locale}>{children}</LocaleProvider>
    </ThemeProvider>
  );
}
