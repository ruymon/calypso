import { siteConfig } from "@/config/site";
import { HeartIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeSwitcher } from "../theme-switcher";

interface MarketingFooterProps { };

export function MarketingFooter({ }: MarketingFooterProps) {
  return (
    <footer className="w-full flex items-center justify-between py-16 border-t mt-12 text-sm">
      <section className="flex flex-col gap-1">
        <span className="inline-flex gap-1 text-sm items-center text-secondary-foreground">
          Built with <HeartIcon className="fill-current stroke-current h-3.5 w-3.5" /> by Brazilians.
        </span>
        <span className="text-xs text-muted-foreground">
          <Link href="/privacy" className="transition-colors hover:text-accent-foreground duration-150 underline decoration-background hover:decoration-current underline-offset-2">Privacy policy</Link>
          {' '} | {' '}
          <Link href="/tos" className="transition-colors hover:text-accent-foreground duration-150 underline decoration-background hover:decoration-current underline-offset-2">Terms of service</Link>
        </span>
      </section>

      <section className="flex flex-col gap-1 items-end">
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
        </div>
        <span className="text-xs text-muted-foreground">&copy; {new Date().getUTCFullYear()} {siteConfig.name}</span>
      </section>
    </footer>
  );
};
