import { Skeleton } from "@/components/ui/skeleton";

export default function AirportDetailsLoadingPage() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-col gap-1.5">
        <Skeleton className="h-12 w-2/4" />
        <Skeleton className="h-4 w-3/4" />
      </div>

      <Skeleton className="h-4 w-3/4" />

      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-1 flex-col gap-1">
            <Skeleton className="h-6 w-2/4" />
            <Skeleton className="h-3 w-1/4" />
          </div>
          <Skeleton className="h-5 w-1/4" />
        </div>

        <div className="flex flex-col gap-3">
          <Skeleton className="h-16" />
          <Skeleton className="h-32" />
        </div>
      </div>
    </div>
  );
}
