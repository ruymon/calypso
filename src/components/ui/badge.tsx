import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center border text-xs focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-semibold",
  {
    variants: {
      variant: {
        default: "border-foreground bg-foreground text-background",
        primary: "border-primary bg-primary text-primary-foreground",
        secondary: "border-secondary bg-secondary text-secondary-foreground",
        destructive: "border-destructive bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        muted: "bg-muted text-muted-foreground border-transparent",
        warning: "border-transparent bg-orange-500 text-orange-50",
        "purple-leaked": "border-purple-500 bg-transparent backdrop-blur-md text-purple-500",
        purple: "border-purple-500 bg-purple-500 text-purple-50",
        "green-leaked": "border-green-500 bg-transparent backdrop-blur-md text-green-500",
        green: "border-green-500 bg-green-500 text-green-50",
      },
      font: {
        default: "font-sans",
        mono: "font-mono leading-1 uppercase"
      },
      size: {
        default: "px-2 py-0.5",
        sm: "px-1.5 py-0.5",
      },
      radius: {
        default: "rounded-sm",
        full: "rounded-full",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      font: "default",
      radius: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, font, radius, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size, font, radius }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
