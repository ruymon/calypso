"use client";

import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { useScopedI18n } from "@/locales/client";
import Link from "next/link";

export function Navbar({}) {
  const t = useScopedI18n("common");

  return (
    <div className="sticky top-0 z-10 flex w-full bg-background/25 backdrop-blur-xl">
      <div className="container flex w-full items-center justify-between py-4">
        <div className="flex items-center gap-6">
          <Logo />

          {/* <nav className="flex items-center gap-3">
          <Link
            href="/manifesto"
            className="text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-accent-foreground"
          >
            Manifesto
          </Link>

          <Link
            href="/manifesto"
            className="text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-accent-foreground"
          >
            Manifesto
          </Link>
        </nav> */}
        </div>
        <Link
          href="/"
          className={buttonVariants({
            size: "sm",
            variant: "outline",
          })}
        >
          {t("openApp")}
        </Link>
      </div>
    </div>
  );
}
