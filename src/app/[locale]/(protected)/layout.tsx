import { ReactNode, Suspense } from "react";
import { MapContainer } from "./_components/map/map-container";
import { MapSkeleton } from "./_components/map/map-skeleton";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { Sidebar } from "./_components/sidebar";
import { Spotlight } from "./_components/spotlight";

interface AppRootLayoutProps {
  children: ReactNode;
}

export default function AppRootLayout({ children }: AppRootLayoutProps) {
  return (
    <div className="relative flex h-screen w-screen overflow-clip">
      <div className="flex w-full flex-1 flex-col justify-end lg:w-fit lg:flex-row lg:justify-normal">
        <Sidebar />
        {children}
        <MobileSidebar />
      </div>

      <Spotlight />

      <Suspense fallback={<MapSkeleton />}>
        <MapContainer />
      </Suspense>
    </div>
  );
}
