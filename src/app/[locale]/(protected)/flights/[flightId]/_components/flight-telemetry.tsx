"use client";

import { FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { getFlightDetails } from "@/lib/flights";
import { LiveFlightDetail } from "@/types/live-flights";
import { useQuery } from "@tanstack/react-query";
import { Heading } from "./heading";
import { StoreFlightData } from "./store-flight-data";
import { Transponder } from "./transponder";

interface FlightTelemetryProps {
  initialData: LiveFlightDetail;
}

export function FlightTelemetry({ initialData }: FlightTelemetryProps) {
  const { data, error } = useQuery({
    initialData,
    queryKey: ["flight-details", initialData.id],
    queryFn: async () => getFlightDetails(initialData.id),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  return (
    <>
      <StoreFlightData data={data} />
      <div className="grid grid-cols-4 items-center gap-4 rounded-md border bg-background p-2">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-accent-foreground">
            {data?.position.altitude} ft
          </span>
          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            alt
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-semibold text-accent-foreground">
            {data?.position.groundSpeed} kt
          </span>
          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            gs
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Heading
            className="font-semibold text-accent-foreground"
            value={data?.position.heading || 0}
          />

          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            hdg
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Transponder
            className="font-semibold text-accent-foreground"
            code={data?.position.transponder || "-"}
          />
          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            xpdr
          </span>
        </div>
      </div>
    </>
  );
}
