"use client";

import { BUILD_VERSION } from "@/constants/workspace";
import { useScopedI18n } from "@/locales/client";
import { useParams } from "next/navigation";

interface ErrorLogsProps {}

export function ErrorLogs({}: ErrorLogsProps) {
  const t = useScopedI18n("flightDetails.notFound.systemLogs");
  const pathname = useParams();

  const flightId = pathname.flightId;

  return (
    <div className="flex flex-col gap-1 rounded border p-3">
      <div className="flex items-center gap-1 text-xs">
        <span className="text-muted-foreground">{t("code")}:</span>
        <code className="w-fit rounded border bg-accent/50 px-1 py-0.5 font-mono font-medium text-accent-foreground">
          NOT_FOUND
        </code>
      </div>

      <div className="flex items-center gap-1 text-xs">
        <span className="text-muted-foreground">{t("flightId")}:</span>
        <code className="w-fit rounded border bg-accent/50 px-1 py-0.5 font-mono font-medium text-accent-foreground">
          {flightId}
        </code>
      </div>

      <div className="flex items-center gap-1 text-xs">
        <span className="text-muted-foreground">{t("timestamp")}:</span>
        <code className="w-fit rounded border bg-accent/50 px-1 py-0.5 font-mono font-medium text-accent-foreground">
          {new Date().toISOString()}
        </code>
      </div>

      <div className="flex items-center gap-1 text-xs">
        <span className="text-muted-foreground">{t("buildVersion")}</span>
        <code className="w-fit rounded border bg-accent/50 px-1 py-0.5 font-mono font-medium text-accent-foreground">
          {BUILD_VERSION}
        </code>
      </div>
    </div>
  );
}
