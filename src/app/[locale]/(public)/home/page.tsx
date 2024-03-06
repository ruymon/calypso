import { setStaticParamsLocale } from "next-international/server";
import { CallToActionSection } from "./_components/call-to-action-section";
import { FeaturesSection } from "./_components/features-section";
import { HeroSection } from "./_components/hero-section";

interface HomePageProps {
  params: { locale: string };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  setStaticParamsLocale(locale);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <CallToActionSection />
    </>
  );
}
