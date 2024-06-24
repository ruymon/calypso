"use client";

import { PiLayerThreeStroke } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useScopedI18n } from "@/locales/client";
import { useMapExtraLayersStore } from "@/stores/map-extra-layers-store";

interface MapExtraLayerControlsProps {}

export function MapExtraLayerControls({}: MapExtraLayerControlsProps) {
  const t = useScopedI18n("map.toolbar.extraLayers");

  const {
    setIsAirportsLayerVisible,
    isAirportsLayerVisible,
    isEastNatTracksLayerVisible,
    setIsEastNatTracksLayerVisible,
    isWeatherLayerVisible,
    isWestNatTracksLayerVisible,
    setIsWestNatTracksLayerVisible,
    setIsWeatherLayerVisible,
  } = useMapExtraLayersStore();

  return (
    <DropdownMenu>
      <Tooltip>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="secondary"
              className="h-auto w-auto rounded-sm bg-transparent p-1.5 text-muted-foreground transition-all duration-500 hover:bg-muted hover:text-accent-foreground data-[state='open']:bg-foreground data-[state='open']:text-background"
            >
              <PiLayerThreeStroke className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="flex min-w-48 max-w-xs flex-col gap-2 p-2 pb-4"
          align="start"
          side="right"
          sideOffset={24}
        >
          <DropdownMenuLabel className="text-2xs font-semibold uppercase text-muted-foreground">
            {t("title")}
          </DropdownMenuLabel>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                {t("airports.title")}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("airports.description")}
              </span>
            </div>
            <Switch
              id="airports-layer"
              checked={isAirportsLayerVisible}
              onCheckedChange={() =>
                setIsAirportsLayerVisible(!isAirportsLayerVisible)
              }
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                Display eastbound NAT tracks
              </span>
              <span className="text-xs text-muted-foreground">
                Eastbound prescribed tracks for North Atlantic crossings
              </span>
            </div>
            <Switch
              id="nat-layer"
              checked={isEastNatTracksLayerVisible}
              onCheckedChange={() =>
                setIsEastNatTracksLayerVisible(!isEastNatTracksLayerVisible)
              }
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                Display westbound NAT tracks
              </span>
              <span className="text-xs text-muted-foreground">
                Westbound prescribed tracks for North Atlantic crossings
              </span>
            </div>
            <Switch
              id="nat-layer"
              checked={isWestNatTracksLayerVisible}
              onCheckedChange={() =>
                setIsWestNatTracksLayerVisible(!isWestNatTracksLayerVisible)
              }
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                {t("weatherRadar.title")}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("weatherRadar.description")}
              </span>
            </div>
            <Switch
              id="weather-layer"
              checked={isWeatherLayerVisible}
              onCheckedChange={() =>
                setIsWeatherLayerVisible(!isWeatherLayerVisible)
              }
            />
          </div>
        </DropdownMenuContent>
        <TooltipContent
          side="left"
          align="start"
          className="flex flex-col rounded-sm px-2"
          sideOffset={12}
        >
          <span className="text-xs font-semibold">{t("tooltip.title")}</span>
          <span className="text-2xs text-muted-foreground">
            {t("tooltip.description")}
          </span>
        </TooltipContent>
      </Tooltip>
    </DropdownMenu>
  );
}
