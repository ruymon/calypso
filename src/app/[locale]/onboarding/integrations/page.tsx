import { buttonVariants } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import Link from "next/link";
import { NetworkIntegrationCard } from "./_components/network-integration-card";

interface OnboardingIntegrationsProps {}

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function OnboardingIntegrations({}: OnboardingIntegrationsProps) {
  const t = await getScopedI18n("onboarding.integrations");
  return (
    <>
      <header className="flex flex-col">
        <span className="mb-2 font-mono text-xs font-medium uppercase text-muted-foreground">
          {t("hat")}
        </span>
        <h1 className="text-2xl font-bold text-foreground">{t("title")}</h1>
        <span className="text-sm text-accent-foreground">{t("subtitle")}</span>
      </header>

      <section className="grid grid-cols-2 gap-4">
        <NetworkIntegrationCard
          description="Connect your Google account to sync your contacts and calendar events"
          imageUrl="https://static.skyscope.app/networks/ivao.png"
          name="IVAO"
          urlWithoutProtocol="ivao.aero"
          networkKey="ivaoId"
        />

        <NetworkIntegrationCard
          description="Connect your Google account to sync your contacts and calendar events"
          imageUrl="https://static.skyscope.app/networks/vatsim.png"
          name="Vatsim"
          urlWithoutProtocol="vatsim.net"
          networkKey="vatsimId"
        />
      </section>

      <Link
        href="/onboarding"
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className: "mx-auto w-fit font-normal text-muted-foreground",
        })}
      >
        {t("skip")}
      </Link>
    </>
  );
}
