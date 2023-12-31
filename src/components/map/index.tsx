import { MapBaseTile } from "./base-tile";
import { MapFlightsTile } from "./flights-tile";

interface MapProps {};

export function Map({}: MapProps) {
  return (
    <section className="w-full h-full relative">
      <MapBaseTile>
        {/* @ts-expect-error Server Component */}
        <MapFlightsTile />
      </MapBaseTile>
    </section>
  );
};

