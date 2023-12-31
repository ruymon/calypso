import { cn } from "@/lib/utils";

interface FlightPlanSeparatorProps {
  content: string;
  grow?: boolean;
};

export function FlightPlanSeparator({content, grow}: FlightPlanSeparatorProps) {
  return (
    <div className={cn("flex items-center justify-center w-fit", !grow && 'h-8')}>
      <span className="text-sm font-semibold leading-3 whitespace-nowrap uppercase">{content}</span>
    </div>
  );
};
