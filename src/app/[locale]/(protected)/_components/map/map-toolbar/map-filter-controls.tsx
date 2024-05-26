import { PiFilterFunnelStroke } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MapFilterControlsProps {}

export function MapFilterControls({}: MapFilterControlsProps) {
  return (
    <Tooltip disableHoverableContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              disabled
              variant="secondary"
              className="h-auto w-auto rounded-sm bg-transparent p-1.5 text-muted-foreground transition-all duration-500 hover:bg-muted hover:text-accent-foreground data-[state='open']:bg-foreground data-[state='open']:text-background"
            >
              <PiFilterFunnelStroke className="h-4 w-4" />
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
            filters
          </DropdownMenuLabel>

          <span>Coming soon</span>
        </DropdownMenuContent>
      </DropdownMenu>
      <TooltipContent
        side="left"
        align="start"
        className="flex flex-col rounded-sm px-2"
        sideOffset={12}
      >
        <span className="text-xs font-semibold">Filters</span>
        <span className="text-2xs text-muted-foreground">Coming soon...</span>
      </TooltipContent>
    </Tooltip>
  );
}
