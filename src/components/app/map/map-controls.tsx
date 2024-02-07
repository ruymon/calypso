import { ZoomInIcon } from "lucide-react";

interface MapControlsProps { };

export function MapControls({ }: MapControlsProps) {
  return (
    <div className="flex gap-4 absolute right-4 top-1/2 -translate-y-2 p-1 bg-accent/25 backdrop-blur-xl">
      <ZoomInIcon className="w-8 h-8" />

    </div>
  );
};
