"use client";

import darkPreview from "@/../public/assets/map-preview/dark-map-preview.jpg";
import lightPreview from "@/../public/assets/map-preview/light-map-preview.jpg";
import satellitePreview from "@/../public/assets/map-preview/satellite-map-preview.jpg";
import themePreview from "@/../public/assets/map-preview/theme-map-preview.jpg";
import {
  PiEarthGlobeStroke,
  PiMoonStroke,
  PiSettings03Stroke,
  PiSunStroke,
} from "@/components/icons";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useScopedI18n } from "@/locales/client";
import { BaseMap, useBaseMapStore } from "@/stores/base-map-store";
import Image from "next/image";

interface MapBaseMapControlsProps {}

const iconVariants: { [key in BaseMap]: any } = {
  satellite: PiEarthGlobeStroke,
  light: PiSunStroke,
  dark: PiMoonStroke,
  theme: PiSettings03Stroke,
};

export function MapBaseMapControls({}: MapBaseMapControlsProps) {
  const t = useScopedI18n("map.toolbar.baseMap");
  const { setBaseMap, baseMap } = useBaseMapStore();

  const Icon = iconVariants[baseMap];

  return (
    <Tooltip disableHoverableContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="secondary"
              className="h-auto w-auto rounded-sm bg-transparent p-1.5 text-muted-foreground transition-all duration-500 hover:bg-muted hover:text-accent-foreground data-[state='open']:bg-foreground data-[state='open']:text-background"
            >
              <Icon className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="flex min-w-48 max-w-64 flex-col gap-2"
          align="start"
          side="right"
          sideOffset={24}
        >
          <DropdownMenuLabel className="text-2xs font-semibold uppercase text-muted-foreground">
            {t("title")}
          </DropdownMenuLabel>

          <DropdownMenuItem
            className="gap-2 hover:cursor-pointer"
            onClick={() => setBaseMap("satellite")}
            disabled={baseMap === "satellite"}
            onSelect={(event) => event.preventDefault()}
          >
            <Image
              src={satellitePreview}
              alt="Satellite"
              loading="lazy"
              placeholder="blur"
              className="aspect-square h-12 w-12 rounded-md object-cover"
            />
            <div className="flex w-full flex-col">
              <div className="flex w-full items-center justify-between">
                <span className="text-sm font-medium text-accent-foreground">
                  {t("satellite.title")}
                </span>
                {baseMap === "satellite" && (
                  <Badge
                    variant="success"
                    className="w-fit px-1.5 py-0.5 text-2xs leading-none"
                  >
                    {t("currentlyActive")}
                  </Badge>
                )}
              </div>

              <span className="text-xs font-normal text-muted-foreground">
                {t("satellite.description")}
              </span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="gap-2 hover:cursor-pointer"
            onClick={() => setBaseMap("light")}
            disabled={baseMap === "light"}
            onSelect={(event) => event.preventDefault()}
          >
            <Image
              src={lightPreview}
              alt="Light"
              loading="lazy"
              placeholder="blur"
              className="aspect-square h-12 w-12 rounded-md object-cover"
            />
            <div className="flex w-full flex-col">
              <div className="flex w-full items-center justify-between">
                <span className="text-sm font-medium text-accent-foreground">
                  {t("light.title")}
                </span>
                {baseMap === "light" && (
                  <Badge
                    variant="success"
                    className="w-fit px-1.5 py-0.5 text-2xs leading-none"
                  >
                    {t("currentlyActive")}
                  </Badge>
                )}
              </div>
              <span className="text-xs font-normal text-muted-foreground">
                {t("light.description")}
              </span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="gap-2 hover:cursor-pointer"
            onClick={() => setBaseMap("dark")}
            disabled={baseMap === "dark"}
            onSelect={(event) => event.preventDefault()}
          >
            <Image
              src={darkPreview}
              alt="Dark"
              loading="lazy"
              placeholder="blur"
              className="aspect-square h-12 w-12 rounded-md object-cover"
            />
            <div className="flex w-full flex-col">
              <div className="flex w-full items-center justify-between">
                <span className="text-sm font-medium text-accent-foreground">
                  {t("dark.title")}
                </span>
                {baseMap === "dark" && (
                  <Badge
                    variant="success"
                    className="w-fit px-1.5 py-0.5 text-2xs leading-none"
                  >
                    {t("currentlyActive")}
                  </Badge>
                )}
              </div>
              <span className="text-xs font-normal text-muted-foreground">
                {t("dark.description")}
              </span>
            </div>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="gap-2 hover:cursor-pointer"
            onClick={() => setBaseMap("theme")}
            disabled={baseMap === "theme"}
            onSelect={(event) => event.preventDefault()}
          >
            <Image
              src={themePreview}
              loading="lazy"
              placeholder="blur"
              alt="Satellite"
              className="aspect-square h-12 w-12 rounded-md object-cover"
            />
            <div className="flex w-full flex-col">
              <div className="flex w-full items-center justify-between">
                <span className="text-sm font-medium text-accent-foreground">
                  {t("theme.title")}
                </span>
                {baseMap === "theme" && (
                  <Badge
                    variant="success"
                    className="w-fit px-1.5 py-0.5 text-2xs leading-none"
                  >
                    {t("currentlyActive")}
                  </Badge>
                )}
              </div>
              <span className="text-xs font-normal text-muted-foreground">
                {t("theme.description")}
              </span>
            </div>
          </DropdownMenuItem>
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
