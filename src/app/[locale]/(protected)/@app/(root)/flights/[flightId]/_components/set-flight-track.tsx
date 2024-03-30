"use client";

import { useFlightTrackStore } from "@/stores/flight-track-store";
import { LiveFlightDetail } from "@/types/live-flights";
import { useEffect } from "react";

interface SetFlightTrackProps {
  tracks?: LiveFlightDetail["tracks"];
}

export function SetFlightTrack({ tracks }: SetFlightTrackProps) {
  const { setTrack } = useFlightTrackStore();

  if (!tracks) {
    return null;
  }

  useEffect(() => {
    setTrack(tracks);
  }, [tracks]);

  return null;
}
