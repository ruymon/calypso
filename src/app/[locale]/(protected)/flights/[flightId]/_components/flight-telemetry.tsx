"use client";

import { Separator } from "@/components/ui/separator";
import { FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { getFlightDetails } from "@/lib/flights";
import { convertKilometersToNauticalMiles } from "@/lib/units";
import { cn } from "@/lib/utils";
import { LiveFlightDetail } from "@/types/live-flights";
import { useQuery } from "@tanstack/react-query";
import { Heading } from "./heading";
import { StoreFlightData } from "./store-flight-data";
import { Transponder } from "./transponder";
//@ts-expect-error
import distance from "@turf/distance";
//@ts-expect-error
import { point } from "@turf/helpers";
import { PlaneIcon } from "lucide-react";

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

  const departureCoordinates = point([
    data?.flightPlan?.departure?.lat,
    data?.flightPlan?.departure?.lng,
  ]);
  const arrivalCoordinates = point([
    data?.flightPlan?.arrival?.lat,
    data?.flightPlan?.arrival?.lng,
  ]);
  const currentCoordinates = point([data?.position?.lat, data?.position?.lng]);

  const directCurrentPositionToArrivalDistance = distance(
    currentCoordinates,
    arrivalCoordinates,
    { units: "kilometers" },
  );

  const directCurrentPositionToArrivalDistanceInNauticalMiles =
    convertKilometersToNauticalMiles(directCurrentPositionToArrivalDistance);

  const directCurrentPositionDepartureDistance = distance(
    departureCoordinates,
    currentCoordinates,
    { units: "kilometers" },
  );

  const directDepartureArrivalDistance = distance(
    departureCoordinates,
    arrivalCoordinates,
    { units: "kilometers" },
  );

  const flightProgress =
    (directCurrentPositionDepartureDistance / directDepartureArrivalDistance) *
    100;

  return (
    <>
      <StoreFlightData data={data} />
      <div className="flex flex-col overflow-clip rounded-md border bg-background/25 backdrop-blur-md">
        <div className="grid grid-cols-4 items-center gap-4 bg-background p-2">
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
        <Separator />
        <div className="flex flex-col items-center gap-2 px-4 py-3">
          <div className="flex w-full items-center gap-4">
            <span className="text-sm font-semibold uppercase text-accent-foreground">
              {data?.flightPlan?.departure?.icao || "tbn"}
            </span>

            <div className="flex flex-1 items-center">
              <div
                className={cn(
                  "h-1 rounded-full",
                  data?.network === "ivao" && "bg-ivao",
                  data?.network === "vatsim" && "bg-vatsim",
                )}
                style={{
                  width: `${flightProgress}%`,
                }}
              />
              <PlaneIcon className="-mx-1 h-6 w-6 shrink-0 rotate-45 fill-accent-foreground text-transparent" />
              <div className="h-1 grow rounded-full bg-muted" />
            </div>

            <span className="text-sm font-semibold uppercase text-accent-foreground">
              {data?.flightPlan?.arrival?.icao || "tbn"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {flightProgress.toFixed(2)}%
            </span>
            <span className="text-xs text-muted-foreground">
              {directCurrentPositionToArrivalDistanceInNauticalMiles.toFixed(0)}
              nm to destination
            </span>
          </div>

          {/* <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-accent-foreground">
                Distance to arrival:
              </span>
              <span className="text-xs text-muted-foreground">
                {directCurrentPositionToArrivalDistanceInNauticalMiles.toFixed(
                  0,
                )}
                nm
              </span>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-xs font-medium text-accent-foreground">
                Flight progress:
              </span>
              <span className="text-xs text-muted-foreground">
                {flightProgress.toFixed(2)}%
              </span>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}
