"use client";

import { useSelectedFlightStore } from "@/stores/selected-flight-store";
import { LiveFlightDetail } from "@/types/live-flights";
import { useEffect } from "react";

interface StoreFlightDataProps {
  data: LiveFlightDetail | null;
}

export function StoreFlightData({ data }: StoreFlightDataProps) {
  const { setTracks, setParsedRoute } = useSelectedFlightStore();

  if (!data) return null;

  useEffect(() => {
    setTracks(data.tracks);

    // Clean up the tracks when the component unmounts
    return () => {
      setTracks([]);
    };
  }, [data]);

  return null;
}
