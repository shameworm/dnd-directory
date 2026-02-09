import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { getLocale } from "@/lib/get-locale";
import { getUIStrings } from "@/lib/i18n";
import { GiDungeonGate } from "react-icons/gi";

export default async function CategoryNotFound() {
  const locale = await getLocale();
  const t = getUIStrings(locale);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <GiDungeonGate className="size-20 text-muted-foreground mx-auto mb-6 opacity-50" />
        <h1 className="font-display text-3xl font-bold mb-2">
          {t.notFoundTitle}
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          {t.notFoundText}
        </p>
        <Button asChild>
          <Link href="/">{t.returnHome}</Link>
        </Button>
      </main>
    </div>
  );
}
