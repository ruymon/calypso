"use client";

import { FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { convertFlightsToGeoJSON } from "@/lib/geojson";
import { useMapLayersStore } from "@/stores/map-layers-store";
import { LiveFlights } from "@/types/live-flights";
import { useQuery } from "@tanstack/react-query";
import { Layer, Source } from "react-map-gl";
import { indigo } from "tailwindcss/colors";
import { flightLayerBaseLayout } from "../helper";
import { getIvaoFlights } from "./ivao-flights-layer-container";

interface IvaoFlightsLayerProps {
  initialData: LiveFlights | null;
}

export function IvaoFlightsLayer({ initialData }: IvaoFlightsLayerProps) {
  const { data, error } = useQuery({
    initialData,
    queryKey: ["ivao-flights"],
    queryFn: getIvaoFlights,
    refetchOnReconnect: true,
    refetchOnWindowFocus: false,
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  const [isIvaoFlightsLayerVisible] = useMapLayersStore((state) => [
    state.isIvaoFlightsLayerVisible,
  ]);

  if (error) {
    console.error("Error fetching IVAO flights", error);
  }

  if (!data) {
    return null;
  }

  return (
    <Source
      id="ivao-flights-source"
      type="geojson"
      data={convertFlightsToGeoJSON(data)}
      attribution='<a href="https://www.ivao.aero">IVAO</a>'
    >
      <Layer
        type="symbol"
        id="ivao-flights-layer"
        layout={{
          ...flightLayerBaseLayout,
          visibility: isIvaoFlightsLayerVisible ? "visible" : "none",
        }}
        paint={{
          "icon-color": indigo[500],
        }}
      />
    </Source>
  );
}
