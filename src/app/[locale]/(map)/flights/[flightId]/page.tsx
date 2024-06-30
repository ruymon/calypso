import { AirlineTail } from "@/components/airline-tail";
import { NetworkIcon } from "@/components/network-icon";
import { Skeleton } from "@/components/ui/skeleton";
import { getFlightDetails } from "@/lib/flights";
import { getScopedI18n } from "@/locales/server";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { AircraftCard } from "./_components/aircraft-card";
import { AirportCard } from "./_components/airport-card";
import { BlurBackdrop } from "./_components/blur-backdrop";
import { CrewCard } from "./_components/crew-card";
import { FlightPlanDetails } from "./_components/flight-plan-details";
import { FlightTelemetry } from "./_components/flight-telemetry";
import { FlyToPlaneButton } from "./_components/fly-to-plane-button";
const VerticalProfileChart = dynamic(
  () => import("./_components/vertical-profile-chart"),
  {
    ssr: false,
    loading: () => <Skeleton className="h-52 w-full" />,
  }
);

interface FlightsDetailPageProps {
  params: {
    flightId: string;
  };
}

export default async function FlightsDetailPage({
  params: { flightId },
}: FlightsDetailPageProps) {
  const t = await getScopedI18n("flightDetails");

  if (!flightId) {
    return notFound();
  }

  const data = await getFlightDetails(flightId);

  return (
    <div className="flex flex-1 flex-col gap-8">
      <BlurBackdrop callsign={data.callsign} />

      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <AirlineTail callsign={data.callsign} className="h-10 w-12" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">{data.callsign}</h1>
            <span className="text-sm text-muted-foreground">
              {data.airline?.callsign || t("unknownCallsign")}
            </span>
          </div>
        </div>

        <NetworkIcon network={data.network} className="h-9 w-9 rounded-lg" />
      </header>

      <FlightTelemetry initialData={data} />

      <section className="flex flex-col gap-4">
        <header className="flex flex-col">
          <span className="text-xl font-semibold">
            {t("routeDetails.title")}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("routeDetails.subtitle")}
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

        <CrewCard data={data.pilot} network={data.network} />
      </section>

      <section className="flex flex-col gap-4">
        <header className="flex flex-col">
          <span className="text-xl font-semibold">{t("analytics.title")}</span>
          <span className="text-xs text-muted-foreground">
            {t("analytics.subtitle")}
          </span>
        </header>

        <VerticalProfileChart data={data.tracks} />
      </section>

      <FlightPlanDetails data={data} />
      <FlyToPlaneButton />
    </div>
  );
}
