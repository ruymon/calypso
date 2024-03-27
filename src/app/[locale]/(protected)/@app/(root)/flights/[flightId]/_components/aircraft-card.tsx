"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";
import { Aircraft } from "@/types/live-flights";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AircraftCardProps {
  className?: string;
  data?: Aircraft;
}

interface AircraftImage {
  photos: {
    id: string;
    thumbnail: {
      src: string;
      size: {
        width: number;
        height: number;
      };
    };
    thumbnail_large: {
      src: string;
      size: {
        width: number;
        height: number;
      };
    };
    link: string;
    photographer: string;
  }[];
}

export async function AircraftCard({ className, data }: AircraftCardProps) {
  const t = useScopedI18n("app.flightDetails.aircraft");
  const [aircraftImage, setAircraftImage] = useState<string | null>();

  useEffect(() => {
    if (!data?.registration) return;

    const registration = data.registration;
    const apiUrl = `https://api.planespotters.net/pub/photos/reg/${registration}`;

    fetch(apiUrl)
      .then((res) => res.json())
      .then(
        ({ photos }: AircraftImage) =>
          photos[0] && setAircraftImage(photos[0].thumbnail_large.src),
      );
  }, []);

  return (
    <Card className={cn("relative flex overflow-clip", className)}>
      <CardHeader className="z-10 w-full gap-0.5 bg-gradient-to-r from-background via-background/90 to-background/5 p-4 dark:from-background dark:via-background/95 dark:to-background/85">
        <CardTitle>
          {data?.icao || "TBN"} / {data?.wakeTurbulence || "TBN"}
        </CardTitle>
        <CardDescription>
          {data?.equipment || "TBN"} / {data?.transponderTypes}
        </CardDescription>

        <div className="mt-4 flex flex-col gap-0.5">
          <span className="text-sm text-accent-foreground">
            {data?.registration || "TBN"}
          </span>
          <span className="text-xs text-muted-foreground">
            {t("registration")}
          </span>
        </div>
      </CardHeader>
      {aircraftImage && (
        <Image
          src={aircraftImage}
          className="pointer-events-none rounded-lg object-cover"
          alt="Aircraft image"
          fill
          draggable={false}
        />
      )}
    </Card>
  );
}
