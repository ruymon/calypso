"use client";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { useSpotlightStore } from "@/stores/spotlight-store";
import { useTheme } from "next-themes";

interface SettingsCommandsGroupProps {}

export function SettingsCommandsGroup({}: SettingsCommandsGroupProps) {
  const { theme, setTheme } = useTheme();
  const { setIsOpen } = useSpotlightStore();

  const handleChangeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    setIsOpen(false);
  };

  return (
    <CommandGroup heading="Settings" className="my-2">
      <CommandItem onSelect={handleChangeTheme}>
        Change theme to {theme === "dark" ? "light" : "dark"}
      </CommandItem>
    </CommandGroup>
  );
}
