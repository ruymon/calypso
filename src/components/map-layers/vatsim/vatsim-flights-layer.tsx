"use client";

import { FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { getNetworkFlights } from "@/lib/flights";
import { convertFlightsToGeoJSON } from "@/lib/geojson";
import { useMapLayersStore } from "@/stores/map-layers-store";
import { LiveFlights } from "@/types/live-flights";
import { useQuery } from "@tanstack/react-query";
import { Layer, Source } from "react-map-gl";
import { lime } from "tailwindcss/colors";
import { flightLayerBaseLayout } from "../helper";

interface VatsimFlightsLayerProps {
  initialData: LiveFlights | null;
}

export function VatsimFlightsLayer({ initialData }: VatsimFlightsLayerProps) {
  const { data, error } = useQuery({
    initialData,
    queryKey: ["vatsim-flights"],
    queryFn: () => getNetworkFlights("vatsim"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  const [isVatsimFlightsLayerVisible] = useMapLayersStore((state) => [
    state.isVatsimFlightsLayerVisible,
  ]);

  if (error) {
    console.error("Error fetching Vatsim flights", error);
  }

  if (!data) {
    return null;
  }

  return (
    <Source
      id="vatsim-flights-source"
      type="geojson"
      data={convertFlightsToGeoJSON(data)}
    >
      <Layer
        type="symbol"
        id="vatsim-flights-layer"
        layout={{
          ...flightLayerBaseLayout,
          visibility: isVatsimFlightsLayerVisible ? "visible" : "none",
        }}
        paint={{
          "icon-color": lime[500],
        }}
      />
    </Source>
  );
}
