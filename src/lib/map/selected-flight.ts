import { MAP_LAYERS } from "@/config/map";
import { useSelectedFlightStore } from "@/stores/selected-flight-store";
import { TrackPosition } from "@/types/live-flights";
//@ts-ignore
import { PathStyleExtension } from "@deck.gl/extensions";
import { GeoJsonLayer } from "deck.gl";
import { hexToRGBAArray } from "../utils";
//@ts-expect-error
import { featureCollection, lineString } from "@turf/helpers";
import { useMemo } from "react";
import { amber, teal } from "tailwindcss/colors";

export const getSelectedFlightPathLayer = () => {
  const { tracks, arrival, alternate } = useSelectedFlightStore();

  const flightTracks = useMemo(() => {
    return tracks;
  }, [tracks]);

  const getTrackDataInGeoJson = (trackData: TrackPosition[]) => {
    const trackPoints = trackData.map((track) => [track.lng, track.lat]);
    const currentPoint = [
      trackData[trackData.length - 1]?.lng,
      trackData[trackData.length - 1]?.lat,
    ];

    const arrivalPoint = arrival && [arrival?.lng, arrival?.lat];
    const alternatePoint = alternate && [alternate?.lng, alternate?.lat];

    const flightTrack = lineString(trackPoints, {
      dimmed: false,
      width: 3,
      dashArray: null,
      color: teal[500],
    });

    const directPathToDestination =
      arrivalPoint &&
      lineString([currentPoint, arrivalPoint], {
        dimmed: true,
        width: 2,
        dashArray: [8, 8],
        color: teal[500],
      });

    const directPathFromDestinationToAlternate =
      arrivalPoint &&
      alternatePoint &&
      lineString([arrivalPoint, alternatePoint], {
        dimmed: true,
        width: 2,
        dashArray: [8, 8],
        color: amber[500],
      });

    return featureCollection([
      flightTrack,
      directPathToDestination,
      directPathFromDestinationToAlternate,
    ]);
  };

  const isTrackCompatible = flightTracks.length > 2;

  return new GeoJsonLayer({
    id: MAP_LAYERS.SELECTED_FLIGHT_LAYER_ID,
    data: isTrackCompatible ? getTrackDataInGeoJson(flightTracks) : null,
    stroked: true,
    pickable: false,
    pointType: "circle",
    getLineColor: (f: any) =>
      f.properties.dimmed
        ? hexToRGBAArray(f.properties.color, 175)
        : hexToRGBAArray(f.properties.color),
    getLineWidth: (f: any) => f.properties.width,
    getDashArray: (f: any) => f.properties.dashArray,
    dashJustified: true,
    dashGapPickable: true,
    extensions: [new PathStyleExtension({ dash: true })],
    lineWidthUnits: "pixels",
  });
};
