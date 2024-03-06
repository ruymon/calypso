import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import { SparklesIcon } from "lucide-react";
import { setStaticParamsLocale } from "next-international/server";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

interface OnboardingWelcomePageProps {
  params: {
    locale: string;
  };
}

export default async function OnboardingWelcomePage({
  params: { locale },
}: OnboardingWelcomePageProps) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("onboarding.welcome");

  return (
    <div className="flex max-w-xl flex-col gap-8">
      <header className="flex flex-col items-center gap-1 text-center">
        <span className="mb-2 w-fit bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text px-2 font-handwriting text-2xl font-semibold text-transparent">
          {t("hat")}
        </span>

        <Balancer as="h1" className="text-6xl font-extrabold text-foreground">
          {t("title")}
        </Balancer>
        <Balancer as="span" className="text-muted-foreground">
          {t("subtitle")}
        </Balancer>
      </header>

      <Link
        href="/onboarding/integrations"
        className={buttonVariants({
          size: "lg",
          className: "mx-auto w-fit",
        })}
      >
        <SparklesIcon className="mr-2 h-4 w-4" />
        {t("getStarted")}
      </Link>
    </div>
  );
}
