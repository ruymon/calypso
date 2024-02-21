import { MarketingBackgroundGrid } from "@/components/marketing/marketing-background-grid";
import { MarketingFeaturesBentoGrid } from "@/components/marketing/marketing-features-bento";
import { MarketingSpotlight } from "@/components/marketing/marketing-spotlight";
import { Button, buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function MarketingHomePage() {
  const t = await getScopedI18n("landing");
  //<figure className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--accent)/1)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--accent)/1)_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10" />
  //<figure className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,0.3),transparent)]" />

  // background: radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),var(--transparent));
  //<div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
  //  bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(120,119,198,1),#09090b)]

  {
    /* <figure className="relative h-2 w-full">
          <figure className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <figure className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <figure className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <figure className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        </figure> */
  }
  return (
    <>
      <figure className="absolute left-1/2 right-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 blur-[160px]" />

      <section
        id="hero"
        className="relative mx-auto flex min-h-[calc(((100vh-5rem)/10)*9)] w-full max-w-6xl flex-1 justify-between gap-8 px-4 py-12"
      >
        <MarketingSpotlight />

        <header className="flex w-full max-w-xl flex-col justify-center gap-2">
          <span className="font-handwriting w-fit bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text px-2 text-2xl font-medium text-transparent">
            Olá, chegou a hora de decolar!
          </span>

          <Balancer
            as="h1"
            className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-3xl font-black text-transparent md:text-6xl lg:text-7xl"
          >
            {t("hero.title")}
          </Balancer>

          <Balancer
            as="span"
            className="text-xl leading-relaxed text-accent-foreground"
          >
            {t("hero.subtitle")}
          </Balancer>

          <div className="mt-12 flex w-fit items-center gap-2">
            <Button size="lg">{t("hero.button")}</Button>
            <Link
              href="#"
              className={buttonVariants({
                variant: "ghost",
                size: "lg",
                className: "font-medium",
              })}
            >
              {t("hero.learnMore")}
            </Link>
          </div>
        </header>

        <aside className="relative h-full w-full">
          <figure className="absolute inset-0 z-10 flex items-center justify-center"></figure>
          <MarketingBackgroundGrid />
        </aside>
      </section>

      <section
        id="features"
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-4 py-12"
      >
        <header className="flex max-w-3xl flex-col items-center  justify-center gap-2 text-center">
          <span className="font-handwriting w-fit bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text px-2 text-xl font-medium text-transparent">
            Tudo de bão em um só lugar!
          </span>

          <Balancer
            as="h2"
            className="text-5xl font-bold text-accent-foreground"
          >
            {t("features.title")}
          </Balancer>

          <Balancer as="span" className="text-lg text-muted-foreground">
            {t("hero.subtitle")}
          </Balancer>
        </header>
        <MarketingFeaturesBentoGrid />
      </section>
    </>
  );
}
