"use client";

import { InteractiveMap } from "@/components/interactive-map";
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
    <main className="relative flex max-h-screen flex-1 overflow-hidden">
      <InteractiveMap />
    </main>
  );
}
