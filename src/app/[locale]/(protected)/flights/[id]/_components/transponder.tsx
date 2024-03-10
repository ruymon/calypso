import { cn } from "@/lib/utils";
import { AlertTriangleIcon } from "lucide-react";

interface TransponderProps {
  code: string; // Transponder code is string because it can start with 0;
  className?: string;
}

const emergencyTransponders = [
  "7500", // Hijack
  "7600", // Radio failure
  "7700", // Emergency
  "7777", // Military intercept
];

export function Transponder({ code, className }: TransponderProps) {
  const isEmergency = emergencyTransponders.includes(code);

  return (
    <span
      data-emergency={isEmergency}
      className={cn(
        "inline-flex items-center gap-1 rounded p-1 leading-none data-[emergency=true]:!text-red-500",
        className,
      )}
    >
      {isEmergency && <AlertTriangleIcon className="h-1/2 w-1/2" />}
      {code}
    </span>
  );
}
