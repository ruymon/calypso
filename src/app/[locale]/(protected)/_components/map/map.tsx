"use client";

import { MAPBOX_ACCESS_TOKEN, MAP_INITIAL_VIEW_STATE } from "@/config/map";
import {
  ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
  FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
} from "@/constants/api";
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
import { Theme } from "@/types/themes";
import { useQuery } from "@tanstack/react-query";
import { DeckGL } from "deck.gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import BaseMap from "react-map-gl";
import { MapLayerControls } from "./map-layer-controls";

interface MapProps {
  airportsSummary: AirportSummaryList | null;
  children?: ReactNode;
}

export function Map({ airportsSummary, children }: MapProps) {
  const { theme } = useTheme();
  const [mapViewState, setMapViewState] = useState(MAP_INITIAL_VIEW_STATE);
  const router = useRouter();

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
    // new PathLayer({
    //   id: "flight-path-layer",
    //   data: tracks ?? undefined,
    //   getColor: (d) => hexToRGBAArray("#FF0000"),
    //   getPath: (d: TrackPosition) => [d.lat, d.lng],
    //   getWidth: 2,
    //   widthUnits: "pixels",
    // }),
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
        currentZoom: mapViewState.zoom,
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
      <DeckGL
        pickingRadius={10}
        controller={true}
        getTooltip={getTooltipContentBasedOnLayer}
        viewState={mapViewState}
        onViewStateChange={handleViewStateChange}
        layers={layers}
        getCursor={getMapCursor}
      >
        <BaseMap
          attributionControl={false}
          reuseMaps={true}
          mapStyle={getMapStyleBasedOnTheme(theme as Theme)}
          antialias={true}
          mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
        />
        {children}
        <MapLayerControls />
      </DeckGL>
    </figure>
  );
}
