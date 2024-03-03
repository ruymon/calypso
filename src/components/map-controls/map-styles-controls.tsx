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
import { LayersIcon } from "lucide-react";

interface MapStylesControlsProps {}

export function MapStylesControls({}: MapStylesControlsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon-sm" variant="outline">
          <LayersIcon className="h-4 w-4 shrink-0" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-48 p-2"
        align="start"
        side="right"
        sideOffset={12}
      >
        <DropdownMenuLabel className="text-lg">
          Base map Options
        </DropdownMenuLabel>

        <DropdownMenuSeparator className="mx-2" />

        <DropdownMenuItem className="hover:cursor-pointer">
          Style 1
        </DropdownMenuItem>

        <DropdownMenuItem className="hover:cursor-pointer">
          Style 2
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
