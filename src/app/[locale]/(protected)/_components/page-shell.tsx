import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  className?: string;
  width?: "sm" | "md" | "lg" | "xl" | "full";
}

/**
 * Page Shell component
 * @description This component is used to wrap the content of a floating page in the app. It monitors the search params and handles sizing behaviors by adapting the max width of the page.
 * @param {PageShellProps} { children, className, width }
 */

const DEFAULT_WIDTH = "md";

export function PageShell({
  children,
  className,
  width = DEFAULT_WIDTH,
}: PageShellProps) {
  const widthClassNames = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full",
  };

  return (
    <div
      className={cn(
        "z-10 flex w-full bg-background px-6 py-4",
        widthClassNames[width],
        className,
      )}
    >
      {children}
    </div>
  );
}
