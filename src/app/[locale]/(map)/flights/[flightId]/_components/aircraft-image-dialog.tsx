import { PiMaximizeLineArrowSolid } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AircraftImage } from "@/lib/flights";
import { getScopedI18n } from "@/locales/server";
import { Aircraft } from "@/types/live-flights";
import Image from "next/image";

interface AircraftImageDialogProps {
  aircraftData?: Aircraft;
  imageData: AircraftImage;
}

export async function AircraftImageDialog({
  aircraftData,
  imageData,
}: AircraftImageDialogProps) {
  const t = await getScopedI18n("flightDetails.aircraftDetails.aircraft");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon-sm" className="ml-auto self-center">
          <PiMaximizeLineArrowSolid className="h-3 w-3" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {aircraftData?.registration ?? "TBN"} &bull;{" "}
            {aircraftData?.icao ?? "TBN"}
          </DialogTitle>
          <DialogDescription>
            {imageData.photographer &&
              `${t("photographer")}: ${imageData.photographer}`}
          </DialogDescription>
        </DialogHeader>

        <Image
          src={imageData.thumbnail_large.src}
          className="aspect-video w-full rounded-md object-cover"
          width={imageData.thumbnail_large.size.width}
          height={imageData.thumbnail_large.size.height}
          alt="Aircraft image"
        />
      </DialogContent>
    </Dialog>
  );
}
