import { InteractiveMap } from "@/components/app/map/interactive-map";
import {
  MapIvaoLiveFlightsLayer,
  MapVatsimLiveFlightsLayer,
} from "@/components/app/map/map-live-flights-layer";
import { Sidebar } from "@/components/app/sidebar";
import { ReactNode } from "react";

interface AppRootLayoutProps {
  children: ReactNode;
}

export default async function AppRootLayout({ children }: AppRootLayoutProps) {
  return (
    <div className="relative flex max-h-screen flex-1 overflow-hidden">
      <Sidebar />

      <InteractiveMap>
        <MapVatsimLiveFlightsLayer />
        <MapIvaoLiveFlightsLayer />
      </InteractiveMap>

      {children}
    </div>
  );
}
