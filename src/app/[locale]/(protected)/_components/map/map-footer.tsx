import { PiCurlyBracesCodeCheckStroke } from "@/components/icons";
import { BUILD_VERSION } from "@/constants/workspace";
import { getCurrentAiracCycle } from "@/lib/navdata";
import { AiracCycleBadge } from "./airac-cycle-badge";

interface MapFooterProps {}

export async function MapFooter({}: MapFooterProps) {
  const airacCycle = await getCurrentAiracCycle();

  return (
    <footer className="absolute bottom-0 right-0 flex h-fit w-[calc(100%-3.5rem)] items-center justify-end gap-2 bg-card/30 px-4 text-2xs text-muted-foreground backdrop-blur-md">
      <AiracCycleBadge data={airacCycle} />

      <div className="flex items-center gap-1 px-1 py-0.5 font-bold ">
        <PiCurlyBracesCodeCheckStroke className="h-3 w-3" />
        <span>{BUILD_VERSION}</span>
      </div>
    </footer>
  );
}
