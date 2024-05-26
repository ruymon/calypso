"use client";

import { useMapViewStateStore } from "@/stores/map-view-state-store";
import { useSelectedFlightStore } from "@/stores/selected-flight-store";
import { LiveFlightDetail } from "@/types/live-flights";
import { FlyToInterpolator } from "deck.gl";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface StoreFlightDataProps {
  data: LiveFlightDetail | null;
}

export function StoreFlightData({ data }: StoreFlightDataProps) {
  const { setSelectedFlight } = useSelectedFlightStore();
  const { setViewState } = useMapViewStateStore();
  const searchParams = useSearchParams();

  if (!data) return null;

  const skipFlyToPlane = searchParams.get("skipFlyTo") === "true";

  useEffect(() => {
    if (skipFlyToPlane) return;

    setViewState({
      zoom: 5,
      longitude: data.position.lng,
      latitude: data.position.lat,
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: "auto",
      transitionInterruption: 3,
      transitionEasing: (x) => {
        return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
      },
    });
  }, []);

  useEffect(() => {
    setSelectedFlight(data);

    // Clean up the tracks when the component unmounts
    return () => {
      setSelectedFlight(null);
    };
  }, [data]);

  return null;
}
