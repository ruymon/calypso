"use client";

import {
  PiLinkChainSlantStroke,
  PiSidebarLeftCloseStroke,
} from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
import { toast } from "sonner";

interface PageShellProps {
  children: ReactNode;
  className?: string;
  /**
   * @default "md"
   */
  width?: "sm" | "md" | "lg" | "xl" | "full";
  /**
   * @default true
   */
  hasTopNav?: boolean;
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
  full: "lg:max-w-full",
};

export function PageShell({
  children,
  className,
  width = DEFAULT_WIDTH,
  hasTopNav = true,
  shellTitle,
  closeHref = "/",
}: PageShellProps) {
  function handleCopyUrlToClipboard() {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Copied to clipboard");
  }

  return (
    <div
      className={cn(
        "z-20 flex h-full w-full flex-col overflow-y-auto bg-background",
        widthClassNames[width],
        className,
      )}
    >
      {hasTopNav && (
        <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-1.5 text-muted-foreground backdrop-blur-xl">
          <span className="text-xs">{shellTitle}</span>
          <nav className="flex items-center gap-0.5">
            <button
              onClick={handleCopyUrlToClipboard}
              className="rounded-sm p-2 transition-all hover:bg-muted hover:text-accent-foreground"
            >
              <PiLinkChainSlantStroke className="h-3.5 w-3.5" />
            </button>

            <Link
              href={closeHref}
              className="rounded-sm p-2 transition-all hover:bg-muted hover:text-accent-foreground"
            >
              <PiSidebarLeftCloseStroke className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </header>
      )}

      <main className="flex flex-1 px-6 py-4">{children}</main>
    </div>
  );
}
