import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const networkIconVariants = cva("items-center justify-center flex font-black", {
  variants: {
    variant: {
      default: "bg-muted text-muted-foreground",
      ivao: "bg-ivao text-white",
      vatsim: "bg-vatsim text-white",
    },
    size: {
      default: "w-9 h-9 rounded-lg",
      sm: "w-4 h-4 text-xs rounded-sm leading-3",
      lg: "h-10 w-10 p-1.5 rounded-xl",
    },
  },
  defaultVariants: {
    variant: "vatsim",
    size: "default",
  },
});

interface NetworkIconProps extends VariantProps<typeof networkIconVariants> {
  className?: string;
}

const networkIconLabels = {
  default: "?",
  vatsim: "v",
  ivao: "i",
};

export function NetworkIcon({ className, variant, size }: NetworkIconProps) {
  return (
    <figure className={cn(networkIconVariants({ variant, size }), className)}>
      <span className="uppercase">
        {networkIconLabels[variant ?? "default"]}
      </span>
    </figure>
  );
}
