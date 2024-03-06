import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import { SparklesIcon } from "lucide-react";
import { setStaticParamsLocale } from "next-international/server";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

interface OnboardingFinishPageProps {
  params: { locale: string };
}

export default async function OnboardingFinishPage({
  params: { locale },
}: OnboardingFinishPageProps) {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("onboarding.finish");

  return (
    <div className="flex max-w-lg flex-col items-center justify-center gap-2 text-center">
      <span className="mb-2 w-fit bg-gradient-to-r from-blue-300 to-green-400 bg-clip-text px-2 font-handwriting text-2xl font-semibold text-transparent">
        {t("hat")}
      </span>

      <Balancer as="h1" className="text-6xl font-extrabold text-foreground">
        {t("title")}
      </Balancer>
      <Balancer as="span" className="text-muted-foreground">
        {t("subtitle")}
      </Balancer>

      <Link
        href="/"
        className={buttonVariants({
          size: "lg",
          className: "mt-8 w-fit",
        })}
      >
        <SparklesIcon className="mr-2 h-4 w-4" />
        {t("getStarted")}
      </Link>
    </div>
  );
}
