import { AirlineTail } from "@/components/airline-tail";
import { NetworkIcon } from "@/components/network-icon";
import { Button } from "@/components/ui/button";
import { API_BASE_URL } from "@/constants/api";
import { getScopedI18n } from "@/locales/server";
import { LiveFlight } from "@/types/live-flights";
import { notFound } from "next/navigation";
import { AircraftCard } from "./_components/aircraft-card";
import { AirportCard } from "./_components/airport-card";
import { CrewCard } from "./_components/crew-card";
import { FlightplanItemCard } from "./_components/flightplan-item-card";
import { Heading } from "./_components/heading";
import { Transponder } from "./_components/transponder";

async function getFlightDetails(id: string): Promise<LiveFlight | null> {
  const url = `${API_BASE_URL}/networks/flights/${id}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {},
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    console.error("Error fetching flight details", data);
    return null;
  }

  return data;
}

interface FlightsDetailPageProps {
  params: {
    id: string;
  };
}

export default async function FlightsDetailPage({
  params: { id },
}: FlightsDetailPageProps) {
  const t = await getScopedI18n("app.flightDetails");

  if (!id) {
    return notFound();
  }

  const data = await getFlightDetails(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex flex-col gap-8 pt-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <AirlineTail callsign={data.callsign} className="h-10 w-11" />
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">{data.callsign}</h1>
              <span className="text-sm text-muted-foreground">
                {data.pilot?.name || "Unknown pilot"} &bull;{" "}
                {data.flightPlan?.aircraft?.icao}
              </span>
            </div>
          </div>

          <NetworkIcon network={data.network} className="h-9 w-9 rounded-lg" />
        </div>

        <div className="grid grid-cols-4 items-center gap-4 rounded-md border p-2">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-accent-foreground">
              {data.position.altitude}
            </span>
            <span className="text-center text-xs text-muted-foreground">
              {t("altitude")}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="font-semibold text-accent-foreground">
              {data.position.groundSpeed}
            </span>
            <span className="text-center text-xs text-muted-foreground">
              {t("groundSpeed")}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <Heading
              className="font-semibold text-accent-foreground"
              value={data.position.heading}
            />

            <span className="text-center text-xs text-muted-foreground">
              {t("heading")}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <Transponder
              className="font-semibold text-accent-foreground"
              code={data.position.transponder}
            />
            <span className="text-center text-xs text-muted-foreground">
              {t("transponder")}
            </span>
          </div>
        </div>
      </header>

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
          <AirportCard data={data.flightPlan?.alternate} type="alternate" />
          <AirportCard data={data.flightPlan?.alternate2} type="alternate2" />
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
        <Button>Copy flight plan</Button>
      </section>
    </div>
  );
}
