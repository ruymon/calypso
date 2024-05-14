"use client";

import {
  PiActivityStroke,
  PiEyeOffStroke,
  PiMergeStroke,
} from "@/components/icons";
import { NetworkIcon } from "@/components/network-icon";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useScopedI18n } from "@/locales/client";
import { useMapLayersStore } from "@/stores/map-layers-store";

interface MapNetworkLayerControlsProps {}

export function MapNetworkLayerControls({}: MapNetworkLayerControlsProps) {
  const t = useScopedI18n("map.toolbar.networkLayers");
  const {
    isVatsimFlightsLayerVisible,
    setIsVatsimFlightsLayerVisible,
    isIvaoFlightsLayerVisible,
    setIsIvaoFlightsLayerVisible,
    isIvaoATCsLayerVisible,
    setIsIvaoATCsLayerVisible,
    isVatsimATCsLayerVisible,
    setIsVatsimATCsLayerVisible,
  } = useMapLayersStore();

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

  return (
    <Tooltip disableHoverableContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="secondary"
              className="h-auto w-auto rounded-sm bg-transparent p-1.5 text-muted-foreground transition-all duration-500 hover:bg-muted hover:text-accent-foreground data-[state='open']:bg-foreground data-[state='open']:text-background"
            >
              <PiActivityStroke className="h-4 w-4" />
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
            {t("quickActions.title")}
          </DropdownMenuLabel>
          <div className="flex flex-col gap-2">
            <DropdownMenuItem
              onClick={handleIvaoPreset}
              onSelect={(event) => event.preventDefault()}
              className="grow gap-2.5 hover:cursor-pointer"
            >
              <NetworkIcon network="ivao" className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-accent-foreground">
                  {t("quickActions.ivao.title")}
                </span>
                <span className="text-xs font-normal text-muted-foreground">
                  {t("quickActions.ivao.description")}
                </span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleVatsimPreset}
              onSelect={(event) => event.preventDefault()}
              className="grow gap-2.5 hover:cursor-pointer"
            >
              <NetworkIcon network="vatsim" className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-accent-foreground">
                  {t("quickActions.vatsim.title")}
                </span>
                <span className="text-xs font-normal text-muted-foreground">
                  {t("quickActions.vatsim.description")}
                </span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleCombineNetworks}
              onSelect={(event) => event.preventDefault()}
              className="grow gap-2.5 hover:cursor-pointer"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/15 text-violet-500">
                <PiMergeStroke className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-accent-foreground">
                  {t("quickActions.combineNetworks.title")}
                </span>
                <span className="text-xs font-normal text-muted-foreground">
                  {t("quickActions.combineNetworks.description")}
                </span>
              </div>
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={handleHideAll}
              onSelect={(event) => event.preventDefault()}
              className="grow gap-2.5 hover:cursor-pointer"
            >
              <div className="flex h-8  w-8 shrink-0 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                <PiEyeOffStroke className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-accent-foreground">
                  {t("quickActions.hideAll.title")}
                </span>
                <span className="text-xs font-normal text-muted-foreground">
                  {t("quickActions.hideAll.description")}
                </span>
              </div>
            </DropdownMenuItem>
          </div>

          <DropdownMenuSeparator className="mx-2 bg-border" />

          <DropdownMenuLabel className="text-2xs font-semibold uppercase text-muted-foreground">
            {t("vatsimLayers.title")}
          </DropdownMenuLabel>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                {t("vatsimLayers.showFlights.title")}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("vatsimLayers.showFlights.description")}
              </span>
            </div>
            <Switch
              id="vatsim-flights-layer"
              checked={isVatsimFlightsLayerVisible}
              onCheckedChange={() =>
                setIsVatsimFlightsLayerVisible(!isVatsimFlightsLayerVisible)
              }
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                {t("vatsimLayers.showAtcs.title")}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("vatsimLayers.showAtcs.description")}
              </span>
            </div>
            <Switch
              id="vatsim-atc-layer"
              checked={isVatsimATCsLayerVisible}
              onCheckedChange={() =>
                setIsVatsimATCsLayerVisible(!isVatsimATCsLayerVisible)
              }
            />
          </div>

          <DropdownMenuSeparator className="mx-2 bg-border" />

          <DropdownMenuLabel className="text-2xs font-semibold uppercase text-muted-foreground">
            {t("ivaoLayers.title")}
          </DropdownMenuLabel>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                {t("ivaoLayers.showFlights.title")}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("ivaoLayers.showFlights.description")}
              </span>
            </div>
            <Switch
              id="ivao-flights-layer"
              checked={isIvaoFlightsLayerVisible}
              onCheckedChange={() =>
                setIsIvaoFlightsLayerVisible(!isIvaoFlightsLayerVisible)
              }
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                {t("ivaoLayers.showAtcs.title")}
              </span>
              <span className="text-xs text-muted-foreground">
                {t("ivaoLayers.showAtcs.description")}
              </span>
            </div>
            <Switch
              id="ivao-atc-layer"
              checked={isIvaoATCsLayerVisible}
              onCheckedChange={() =>
                setIsIvaoATCsLayerVisible(!isIvaoATCsLayerVisible)
              }
            />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
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
  );
}
