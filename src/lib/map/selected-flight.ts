import { useSelectedFlightStore } from "@/stores/selected-flight-store";
import { TrackPosition } from "@/types/live-flights";
import { GeoJsonLayer } from "deck.gl";
import { hexToRGBAArray } from "../utils";
//@ts-expect-error
import { lineString } from "@turf/helpers";
import { useMemo } from "react";

export const getSelectedFlightPathLayer = () => {
  const { tracks } = useSelectedFlightStore();

  const flightTracks = useMemo(() => {
    return tracks;
  }, [tracks]);

  const getTrackDataInGeoJson = (tracks: TrackPosition[]) => {
    const trackPoints = flightTracks.map((track) => [track.lat, track.lng]);
    const trackLine = lineString(trackPoints);
    return trackLine;
  };

  const isEmpty = flightTracks.length === 0;

  return new GeoJsonLayer({
    id: "GeoJsonLayer",
    data: !isEmpty && getTrackDataInGeoJson(flightTracks),
    stroked: true,
    pickable: false,
    pointType: "circle",
    getLineColor: (f) => hexToRGBAArray("#fff", 175),
    getLineWidth: 2,
    lineWidthUnits: "pixels",
  });
};
