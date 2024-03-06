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
    <section className="flex min-h-[calc(100vh-5rem)] flex-col items-center justify-between gap-8 pb-8 pt-36">
      <header className="mb-4 flex w-full max-w-2xl flex-col items-center justify-center gap-3 text-center">
        <span className="mb-3 rounded bg-gradient-to-r from-violet-500 to-rose-400 p-0.5 px-2 font-mono text-sm font-black uppercase text-white">
          {t("hat")}
        </span>

        <Balancer
          as="h1"
          className="text-center text-3xl font-black text-foreground md:text-6xl lg:text-7xl"
        >
          {t("title")}
        </Balancer>

        <Balancer
          as="span"
          className="w-3/4 text-center text-xl leading-relaxed text-muted-foreground"
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

      <figure className="flex flex-col items-center justify-center gap-4">
        <span className="max-w-32 text-center font-mono text-xs font-bold uppercase text-muted-foreground">
          {t("scroll")}
        </span>
        <ArrowDownIcon className="h-4 w-4 text-muted-foreground" />
      </figure>
    </section>
  );
}
