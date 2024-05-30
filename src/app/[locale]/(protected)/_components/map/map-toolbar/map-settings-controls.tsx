"use client";

import { PiSettings01Stroke } from "@/components/icons";
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

interface MapSettingsControlsProps {}

export function MapSettingsControls({}: MapSettingsControlsProps) {
  return (
    <Tooltip disableHoverableContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="secondary"
              className="h-auto w-auto rounded-sm bg-transparent p-1.5 text-muted-foreground transition-all duration-500 hover:bg-muted hover:text-accent-foreground data-[state='open']:bg-foreground data-[state='open']:text-background"
            >
              <PiSettings01Stroke className="h-4 w-4" />
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
            Map Settings
          </DropdownMenuLabel>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                Highlight me
              </span>
              <span className="text-xs text-muted-foreground">
                Display your current flight or ATC shape in the networks a
                different color on the map.
              </span>
            </div>
            <Switch id="highlight-me" checked={true} disabled />
          </div>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                Focus plane on center by default
              </span>
              <span className="text-xs text-muted-foreground">
                Automatically fly-to the selected flight or ATC on the map.
              </span>
            </div>
            <Switch id="focus-plane" checked={false} disabled />
          </div>

          <div className="flex items-center justify-between gap-4 px-2">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-accent-foreground">
                Highlight emergency flights
              </span>
              <span className="text-xs text-muted-foreground">
                Flights squawking emergency will be displayed in red.
              </span>
            </div>
            <Switch id="highlight-emergency" checked={true} disabled />
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent
        side="left"
        align="start"
        className="flex flex-col rounded-sm px-2"
        sideOffset={12}
      >
        <span className="text-xs font-semibold">Map Settings</span>
        <span className="text-2xs text-muted-foreground">
          Show the layers that are currently active
        </span>
      </TooltipContent>
    </Tooltip>
  );
}
