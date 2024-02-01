import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ThemeSwitcher } from "../theme-switcher";
import { getScopedI18n } from "@/locales/server";

interface MarketingFooterProps { };

export async function MarketingFooter({ }: MarketingFooterProps) {
  const t = await getScopedI18n('landing.footer');

  return (
    <footer className="w-full flex items-center justify-between py-16 border-t mt-12 text-sm">
      <section className="flex flex-col gap-1">
        <span className="text-sm text-secondary-foreground">{t('builtBy')}</span>
        <span className="text-xs text-muted-foreground">
          <Link href="/privacy" className="transition-colors hover:text-accent-foreground duration-150 underline decoration-background hover:decoration-current underline-offset-2">{t('privacy')}</Link>
          {' '} | {' '}
          <Link href="/tos" className="transition-colors hover:text-accent-foreground duration-150 underline decoration-background hover:decoration-current underline-offset-2">{t('terms')}</Link>
        </span>
      </section>

      <section className="flex flex-col gap-1 items-end">
        <ThemeSwitcher />

        <span className="text-xs text-muted-foreground">&copy; {new Date().getUTCFullYear()} {siteConfig.name}</span>
      </section>
    </footer>
  );
};
