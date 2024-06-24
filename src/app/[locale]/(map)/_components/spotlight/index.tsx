"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { useSpotlightStore } from "@/stores/spotlight-store";
import { useEffect } from "react";
import { BaseMapCommandsGroup } from "./base-map-commands";
import { MapExtraLayersCommandsGroup } from "./map-extra-layers-commands";
import { MapNetworkLayersCommandsGroup } from "./map-network-layers-commands";
import { SettingsCommandsGroup } from "./settings-commands";

export function Spotlight() {
  const { isOpen, setIsOpen } = useSpotlightStore();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <BaseMapCommandsGroup />
        <MapNetworkLayersCommandsGroup />
        <MapExtraLayersCommandsGroup />
        <SettingsCommandsGroup />
      </CommandList>
    </CommandDialog>
  );
}
