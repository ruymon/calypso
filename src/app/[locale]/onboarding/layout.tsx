import { LogoIcon } from "@/components/logo";
import { Button, buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getScopedI18n } from "@/locales/server";
import { ArrowLeftIcon, LifeBuoyIcon } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface OnboardingLayoutProps {
  children: ReactNode;
}

export default async function OnboardingLayout({
  children,
}: OnboardingLayoutProps) {
  const t = await getScopedI18n("common");

  return (
    <div className="container flex flex-1 flex-col items-center justify-between gap-4 py-4">
      <nav className="relative flex w-full items-center justify-between">
        <Button variant="ghost" size="icon">
          <ArrowLeftIcon className="h-4 w-4" />
        </Button>
        <LogoIcon
          variant="muted"
          className="absolute left-1/2 -translate-x-1/2"
        />
        <Link
          href={siteConfig.links.discord}
          ref="noopener noreferrer"
          target="_blank"
          className={buttonVariants({
            variant: "outline",
            size: "sm",
          })}
        >
          <LifeBuoyIcon className="mr-2 h-4 w-4" /> {t("contactSupport")}
        </Link>
      </nav>

      <main className="mx-auto flex w-full max-w-md flex-col gap-8">
        {children}
      </main>

      <footer className="flex items-center">
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getUTCFullYear()} {siteConfig.name}
        </span>
      </footer>
    </div>
  );
}
