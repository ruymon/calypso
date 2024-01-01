import { MapBaseTile } from "./base-tile";
import { MapFlightsTile } from "./flights-tile";

interface MapProps {};

export function Map({}: MapProps) {
  return (
    <MapBaseTile>
      {/* @ts-expect-error Server Component */}
      <MapFlightsTile />
    </MapBaseTile>
  );
};

