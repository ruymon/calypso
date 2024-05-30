"use client";

import { CommandGroup, CommandItem } from "@/components/ui/command";
import { useMapNetworkLayersStore } from "@/stores/map-network-layers-store";
import { useSpotlightStore } from "@/stores/spotlight-store";

interface MapNetworkLayersCommandsGroupProps {}

export function MapNetworkLayersCommandsGroup({}: MapNetworkLayersCommandsGroupProps) {
  const {
    setIsVatsimFlightsLayerVisible,
    setIsIvaoFlightsLayerVisible,
    setIsIvaoATCsLayerVisible,
    setIsVatsimATCsLayerVisible,
    isVatsimFlightsLayerVisible,
    isIvaoFlightsLayerVisible,
    isIvaoATCsLayerVisible,
    isVatsimATCsLayerVisible,
  } = useMapNetworkLayersStore();
  const { setIsOpen } = useSpotlightStore();

  const handleIvaoPreset = () => {
    setIsVatsimFlightsLayerVisible(false);
    setIsVatsimATCsLayerVisible(false);

    setIsIvaoFlightsLayerVisible(true);
    setIsIvaoATCsLayerVisible(true);

    setIsOpen(false);
  };

  const handleVatsimPreset = () => {
    setIsIvaoFlightsLayerVisible(false);
    setIsIvaoATCsLayerVisible(false);

    setIsVatsimFlightsLayerVisible(true);
    setIsVatsimATCsLayerVisible(true);

    setIsOpen(false);
  };

  const handleCombineNetworks = () => {
    setIsVatsimFlightsLayerVisible(true);
    setIsVatsimATCsLayerVisible(true);

    setIsIvaoFlightsLayerVisible(true);
    setIsIvaoATCsLayerVisible(true);

    setIsOpen(false);
  };

  const handleHideAll = () => {
    setIsVatsimFlightsLayerVisible(false);
    setIsVatsimATCsLayerVisible(false);

    setIsIvaoFlightsLayerVisible(false);
    setIsIvaoATCsLayerVisible(false);

    setIsOpen(false);
  };

  return (
    <CommandGroup heading="Network Map Layers" className="my-2">
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
      <CommandItem
        onSelect={() => {
          setIsVatsimFlightsLayerVisible(!isVatsimFlightsLayerVisible);
          setIsOpen(false);
        }}
      >
        Toggle Vatsim flights
      </CommandItem>

      <CommandItem
        onSelect={() => {
          setIsIvaoFlightsLayerVisible(!isIvaoFlightsLayerVisible);
          setIsOpen(false);
        }}
      >
        Toggle IVAO flights
      </CommandItem>

      <CommandItem
        onSelect={() => {
          setIsVatsimATCsLayerVisible(!isVatsimATCsLayerVisible);
          setIsOpen(false);
        }}
      >
        Toggle Vatsim ATCs
      </CommandItem>

      <CommandItem
        onSelect={() => {
          setIsIvaoATCsLayerVisible(!isIvaoATCsLayerVisible);
          setIsOpen(false);
        }}
      >
        Toggle IVAO ATCs
      </CommandItem>
    </CommandGroup>
  );
}
