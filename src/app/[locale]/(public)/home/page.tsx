import { Button, buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default async function MarketingHomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("landing");

  return (
    <>
      <section
        id="hero"
        className="flex min-h-[calc(((100vh-5rem)/10)*9)] w-full items-center justify-center gap-8 px-10 py-12"
      >
        <header className="flex w-full max-w-xl flex-col items-center justify-center gap-2">
          <span className="w-fit bg-gradient-to-r from-orange-300 to-pink-400 bg-clip-text px-2 font-handwriting text-2xl font-medium text-transparent">
            {t("hero.hat")}
          </span>

          <Balancer
            as="h1"
            className="text-center text-3xl font-black text-foreground md:text-6xl lg:text-7xl"
          >
            {t("hero.title")}
          </Balancer>

          <Balancer
            as="span"
            className="text-center text-xl leading-relaxed text-accent-foreground"
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
      </section>

      <section
        id="features"
        className="mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-4 py-12"
      >
        <header className="flex max-w-3xl flex-col items-center  justify-center gap-2 text-center">
          <span className="w-fit bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text px-2 font-handwriting text-xl font-medium text-transparent">
            Tão fácil quanto pintar com Lukscolor, a tinta da pintura
            inteligente!
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
      </section>
    </>
  );
}
