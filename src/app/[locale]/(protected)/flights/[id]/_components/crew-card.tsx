import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getScopedI18n } from "@/locales/server";
import { Pilot } from "@/types/live-flights";

interface CrewCardProps {
  className?: string;
  data: Pilot;
}

export async function CrewCard({ className, data }: CrewCardProps) {
  const t = await getScopedI18n("app.flightDetails.crew");

  return (
    <Card className={className}>
      <CardHeader className="gap-0.5">
        <span className="text-2xs font-mono font-medium uppercase text-muted-foreground">
          {t("pilotInCommand")}
        </span>
        <CardTitle>{data.name || "Empty state"}</CardTitle>
        <CardDescription>
          {data.id || "Empty state"} &bull; {data.rating || "Empty state"}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
