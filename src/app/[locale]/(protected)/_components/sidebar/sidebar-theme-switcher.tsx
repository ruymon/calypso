"use client";

import { PiMoonStroke, PiSunStroke } from "@/components/icons";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Theme } from "@/types/themes";
import { useTheme } from "next-themes";
import { ReactNode, useEffect, useState } from "react";

interface SidebarThemeSwitcherProps {}

const themeIconVariants: { [key in Theme]: ReactNode } = {
  light: <PiSunStroke className="w-5" />,
  dark: <PiMoonStroke className="w-5" />,
} as const;

export function SidebarThemeSwitcher({}: SidebarThemeSwitcherProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme, setTheme, themes } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex w-full items-center justify-center">
        <Skeleton className="h-6 w-6 rounded-sm" />
      </div>
    );
  }

  function handleThemeSwitch() {
    if (resolvedTheme === "light") {
      setTheme("dark");
    }

    if (resolvedTheme === "dark") {
      setTheme("light");
    }
  }

  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger asChild>
        <button
          type="button"
          onClick={handleThemeSwitch}
          className="flex w-full items-center justify-center text-muted-foreground transition-all hover:text-accent-foreground dark:text-muted-foreground/50 dark:hover:text-muted-foreground"
        >
          {themeIconVariants[resolvedTheme as keyof typeof themeIconVariants]}
          <span className="sr-only">Theme</span>
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className="flex flex-col rounded-sm px-2"
        sideOffset={6}
      >
        <span className="text-xs font-semibold">Theme switcher</span>
        <span className="text-2xs text-muted-foreground">
          Change the app's appearance.
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
