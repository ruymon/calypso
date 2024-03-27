"use client";

import { AirlineTail } from "@/components/airline-tail";
import { NetworkIcon } from "@/components/network-icon";
import { FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { getAirlineTailImageUrl } from "@/lib/images";
import { useScopedI18n } from "@/locales/client";
import { useFlightTrackStore } from "@/stores/flight-track-store";
import { LiveFlightDetail } from "@/types/live-flights";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useEffect } from "react";
import { getFlightDetails } from "../page";
import { AircraftCard } from "./aircraft-card";
import { AirportCard } from "./airport-card";
import { CopyFlightPlanButton } from "./copy-flight-button";
import { CrewCard } from "./crew-card";
import { FlightplanItemCard } from "./flightplan-item-card";
import { Heading } from "./heading";
import { Transponder } from "./transponder";

interface FlightDetailsProps {
  initialData: LiveFlightDetail;
}

export function FlightDetails({ initialData }: FlightDetailsProps) {
  const t = useScopedI18n("app.flightDetails");
  const [setTrack] = useFlightTrackStore((state) => [state.setTrack]);

  const { data, error } = useQuery({
    initialData,
    queryKey: ["flight-details", initialData.id],
    queryFn: async () => getFlightDetails(initialData.id),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  if (error || !data) {
    return notFound();
  }

  useEffect(() => {
    setTrack(data.tracks);
  }, [data]);

  return (
    <div className="flex flex-1 flex-col gap-8">
      <Image
        src={getAirlineTailImageUrl(data.callsign)}
        fill
        className="pointer-events-none absolute inset-0 top-0 -z-10 max-h-64 scale-y-[-1] opacity-0 blur-[360px] saturate-150 transition-opacity duration-1000 ease-in-out"
        alt="Illustration"
        draggable={false}
        onLoad={(e) => {
          e.currentTarget.classList.remove("opacity-0");
          e.currentTarget.classList.add("opacity-100");
        }}
      />

      <header className="flex items-center justify-between gap-4 pt-4">
        <div className="flex items-center gap-4">
          <AirlineTail callsign={data.callsign} className="h-10 w-12" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{data.callsign}</h1>
            <span className="text-sm text-muted-foreground">
              {data.pilot?.name || data.pilot.id} &bull;{" "}
              {data.flightPlan?.aircraft?.icao}
            </span>
          </div>
        </div>

        <NetworkIcon network={data.network} className="h-9 w-9 rounded-lg" />
      </header>

      <div className="grid grid-cols-4 items-center gap-4 rounded-md border bg-background p-2">
        <div className="flex flex-col items-center">
          <span className="font-semibold text-accent-foreground">
            {data.position.altitude}
          </span>
          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            alt
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="font-semibold text-accent-foreground">
            {data.position.groundSpeed}
          </span>
          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            gs
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Heading
            className="font-semibold text-accent-foreground"
            value={data.position.heading}
          />

          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            hdg
          </span>
        </div>

        <div className="flex flex-col items-center">
          <Transponder
            className="font-semibold text-accent-foreground"
            code={data.position.transponder}
          />
          <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
            xpdr
          </span>
        </div>
      </div>

      <section className="flex flex-col gap-4">
        <header className="flex flex-col">
          <span className="text-xl font-semibold">
            {t("locationDetails.title")}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("locationDetails.subtitle")}
          </span>
        </header>

        <div className="grid grid-cols-2 gap-3">
          <AirportCard
            data={data.flightPlan?.departure}
            type="departure"
            className="col-span-2"
          />
          <AirportCard
            data={data.flightPlan?.arrival}
            type="arrival"
            className="col-span-2"
          />
          <AirportCard
            data={data.flightPlan?.alternate}
            type="alternate"
            className={
              data.flightPlan?.alternate2 ? "col-span-1" : "col-span-2"
            }
          />
          {data.flightPlan?.alternate2 && (
            <AirportCard data={data.flightPlan?.alternate2} type="alternate2" />
          )}
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <header className="flex flex-col">
          <span className="text-xl font-semibold">
            {t("aircraftDetails.title")}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("aircraftDetails.subtitle")}
          </span>
        </header>

        <AircraftCard data={data.flightPlan?.aircraft} />
      </section>

      <section className="flex flex-col gap-4">
        <header className="flex flex-col">
          <span className="text-xl font-semibold">
            {t("crewDetails.title")}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("crewDetails.subtitle")}
          </span>
        </header>

        <CrewCard data={data.pilot} />
      </section>

      <section className="flex flex-col gap-4">
        <header className="flex flex-col">
          <span className="text-xl font-semibold">
            {t("flightPlanDetails.title")}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("flightPlanDetails.subtitle")}
          </span>
        </header>

        <div className="grid grid-cols-4 gap-3">
          <FlightplanItemCard title="tas" data={data.flightPlan?.cruiseTas} />
          <FlightplanItemCard title="fl" data={data.flightPlan?.level} />
          <FlightplanItemCard
            title="route"
            data={data.flightPlan?.route}
            className="col-span-4"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4 pb-4">
        <CopyFlightPlanButton />
      </section>
    </div>
  );
}
