import { PiArrowDownSolid } from "@/components/icons";
import {
  MetarExpirationStatus,
  getMetarExpirationStatus,
} from "@/lib/airports";
import { getRelativeTimeInWords, getZuluTimeString } from "@/lib/time";
import { cn } from "@/lib/utils";
import { DecodedMetar } from "metar-decoder/lib/types";

export function DecodedMetarCard({ data }: { data: DecodedMetar }) {
  return (
    <div className="flex flex-col gap-3">
      <section className="flex flex-col">
        <span className="text-xs font-medium text-muted-foreground">
          Station label
        </span>
        <span className="text-lg font-medium text-accent-foreground">
          {data.airport as string}
        </span>
      </section>

      <section className="flex flex-col">
        <span className="text-xs font-medium text-muted-foreground">
          Recorded at
        </span>
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium text-accent-foreground">
            {getZuluTimeString(data.recorded_at)}
          </span>
          <span className="text-xs leading-none text-muted-foreground">
            ({getRelativeTimeInWords(data.recorded_at)})
          </span>

          <MetarExpirationStatusBadge recordedAt={new Date(data.recorded_at)} />
        </div>
      </section>

      <section className="flex flex-col">
        <span className="text-xs font-medium text-muted-foreground">Wind</span>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-lg font-medium text-accent-foreground">
              {data.wind.direction}°
            </span>
            <span className="text-xs text-muted-foreground">
              {data.wind.speed} {data.wind.unit.toLowerCase()}
            </span>
          </div>

          <figure className="flex items-center justify-center">
            <PiArrowDownSolid
              className="h-4 w-4"
              style={{
                transform: `rotate(${data.wind.direction}deg)`,
              }}
            />
          </figure>
        </div>
      </section>

      <section className="flex flex-col">
        <span className="text-xs font-medium text-muted-foreground">
          Visibility
        </span>
        <span className="text-lg font-medium text-accent-foreground">
          {data.visibility}
        </span>
      </section>
    </div>
  );
}

export function MetarExpirationStatusBadge({
  recordedAt,
}: {
  recordedAt: Date;
}) {
  const status = getMetarExpirationStatus(recordedAt);

  const colorVariants: {
    [key in MetarExpirationStatus]: string;
  } = {
    fresh: "bg-green-500",
    closeToExpiration: "bg-amber-500",
    expired: "bg-destructive",
  };

  return (
    <figure
      className={cn(
        "h-2 w-2 animate-pulse rounded-full",
        colorVariants[status],
      )}
    />
  );
}
