import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

interface OnboardingIntegrationsPageProps {}

export default async function OnboardingIntegrationsPage({}: OnboardingIntegrationsPageProps) {
  const t = await getScopedI18n("onboarding.integrations");
  return (
    <div className="flex max-w-xl flex-col items-center gap-12">
      <header className="flex flex-col items-center">
        <Badge
          variant="outline"
          className="mb-2 font-mono text-xs font-medium uppercase tracking-wide text-muted-foreground"
        >
          {t("hat")}
        </Badge>

        <Balancer as="h1" className="text-3xl font-bold text-foreground">
          {t("title")}
        </Balancer>
        <Balancer as="span" className="text-muted-foreground">
          {t("subtitle")}
        </Balancer>
      </header>

      <section className="grid grid-cols-2 gap-4">
        {/* TODO: Add the cards */}
      </section>

      <Link
        href="/onboarding/finish"
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className: "w-fit font-normal text-muted-foreground",
        })}
      >
        {t("skip")}
      </Link>
    </div>
  );
}
