import { PiMultipleCrossCancelDefaultStroke } from "@/components/icons";
import { LogoIcon } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ReactNode } from "react";
import { ErrorMessage } from "./_components/error-message";
import { SupportCard } from "./_components/support-card";

interface AuthLayoutProps {
  children: ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="fixed inset-0 top-0 z-30 flex flex-col items-center justify-center gap-8 bg-background/45 px-4 py-6 backdrop-blur-lg md:px-6">
      <ErrorMessage />

      <div className="mx-auto flex w-full max-w-xs items-center justify-end">
        <Link
          href="/"
          className={buttonVariants({
            variant: "ghost",
            size: "icon-sm",
            className: "text-accent-foreground/60",
          })}
        >
          <PiMultipleCrossCancelDefaultStroke className="h-4 w-4" />
        </Link>
      </div>
      <LogoIcon variant="muted" />

      <main className="mx-auto flex w-full max-w-xs flex-col gap-3">
        {children}
        <SupportCard />
      </main>

      <footer className="flex items-center">
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getUTCFullYear()} {siteConfig.name}
        </span>
      </footer>
    </div>
  );
}
