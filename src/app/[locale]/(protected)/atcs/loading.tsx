import { Skeleton } from "@/components/ui/skeleton";

export default function ATCDetailsLoadingPage() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex flex-col gap-8">
        <div className="flex items-center justify-between gap-4">
          <div className="flex w-3/4 items-center gap-4">
            <header className="flex w-full flex-col gap-1.5">
              <Skeleton className="h-9 w-2/4" />
              <Skeleton className="h-4 w-3/4" />
            </header>
          </div>

          <Skeleton className="h-9 w-9 rounded-lg" />
        </div>

        <Skeleton className="h-12 w-full rounded-md" />
      </header>

      <section className="flex flex-col gap-4">
        <header className="flex flex-col gap-1">
          <Skeleton className="h-8 w-2/4" />
          <Skeleton className="h-4 w-1/4" />
        </header>

        <Skeleton className="h-28" />
      </section>
    </div>
  );
}
