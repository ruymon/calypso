"use client";

import { MAP_INITIAL_VIEW_STATE } from "@/config/map";
import {
  ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
  FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
} from "@/constants/api";
import { BUILD_VERSION } from "@/constants/workspace";
import { env } from "@/env.mjs";
import { getNetworkATCs, getNetworkFlights } from "@/lib/flights";
import {
  getAirportSummaryLayer,
  getMapCursor,
  getMapStyleBasedOnTheme,
  getNetworkATCsFacilitiesLabelLayer,
  getNetworkATCsPolygonLayer,
  getNetworkFlightsLayer,
  getTooltipContentBasedOnLayer,
} from "@/lib/map";
import { useMapLayersStore } from "@/stores/map-layers-store";
import "@/styles/map.css";
import { AirportSummary, AirportSummaryList } from "@/types/airports";
import { LiveFlight } from "@/types/live-flights";
import { AiracCycle } from "@/types/navigraph";
import { Theme } from "@/types/themes";
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
  currentAiracCycle: AiracCycle | null;
  airportsSummary: AirportSummaryList | null;
  children?: ReactNode;
}

const mapboxAccessToken = env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

export function InteractiveMap({
  currentAiracCycle,
  airportsSummary,
  children,
}: InteractiveMapProps) {
  const [mapViewState, setMapViewState] = useState(MAP_INITIAL_VIEW_STATE);

  const { resolvedTheme } = useTheme();
  const router = useRouter();
  const [selectedFlightParsedRoute, setSelectedFlightParsedRoute] = useState<
    any | null
  >(null);

  const handleViewStateChange = ({ viewState }: any) => {
    setMapViewState(viewState);
  };

  const {
    isVatsimFlightsLayerVisible,
    isIvaoFlightsLayerVisible,
    isIvaoATCsLayerVisible,
    isVatsimATCsLayerVisible,
    isAirportsLayerVisible,
  } = useMapLayersStore();

  const {
    data: vatsimFlightsData,
    error: vatsimFlightsError,
    isLoading: isVatsimFlightsLoading,
  } = useQuery({
    initialData: null,
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
    initialData: null,
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
    initialData: null,
    queryKey: ["vatsim-atcs"],
    queryFn: () => getNetworkATCs("vatsim"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  const {
    data: ivaoAtcsData,
    error: ivaoAtcsError,
    isLoading: isIvaoAtcsLoading,
  } = useQuery({
    initialData: null,
    queryKey: ["ivao-atcs"],
    queryFn: () => getNetworkATCs("ivao"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  const layers = [
    // getFlightsPlannedRouteLayer(selectedFlightData),
    getNetworkATCsPolygonLayer(vatsimAtcsData, "vatsim", {
      isVisible: isVatsimATCsLayerVisible,
    }),
    getNetworkATCsPolygonLayer(ivaoAtcsData, "ivao", {
      isVisible: isIvaoATCsLayerVisible,
    }),
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
    getAirportSummaryLayer(airportsSummary, {
      currentZoom: mapViewState.zoom,
      isVisible: isAirportsLayerVisible,
      onClick: (pickingInfo) => {
        const airport: AirportSummary = pickingInfo.object;
        if (!airport) return;
        router.push(`/airports/${airport.icao.toLowerCase()}`);
      },
    }),
    getNetworkATCsFacilitiesLabelLayer(vatsimAtcsData, "vatsim", {
      isVisible: isVatsimATCsLayerVisible,
    }),
    getNetworkATCsFacilitiesLabelLayer(ivaoAtcsData, "ivao", {
      isVisible: isIvaoATCsLayerVisible,
    }),
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
        viewState={mapViewState}
        onViewStateChange={handleViewStateChange}
        layers={layers}
        getCursor={getMapCursor}
      >
        <Map
          attributionControl={false}
          reuseMaps={true}
          mapStyle={getMapStyleBasedOnTheme(resolvedTheme as Theme)}
          antialias={true}
          mapboxAccessToken={mapboxAccessToken}
        />

        {children}

        <MapLayerControls />

        <footer className="absolute bottom-0 right-0 flex h-fit w-[calc(100%-3.5rem)] items-center justify-end gap-2 bg-card/30 px-4 text-2xs text-muted-foreground backdrop-blur-md">
          {currentAiracCycle && (
            <button
              onClick={() => handleAiracCycleClick(currentAiracCycle)}
              data-outdated={currentAiracCycle.status === "outdated"}
              className="flex items-center gap-1 px-1 py-0.5 font-bold data-[outdated='true']:bg-destructive data-[outdated='true']:text-destructive-foreground"
            >
              <PiDatabaseStroke className="h-3 w-3" />
              <span>AIRAC cycle {currentAiracCycle.cycle}</span>
            </button>
          )}

          <div className="flex items-center gap-1 px-1 py-0.5 font-bold ">
            <PiCurlyBracesCodeCheckStroke className="h-3 w-3" />
            <span>{BUILD_VERSION}</span>
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
