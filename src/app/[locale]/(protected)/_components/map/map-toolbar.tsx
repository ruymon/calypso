import { MapBaseMapControls } from "./map-base-map-controls";
import { MapLayerControls } from "./map-layer-controls";

interface MapToolbarProps {}

export function MapToolbar({}: MapToolbarProps) {
  return (
    <div className="absolute right-3 top-3 z-20 flex flex-col items-center justify-center gap-0.5 rounded-lg border bg-popover p-1 text-popover-foreground backdrop-blur-lg">
      <MapBaseMapControls />
      <MapLayerControls />
    </div>
  );
}
