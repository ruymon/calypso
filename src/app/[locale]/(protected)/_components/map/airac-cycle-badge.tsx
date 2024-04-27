"use client";

import { AiracCycle } from "@/types/navigraph";
import { intlFormatDistance } from "date-fns";
import { toast } from "sonner";
import { PiDatabaseStroke } from "../../../../../components/icons";

interface AiracCycleBadgeProps {
  data: AiracCycle | null;
}

export function AiracCycleBadge({ data }: AiracCycleBadgeProps) {
  function handleAiracCycleClick(data: AiracCycle | null) {
    if (data?.status === "outdated") {
      toast.warning("Outdated AIRAC cycle", {
        description:
          "Integrate a navigraph account with active subscription to get the latest cycle.",
        icon: <PiDatabaseStroke className="h-4 w-4 text-destructive" />,
      });

      return;
    }

    if (data?.status === "current") {
      toast.success(`Current AIRAC cycle | ${data.cycle}`, {
        description: `This cycle will expire ${intlFormatDistance(new Date(data.to), new Date())}.`,
        icon: <PiDatabaseStroke className="h-4 w-4 text-green-500" />,
      });

      return;
    }

    toast.error("Unable to fetch AIRAC cycle", {
      description: "Please check your internet connection and try again.",
      icon: <PiDatabaseStroke className="h-4 w-4 text-destructive" />,
    });
  }

  return (
    <button
      type="button"
      onClick={() => handleAiracCycleClick(data)}
      data-status={data?.status ?? "unknown"}
      className="flex items-center gap-1 px-1 py-0.5 font-bold data-[status='outdated']:bg-destructive data-[status='outdated']:text-destructive-foreground"
    >
      <PiDatabaseStroke className="h-3 w-3" />
      <span>AIRAC cycle {data?.cycle}</span>
    </button>
  );
}
