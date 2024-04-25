// import { PiServerDuoStroke } from "@/components/icons";
// import { InteractiveMap } from "@/components/interactive-map-old";
// import { FlightTrackLayer } from "@/components/map-layers/flight-track-layer";
// import { IvaoFlightsLayerContainer } from "@/components/map-layers/ivao/ivao-flights-layer-container";
// import { VatsimATCsLayerContainer } from "@/components/map-layers/vatsim/vatsim-atcs-layer-container";
// import { VatsimFlightsLayerContainer } from "@/components/map-layers/vatsim/vatsim-flights-layer-container";
// import { WeatherLayerContainer } from "@/components/map-layers/weather/weather-layer-container";
import { InteractiveMapContainer } from "@/components/interactive-map-container";
import { ReactNode } from "react";
import { CommandDialogDemo } from "./_components/command-bar";
import { MobileSidebar } from "./_components/mobile-sidebar";
import { Sidebar } from "./_components/sidebar";

interface AppRootLayoutProps {
  children: ReactNode;
}

export default function AppRootLayout({ children }: AppRootLayoutProps) {
  return (
    <div className="relative flex h-screen w-screen">
      <div className="flex w-full flex-1 flex-col lg:w-fit lg:flex-row">
        <Sidebar />
        {children}
        <MobileSidebar />
      </div>

      <CommandDialogDemo />

      <InteractiveMapContainer />
    </div>
  );
}
