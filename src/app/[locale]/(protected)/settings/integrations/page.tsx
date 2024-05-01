import { getProfile } from "@/lib/auth";
import { getI18n } from "@/locales/server";
import { IvaoIntegrationCard } from "./_components/ivao-integration-card";
import { NavigraphIntegrationCard } from "./_components/navigraph-integration-card";
import { VatsimIntegrationCard } from "./_components/vatsim-integration-card";

interface AppSettingsIntegrationsPageProps {}

export default async function AppSettingsIntegrationsPage({}: AppSettingsIntegrationsPageProps) {
  const t = await getI18n();
  const user = getProfile();

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
        <IvaoIntegrationCard />
        <VatsimIntegrationCard />
        <NavigraphIntegrationCard />
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
