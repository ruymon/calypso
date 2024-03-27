import { LiveFlightDetail } from "@/types/live-flights";
import { Heading } from "./heading";
import { Transponder } from "./transponder";

interface FlightTelemetryProps {
  data: LiveFlightDetail["position"];
}

export function FlightTelemetry({
  data: { altitude, groundSpeed, heading, transponder },
}: FlightTelemetryProps) {
  return (
    <div className="grid grid-cols-4 items-center gap-4 rounded-md border bg-background p-2">
      <div className="flex flex-col items-center">
        <span className="font-semibold text-accent-foreground">{altitude}</span>
        <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
          alt
        </span>
      </div>

      <div className="flex flex-col items-center">
        <span className="font-semibold text-accent-foreground">
          {groundSpeed}
        </span>
        <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
          gs
        </span>
      </div>

      <div className="flex flex-col items-center">
        <Heading
          className="font-semibold text-accent-foreground"
          value={heading}
        />

        <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
          hdg
        </span>
      </div>

      <div className="flex flex-col items-center">
        <Transponder
          className="font-semibold text-accent-foreground"
          code={transponder}
        />
        <span className="text-center font-mono text-xs font-medium uppercase text-muted-foreground">
          xpdr
        </span>
      </div>
    </div>
  );
}
