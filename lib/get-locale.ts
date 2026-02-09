import { cookies } from "next/headers";
import type { Locale } from "./types";

const VALID_LOCALES: Locale[] = ["en", "uk", "ru"];

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value;
  if (locale && VALID_LOCALES.includes(locale as Locale)) {
    return locale as Locale;
  }
  return "en";
}
