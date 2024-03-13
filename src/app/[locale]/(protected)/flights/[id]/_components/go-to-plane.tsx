"use client";

import { useFlightTrackStore } from "@/stores/flight-track-store";
import { LiveFlightDetail } from "@/types/live-flights";
import { useEffect } from "react";

interface GoToPlaneProps extends LiveFlightDetail {}

export function GoToPlane(data: GoToPlaneProps) {
  const [setTrack] = useFlightTrackStore((state) => [state.setTrack]);

  useEffect(() => {
    setTrack(data.tracks);
  }, []);

  return null;
}
