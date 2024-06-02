import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getNetworkUserAtcRating } from "@/lib/rating";
import { cn, getNetworkMemberProfileUrl } from "@/lib/utils";
import { LiveATCDetail } from "@/types/atcs";
import { Network } from "@/types/networks";
import Link from "next/link";

interface ControllerCardProps {
  className?: string;
  data: LiveATCDetail["user"];
  network: Network;
}

export async function ControllerCard({
  className,
  data,
  network,
}: ControllerCardProps) {
  const rating = getNetworkUserAtcRating(data.rating, network);

  const url = getNetworkMemberProfileUrl(data.id, network);

  return (
    <Link href={url} target="_blank" className={cn("group", className)}>
      <Card className="transition-all group-hover:bg-accent">
        <CardHeader className="gap-0.5">
          <span className="font-mono text-2xs font-medium uppercase text-muted-foreground">
            flight controller
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
