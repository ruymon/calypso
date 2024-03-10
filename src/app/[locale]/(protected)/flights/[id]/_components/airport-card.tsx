import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";
import { Airport } from "@/types/live-flights";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  GitBranchIcon,
  LucideIcon,
} from "lucide-react";

type AirportCardType = "departure" | "arrival" | "alternate" | "alternate2";
interface AirportCardProps {
  type: AirportCardType;
  data?: Airport;
  className?: string;
}

const typeIconVariants: { [key in AirportCardType]: LucideIcon } = {
  departure: ArrowUpRightIcon,
  arrival: ArrowDownRightIcon,
  alternate: GitBranchIcon,
  alternate2: GitBranchIcon,
};

export async function AirportCard({ type, data, className }: AirportCardProps) {
  const t = await getScopedI18n("app.flightDetails.airport");

  const typeLabelVariants = {
    departure: t("departure"),
    arrival: t("arrival"),
    alternate: t("alternate"),
    alternate2: t("alternate2"),
  };

  const Icon = typeIconVariants[type];

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="gap-0.5">
        <span
          data-type={type}
          className="text-2xs mb-2 inline-flex w-fit items-center gap-1 rounded px-1 py-0.5 font-mono font-extrabold uppercase leading-none text-muted-foreground data-[type='alternate']:bg-transparent data-[type='arrival']:bg-primary data-[type='departure']:bg-primary data-[type='arrival']:text-primary-foreground data-[type='departure']:text-primary-foreground"
        >
          <Icon className="h-3 w-3" />
          {typeLabelVariants[type]}
        </span>
        <CardTitle
          className={
            type === "arrival" || type === "departure" ? "text-xl" : "text-base"
          }
        >
          {data?.icao || "TBN"}
          <span className="ml-2 text-muted-foreground">
            {data?.iata || "TBN"}
          </span>
        </CardTitle>
        <CardDescription
          className={
            type === "arrival" || type === "departure" ? "" : "text-xs"
          }
        >
          {data?.name || "Not filled"}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
