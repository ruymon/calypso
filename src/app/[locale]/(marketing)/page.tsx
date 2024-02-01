import { MarketingAlertTopbar } from "@/components/marketing/marketing-alert-topbar";
import { MarketingFeatureCard } from "@/components/marketing/marketing-feature-card";
import { Button, buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import Image from "next/image";
import Link from "next/link";

export default async function MarketingHomePage() {
  const t = await getScopedI18n('landing');

  return (
    <>
      <MarketingAlertTopbar />

      <section id="hero" className="flex flex-col gap-12 items-center my-12">
        <header className="flex flex-col gap-3 items-center md:w-3/4 text-center">
          <h1 className="text-6xl md:text-7xl font-semibold text-foreground">{t('hero.title')}</h1>
          <span className="text-lg text-muted-foreground md:w-3/4">{t('hero.subtitle')}</span>
        </header>

        <div className="flex items-center flex-col gap-2">
          <Button size="lg" variant="primary" className="w-full">{t('hero.button')}</Button>
          <Link href="#" className={buttonVariants({ variant: "ghost", className: "w-full font-medium" })}>{t('hero.learnMore')}</Link>
        </div>

        <figure className="w-full aspect-video relative overflow-clip rounded-t-2xl">
          <Image src="https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0" layout='fill' objectFit='cover' alt="App screenshot" />
          <div className="bg-gradient-to-t from-background to-background/50 z-10 absolute inset-0" />
        </figure>
      </section>

      <section id="features" className="flex flex-col gap-12 items-center my-12">
        <header className="flex flex-col gap-3 items-center md:w-3/4 text-center">
          <h2 className="text-5xl font-semibold text-secondary-foreground">{t('features.title')}</h2>
          <span className="text-lg text-muted-foreground md:w-3/4">{t('features.subtitle')}</span>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <MarketingFeatureCard title={t('features.feature1.title')} subtitle={t('features.feature1.subtitle')} />
          <MarketingFeatureCard title={t('features.feature2.title')} subtitle={t('features.feature2.subtitle')} />
          <MarketingFeatureCard title={t('features.feature3.title')} subtitle={t('features.feature3.subtitle')} className="md:col-span-2 lg:col-auto" />
        </div>
      </section>
    </>
  );
};
