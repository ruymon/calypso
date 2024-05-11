import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getNetworkUserPilotRating } from "@/lib/rating";
import { cn, getPilotNetworkProfileUrl } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";
import { Pilot } from "@/types/live-flights";
import { Network } from "@/types/networks";
import Link from "next/link";

interface CrewCardProps {
  className?: string;
  data: Pilot;
  network: Network;
}

export async function CrewCard({ className, data, network }: CrewCardProps) {
  const t = await getScopedI18n("flightDetails.crewDetails.crew");
  const rating = getNetworkUserPilotRating(data.rating, network);

  const url = getPilotNetworkProfileUrl(data.id, network);

  return (
    <Link href={url} target="_blank" className={cn("group", className)}>
      <Card className="transition-all group-hover:bg-accent">
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
    </Link>
  );
}
