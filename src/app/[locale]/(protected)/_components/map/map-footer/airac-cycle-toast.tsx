"use client";

import { PiDatabaseStroke } from "@/components/icons";
import { useScopedI18n } from "@/locales/client";
import { AiracCycle } from "@/types/navigraph";
import { intlFormatDistance } from "date-fns";
import { toast } from "sonner";

interface AiracCycleToastProps {
  data: AiracCycle | null;
}

export function AiracCycleToast({ data }: AiracCycleToastProps) {
  const t = useScopedI18n("map.airacCycleBadge");

  function handleAiracCycleClick(data: AiracCycle | null) {
    if (data?.status === "outdated") {
      toast.warning(t("outdatedCycle.title"), {
        description: t("outdatedCycle.description"),
        icon: <PiDatabaseStroke className="h-4 w-4 text-destructive" />,
      });

      return;
    }

    if (data?.status === "current") {
      toast.success(t("upToDateCycle.title"), {
        description: t("upToDateCycle.description", {
          distance: intlFormatDistance(new Date(data.to), new Date()),
        }),
        icon: <PiDatabaseStroke className="h-4 w-4 text-green-500" />,
      });

      return;
    }

    toast.error(t("unknownCycle.title"), {
      description: t("unknownCycle.description"),
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
      <span>
        {t("airacCycle")} {data?.cycle}
      </span>
    </button>
  );
}
