"use client";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { useMapExtraLayersStore } from "@/stores/map-extra-layers-store";
import { useSpotlightStore } from "@/stores/spotlight-store";

interface MapExtraLayersCommandsGroupProps {}

export function MapExtraLayersCommandsGroup({}: MapExtraLayersCommandsGroupProps) {
  const { setIsOpen } = useSpotlightStore();
  const { setIsAirportsLayerVisible, isAirportsLayerVisible } =
    useMapExtraLayersStore();

  const handleToggleAirports = () => {
    setIsAirportsLayerVisible(!isAirportsLayerVisible);
    setIsOpen(false);
  };

  return (
    <CommandGroup heading="Extra layers" className="my-2">
      <CommandItem onSelect={handleToggleAirports}>
        Toggle airports layer
      </CommandItem>
    </CommandGroup>
  );
}
