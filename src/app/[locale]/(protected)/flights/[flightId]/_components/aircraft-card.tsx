import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAircraftImage } from "@/lib/flights";
import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";
import { Aircraft } from "@/types/live-flights";
import { AircraftCardImage } from "./aircraft-card-image";
import { AircraftImageDialog } from "./aircraft-image-dialog";

interface AircraftCardProps {
  className?: string;
  data?: Aircraft;
}

export async function AircraftCard({ className, data }: AircraftCardProps) {
  const t = await getScopedI18n("flightDetails.aircraftDetails.aircraft");

  const aircraftImage = data?.registration
    ? await getAircraftImage(data.registration)
    : null;

  return (
    <Card className={cn("relative flex overflow-clip", className)}>
      <CardHeader className="z-10 w-full gap-0.5 bg-gradient-to-r from-background via-background/90 to-background/5 p-4 dark:from-background/95 dark:via-background/90 dark:to-background/75">
        <CardTitle>
          {data?.icao || "TBN"} / {data?.wakeTurbulence || "TBN"}
        </CardTitle>
        <CardDescription className="break-all">
          {data?.equipment || "TBN"} / {data?.transponderTypes}
        </CardDescription>

        <div className="mt-6 flex gap-6">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-accent-foreground">
              {data?.registration || "TBN"}
            </span>
            <span className="text-xs text-muted-foreground">
              {t("registration")}
            </span>
          </div>

          {aircraftImage?.photographer && (
            <>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm text-accent-foreground">
                  {aircraftImage.photographer}
                </span>
                <span className="text-xs text-muted-foreground">
                  {t("photographer")}
                </span>
              </div>

              <AircraftImageDialog
                aircraftData={data}
                imageData={aircraftImage}
              />
            </>
          )}
        </div>
      </CardHeader>
      <AircraftCardImage data={aircraftImage} />
    </Card>
  );
}
