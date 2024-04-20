"use client";

import { MAP_INITIAL_VIEW_STATE } from "@/config/map";
import {
  ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
  FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
} from "@/constants/api";
import { env } from "@/env.mjs";
import { getNetworkATCs, getNetworkFlights } from "@/lib/flights";
import {
  getMapCursor,
  getMapStyleBasedOnTheme,
  getNetworkATCsFacilitiesLabelLayer,
  getNetworkATCsPolygonLayer,
  getNetworkFlightsLayer,
  getTooltipContentBasedOnLayer,
} from "@/lib/map";
import { useMapLayersStore } from "@/stores/map-layers-store";
import "@/styles/map.css";
import { LiveATCs } from "@/types/atcs";
import { LiveFlight, LiveFlights } from "@/types/live-flights";
import { AiracCycle } from "@/types/navigraph";
import { ResolvedTheme } from "@/types/themes";
import { useQuery } from "@tanstack/react-query";
import { intlFormatDistance } from "date-fns";
import { DeckGL } from "deck.gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import Map from "react-map-gl";
import { toast } from "sonner";
import { PiCurlyBracesCodeCheckStroke, PiDatabaseStroke } from "./icons";
import { MapLayerControls } from "./map-controls/map-layer-controls";

interface InteractiveMapProps {
  ivaoFlightsData: LiveFlights | null;
  vatsimFlightsData: LiveFlights | null;
  vatsimAtcsData: LiveATCs | null;
  currentAiracCycle: AiracCycle | null;
  children?: ReactNode;
}

const mapboxAccessToken = env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export function InteractiveMap({
  ivaoFlightsData: ivaoFlightsInitialData,
  vatsimAtcsData: vatsimAtcsInitialData,
  vatsimFlightsData: vatsimFlightsInitialData,
  currentAiracCycle,
  children,
}: InteractiveMapProps) {
  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const [selectedFlightParsedRoute, setSelectedFlightParsedRoute] = useState<
    any | null
  >(null);

  const { isVatsimFlightsLayerVisible, isIvaoFlightsLayerVisible } =
    useMapLayersStore();

  const {
    data: vatsimFlightsData,
    error: vatsimFlightsError,
    isLoading: isVatsimFlightsLoading,
  } = useQuery({
    initialData: vatsimFlightsInitialData,
    queryKey: ["vatsim-flights"],
    queryFn: () => getNetworkFlights("vatsim"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  const {
    data: ivaoFlightsData,
    error: ivaoFlightsError,
    isLoading: isIvaoFlightsLoading,
  } = useQuery({
    initialData: ivaoFlightsInitialData,
    queryKey: ["ivao-flights"],
    queryFn: () => getNetworkFlights("ivao"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  const {
    data: vatsimAtcsData,
    error: vatsimAtcsError,
    isLoading: isVatsimAtcsLoading,
  } = useQuery({
    initialData: vatsimAtcsInitialData,
    queryKey: ["vatsim-atcs"],
    queryFn: () => getNetworkATCs("vatsim"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  const layers = [
    // getFlightsPlannedRouteLayer(selectedFlightData),
    getNetworkATCsPolygonLayer(vatsimAtcsData, "vatsim"),
    getNetworkFlightsLayer(vatsimFlightsData, "vatsim", {
      visible: isVatsimFlightsLayerVisible,
      onClick: (pickingInfo) => {
        const flight: LiveFlight = pickingInfo.object;
        if (!flight) return;
        router.push(`/flights/${flight.id}`);
      },
    }),
    getNetworkFlightsLayer(ivaoFlightsData, "ivao", {
      visible: isIvaoFlightsLayerVisible,
      onClick: (pickingInfo) => {
        const flight: LiveFlight = pickingInfo.object;
        if (!flight) return;
        router.push(`/flights/${flight.id}`);
      },
    }),
    getNetworkATCsFacilitiesLabelLayer(vatsimAtcsData, "vatsim"),
  ];

  function handleAiracCycleClick({ cycle, status, from, to }: AiracCycle) {
    if (status === "outdated") {
      toast.warning("Outdated AIRAC cycle", {
        description:
          "Integrate a navigraph account with active subscription to get the latest cycle.",
        icon: <PiDatabaseStroke className="h-4 w-4 text-destructive" />,
      });
    }

    if (status === "current") {
      toast.success(`Current AIRAC cycle | ${cycle}`, {
        description: `This cycle will expire ${intlFormatDistance(new Date(to), new Date())}.`,
        icon: <PiDatabaseStroke className="h-4 w-4 text-green-500" />,
      });
    }
  }

  return (
    <figure
      className="absolute inset-0 h-full w-full"
      onContextMenu={(event) => event.preventDefault()}
    >
      <DeckGL
        pickingRadius={10}
        controller={true}
        getTooltip={getTooltipContentBasedOnLayer}
        initialViewState={{
          ...MAP_INITIAL_VIEW_STATE,
          maxZoom: 16,
          minZoom: 2,
        }}
        layers={layers}
        getCursor={getMapCursor}
      >
        <Map
          attributionControl={false}
          reuseMaps={true}
          mapStyle={getMapStyleBasedOnTheme(resolvedTheme as ResolvedTheme)}
          antialias={true}
          mapboxAccessToken={mapboxAccessToken}
        />

        {children}

        <MapLayerControls />

        <footer className="absolute bottom-0 right-0 flex h-fit w-[calc(100%-3.5rem)] items-center justify-end gap-2 bg-card/30 px-4 text-2xs text-muted-foreground backdrop-blur-md">
          {currentAiracCycle && (
            <button
              onClick={() => handleAiracCycleClick(currentAiracCycle)}
              data-isOutdated={currentAiracCycle.status === "outdated"}
              className="flex items-center gap-1 px-1 py-0.5 font-bold data-[isOutdated='true']:bg-destructive data-[isOutdated='true']:text-destructive-foreground"
            >
              <PiDatabaseStroke className="h-3 w-3" />
              <span>AIRAC cycle {currentAiracCycle.cycle}</span>
            </button>
          )}

          <div className="flex items-center gap-1 px-1 py-0.5 font-bold ">
            <PiCurlyBracesCodeCheckStroke className="h-3 w-3" />
            <span>v0.1 alpha</span>
          </div>

          {/* <div className="flex items-center gap-1 px-1 py-0.5 ">
        <PiCheckTickCircleStroke className="h-3 w-3 text-green-400" />
      </div>

      <div className="flex items-center gap-1 px-1 py-0.5 ">
        <PiNotificationBellOnStroke className="h-3 w-3" />
      </div> */}
        </footer>
      </DeckGL>
    </figure>
  );
}
