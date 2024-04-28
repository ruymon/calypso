import { ReactNode, Suspense } from "react";
import { CommandDialogDemo } from "./_components/command-bar";
import { MapContainer } from "./_components/map/map-container";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { Sidebar } from "./_components/sidebar";

interface AppRootLayoutProps {
  children: ReactNode;
}

export default function AppRootLayout({ children }: AppRootLayoutProps) {
  return (
    <div className="relative flex h-screen w-screen overflow-clip">
      <div className="flex w-full flex-1 flex-col lg:w-fit lg:flex-row">
        <Sidebar />
        {children}
        <MobileSidebar />
      </div>

      <CommandDialogDemo />

      <Suspense fallback={null}>
        <MapContainer />
      </Suspense>
    </div>
  );
}
