import { cn } from "@/lib/utils";

interface FlightplanItemCardProps {
  data?: any;
  title: string;
  className?: string;
  childrenClassName?: string;
}

export function FlightplanItemCard({
  data,
  title,
  className,
  childrenClassName,
}: FlightplanItemCardProps) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 rounded-sm border pb-2", className)}
    >
      <span className="text-2xs w-fit rounded-br rounded-tl bg-accent px-2 py-1 font-semibold uppercase leading-3 text-accent-foreground">
        {title}
      </span>
      <pre
        className={cn(
          "w-full whitespace-pre-wrap px-2 font-mono text-xs font-medium leading-relaxed tracking-wide text-accent-foreground",
          childrenClassName,
        )}
      >
        {data || "TBN"}
      </pre>
    </div>
  );
}
