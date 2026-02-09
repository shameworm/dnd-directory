import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { GiDungeonGate } from "react-icons/gi";

export default function CategoryNotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16 text-center">
        <GiDungeonGate className="size-20 text-muted-foreground mx-auto mb-6 opacity-50" />
        <h1 className="font-display text-3xl font-bold mb-2">
          Category Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
          The scroll you seek has been lost to the ages. Perhaps it was
          destroyed by a wayward fireball.
        </p>
        <Button asChild>
          <Link href="/">Return to Directory</Link>
        </Button>
      </main>
    </div>
  );
}
