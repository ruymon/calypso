"use client";

import { MAPBOX_ACCESS_TOKEN, MAP_INITIAL_VIEW_STATE } from "@/config/map";
import {
  ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
  FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
} from "@/constants/api";
import { getNetworkATCs, getNetworkFlights } from "@/lib/flights";
import {
  getAirportSummaryLayer,
  getBaseMapUrl,
  getMapCursor,
  getNetworkATCsFacilitiesLabelLayer,
  getNetworkATCsPolygonLayer,
  getNetworkFlightsLayer,
  getSelectedFlightPathLayer,
  getTooltipContentBasedOnLayer,
} from "@/lib/map";
import { useBaseMapStore } from "@/stores/base-map-store";
import { useMapLayersStore } from "@/stores/map-layers-store";
import "@/styles/map.css";
import { AirportSummary, AirportSummaryList } from "@/types/airports";
import { LiveFlight } from "@/types/live-flights";
import { useQuery } from "@tanstack/react-query";
import { DeckGL } from "deck.gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import BaseMap from "react-map-gl";
import { MapToolbar } from "./map-toolbar";

interface MapProps {
  airportsSummary: AirportSummaryList | null;
  children?: ReactNode;
}

export function Map({ airportsSummary, children }: MapProps) {
  const router = useRouter();

  const {
    isVatsimFlightsLayerVisible,
    isIvaoFlightsLayerVisible,
    isIvaoATCsLayerVisible,
    isVatsimATCsLayerVisible,
    isAirportsLayerVisible,
  } = useMapLayersStore();

  const { baseMap } = useBaseMapStore();

  const {
    data: vatsimFlightsData,
    error: vatsimFlightsError,
    isLoading: isVatsimFlightsLoading,
  } = useQuery({
    queryKey: ["vatsim-flights"],
    queryFn: () => getNetworkFlights("vatsim"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const {
    data: ivaoFlightsData,
    error: ivaoFlightsError,
    isLoading: isIvaoFlightsLoading,
    isPending: isIvaoFlightsPending,
  } = useQuery({
    queryKey: ["ivao-flights"],
    queryFn: () => getNetworkFlights("ivao"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const {
    data: vatsimAtcsData,
    error: vatsimAtcsError,
    isLoading: isVatsimAtcsLoading,
  } = useQuery({
    queryKey: ["vatsim-atcs"],
    queryFn: () => getNetworkATCs("vatsim"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const {
    data: ivaoAtcsData,
    error: ivaoAtcsError,
    isLoading: isIvaoAtcsLoading,
  } = useQuery({
    queryKey: ["ivao-atcs"],
    queryFn: () => getNetworkATCs("ivao"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const layers = [
    getNetworkATCsPolygonLayer({
      data: vatsimAtcsData ?? [],
      network: "vatsim",
      options: {
        isVisible: isVatsimATCsLayerVisible,
      },
    }),
    getNetworkATCsPolygonLayer({
      data: ivaoAtcsData ?? [],
      network: "ivao",
      options: {
        isVisible: isIvaoATCsLayerVisible,
      },
    }),
    getSelectedFlightPathLayer(),
    getNetworkFlightsLayer({
      data: vatsimFlightsData ?? [],
      network: "vatsim",
      options: {
        isVisible: isVatsimFlightsLayerVisible,
        onClick: (pickingInfo) => {
          const flight: LiveFlight = pickingInfo.object;
          if (!flight) return;
          router.push(`/flights/${flight.id}`);
        },
      },
    }),
    getNetworkFlightsLayer({
      data: ivaoFlightsData ?? [],
      network: "ivao",
      options: {
        isVisible: isIvaoFlightsLayerVisible,
        onClick: (pickingInfo) => {
          const flight: LiveFlight = pickingInfo.object;
          if (!flight) return;
          router.push(`/flights/${flight.id}`);
        },
      },
    }),
    getAirportSummaryLayer({
      data: airportsSummary,
      options: {
        isVisible: isAirportsLayerVisible,
        onClick: (pickingInfo) => {
          const airport: AirportSummary = pickingInfo.object;
          if (!airport) return;
          router.push(`/airports/${airport.icao}`);
        },
      },
    }),
    getNetworkATCsFacilitiesLabelLayer({
      data: vatsimAtcsData ?? [],
      network: "vatsim",
      options: {
        isVisible: isVatsimATCsLayerVisible,
      },
    }),
    getNetworkATCsFacilitiesLabelLayer({
      data: ivaoAtcsData ?? [],
      network: "ivao",
      options: {
        isVisible: isIvaoATCsLayerVisible,
      },
    }),
  ];

  return (
    <figure
      className="absolute inset-0 h-full w-full"
      onContextMenu={(event) => event.preventDefault()}
    >
      <MapToolbar />
      <DeckGL
        pickingRadius={10}
        controller={true}
        getTooltip={getTooltipContentBasedOnLayer}
        initialViewState={MAP_INITIAL_VIEW_STATE}
        layers={layers}
        getCursor={getMapCursor}
      >
        <BaseMap
          attributionControl={false}
          reuseMaps={true}
          mapStyle={getBaseMapUrl(baseMap)}
          antialias={true}
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        />
        {children}
      </DeckGL>
    </figure>
  );
}
