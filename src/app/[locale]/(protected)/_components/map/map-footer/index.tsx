import { PiCurlyBracesCodeCheckStroke } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";
import { BUILD_VERSION } from "@/constants/workspace";
import { Suspense } from "react";
import { AiracCycleBadge } from "./airac-cycle-badge";

interface MapFooterProps {}

export function MapFooter({}: MapFooterProps) {
  return (
    <footer className="absolute bottom-0 right-0 flex h-5 w-[calc(100%-3.5rem)] items-center justify-end gap-2 bg-card/30 px-4 text-2xs text-muted-foreground backdrop-blur-md">
      <Suspense fallback={<Skeleton className="h-5 w-24 rounded-none" />}>
        <AiracCycleBadge />
      </Suspense>

      <div className="flex items-center gap-1 px-1 font-bold ">
        <PiCurlyBracesCodeCheckStroke className="h-3 w-3" />
        <span>{BUILD_VERSION}</span>
      </div>
    </footer>
  );
}
