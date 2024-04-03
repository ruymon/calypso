"use client";

import { convertTracksToLineString } from "@/lib/geojson";
import { useFlightTrackStore } from "@/stores/flight-track-store";
import { Layer, Source } from "react-map-gl";
import { purple } from "tailwindcss/colors";

interface FlightTrackLayerProps {}

export function FlightTrackLayer({}: FlightTrackLayerProps) {
  const { track, trackToArrival } = useFlightTrackStore();

  if (!track) {
    return null;
  }

  return (
    <>
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
      </Source>
      <Source
        type="geojson"
        id="flight-track-to-arrival-source"
        data={{
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                coordinates: trackToArrival,
                type: "LineString",
              },
            },
          ],
        }}
      >
        <Layer
          id="flight-track-to-arrival-layer"
          type="line"
          source="flight-track-to-arrival-source"
          layout={{
            "line-join": "round",
            "line-cap": "round",
          }}
          paint={{
            "line-color": purple[500],
            "line-width": 1,
            "line-dasharray": [2, 8],
          }}
        />
      </Source>

      <Source
        type="geojson"
        id="arrival-point-source"
        data={{
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {},
              geometry: {
                coordinates: trackToArrival[trackToArrival.length - 1] as [
                  number,
                  number,
                ],
                type: "Point",
              },
            },
          ],
        }}
      >
        <Layer
          id="arrival-point-layer"
          type="circle"
          source="arrival-point-source"
          layout={{}}
          paint={{
            "circle-color": purple[500],
            "circle-opacity": 0.5,
            "circle-radius": 4,
          }}
        />
      </Source>
    </>
  );
}
