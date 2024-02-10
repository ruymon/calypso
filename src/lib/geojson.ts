import { LiveFlight } from "@/types/live-flights";
// @ts-expect-error - FIXME: @turf types are not working...
import { point } from "@turf/helpers";

export function liveFlightToGeoJson(data: LiveFlight[]): GeoJSON.FeatureCollection<GeoJSON.Geometry> {
  const features = data.map((flight) => point(flight.currentPosition.coordinates, flight))

  return {
    type: "FeatureCollection",
    features,
  }
}

export function parseFeatureProperties(data: any): any {
  // Recursively parse nested strings
  if (typeof data === 'string') {
    try {
      return JSON.parse(data);
    } catch (error) {
      // Handle invalid JSON strings
      console.warn('parseFeatureProperties: Unable to parse string', data, error)
      return null;
    }
  } else if (typeof data === 'object') {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        data[key] = parseFeatureProperties(data[key]);
      }
    }
  }

  return data;
}
