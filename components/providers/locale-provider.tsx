"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useTransition,
  useMemo,
} from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/lib/types";
import { getUIStrings, type UIStrings } from "@/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isPending: boolean;
  t: UIStrings;
}

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
  isPending: false,
  t: getUIStrings("en"),
});

export function useLocale() {
  return useContext(LocaleContext);
}

export function LocaleProvider({
  children,
  initialLocale = "en",
}: {
  children: React.ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const t = useMemo(() => getUIStrings(locale), [locale]);

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleState(newLocale);
      document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
      startTransition(() => {
        router.refresh();
      });
    },
    [router]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, isPending, t }}>
      {children}
    </LocaleContext.Provider>
  );
}
