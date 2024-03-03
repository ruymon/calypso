"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useMapLoadStore } from "@/stores/map-load-store";
import { ZoomInIcon, ZoomOutIcon } from "lucide-react";

interface MapZoomControlsProps {}

export function MapZoomControls({}: MapZoomControlsProps) {
  const [mapRef, isMapLoaded] = useMapLoadStore((state) => [
    state.mapRef,
    state.isMapLoaded,
  ]);

  function handleZoomIn() {
    mapRef?.zoomIn();
  }

  function handleZoomOut() {
    mapRef?.zoomOut();
  }

  if (!isMapLoaded) {
    return (
      <figure className="flex flex-col gap-1.5">
        <Skeleton className="h-6 w-6" />
        <Skeleton className="h-6 w-6" />
      </figure>
    );
  }

  return (
    <section className="flex flex-col gap-1.5">
      <Button size="icon-sm" variant="outline" onClick={handleZoomIn}>
        <ZoomInIcon className="h-4 w-4 shrink-0" />
      </Button>

      <Button size="icon-sm" variant="outline" onClick={handleZoomOut}>
        <ZoomOutIcon className="h-4 w-4 shrink-0" />
      </Button>
    </section>
  );
}
