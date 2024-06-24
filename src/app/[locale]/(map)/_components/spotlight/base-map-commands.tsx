"use client";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { BaseMap, useBaseMapStore } from "@/stores/base-map-store";
import { useSpotlightStore } from "@/stores/spotlight-store";

interface BaseMapCommandsGroupProps {}

export function BaseMapCommandsGroup({}: BaseMapCommandsGroupProps) {
  const { setBaseMap, baseMap } = useBaseMapStore();
  const { setIsOpen } = useSpotlightStore();

  const handleSetBaseMap = (baseMap: BaseMap) => {
    setBaseMap(baseMap);
    setIsOpen(false);
  };

  return (
    <CommandGroup heading="Base Map" className="my-2">
      <CommandItem
        onSelect={() => handleSetBaseMap("satellite")}
        disabled={baseMap === "satellite"}
      >
        Set base map to satellite
      </CommandItem>
      <CommandItem
        onSelect={() => handleSetBaseMap("dark")}
        disabled={baseMap === "dark"}
      >
        Set base map to dark
      </CommandItem>
      <CommandItem
        onSelect={() => handleSetBaseMap("light")}
        disabled={baseMap === "light"}
      >
        Set base map to light
      </CommandItem>
      <CommandItem
        onSelect={() => handleSetBaseMap("theme")}
        disabled={baseMap === "theme"}
      >
        Sync base map with theme
      </CommandItem>
    </CommandGroup>
  );
}
