import { LiveFlights, TrackPosition } from "@/types/live-flights";
// @ts-expect-error - FIXME: @turf types are not working...
import { point } from "@turf/helpers";
import * as color from "tailwindcss/colors";

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
): GeoJSON.FeatureCollection<GeoJSON.LineString> {
  console.log(tracks);
  const bellow500Coordinates = [] as number[][];
  const between500And1000Coordinates = [] as number[][];
  const between1000And2000Coordinates = [] as number[][];
  const between2000And4000Coordinates = [] as number[][];
  const between4000And6000Coordinates = [] as number[][];
  const between6000And8000Coordinates = [] as number[][];
  const between8000And10000Coordinates = [] as number[][];
  const between10000And20000Coordinates = [] as number[][];
  const between20000And30000Coordinates = [] as number[][];
  const between30000And40000Coordinates = [] as number[][];
  const above40000Coordinates = [] as number[][];

  tracks.map((track) => {
    if (track.altitude < 500) {
      bellow500Coordinates.push([track.lat, track.lng]);
    }

    if (500 <= track.altitude && track.altitude < 1000) {
      between500And1000Coordinates.push([track.lat, track.lng]);
    }

    if (1000 <= track.altitude && track.altitude < 2000) {
      between1000And2000Coordinates.push([track.lat, track.lng]);
    }

    if (2000 <= track.altitude && track.altitude < 4000) {
      between2000And4000Coordinates.push([track.lat, track.lng]);
    }

    if (4000 <= track.altitude && track.altitude < 6000) {
      between4000And6000Coordinates.push([track.lat, track.lng]);
    }

    if (6000 <= track.altitude && track.altitude < 8000) {
      between6000And8000Coordinates.push([track.lat, track.lng]);
    }

    if (8000 <= track.altitude && track.altitude < 10000) {
      between8000And10000Coordinates.push([track.lat, track.lng]);
    }

    if (10000 <= track.altitude && track.altitude < 20000) {
      between10000And20000Coordinates.push([track.lat, track.lng]);
    }

    if (20000 <= track.altitude && track.altitude < 30000) {
      between20000And30000Coordinates.push([track.lat, track.lng]);
    }

    if (30000 <= track.altitude && track.altitude < 40000) {
      between30000And40000Coordinates.push([track.lat, track.lng]);
    }

    if (40000 <= track.altitude) {
      above40000Coordinates.push([track.lat, track.lng]);
    }
  });

  const result = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          color: color.red[500],
        },
        geometry: {
          type: "LineString",
          coordinates: tracks.map((track) => [track.lat, track.lng]),
        },
      },
      tracks.map((track) => {
        return {
          type: "Feature",
          properties: {
            color: color.purple[500],
            altitude: track.altitude,
          },
          geometry: {
            type: "Point",
            coordinates: [track.lat, track.lng],
          },
        };
      }),
    ],
  };

  return result as GeoJSON.FeatureCollection<GeoJSON.LineString>;
}
