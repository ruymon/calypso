import { cn } from "@/lib/utils";

interface MarketingFeatureCardProps {
  title: string;
  subtitle: string;
  className?: string;
};

export function MarketingFeatureCard({ title, subtitle, className }: MarketingFeatureCardProps) {
  return (
    <div className={cn("rounded-lg border-2 flex flex-col gap-3 p-8 w-full", className)}>
      <h3 className="text-2xl text-secondary-foreground">
        {title}
      </h3>
      <span className="text-muted-foreground">{subtitle}</span>
    </div>
  );
};