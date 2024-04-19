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
} from "@/lib/map";
import { useMapLayersStore } from "@/stores/map-layers-store";
import "@/styles/map.css";
import { LiveATCs } from "@/types/atcs";
import { LiveFlight, LiveFlights } from "@/types/live-flights";
import { ResolvedTheme } from "@/types/themes";
import { useQuery } from "@tanstack/react-query";
import { DeckGL } from "deck.gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import Map from "react-map-gl";
import { PiServerDuoStroke } from "./icons";
import { MapLayerControls } from "./map-controls/map-layer-controls";

interface InteractiveMapProps {
  ivaoFlightsData: LiveFlights | null;
  vatsimFlightsData: LiveFlights | null;
  vatsimAtcsData: LiveATCs | null;
}

const mapboxAccessToken = env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export function InteractiveMap({
  ivaoFlightsData: ivaoFlightsInitialData,
  vatsimAtcsData: vatsimAtcsInitialData,
  vatsimFlightsData: vatsimFlightsInitialData,
}: InteractiveMapProps) {
  const { resolvedTheme } = useTheme();
  const router = useRouter();

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

  return (
    <figure
      className="absolute inset-0 h-full w-full"
      onContextMenu={(event) => event.preventDefault()}
    >
      <DeckGL
        pickingRadius={10}
        controller={true}
        getTooltip={({ object }) => object && `${object.callsign}`}
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

        <MapLayerControls />

        <div className="absolute bottom-5 left-1/2 right-1/2 z-10 mx-auto flex w-full max-w-xs -translate-x-1/2 flex-col  gap-4">
          {isVatsimAtcsLoading && (
            <span className="border-md flex items-center justify-center rounded-full border border-amber-500 bg-background/25 px-3 py-2 text-xs font-medium backdrop-blur-md">
              <PiServerDuoStroke className="mr-2 h-4 w-4 text-amber-400" />
              Loading Vatsim ATC's data
            </span>
          )}

          {isIvaoFlightsLoading && (
            <span className="border-md flex items-center justify-center  rounded-full border border-amber-500 bg-background/25 px-3 py-2 text-xs font-medium backdrop-blur-md">
              <PiServerDuoStroke className="mr-2 h-4 w-4 text-amber-400" />
              Loading IVAO's live flights data
            </span>
          )}

          {isVatsimFlightsLoading && (
            <span className="border-md flex items-center justify-center  rounded-full border border-amber-500 bg-background/25 px-3 py-2 text-xs font-medium backdrop-blur-md">
              <PiServerDuoStroke className="mr-2 h-4 w-4 text-amber-400" />
              Loading Vatsim's live flights data
            </span>
          )}
        </div>
      </DeckGL>
    </figure>
  );
}
