"use client";

import { getNetworkLiveTrafficInGeoJSON } from "@/services/network";
import { useQuery } from "@tanstack/react-query";
import { Layer, Source, SymbolLayer } from "react-map-gl";

const flightsLayerStyle: SymbolLayer = {
  id: "network-live-flights-layer",
  type: "symbol",
  layout: {
    "icon-image": [
      "coalesce",
      // TODO: Investigate null cases and errors in the console. Not priority.
      // FIXME: Heliport icon is not showing up...
      [
        "image",
        [
          "downcase",
          ["get", "wakeTurbulence", ["get", "aircraft", ["get", "flightPlan"]]],
        ],
      ],
      ["image", "m"],
    ],
    "icon-allow-overlap": true,
    // TODO: Use wakeTurbulence and aircraft type to determine icon size
    "icon-size": [
      "interpolate",
      ["exponential", 1.8],
      ["zoom"],
      14,
      0.5,
      16,
      1.75,
    ],
    "icon-rotate": ["get", "heading", ["get", "position"]],
  },
  paint: {
    "icon-color": [
      "match",
      ["get", "network"],
      "vatsim",
      "#29B473",
      "ivao",
      "#3C55AC",
      "#616161", // any other store type
    ],
    // "icon-color": "#fff",
  },
};

const LIVE_FLIGHT_REFRESH_INTERVAL_IN_MS = 1000 * 60; // 1 minute

export function MapVatsimLiveFlightsLayer() {
  const { data, error } = useQuery({
    queryKey: ["vatsim-live-flights"],
    queryFn: () => getNetworkLiveTrafficInGeoJSON("vatsim"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    refetchInterval: LIVE_FLIGHT_REFRESH_INTERVAL_IN_MS,
  });

  console.log(data);

  if (error) {
    console.error(error);
    return null;
  }

  if (!data) return null;

  return (
    <Source id="vatsim-live-flights-source" type="geojson" data={data}>
      <Layer {...flightsLayerStyle} id="vatsim-live-flights-layer" />
    </Source>
  );
}

export function MapIvaoLiveFlightsLayer() {
  const { data, error } = useQuery({
    queryKey: ["ivao-live-flights"],
    queryFn: () => getNetworkLiveTrafficInGeoJSON("ivao"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    refetchInterval: LIVE_FLIGHT_REFRESH_INTERVAL_IN_MS,
  });

  if (error) {
    console.error(error);
    return null;
  }

  if (!data) return null;

  return (
    <Source id="ivao-live-flights-source" type="geojson" data={data}>
      <Layer {...flightsLayerStyle} id="ivao-live-flights-layer" />
    </Source>
  );
}
