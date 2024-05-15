import { MapBaseMapControls } from "./map-base-map-controls";
import { MapExtraLayerControls } from "./map-extra-layers-controls";
import { MapNetworkLayerControls } from "./map-network-layers-controls";

interface MapToolbarProps {}

export function MapToolbar({}: MapToolbarProps) {
  return (
    <div className="absolute right-3 top-3 z-10 flex flex-col items-center justify-center gap-0.5 rounded-lg border bg-popover p-1 text-popover-foreground backdrop-blur-lg">
      <MapBaseMapControls />
      <MapExtraLayerControls />
      <MapNetworkLayerControls />
      {/* <Separator className="my-1 w-3/4 bg-muted" />
      <MapNetworkLayerControls />
      <MapFilterControls /> */}
    </div>
  );
}
