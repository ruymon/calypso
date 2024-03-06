import { LiveFlights } from "@/types/live-flights";
// @ts-expect-error - FIXME: @turf types are not working...
import { point } from "@turf/helpers";

export function convertFlightsToGeoJSON(
  data: LiveFlights,
): GeoJSON.FeatureCollection<GeoJSON.Geometry> {
  const features = data.map((flight) =>
    point([flight.position.lng ?? "0", flight.position.lat ?? "0"], flight),
  );

  return {
    type: "FeatureCollection",
    features,
  };
}
