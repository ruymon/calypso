"use client";

import { useSelectedFlightStore } from "@/stores/selected-flight-store";
import { LiveFlightDetail } from "@/types/live-flights";
import { useEffect } from "react";

interface StoreFlightDataProps {
  data: LiveFlightDetail | null;
}

export function StoreFlightData({ data }: StoreFlightDataProps) {
  const { setTracks, setDeparture, setArrival, setAlternate, setAlternate2 } =
    useSelectedFlightStore();

  if (!data) return null;

  useEffect(() => {
    setTracks(data.tracks);

    // Clean up the tracks when the component unmounts
    return () => {
      setTracks([]);
    };
  }, [data]);

  useEffect(() => {
    setDeparture(data.flightPlan?.departure || null);
    setArrival(data.flightPlan?.arrival || null);
    setAlternate(data.flightPlan?.alternate || null);
    setAlternate2(data.flightPlan?.alternate2 || null);

    // Clean up the tracks when the component unmounts
    return () => {
      setDeparture(null);
      setArrival(null);
      setAlternate(null);
      setAlternate2(null);
    };
  }, []);

  return null;
}
