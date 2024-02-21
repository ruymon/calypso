import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MarketingBentoGridProps {
  className?: string;
  children?: ReactNode;
}

export function MarketingBentoGrid({
  className,
  children,
}: MarketingBentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface MarketingBentoGridItemProps {
  className?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
}

export function MarketingBentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: MarketingBentoGridItemProps) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl bg-accent/10 p-4 backdrop-blur-md transition duration-200",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <figure className="text-muted-foreground">{icon}</figure>
        <div className="mb-1 mt-3 font-bold text-accent-foreground">
          {title}
        </div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
