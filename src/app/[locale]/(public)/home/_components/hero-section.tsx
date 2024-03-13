import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getScopedI18n } from "@/locales/server";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

interface HeroSectionProps {}

export async function HeroSection({}: HeroSectionProps) {
  const t = await getScopedI18n("landing.hero");
  return (
    <div className="container flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center py-8">
      <header className="flex w-full flex-col items-center justify-center gap-3 text-center lg:max-w-2xl">
        <span className="mb-3 rounded bg-gradient-to-r from-violet-500 to-rose-400 p-0.5 px-2 font-mono text-xs font-black uppercase text-white md:text-sm">
          {t("hat")}
        </span>

        <Balancer
          as="h1"
          className="text-center text-6xl font-black text-foreground lg:text-7xl"
        >
          {t("title")}
        </Balancer>

        <Balancer
          as="span"
          className="text-center text-base leading-relaxed text-muted-foreground md:w-3/4 md:text-xl"
        >
          {t("subtitle")}
        </Balancer>

        <Link
          href={siteConfig.links.discord}
          rel="noopener noreferrer"
          target="_blank"
          className={buttonVariants({
            size: "lg",
            className: "mt-12",
          })}
        >
          {t("button")}
        </Link>
      </header>

      <figure className="mt-8 flex flex-col items-center justify-center gap-4">
        <span className="max-w-32 text-center font-mono text-xs font-bold uppercase text-muted-foreground">
          {t("scroll")}
        </span>
        <ArrowDownIcon className="h-4 w-4 text-muted-foreground" />
      </figure>
    </div>
  );
}
