"use client";

import {
  PiAlertTriangleStroke,
  PiDangerSkullStroke,
  PiMicOffStroke,
} from "@/components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { EmergencyTransponder } from "@/types/live-flights";

interface TransponderProps {
  code: string; // Transponder code is string because it can start with 0;
  className?: string;
}

export function Transponder({ code, className }: TransponderProps) {
  const emergencyTransponders: {
    [key in EmergencyTransponder]: {
      label: string;
      description: string;
      icon: any;
      color: string;
    };
  } = {
    "7500": {
      label: "Hijack",
      description: "Aircraft is being hijacked",
      icon: <PiDangerSkullStroke className="w-5 text-violet-400" />,
      color: "text-orange-400",
    },
    "7600": {
      label: "Radio failure",
      description: "Aircraft is experiencing radio failure",
      icon: <PiMicOffStroke className="w-5 text-yellow-500" />,
      color: "text-yellow-500",
    },
    "7700": {
      label: "Emergency",
      description: "Aircraft is in emergency",
      icon: <PiAlertTriangleStroke className="w-5 text-red-500" />,
      color: "text-amber-500",
    },
  };

  const emergencyTransponder =
    emergencyTransponders[code as EmergencyTransponder] || null;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded p-1 leading-none",
              className,
              emergencyTransponder?.color
            )}
          >
            {code}
          </span>
        </TooltipTrigger>
        {emergencyTransponder && (
          <TooltipContent
            side="left"
            align="start"
            className="flex min-w-56 flex-col gap-2 py-3"
          >
            {emergencyTransponder.icon}

            <div className="flex flex-col">
              <span className="font-mono text-2xs text-muted-foreground">
                {code}
              </span>

              <span className="text-base font-semibold text-secondary-foreground">
                {emergencyTransponder.label}
              </span>

              <span className="text-xs text-muted-foreground">
                {emergencyTransponder.description}
              </span>
            </div>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
