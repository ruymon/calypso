"use client";

import { MAPBOX_ACCESS_TOKEN, MAP_INITIAL_VIEW_STATE } from "@/config/map";
import {
  getAirportsLayer,
  getBaseMapUrl,
  getMapCursor,
  getNetworkATCsLayer,
  getNetworkFlightsLayer,
  getSelectedFlightPathLayer,
  getTooltipContentBasedOnLayer,
} from "@/lib/map";
import { useBaseMapStore } from "@/stores/base-map-store";
import "@/styles/map.css";
import { AirportSummaryList } from "@/types/airports";
import { LiveATCs } from "@/types/atcs";
import { LiveFlights } from "@/types/live-flights";
import { DeckGL } from "deck.gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ReactNode } from "react";
import BaseMap from "react-map-gl";
import { MapToolbar } from "./map-toolbar";

interface MapProps {
  initialData: {
    airportsSummary: AirportSummaryList | null;
    vatsimFlightsInitialData: LiveFlights | null;
    ivaoFlightsInitialData: LiveFlights | null;
    vatsimAtcsInitialData: LiveATCs | null;
    ivaoAtcsInitialData: LiveATCs | null;
  };
  children?: ReactNode;
}

export function Map({ initialData, children }: MapProps) {
  const { baseMap } = useBaseMapStore();

  const layers = [
    getNetworkATCsLayer({
      ivaoAtcsInitialData: initialData.ivaoAtcsInitialData,
      vatsimAtcsInitialData: initialData.vatsimAtcsInitialData,
    }),
    getNetworkFlightsLayer({
      ivaoFlightsInitialData: initialData.ivaoFlightsInitialData,
      vatsimFlightsInitialData: initialData.vatsimFlightsInitialData,
    }),
    getSelectedFlightPathLayer(),
    getAirportsLayer({
      data: initialData.airportsSummary,
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
        controller={{
          doubleClickZoom: false,
        }}
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
