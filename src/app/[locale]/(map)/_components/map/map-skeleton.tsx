"use client";

import { PiMapDuoSolid } from "@/components/icons";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";

interface MapSkeletonProps {
  isMapLoading: boolean;
}

export function MapSkeleton({ isMapLoading }: MapSkeletonProps) {
  const t = useScopedI18n("map.loading");

  return (
    <figure
      className={cn(
        "relative flex flex-1 items-center justify-center bg-background/75 backdrop-blur-md transition-all delay-1000 duration-1000",
        isMapLoading ? "visible z-20 opacity-100" : "invisible -z-10 opacity-0"
      )}
    >
      <div className="flex max-w-sm flex-col items-center gap-0.5">
        <PiMapDuoSolid className="mb-4 h-10 w-10 animate-pulse text-muted-foreground" />

        <span className="text-balance text-center text-xl font-semibold text-muted-foreground">
          {t("title")}
        </span>
        <span className="text-balance text-center text-sm text-muted-foreground opacity-75">
          {t("subtitle")}
        </span>
      </div>
    </figure>
  );
}
