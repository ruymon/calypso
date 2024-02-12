import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center whitespace-nowrap text-sm text-center active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-foreground text-background hover:bg-foreground/90 font-semibold",
        primary:
          "bg-primary text-primary-foreground  hover:bg-primary/90 font-semibold",
        "primary-light":
          "bg-primary-foreground text-primary hover:bg-primary-light/90 font-semibold",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 font-semibold",
        "outline-destructive":
          "border border-muted bg-secondary backdrop-blur-md hover:bg-destructive text-destructive hover:text-destructive-foreground font-semibold",
        outline:
          "border border-input bg-transparent hover:bg-muted text-muted-foreground hover:text-accent-foreground font-semibold",
        "glass-outline":
          "border border-input bg-transparent backdrop-blur-md hover:bg-foreground text-muted-foreground hover:text-secondary font-semibold",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 font-semibold",
        ghost:
          "hover:bg-muted text-muted-foreground hover:text-accent-foreground font-semibold",
        link: "text-muted-foreground hover:text-accent-foreground font-normal",
      },
      size: {
        default: "px-4 py-2 rounded-md",
        sm: "px-3 py-1 text-xs rounded-sm",
        md: "px-3 py-1.5 text-xs rounded-sm",
        lg: "px-8 py-3 rounded-md",
        "icon-sm": "h-7 w-7 p-1.5 rounded-sm",
        icon: "h-9 w-9 p-2 rounded-md",
        "icon-lg": "h-10 w-10 p-2 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
