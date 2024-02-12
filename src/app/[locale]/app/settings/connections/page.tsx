import { SettingsConnectionCard } from "@/components/app/settings/settings-connection-card";
import { Separator } from "@/components/ui/separator";

interface AppSettingsUserDataPageProps {}

export default function AppSettingsUserDataPage({}: AppSettingsUserDataPageProps) {
  return (
    <>
      <header className="flex flex-col gap-1">
        <h3 className="text-foreground font-bold text-2xl">Conexões</h3>

        <span className="text-sm text-muted-foreground">
          Vincule suas contas das redes sociais e outras plataformas para ter
          acesso a funcionalidades adicionais.
        </span>
      </header>

      <Separator className="bg-accent/25" />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SettingsConnectionCard
          isVerified
          url="vatsim.net"
          imageUrl="https://pbs.twimg.com/profile_images/1286405942075166723/5h7DsHZz_400x400.jpg"
          name="Vatsim"
          description="Global online flight simulation network with over 100,000 active pilots and ATC"
        />

        <SettingsConnectionCard
          isConnected
          isVerified
          url="ivao.aero"
          imageUrl="https://pbs.twimg.com/profile_images/1616534113313325088/D8sWKH9M_400x400.jpg"
          name="IVAO"
          description="We are the world's Flight Simulation Family!"
        />

        <SettingsConnectionCard
          isVerified
          url="discord.com"
          imageUrl="https://pbs.twimg.com/profile_images/1719768085815803905/Qt-WhTGg_200x200.jpg"
          name="Discord"
          description="The easiest way to talk over voice, video, and text."
        />

        <SettingsConnectionCard
          isVerified
          url="navigraph.com/"
          imageUrl="https://pbs.twimg.com/profile_images/1502197605127839744/wS9ttQ02_400x400.jpg"
          name="Navigraph"
          description="Provider of aeronautical data for the flight-sim community."
        />
      </section>
    </>
  );
}
