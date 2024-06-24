import { Separator } from "@/components/ui/separator";
import { MapBaseMapControls } from "./map-base-map-controls";
import { MapExtraLayerControls } from "./map-extra-layers-controls";
import { MapFilterControls } from "./map-filter-controls";
import { MapNetworkLayerControls } from "./map-network-layers-controls";
import { MapSettingsControls } from "./map-settings-controls";

interface MapToolbarProps {}

export function MapToolbar({}: MapToolbarProps) {
  return (
    <div className="absolute right-3 top-3 z-10 flex flex-col items-center justify-center gap-0.5 rounded-lg border border-muted bg-popover p-1 text-popover-foreground backdrop-blur-xl">
      <MapBaseMapControls />
      <MapNetworkLayerControls />
      <Separator className="my-1 w-3/4 bg-muted" />
      <MapExtraLayerControls />
      <MapFilterControls />
      <Separator className="my-1 w-3/4 bg-muted" />
      <MapSettingsControls />
    </div>
  );
}
