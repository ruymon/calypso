"use client";

import { InteractiveMap } from "@/components/app/map/interactive-map";
import { MapLiveFlightsLayer } from "@/components/app/map/map-live-flights-layer";
import { useMapFocusedLocationStore } from "@/stores/map-focused-location-store";
import { useMapLoadStore } from "@/stores/map-load-store";
import { useEffect } from "react";

interface MapEmbedPageProps {
  params: {
    locale: string;
    longitude: number;
    latitude: number;
    zoom: number;
  };
}

export default function MapEmbedPage({
  params: { latitude, longitude, zoom },
}: MapEmbedPageProps) {
  const [setFocusedLocation] = useMapFocusedLocationStore((state) => [
    state.setFocusedLocation,
  ]);
  // Force theme based on SearchParams

  const [isMapLoaded] = useMapLoadStore((state) => [state.isMapLoaded]);

  useEffect(() => {
    if (!isMapLoaded) return;
    setFocusedLocation({
      latitude,
      longitude,
      zoom,
    });
  }, [setFocusedLocation, latitude, longitude, zoom, isMapLoaded]);

  return (
    <main className="flex flex-1 relative overflow-hidden max-h-screen">
      <InteractiveMap>
        <MapLiveFlightsLayer />
      </InteractiveMap>
    </main>
  );
}
