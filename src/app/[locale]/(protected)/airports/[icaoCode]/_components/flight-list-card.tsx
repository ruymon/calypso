"use client";

import { AirlineTail } from "@/components/airline-tail";
import {
  PiAlertTriangleSolid,
  PiArrowRightDownSolid,
  PiArrowRightUpSolid,
  PiEye02OffContrast,
} from "@/components/icons";
import { NetworkIcon } from "@/components/network-icon";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { useMapNetworkLayersStore } from "@/stores/map-network-layers-store";
import { AirportNetworkFlight, AirportStats } from "@/types/airports";
import { Network } from "@/types/networks";
import Link from "next/link";

interface FlightListCardProps {
  data: AirportStats;
}

export function FlightListCard({
  data: { ivao: ivaoStats, vatsim: vatsimStats },
}: FlightListCardProps) {
  const { isVatsimFlightsLayerVisible, isIvaoFlightsLayerVisible } =
    useMapNetworkLayersStore();

  const getDepartureList = (): FlightItemProps[] => {
    const departures = [];

    if (isVatsimFlightsLayerVisible) {
      departures.push(
        ...vatsimStats.departure.map((flight) => ({
          ...flight,
          network: "vatsim",
        })),
      );
    }

    if (isIvaoFlightsLayerVisible) {
      departures.push(
        ...ivaoStats.departure.map((flight) => ({
          ...flight,
          network: "ivao",
        })),
      );
    }

    return departures.sort((a, b) => a.callsign.localeCompare(b.callsign));
  };

  const getArrivalList = (): FlightItemProps[] => {
    const arrivals = [];

    if (isVatsimFlightsLayerVisible) {
      arrivals.push(
        ...vatsimStats.arrival.map((flight) => ({
          ...flight,
          network: "vatsim",
        })),
      );
    }

    if (isIvaoFlightsLayerVisible) {
      arrivals.push(
        ...ivaoStats.arrival.map((flight) => ({
          ...flight,
          network: "ivao",
        })),
      );
    }

    return arrivals.sort((a, b) => a.callsign.localeCompare(b.callsign));
  };

  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col">
        <span className="text-xl font-semibold">Flight schedule</span>
        <span className="text-xs text-muted-foreground">
          Departure and arrival ratio insights among the networks
        </span>
      </header>

      <Alert className="border-dashed border-amber-500/50 bg-amber-500/5">
        <PiAlertTriangleSolid className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          Schedule list is synced with your visible networks layers.
        </AlertDescription>
      </Alert>

      <div className="flex flex-col gap-4">
        <header className="flex gap-3">
          <figure className="flex w-5 items-center justify-center rounded-xs bg-violet-500 p-1 text-violet-50">
            <PiArrowRightUpSolid />
          </figure>

          <div className="flex flex-col">
            <span className="font-semibold">Departures</span>
            <span className="text-xs text-muted-foreground">
              Past and upcoming departures
            </span>
          </div>
        </header>

        <div className="flex flex-col">
          {getDepartureList().map((flight) => (
            <FlightItem key={flight.id} {...flight} />
          ))}

          {!isIvaoFlightsLayerVisible && !isVatsimFlightsLayerVisible && (
            <div className="flex flex-col items-center justify-center rounded-lg bg-border p-4 text-center text-muted-foreground">
              <PiEye02OffContrast className="mb-2 h-4 w-4" />
              <span className="text-sm font-medium">
                No departures available
              </span>
              <span className="text-xs">
                Enable one or more network layers to see departures
              </span>
            </div>
          )}
        </div>
      </div>

      <Separator className="my-4" />

      <div className="flex flex-col gap-4">
        <header className="flex gap-3">
          <figure className="flex w-5 items-center justify-center rounded-xs bg-rose-500 p-1 text-rose-50">
            <PiArrowRightDownSolid />
          </figure>
          <div className="flex flex-col">
            <span className="font-semibold">Arrivals</span>
            <span className="text-xs text-muted-foreground">
              Past and upcoming arrivals
            </span>
          </div>
        </header>

        <div className="flex flex-col">
          {getArrivalList().map((flight) => (
            <FlightItem key={flight.id} {...flight} />
          ))}

          {!isIvaoFlightsLayerVisible && !isVatsimFlightsLayerVisible && (
            <div className="flex flex-col items-center justify-center rounded-lg bg-border p-4 text-center text-muted-foreground">
              <PiEye02OffContrast className="mb-2 h-4 w-4" />
              <span className="text-sm font-medium">No arrivals available</span>
              <span className="text-xs">
                Enable one or more network layers to see departures
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

interface FlightItemProps extends AirportNetworkFlight {
  network: string;
}

export function FlightItem({
  arrival,
  callsign,
  departure,
  id,
  network,
}: FlightItemProps) {
  return (
    <Link
      href={`/flights/${id}`}
      className="flex items-center justify-between gap-4 rounded-sm p-3 transition-all hover:bg-muted hover:dark:bg-muted/45"
    >
      <div className="flex items-center gap-4">
        <AirlineTail callsign={callsign} className="h-7 w-8" />
        <div className="flex flex-col">
          <span className="text-base font-semibold text-accent-foreground">
            {callsign}
          </span>
          <span className="text-xs font-medium text-muted-foreground">
            {departure ?? "TBN"} - {arrival ?? "TBN"}
          </span>
        </div>
      </div>

      <NetworkIcon network={network as Network} className="h-6 w-6" />
    </Link>
  );
}
