import { PiMapDuoSolid } from "@/components/icons";
import { getScopedI18n } from "@/locales/server";

interface MapSkeletonProps {}

export async function MapSkeleton({}: MapSkeletonProps) {
  const t = await getScopedI18n("map.loading");

  return (
    <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-muted dark:bg-border">
      <div className="flex max-w-sm flex-col items-center gap-0.5">
        <PiMapDuoSolid className="mb-4 h-10 w-10 text-muted-foreground" />

        <span className="text-balance text-center text-xl font-semibold text-accent-foreground">
          {t("title")}
        </span>
        <span className="text-balance text-center text-sm text-muted-foreground">
          {t("subtitle")}
        </span>
      </div>
    </div>
  );
}
