"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLocale } from "@/components/providers/locale-provider";
import type { Locale } from "@/lib/types";

const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  uk: "Українська",
  ru: "Русский",
};

export function LanguageSwitcher() {
  const { locale, setLocale, isPending } = useLocale();

  return (
    <Select
      value={locale}
      onValueChange={(v) => setLocale(v as Locale)}
      disabled={isPending}
    >
      <SelectTrigger className="w-[140px]" aria-label="Select language">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {(Object.entries(LOCALE_LABELS) as [Locale, string][]).map(
          ([value, label]) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          )
        )}
      </SelectContent>
    </Select>
  );
}
