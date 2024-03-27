import { PiServerDuoStroke } from "@/components/icons";
import { InteractiveMap } from "@/components/interactive-map";
import { FlightTrackLayer } from "@/components/map-layers/flight-track-layer";
import { IvaoFlightsLayerContainer } from "@/components/map-layers/ivao/ivao-flights-layer-container";
import { VatsimFlightsLayerContainer } from "@/components/map-layers/vatsim/vatsim-flights-layer-container";
import { WeatherLayerContainer } from "@/components/map-layers/weather/weather-layer-container";
import { setStaticParamsLocale } from "next-international/server";
import { ReactNode, Suspense } from "react";
import { CommandDialogDemo } from "./_components/command-bar";
import { MobileSidebar } from "./_components/mobile-sidebar";
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
      <div className="flex w-full flex-1 flex-col lg:w-fit lg:flex-row">
        <Sidebar />
        {children}
        <MobileSidebar />
      </div>

      <CommandDialogDemo />

      <InteractiveMap>
        <Suspense
          fallback={
            <span className="absolute bottom-5 left-2 z-10 border bg-background p-4 text-xs ">
              Loading Weather
            </span>
          }
        >
          <WeatherLayerContainer />
        </Suspense>

        <Suspense
          fallback={
            <span className="border-md absolute bottom-5 left-1/2 right-1/2 z-10 mx-auto flex h-fit w-full max-w-fit -translate-x-1/2 items-center justify-center whitespace-nowrap rounded-full border border-amber-500 bg-background/25 px-3 py-2 text-xs font-medium backdrop-blur-md">
              <PiServerDuoStroke className="mr-2 h-4 w-4 text-amber-400" />
              Loading Weather
            </span>
          }
        >
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
