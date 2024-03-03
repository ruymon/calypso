"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMapLayersStore } from "@/stores/map-layers-store";
import { PlaneIcon } from "lucide-react";

interface MapLayerControlsProps {}

export function MapLayerControls({}: MapLayerControlsProps) {
  const {
    isVatsimFlightsLayerVisible,
    setIsVatsimFlightsLayerVisible,
    isIvaoFlightsLayerVisible,
    setIsIvaoFlightsLayerVisible,
    isWeatherLayerVisible,
    setIsWeatherLayerVisible,
  } = useMapLayersStore();

  function handleToggleVatsimFlightsLayer() {
    setIsVatsimFlightsLayerVisible(!isVatsimFlightsLayerVisible);
  }

  function handleToggleIvaoFlightsLayer() {
    setIsIvaoFlightsLayerVisible(!isIvaoFlightsLayerVisible);
  }

  function handleToggleWeatherLayer() {
    setIsWeatherLayerVisible(!isWeatherLayerVisible);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-sm" variant="outline">
          <PlaneIcon className="h-4 w-4 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-48 p-2"
        align="start"
        side="right"
        sideOffset={12}
      >
        <DropdownMenuLabel className="text-lg">Layer Options</DropdownMenuLabel>

        <DropdownMenuSeparator className="mx-2" />

        <DropdownMenuItem
          onClick={handleToggleVatsimFlightsLayer}
          className="hover:cursor-pointer"
        >
          {isVatsimFlightsLayerVisible ? "Hide" : "Show"} VATSIM Flights Layer
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleToggleIvaoFlightsLayer}
          className="hover:cursor-pointer"
        >
          {isIvaoFlightsLayerVisible ? "Hide" : "Show"} IVAO Flights Layer
        </DropdownMenuItem>

        <DropdownMenuItem
          onClick={handleToggleWeatherLayer}
          className="hover:cursor-pointer"
        >
          {isWeatherLayerVisible ? "Hide" : "Show"} Weather Layer
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
