import { LiveFlights, TrackPosition } from "@/types/live-flights";
// @ts-expect-error - FIXME: @turf types are not working...
import { lineString, point } from "@turf/helpers";
import { zinc } from "tailwindcss/colors";

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

export function convertTracksToLineString(
  tracks: TrackPosition[],
): GeoJSON.LineString {
  const trackPath = lineString(
    [...tracks.map((track) => [track.lat, track.lng])],
    { color: zinc[500] },
  );

  return trackPath;
}
