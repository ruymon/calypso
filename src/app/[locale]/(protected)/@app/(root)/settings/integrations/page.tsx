import { IvaoIntegrationCard } from "./_components/ivao-integration-card";
import { VatsimIntegrationCard } from "./_components/vatsim-integration-card";

interface AppSettingsIntegrationsPageProps {}

export default function AppSettingsIntegrationsPage({}: AppSettingsIntegrationsPageProps) {
  return (
    <main className="mx-auto flex max-w-xl flex-1 flex-col gap-8">
      <header className="flex flex-col py-4">
        <h2 className="text-2xl font-bold text-foreground">Integrations</h2>
        <span className="text-sm text-muted-foreground">
          Connect and sync third-party services to enhance your experience.
        </span>
      </header>

      <section className="flex flex-col gap-4">
        <IvaoIntegrationCard />
        <VatsimIntegrationCard />
      </section>

      <header className="mx-auto flex flex-col items-center justify-center text-muted-foreground">
        <h3 className="text-sm">Coming soon</h3>
        <span className="text-xs opacity-50">
          More integrations are coming soon.
        </span>
      </header>
    </main>
  );
}
