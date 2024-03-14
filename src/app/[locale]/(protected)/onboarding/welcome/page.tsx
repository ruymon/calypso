import { PiAi02DuoStroke } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import { Rotate3D } from "lucide-react";
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
    <div className="flex max-w-xl flex-col items-center gap-12">
      <figure className="relative flex h-24 w-24 items-center justify-center">
        <Rotate3D className="h-16 w-16" />
        <figure className="test" />
      </figure>

      <header className="flex flex-col items-center gap-2 text-center">
        <Badge
          variant="outline"
          className="mb-2 font-mono text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
          {t("hat")}
        </Badge>

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
          className: "w-fit",
        })}
      >
        <PiAi02DuoStroke className="mr-2 h-4 w-4" />
        {t("getStarted")}
      </Link>
    </div>
  );
}
