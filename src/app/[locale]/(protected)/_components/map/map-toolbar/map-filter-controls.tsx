"use client";

import {
  PiFilterFunnelDuoSolid,
  PiFilterFunnelStroke,
  PiMultipleCrossCancelDefaultStroke,
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
import {
  MAP_FILTER_KEYS,
  MapFilterKey,
  useMapFiltersStore,
} from "@/stores/map-filters-store";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface MapFilterControlsProps {}

export function MapFilterControls({}: MapFilterControlsProps) {
  const [isFiltersCollapsibleOpen, setIsFiltersCollapsibleOpen] =
    useState(false);

  const [selectedFilter, setSelectedFilter] = useState<MapFilterKey | null>(
    null,
  );
  const [filterValue, setFilterValue] = useState<string>();
  const [inputLength, setInputLength] = useState<number | undefined>(undefined);
  const [inputPlaceholder, setInputPlaceholder] = useState<string>(
    "Select a filter type first",
  );
  const { filters, setFilter, setFilters } = useMapFiltersStore();

  const hasActiveFilters = Object.values(filters).some(
    (filter) => filter.length > 0,
  );

  const handleRemoveFilter = (key: MapFilterKey, filter: string) => {
    setFilters({
      ...filters,
      [key]: filters[key].filter((f) => f !== filter),
    });
  };

  useEffect(() => {
    setInputLength(() => {
      switch (selectedFilter) {
        case "origin":
        case "destination":
        case "airport":
        case "aircraft":
        case "squawk":
          return 4;
        case "registration":
          return 6;
        default:
          return undefined;
      }
    });

    setInputPlaceholder(() => {
      switch (selectedFilter) {
        case "callsign":
          return "Full or partial callsign (e.g. TAM or TAM1234)";
        case "origin":
        case "destination":
        case "airport":
          return "Airport ICAO code (e.g. SBGR)";
        case "aircraft":
          return "Aircraft ICAO code (e.g. B738)";
        case "squawk":
          return "XXXX (e.g. 2000)";
        case "registration":
          return "Aircraft registration (e.g. PRRUY)";
        default:
          return "Select a filter type first";
      }
    });
  }, [selectedFilter]);

  const handleCreateFilter = () => {
    if (!selectedFilter || !filterValue) return;

    // check if filter already exists
    if (filters[selectedFilter].includes(filterValue)) {
      toast.error("Filter already exists");
      return;
    }

    setFilter(selectedFilter, filterValue);
    setFilterValue("");
    setSelectedFilter(null);
    setIsFiltersCollapsibleOpen(false);
  };

  const FILTER_KEYS_LABELS: Record<MapFilterKey, string> = {
    callsign: "Callsign",
    origin: "Origin",
    destination: "Destination",
    airport: "Airport",
    aircraft: "Aircraft",
    squawk: "Squawk",
    registration: "Registration",
  };

  return (
    <Tooltip disableHoverableContent>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <TooltipTrigger asChild>
            <Button
              variant="secondary"
              className={cn(
                "h-auto w-auto rounded-sm bg-transparent p-1.5 text-muted-foreground transition-all duration-500 hover:bg-muted hover:text-accent-foreground data-[state='open']:bg-foreground data-[state='open']:text-background",
                hasActiveFilters && " bg-amber-400/10 text-amber-500",
              )}
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

          {!isFiltersCollapsibleOpen && hasActiveFilters && (
            <div className="mx-2 mb-4 flex flex-col gap-4">
              <span className="font-semibold text-accent-foreground">
                Active filters
              </span>

              <div className="flex flex-col gap-2">
                {Object.entries(filters).map(([key, value]) =>
                  value.map((filter) => (
                    <figure
                      key={`${key}-${filter}`}
                      className="flex items-center justify-between rounded-sm border px-3 py-2"
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-medium capitalize text-muted-foreground">
                          {key}
                        </span>
                        <span className="text-sm font-semibold uppercase text-accent-foreground">
                          {filter}
                        </span>
                      </div>

                      <Button
                        size="icon-sm"
                        variant="ghost"
                        className="text-muted-foreground hover:text-accent-foreground"
                        onClick={() =>
                          handleRemoveFilter(key as MapFilterKey, filter)
                        }
                      >
                        <PiMultipleCrossCancelDefaultStroke className="h-3 w-3" />
                      </Button>
                    </figure>
                  )),
                )}
              </div>
            </div>
          )}

          {!isFiltersCollapsibleOpen && !hasActiveFilters && (
            <figure className="mx-2 mb-2 flex flex-col items-center justify-center gap-2 rounded-sm bg-muted p-4">
              <PiFilterFunnelDuoSolid className="h-4 w-4 text-muted-foreground" />
              <span className="w-3/4 text-balance text-center text-xs text-muted-foreground">
                You have no active filters.
              </span>
            </figure>
          )}

          <Collapsible
            className="flex w-full max-w-xs flex-col gap-4 px-2"
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
                Add new filter rule
              </span>

              <div className="flex flex-col gap-4">
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
                        {MAP_FILTER_KEYS.map((filter) => (
                          <SelectItem key={filter} value={filter}>
                            {FILTER_KEYS_LABELS[filter]}
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
                    placeholder={inputPlaceholder}
                    disabled={!selectedFilter}
                    className="font-semibold uppercase placeholder:font-sans placeholder:font-normal placeholder:normal-case"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    maxLength={inputLength}
                  />
                </div>

                {/* <div className="flex flex-col gap-2">
                  <span className="text-2xs font-semibold uppercase text-muted-foreground">
                    Filter logic operator
                  </span>

                  <RadioGroup defaultValue="and">
                    <div className="flex items-center gap-4 rounded-md border px-4 py-2">
                      <RadioGroupItem
                        value="and"
                        id="and"
                        className="shrink-0"
                      />
                      <div className="flex flex-col gap-0.5">
                        <label
                          htmlFor="and"
                          className="w-fit rounded bg-violet-400/10 px-1 font-mono text-xs font-bold uppercase text-violet-400"
                        >
                          and
                        </label>
                        <span className="text-xs text-muted-foreground">
                          Concatenates the filter rule with the previous ones.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-md border px-4 py-2">
                      <RadioGroupItem value="or" id="or" className="shrink-0" />
                      <div className="flex flex-col gap-0.5">
                        <label
                          htmlFor="or"
                          className="w-fit rounded bg-teal-400/10 px-1 font-mono text-xs font-bold uppercase text-teal-400"
                        >
                          or
                        </label>
                        <span className="text-xs text-muted-foreground">
                          Display the data if any of the filter rules are met.
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-md border px-4 py-2">
                      <RadioGroupItem
                        value="nor"
                        id="nor"
                        className="shrink-0"
                      />
                      <div className="flex flex-col gap-0.5">
                        <label
                          htmlFor="nor"
                          className="w-fit rounded bg-rose-400/10 px-1 font-mono text-xs font-bold uppercase text-rose-400"
                        >
                          nor
                        </label>
                        <span className="text-xs text-muted-foreground">
                          Excludes the filtered value from the data.
                        </span>
                      </div>
                    </div>
                  </RadioGroup>
                </div> */}
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
                  className="text-muted-foreground"
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
