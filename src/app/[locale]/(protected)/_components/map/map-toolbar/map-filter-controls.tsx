"use client";

import {
  PiFilterFunnelDuoSolid,
  PiFilterFunnelStroke,
  PiPlusDefaultStroke,
} from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { MapFilterKey, useMapFiltersStore } from "@/stores/map-filters-store";
import { useEffect, useState } from "react";

interface MapFilterControlsProps {}

const AVAILABLE_FILTERS: MapFilterKey[] = [
  "airline",
  "callsign",
  "origin",
  "destination",
  "airport",
  "aircraft",
  "registration",
  "squawk",
];

export function MapFilterControls({}: MapFilterControlsProps) {
  const [isFiltersCollapsibleOpen, setIsFiltersCollapsibleOpen] =
    useState(false);

  const [selectedFilter, setSelectedFilter] = useState<MapFilterKey | null>(
    null,
  );
  const [filterValue, setFilterValue] = useState<string>("");
  const [inputLength, setInputLength] = useState<number | undefined>(undefined);
  const { filters, setFilter } = useMapFiltersStore();

  useEffect(() => {
    setInputLength(() => {
      switch (selectedFilter) {
        case "callsign":
          return undefined;
        case "origin":
          return 4;
        case "destination":
          return 4;
        case "airport":
          return 4;
        case "aircraft":
          return 4;
        case "registration":
          return 6;
        case "squawk":
          return 4;
        default:
          return undefined;
      }
    });
  }, [selectedFilter]);

  const handleCreateFilter = () => {
    if (!selectedFilter || !filterValue) return;

    setFilter({ key: selectedFilter, value: filterValue });
    setFilterValue("");
    setSelectedFilter(null);
    setIsFiltersCollapsibleOpen(false);
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
              <PiFilterFunnelStroke className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="flex min-w-72 max-w-sm flex-col gap-2 p-2 pb-4"
          align="start"
          side="right"
          sideOffset={24}
        >
          <DropdownMenuLabel className="text-2xs font-semibold uppercase text-muted-foreground">
            filters
          </DropdownMenuLabel>

          {!isFiltersCollapsibleOpen && (
            <>
              {filters.map((filter) => (
                <div
                  key={filter.key}
                  className="flex flex-row items-center justify-between gap-2"
                >
                  <span className="text-xs text-muted-foreground">
                    {filter.key}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {filter.value}
                  </span>
                </div>
              ))}
              <figure className="mx-2 mb-2 flex flex-col items-center justify-center gap-2 rounded-sm bg-muted p-4">
                <PiFilterFunnelDuoSolid className="h-4 w-4 text-muted-foreground" />
                <span className="w-3/4 text-balance text-center text-xs text-muted-foreground">
                  You have no active filters.
                </span>
              </figure>
            </>
          )}
          <Collapsible
            className="flex w-full flex-col gap-4 px-2"
            open={isFiltersCollapsibleOpen}
            onOpenChange={setIsFiltersCollapsibleOpen}
          >
            <CollapsibleTrigger asChild>
              <Button
                className={cn(isFiltersCollapsibleOpen ? "hidden" : null)}
              >
                <PiPlusDefaultStroke className="mr-1 h-4 w-4" />
                Create new filter
              </Button>
            </CollapsibleTrigger>

            <CollapsibleContent className="space-y-6">
              <span className="font-semibold text-accent-foreground">
                New filter
              </span>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <span className="text-2xs font-semibold uppercase text-muted-foreground">
                    Filter by
                  </span>

                  <Select
                    onValueChange={(value) =>
                      setSelectedFilter(value as MapFilterKey)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {AVAILABLE_FILTERS.map((filter) => (
                          <SelectItem key={filter} value={filter}>
                            {filter}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <span className="text-2xs font-semibold uppercase text-muted-foreground">
                    Filter value
                  </span>

                  <Input
                    placeholder="Callsign"
                    className="font-mono font-semibold uppercase placeholder:font-sans placeholder:font-normal placeholder:normal-case"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    maxLength={inputLength}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Button
                  disabled={!selectedFilter || !filterValue}
                  onClick={handleCreateFilter}
                >
                  <PiPlusDefaultStroke className="mr-1 h-4 w-4" />
                  Add filter
                </Button>
                <Button
                  onClick={() => setIsFiltersCollapsibleOpen(false)}
                  className="text-xs text-muted-foreground"
                  variant="ghost"
                >
                  Discard
                </Button>
              </div>
            </CollapsibleContent>
          </Collapsible>
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
