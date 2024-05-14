import { PiMapDuoSolid } from "@/components/icons";

interface MapSkeletonProps {}

export function MapSkeleton({}: MapSkeletonProps) {
  return (
    <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-muted dark:bg-border">
      <div className="flex max-w-sm flex-col items-center gap-0.5">
        <PiMapDuoSolid className="mb-4 h-10 w-10 text-muted-foreground" />

        <span className="text-balance text-center text-xl font-semibold text-accent-foreground">
          Loading map
        </span>
        <span className="text-balance text-center text-sm text-muted-foreground">
          This should take less than 10 seconds, depending on your connection
        </span>
      </div>
    </div>
  );
}
