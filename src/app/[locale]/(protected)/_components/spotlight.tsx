"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useBaseMapStore } from "@/stores/base-map-store";
import { useMapLayersStore } from "@/stores/map-layers-store";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Spotlight() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const {
    setIsVatsimFlightsLayerVisible,
    setIsIvaoFlightsLayerVisible,
    setIsIvaoATCsLayerVisible,
    setIsVatsimATCsLayerVisible,
  } = useMapLayersStore();

  const { setBaseMap, baseMap } = useBaseMapStore();

  const handleIvaoPreset = () => {
    setIsVatsimFlightsLayerVisible(false);
    setIsVatsimATCsLayerVisible(false);

    setIsIvaoFlightsLayerVisible(true);
    setIsIvaoATCsLayerVisible(true);
  };

  const handleVatsimPreset = () => {
    setIsIvaoFlightsLayerVisible(false);
    setIsIvaoATCsLayerVisible(false);

    setIsVatsimFlightsLayerVisible(true);
    setIsVatsimATCsLayerVisible(true);
  };

  const handleCombineNetworks = () => {
    setIsVatsimFlightsLayerVisible(true);
    setIsVatsimATCsLayerVisible(true);

    setIsIvaoFlightsLayerVisible(true);
    setIsIvaoATCsLayerVisible(true);
  };

  const handleHideAll = () => {
    setIsVatsimFlightsLayerVisible(false);
    setIsVatsimATCsLayerVisible(false);

    setIsIvaoFlightsLayerVisible(false);
    setIsIvaoATCsLayerVisible(false);
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Base Map">
          <CommandItem
            onSelect={() => setBaseMap("satellite")}
            disabled={baseMap === "satellite"}
          >
            Set base map to satellite
          </CommandItem>
          <CommandItem
            onSelect={() => setBaseMap("dark")}
            disabled={baseMap === "dark"}
          >
            Set base map to dark
          </CommandItem>
          <CommandItem
            onSelect={() => setBaseMap("light")}
            disabled={theme === "light"}
          >
            Set base map to light
          </CommandItem>
          <CommandItem
            onSelect={() => setBaseMap("theme")}
            disabled={baseMap === "theme"}
          >
            Sync base map with theme
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Network Map Layers">
          <CommandItem onSelect={handleIvaoPreset}>
            Toggle only IVAO map layers
          </CommandItem>
          <CommandItem onSelect={handleVatsimPreset}>
            Toggle only Vatsim map layers
          </CommandItem>
          <CommandItem onSelect={handleCombineNetworks}>
            Toggle combine network layers
          </CommandItem>
          <CommandItem onSelect={handleHideAll}>
            Hide all network layers
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem
            onSelect={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            Change theme to {theme === "dark" ? "light" : "dark"}
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
