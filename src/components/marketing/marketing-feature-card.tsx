import { cn } from "@/lib/utils";

interface MarketingFeatureCardProps {
  titleGhost: string;
  titleStrong: string;
  description: string;
  className?: string;
};

export function MarketingFeatureCard({ titleGhost, titleStrong, description, className }: MarketingFeatureCardProps) {
  return (
    <div className={cn("rounded-lg border-2 flex flex-col gap-3 p-8 w-full", className)}>
      <h3 className="text-2xl text-accent-foreground flex flex-col">
        <span>{titleGhost}</span>
        <strong className="font-bold text-secondary-foreground">{titleStrong}</strong>
      </h3>
      <span className="text-muted-foreground">{description}</span>
    </div>
  );
};