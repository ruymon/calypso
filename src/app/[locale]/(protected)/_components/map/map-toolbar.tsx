import { MapBaseMapControls } from "./map-base-map-controls";
import { MapFilterControls } from "./map-filter-controls";
import { MapLayerControls } from "./map-layer-controls";

interface MapToolbarProps {}

export function MapToolbar({}: MapToolbarProps) {
  return (
    <div className="absolute right-3 top-3 z-10 flex flex-col items-center justify-center gap-0.5 rounded-lg border bg-popover p-1 text-popover-foreground backdrop-blur-lg">
      <MapBaseMapControls />
      <MapLayerControls />
      <MapFilterControls />
    </div>
  );
}
