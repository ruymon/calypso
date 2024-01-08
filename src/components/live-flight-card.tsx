import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";

export interface LiveFlightCardProps {
  icaoCallsign: string;
  iataCallsign: string;
  airline: string;
  departureIcao: string;
  departureIata: string;
  arrivalIcao: string;
  arrivalIata: string;
  aircraft: string;
  registration: string;
  network: string;
  flightStatus: string;
  flightProgress: number;
};

export function LiveFlightCard({
  icaoCallsign,
  iataCallsign,
  airline,
  departureIcao,
  departureIata,
  arrivalIcao,
  arrivalIata,
  aircraft,
  registration,
  network,
  flightStatus,
  flightProgress,
}: LiveFlightCardProps) {
  return (
    <button className="flex flex-col w-full bg-background/20 backdrop-blur-lg items-start gap-4 rounded-lg p-3 text-left transition-all hover:bg-background">
      <header className="flex items-center w-full justify-between gap-4">
        <div className="flex flex-col">
          <span className="font-bold text-lg text-foreground">{icaoCallsign}<span className="ml-1.5 text-sm text-muted-foreground font-medium">{iataCallsign}</span></span>
          <span className="text-xs text-muted-foreground font-medium">{airline}</span>
        </div>

        <Badge variant="warning" className="font-mono uppercase">Final app</Badge>
      </header>

      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex flex-col">
          <span className="text-sm text-secondary-foreground font-medium">{departureIcao}</span>
          <span className="text-xs text-muted-foreground font-medium">{departureIata}</span>
        </div>
        <Progress value={flightProgress} />
        <div className="flex flex-col">
          <span className="text-sm text-secondary-foreground font-medium">{arrivalIcao}</span>
          <span className="text-xs text-muted-foreground">{arrivalIata}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 justify-between w-full">
        <div className="flex items-center gap-2">
          <Badge className="font-semibold" variant="muted" size="sm">{aircraft}</Badge>
          <Badge className="font-semibold" variant="muted" size="sm">{registration}</Badge>
        </div>

        <div className=" flex items-center gap-1">
          <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-green-500 to-sky-500" />
          <span className="text-xs font-medium text-foreground">{network}</span>
        </div>
      </div>
    </button>
  );
};
