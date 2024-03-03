import { ThemeSwitcher } from "@/components/theme-switcher";
import { siteConfig } from "@/config/site";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";

interface FooterProps {}

export async function Footer({}: FooterProps) {
  const t = await getScopedI18n("landing.footer");

  return (
    <footer className="mt-12 flex w-full items-center justify-between px-10 py-2 text-sm">
      <section className="flex flex-col gap-1">
        <span className="text-sm text-secondary-foreground">
          {t("builtBy")}
        </span>
        <span className="text-xs text-muted-foreground">
          <Link
            href="/privacy"
            className="underline decoration-background underline-offset-2 transition-colors duration-150 hover:text-accent-foreground hover:decoration-current"
          >
            {t("privacy")}
          </Link>{" "}
          |{" "}
          <Link
            href="/tos"
            className="underline decoration-background underline-offset-2 transition-colors duration-150 hover:text-accent-foreground hover:decoration-current"
          >
            {t("terms")}
          </Link>
        </span>
      </section>

      <section className="flex flex-col items-end gap-1">
        <ThemeSwitcher />

        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getUTCFullYear()} {siteConfig.name}
        </span>
      </section>
    </footer>
  );
}
