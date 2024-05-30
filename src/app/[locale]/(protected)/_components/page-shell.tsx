"use client";

import { PiMultipleCrossCancelDefaultStroke } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface PageShellProps {
  children: ReactNode;
  shellClassName?: string;
  containerClassName?: string;
  /**
   * @default "md"
   */
  width?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  /**
   * @default false
   */
  hideTopNav?: boolean;
  shellTitle?: string;
  /**
   * @default "/"
   */
  closeHref?: string;
}

/**
 * Page Shell component
 * @description This component is used to wrap the content of a floating page in the app. It monitors the search params and handles sizing behaviors by adapting the max width of the page.
 * @param {PageShellProps} { children, className, width }
 */

const DEFAULT_WIDTH = "md";

const widthClassNames = {
  sm: "lg:max-w-sm",
  md: "lg:max-w-md",
  lg: "lg:max-w-lg",
  xl: "lg:max-w-xl",
  "2xl": "lg:max-w-2xl",
  "3xl": "lg:max-w-3xl",
  full: "lg:max-w-full",
};

export function PageShell({
  children,
  shellClassName,
  containerClassName,
  width = DEFAULT_WIDTH,
  hideTopNav = false,
  shellTitle,
  closeHref = "/",
}: PageShellProps) {
  return (
    <div
      className={cn(
        "z-20 flex h-full w-full flex-col overflow-y-auto bg-background",
        widthClassNames[width],
        shellClassName,
      )}
    >
      {!hideTopNav && (
        <header className="sticky top-0 z-20 flex min-h-10 items-center justify-between px-6 py-1.5 text-muted-foreground backdrop-blur-xl">
          <span className="text-xs">{shellTitle}</span>
          <nav className="flex items-center gap-0.5">
            <Link
              href={closeHref}
              className="rounded-sm p-2 transition-all hover:bg-muted hover:text-accent-foreground"
            >
              <PiMultipleCrossCancelDefaultStroke className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </header>
      )}

      <main className={cn("flex flex-1 px-6 py-2", containerClassName)}>
        {children}
      </main>
    </div>
  );
}
