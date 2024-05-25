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
import { DeckGL } from "deck.gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { ReactNode, useState } from "react";
import BaseMap from "react-map-gl";
import { MapSkeleton } from "./map-skeleton";
import { MapToolbar } from "./map-toolbar";

interface MapProps {
  children?: ReactNode;
}

export function Map({ children }: MapProps) {
  const { baseMap } = useBaseMapStore();
  const [isMapLoading, setIsMapLoading] = useState(true);

  const layers = [
    getNetworkATCsLayer(),
    getSelectedFlightPathLayer(),
    getNetworkFlightsLayer(),
    getAirportsLayer(),
  ];

  return (
    <>
      <figure
        className="absolute inset-0 flex h-full w-full"
        onContextMenu={(event) => event.preventDefault()}
      >
        <MapSkeleton isMapLoading={isMapLoading} />
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
            onLoad={() => setIsMapLoading(false)}
          />
          {children}
        </DeckGL>
      </figure>
    </>
  );
}
