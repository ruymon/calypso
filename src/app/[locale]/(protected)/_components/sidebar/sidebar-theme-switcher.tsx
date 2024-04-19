'use client';

import { PiLaptopDuoStroke, PiMoonStroke, PiSunStroke } from "@/components/icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface SidebarThemeSwitcherProps {};

const themeIconVariants = {
  light: <PiSunStroke className="w-5" />,
  dark: <PiMoonStroke className="w-5" />,
  system: <PiLaptopDuoStroke className="w-5" />,
} as const;

export function SidebarThemeSwitcher({}: SidebarThemeSwitcherProps) {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme, themes } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  function handleThemeSwitch() {
    if (theme === "light") {
      setTheme('dark');
    }

    if (theme === "dark") {
      setTheme('light');
    }
  }

  return (
    <Tooltip delayDuration={400}>
      <TooltipTrigger>
        <button
        type="button"
        onClick={handleThemeSwitch}
          className="flex w-full items-center justify-center text-muted-foreground transition-all hover:text-accent-foreground dark:text-muted-foreground/50 dark:hover:text-muted-foreground"
        >
          {themeIconVariants[theme as keyof typeof themeIconVariants]}
          <span className="sr-only">Theme</span>
        </button>
      </TooltipTrigger>
      <TooltipContent
        side="right"
        className="flex flex-col rounded-sm px-2"
        sideOffset={6}
      >
        <span className="text-xs font-semibold">Theme switcher</span>
        <span className="text-2xs text-muted-foreground">Change the app's apperance.</span>
      </TooltipContent>
    </Tooltip>
  );
};
