import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DataItemCardProps {
  data?: any;
  title: string;
  className?: string;
  childrenClassName?: string;
  children?: ReactNode;
}

export function DataItemCard({
  data,
  title,
  className,
  childrenClassName,
  children,
}: DataItemCardProps) {
  return (
    <div
      className={cn("flex flex-col gap-1.5 rounded-sm border pb-2", className)}
    >
      <span className="w-fit rounded-br rounded-tl bg-accent px-2 py-1 text-2xs font-semibold uppercase leading-3 text-accent-foreground">
        {title}
      </span>
      <pre
        className={cn(
          "w-full whitespace-pre-wrap px-2 font-mono text-xs font-medium leading-relaxed tracking-wide text-accent-foreground",
          childrenClassName,
        )}
      >
        {data}
        {!data && !children && "TBN"}
        {children}
      </pre>
    </div>
  );
}
