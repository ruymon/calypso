import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import { Aircraft } from "@/types/live-flights";

interface AircraftCardProps {
  className?: string;
  data?: Aircraft;
}

export async function AircraftCard({ className, data }: AircraftCardProps) {
  const t = await getScopedI18n("app.flightDetails.aircraft");
  return (
    <Card className={className}>
      <CardHeader className="gap-0.5">
        <CardTitle>{data?.icao || "Empty state"}</CardTitle>
        <CardDescription>{data?.equipment || "Empty state"}</CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-accent-foreground">
            {data?.registration || "Empty state"}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("registration")}
          </span>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-accent-foreground">
            {data?.transponderTypes || "Empty state"}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("transponder")}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <span className="text-sm text-accent-foreground">
            {data?.wakeTurbulence || "Empty state"}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("wakeTurbulence")}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
