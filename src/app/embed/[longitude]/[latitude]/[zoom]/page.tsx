"use client";

import { InteractiveMap } from "@/components/app/map/interactive-map";
import { MapLiveFlightsLayer } from "@/components/app/map/map-live-flights-layer";
import {
  MapViewState,
  useMapFocusedLocationStore,
} from "@/stores/map-focused-location-store";
import { useMapLoadStore } from "@/stores/map-load-store";
import { useEffect } from "react";

interface MapEmbedPageProps {
  params: MapViewState;
}

export default function MapEmbedPage({ params }: MapEmbedPageProps) {
  const [setFocusedLocation] = useMapFocusedLocationStore((state) => [
    state.setFocusedLocation,
  ]);

  const [isMapLoaded] = useMapLoadStore((state) => [state.isMapLoaded]);

  useEffect(() => {
    if (!isMapLoaded) return;
    setFocusedLocation(params);
  }, [setFocusedLocation, params, isMapLoaded]);

  return (
    <main className="flex flex-1 relative overflow-hidden max-h-screen">
      <InteractiveMap>
        <MapLiveFlightsLayer />
      </InteractiveMap>
    </main>
  );
}
