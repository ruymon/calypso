"use client";

import { convertTracksToLineString } from "@/lib/geojson";
import { useFlightTrackStore } from "@/stores/flight-track-store";
import { Layer, Source } from "react-map-gl";

interface FlightTrackLayerProps {}

export function FlightTrackLayer({}: FlightTrackLayerProps) {
  const [track] = useFlightTrackStore((state) => [state.track]);

  if (!track) {
    return null;
  }

  return (
    <Source
      type="geojson"
      id="flight-track-source"
      data={convertTracksToLineString(track)}
    >
      <Layer
        id="flight-track-layer"
        type="line"
        source="flight-track-source"
        layout={{
          "line-join": "round",
          "line-cap": "round",
        }}
        paint={{
          "line-color": ["get", "color"],
          "line-width": 2,
        }}
      />
      <Layer
        id="flight-track-layer"
        type="circle"
        source="flight-track-source"
        layout={{}}
        paint={{
          "circle-color": ["get", "color"],
        }}
      />
    </Source>
  );
}
