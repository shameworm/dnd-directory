"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "@/components/providers/theme-provider";
import type { ThemeVariant } from "@/lib/types";
import { GiSpellBook, GiScrollQuill, GiDragonHead } from "react-icons/gi";

const THEMES: { value: ThemeVariant; label: string; icon: React.ReactNode }[] =
  [
    { value: "codex", label: "Arcane Codex", icon: <GiSpellBook size={18} /> },
    {
      value: "scroll",
      label: "Clean Scroll",
      icon: <GiScrollQuill size={18} />,
    },
    {
      value: "dragon",
      label: "Dragon Scale",
      icon: <GiDragonHead size={18} />,
    },
  ];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(v) => {
        if (v) setTheme(v as ThemeVariant);
      }}
      aria-label="Select theme"
    >
      {THEMES.map((t) => (
        <ToggleGroupItem
          key={t.value}
          value={t.value}
          aria-label={t.label}
          title={t.label}
          className="gap-1.5"
        >
          {t.icon}
          <span className="hidden sm:inline text-xs">{t.label}</span>
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
