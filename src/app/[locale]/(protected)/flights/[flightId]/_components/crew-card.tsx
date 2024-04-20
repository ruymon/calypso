import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getNetworkUserPilotRating } from "@/lib/rating";
import { getScopedI18n } from "@/locales/server";
import { Pilot } from "@/types/live-flights";
import { Network } from "@/types/networks";

interface CrewCardProps {
  className?: string;
  data: Pilot;
  network: Network;
}

export async function CrewCard({ className, data, network }: CrewCardProps) {
  const t = await getScopedI18n("flightDetails.crewDetails.crew");
  const rating = getNetworkUserPilotRating(data.rating, network);

  return (
    <Card className={className}>
      <CardHeader className="gap-0.5">
        <span className="font-mono text-2xs font-medium uppercase text-muted-foreground">
          {t("pilotInCommand")}
        </span>
        <CardTitle>{data.name || data.id}</CardTitle>
        <CardDescription>
          {data.id || "Empty state"} &bull;{" "}
          {`${rating?.slug} | ${rating?.label}` || null}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
