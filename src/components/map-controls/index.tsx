import { Separator } from "@/components/ui/separator";
import { MapLayerControls } from "./map-layer-controls";
import { MapZoomControls } from "./map-zoom-controls";

interface MapControlsProps {}

export function MapControls({}: MapControlsProps) {
  return (
    <aside className="absolute right-4 top-6 z-10 flex -translate-y-2 flex-col gap-3 rounded-md bg-background px-1 py-1.5">
      <section className="flex flex-col gap-1.5">
        <MapLayerControls />
      </section>

      <Separator />

      <MapZoomControls />
    </aside>
  );
}
