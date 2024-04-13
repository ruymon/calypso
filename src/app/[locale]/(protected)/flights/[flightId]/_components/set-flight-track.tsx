"use client";

import { useFlightTrackStore } from "@/stores/flight-track-store";
import { LiveFlightDetail } from "@/types/live-flights";
import { useEffect } from "react";

interface SetFlightTrackProps {
  tracks?: LiveFlightDetail["tracks"];
  arrivalCoordinates?: [number, number] | null;
  currentPosition?: LiveFlightDetail["position"];
}

export function SetFlightTrack({
  tracks,
  arrivalCoordinates,
  currentPosition,
}: SetFlightTrackProps) {
  const { setTrack, setTrackToArrival } = useFlightTrackStore();

  if (!tracks) {
    return null;
  }

  useEffect(() => {
    setTrack(tracks);

    arrivalCoordinates &&
      currentPosition &&
      setTrackToArrival([
        [currentPosition.lng, currentPosition.lat],
        arrivalCoordinates,
      ]);
  }, [tracks]);

  return null;
}
