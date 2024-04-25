import { AirlineTail } from "@/components/airline-tail";
import { PiArrowRightDownSolid, PiArrowRightUpSolid } from "@/components/icons";
import { NetworkIcon } from "@/components/network-icon";
import { Separator } from "@/components/ui/separator";
import { AirportNetworkFlight, AirportStats } from "@/types/airports";
import { Network } from "@/types/networks";
import Link from "next/link";

interface FlightListCardProps {
  data: AirportStats;
}

export function FlightListCard({
  data: { ivao: ivaoStats, vatsim: vatsimStats },
}: FlightListCardProps) {
  const departureList: FlightItemProps[] = [
    ...vatsimStats.departure.map((flight) => ({
      ...flight,
      network: "vatsim",
    })),
    ...ivaoStats.departure.map((flight) => ({ ...flight, network: "ivao" })),
  ].sort((a, b) => a.callsign.localeCompare(b.callsign));

  const arrivalList: FlightItemProps[] = [
    ...vatsimStats.arrival.map((flight) => ({
      ...flight,
      network: "vatsim",
    })),
    ...ivaoStats.arrival.map((flight) => ({ ...flight, network: "ivao" })),
  ].sort((a, b) => a.callsign.localeCompare(b.callsign));

  return (
    <section className="flex flex-col gap-6">
      <header className="flex flex-col">
        <span className="text-xl font-semibold">Flight schedule</span>
        <span className="text-xs text-muted-foreground">
          Departure and arrival ratio insights among the networks
        </span>
      </header>

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
          {departureList.map((flight) => (
            <FlightItem key={flight.id} {...flight} />
          ))}
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
          {arrivalList.map((flight) => (
            <FlightItem key={flight.id} {...flight} />
          ))}
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
