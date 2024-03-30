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
  const t = await getScopedI18n("flightDetails.crewDetails.crew");

  return (
    <Card className={className}>
      <CardHeader className="gap-0.5">
        <span className="font-mono text-2xs font-medium uppercase text-muted-foreground">
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
