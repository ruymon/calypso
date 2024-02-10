import { LiveFlight } from "@/types/live-flights";
import Image from "next/image";
import Link from "next/link";
import { Progress } from "./ui/progress";

type LiveFlightCardProps = LiveFlight;

export function LiveFlightCard({ callsign, currentPosition, flightPlan, network, pilot, id }: LiveFlightCardProps) {
  return (
    <Link href={`/map/flight/${id}`} className="flex flex-col w-full gap-3 rounded-xl p-3 transition-all hover:bg-muted">
      <header className="flex items-center w-full justify-between">
        <div className="flex gap-2 items-center">
          <Image width={32} height={32} className="aspect-square w-8 h-8 rounded-md" src={`/assets/airline-logos/JJ.png`} alt="Airline Logo" />
          <div className="flex flex-col">
            <span className="font-bold text-lg text-foreground">{callsign}</span>
            <span className="text-xs text-muted-foreground font-medium">JJ2056 &bull; Latam Airlines</span>
          </div>
        </div>

      </header>

      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex flex-col">
          <span className="text-accent-foreground font-bold">{flightPlan?.departure?.iata || ''}</span>
          <span className="text-xs font-medium text-muted-foreground">{flightPlan?.departure?.icao || ''}</span>
        </div>
        <Progress value={75} />
        <div className="flex flex-col items-end text-right">
          <span className="text-accent-foreground font-bold">{flightPlan?.arrival?.iata || ''}</span>
          <span className="text-xs font-medium text-muted-foreground">{flightPlan?.arrival?.icao || ''}</span>
        </div>
      </div>

      <footer className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground/50">Updated 10min ago</span>
        <span className="text-xs text-muted-foreground">Flying on<span className="ml-1 uppercase font-bold text-secondary-foreground">{network}</span></span>
      </footer>
    </Link>
  );

  // return (
  //   <Link href={`/flight/${id}`} className="flex flex-col w-full bg-background/20 backdrop-blur-lg items-start gap-4 rounded-lg p-3 text-left transition-all hover:bg-background">
  //     <header className="flex items-center w-full justify-between gap-4">
  //       <div className="flex flex-col">
  //         <span className="font-bold text-lg text-foreground">{callsign}<span className="ml-1.5 text-sm text-muted-foreground font-medium">TBD</span></span>
  //         <span className="text-xs text-muted-foreground font-medium">Airline name</span>
  //       </div>

  //       <Badge variant="warning">TBD</Badge>
  //     </header>

  //     <div className="flex items-center justify-between w-full gap-4">
  //       <div className="flex flex-col">
  //         <span className="text-sm text-secondary-foreground font-medium">{flightPlan?.departure.icao}</span>
  //         <span className="text-xs text-muted-foreground font-medium">{flightPlan?.departure.iata}</span>
  //       </div>
  //       <Progress value={45} />
  //       <div className="flex flex-col">
  //         <span className="text-sm text-secondary-foreground font-medium">{flightPlan?.arrival.icao}</span>
  //         <span className="text-xs text-muted-foreground">{flightPlan?.arrival.iata}</span>
  //       </div>
  //     </div>

  //     <div className="flex items-center gap-4 justify-between w-full">
  //       <div className="flex items-center gap-2">
  //         <Badge className="font-semibold" variant="muted" size="sm">{flightPlan?.aircraft.icao}</Badge>
  //         <Badge className="font-semibold" variant="muted" size="sm">{flightPlan?.aircraft.registration}</Badge>
  //       </div>

  //       <div className=" flex items-center gap-1">
  //         <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-green-500 to-sky-500" />
  //         <span className="text-xs font-medium text-foreground">{network}</span>
  //       </div>
  //     </div>
  //   </Link>
  // );
};
