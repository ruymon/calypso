import { getAirlineTailImageUrl } from "@/lib/images";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface AirlineTailProps {
  callsign?: string;
  className?: string;
}

export function AirlineTail({ callsign, className }: AirlineTailProps) {
  return (
    <Avatar className={cn("h-8 w-9 rounded-none", className)}>
      {callsign && (
        <AvatarImage
          src={getAirlineTailImageUrl(callsign)}
          alt="Airline Tail Image"
        />
      )}
      <AvatarFallback className="clip-tail animate-pulse rounded-none" />
    </Avatar>
  );
}
