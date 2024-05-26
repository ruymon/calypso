import { getProfile } from "@/lib/profile";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { Map } from "./_components/map";
import { MapFooter } from "./_components/map/map-footer";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { Sidebar } from "./_components/sidebar";
import { Spotlight } from "./_components/spotlight";

interface AppRootLayoutProps {
  children: ReactNode;
}

export default async function AppRootLayout({ children }: AppRootLayoutProps) {
  const user = await getProfile();

  if (!user) {
    return notFound();
  }

  return (
    <div className="relative flex h-screen w-screen overflow-clip">
      <div className="flex w-full flex-1 flex-col justify-end lg:w-fit lg:flex-row lg:justify-normal">
        <Sidebar user={user} />
        {children}
        <MobileSidebar />
      </div>
      <Spotlight />
      <Map
        userIntegrations={{
          ivaoId: user.ivaoId,
          vatsimId: user.vatsimId,
        }}
      >
        <MapFooter />
      </Map>
    </div>
  );
}
