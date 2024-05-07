import { getIvaoIntegrationAuthorizationUrl } from "@/lib/integrations/ivao";
import { getNavigraphIntegrationAuthorizationUrl } from "@/lib/integrations/navigraph";
import { getVatsimIntegrationAuthorizeUrl } from "@/lib/integrations/vatsim";
import { getI18n, getScopedI18n } from "@/locales/server";
import { IntegrationCard } from "./_components/integration-card";

interface AppSettingsIntegrationsPageProps {}

const getIntegrationCards = async () => {
  const t = await getScopedI18n("integrations");

  return [
    {
      provider: "ivao",
      logoUrl: "https://static.skyscope.app/networks/ivao.png",
      title: "IVAO",
      description: t("ivao.description"),
      integrationUrl: await getIvaoIntegrationAuthorizationUrl(),
    },
    {
      provider: "navigraph",
      logoUrl: "https://static.skyscope.app/integrations/navigraph.png",
      title: "Navigraph",
      description: t("navigraph.description"),
      integrationUrl: await getNavigraphIntegrationAuthorizationUrl(),
    },
    {
      provider: "vatsim",
      logoUrl: "https://static.skyscope.app/networks/vatsim.png",
      title: "Vatsim",
      description: t("vatsim.description"),
      integrationUrl: await getVatsimIntegrationAuthorizeUrl(),
    },
  ];
};

export default async function AppSettingsIntegrationsPage({}: AppSettingsIntegrationsPageProps) {
  const t = await getI18n();
  const integrationCards = await getIntegrationCards();

  return (
    <main className="mx-auto flex max-w-xl flex-1 flex-col gap-8">
      <header className="flex flex-col py-4">
        <h2 className="text-2xl font-bold text-foreground">
          {t("settings.integrations.title")}
        </h2>
        <span className="text-sm text-muted-foreground">
          {t("settings.integrations.subtitle")}
        </span>
      </header>

      <section className="flex flex-col gap-4">
        {integrationCards.map((item) => (
          <IntegrationCard key={item.provider} {...item} />
        ))}
      </section>

      <header className="mx-auto flex flex-col items-center justify-center text-muted-foreground">
        <h3 className="text-sm">{t("common.comingSoon")}</h3>
        <span className="text-xs opacity-50">
          {t("settings.integrations.comingSoonDescription")}
        </span>
      </header>
    </main>
  );
}
