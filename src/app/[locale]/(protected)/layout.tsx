import { InteractiveMap } from "@/components/interactive-map";
import { FlightTrackLayer } from "@/components/map-layers/flight-track-layer";
import { IvaoFlightsLayerContainer } from "@/components/map-layers/ivao/ivao-flights-layer-container";
import { VatsimFlightsLayerContainer } from "@/components/map-layers/vatsim/vatsim-flights-layer-container";
import { WeatherLayerContainer } from "@/components/map-layers/weather/weather-layer-container";
import { setStaticParamsLocale } from "next-international/server";
import { ReactNode, Suspense } from "react";
import { CommandDialogDemo } from "./_components/command-bar";
import { Sidebar } from "./_components/sidebar";

interface AppRootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export default async function AppRootLayout({
  children,
  params: { locale },
}: AppRootLayoutProps) {
  setStaticParamsLocale(locale);

  return (
    <div className="relative flex h-screen w-screen">
      <div className="flex w-fit flex-1">
        <Sidebar />
        {children}
      </div>

      <CommandDialogDemo />

      <InteractiveMap>
        <Suspense fallback={null}>
          <WeatherLayerContainer />
        </Suspense>

        <Suspense fallback={null}>
          <VatsimFlightsLayerContainer />
        </Suspense>

        <Suspense fallback={null}>
          <IvaoFlightsLayerContainer />
        </Suspense>

        <FlightTrackLayer />
      </InteractiveMap>
    </div>
  );
}
