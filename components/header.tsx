"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { GiRollingDices } from "react-icons/gi";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 hover:opacity-80 transition-opacity"
        >
          <GiRollingDices className="size-7 text-primary" />
          <span className="font-display font-semibold text-lg hidden sm:inline">
            D&D Directory
          </span>
          <span className="font-display font-semibold text-lg sm:hidden">
            D&D
          </span>
        </Link>

        {/* Desktop controls */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-display">Settings</SheetTitle>
              <div className="flex flex-col gap-6 mt-6">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Theme
                  </label>
                  <ThemeSwitcher />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Language
                  </label>
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
