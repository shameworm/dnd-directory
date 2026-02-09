"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useSyncExternalStore,
} from "react";
import type { ThemeVariant } from "@/lib/types";

interface ThemeContextValue {
  theme: ThemeVariant;
  setTheme: (theme: ThemeVariant) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "codex",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

const THEME_CLASSES: Record<ThemeVariant, string> = {
  codex: "theme-codex",
  scroll: "theme-scroll",
  dragon: "theme-dragon",
};

function getStoredTheme(): ThemeVariant {
  if (typeof window === "undefined") return "codex";
  const stored = localStorage.getItem("theme");
  if (stored && stored in THEME_CLASSES) return stored as ThemeVariant;
  return "codex";
}

const subscribe = () => () => {};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const initialTheme = useSyncExternalStore(
    subscribe,
    getStoredTheme,
    () => "codex" as ThemeVariant
  );
  const [theme, setThemeState] = useState<ThemeVariant>(initialTheme);

  useEffect(() => {
    const root = document.documentElement;
    Object.values(THEME_CLASSES).forEach((cls) => root.classList.remove(cls));
    root.classList.add(THEME_CLASSES[theme]);
  }, [theme]);

  const setTheme = useCallback((t: ThemeVariant) => {
    setThemeState(t);
    localStorage.setItem("theme", t);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
