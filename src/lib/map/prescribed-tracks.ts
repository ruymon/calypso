import { MAP_LAYERS } from "@/config/map";
import { useMapExtraLayersStore } from "@/stores/map-extra-layers-store";
import { NatTracks } from "@/types/prescribed-tracks";
import { useQuery } from "@tanstack/react-query";
//@ts-ignore
import { feature, featureCollection, multiLineString } from "@turf/helpers";
import { GeoJsonLayer } from "deck.gl";
import { teal, yellow, zinc } from "tailwindcss/colors";
import { getNatTracks } from "../prescribed-tracks";
import { hexToRGBAArray } from "../utils";

export const getNatLayer = () => {
  const { isEastNatTracksLayerVisible, isWestNatTracksLayerVisible } =
    useMapExtraLayersStore();

  const { data } = useQuery({
    queryKey: ["nat-tracks"],
    queryFn: () => getNatTracks(),
    enabled: isEastNatTracksLayerVisible || isWestNatTracksLayerVisible,
  });

  const splitTracks = data?.reduce(
    (acc, track) => {
      if (track.eastLevels.length > 0) {
        acc.east.push(track);
      } else {
        acc.west.push(track);
      }

      return acc;
    },
    { east: [] as NatTracks, west: [] as NatTracks },
  );

  const getNatTracksInGeoJson = (data: NatTracks) => {
    if (!data) return [];

    const trackLineFeatures = data.map((track) => {
      const coordinates = track.waypoints.map((waypoint) => [
        waypoint.longitude,
        waypoint.latitude,
      ]);

      return multiLineString([coordinates], {
        ident: track.ident,
        validFrom: track.validFrom,
        validTo: track.validTo,
      });
    });

    const trackWaypointsFeatures = data.flatMap((track) =>
      track.waypoints.map((waypoint) =>
        feature(
          {
            type: "Point",
            coordinates: [waypoint.longitude, waypoint.latitude],
          },
          {
            ident: waypoint.ident,
            type: waypoint.type,
          },
        ),
      ),
    );

    const trackIdentifiersFeature = data.map((track) => {
      const lastWaypointCoordinates = [
        track.waypoints[track.waypoints.length - 1]?.longitude,
        track.waypoints[track.waypoints.length - 1]?.latitude,
      ];

      return feature(
        {
          type: "Point",
          coordinates: lastWaypointCoordinates,
        },
        {
          ident: `NAT ${track.ident}`,
          type: "track-identifier",
        },
      );
    });

    const features = [
      ...trackLineFeatures,
      ...trackWaypointsFeatures,
      ...trackIdentifiersFeature,
    ];

    return featureCollection(features);
  };

  const eastNatTrackLayer = new GeoJsonLayer({
    id: MAP_LAYERS.NAT_EAST_TRACKS_LAYER_ID,
    data: splitTracks ? getNatTracksInGeoJson(splitTracks.east) : null,
    stroked: true,
    filled: true,
    pointType: "circle+text",
    getText: (d: any) => d.properties.ident,
    getLineColor: (d) => hexToRGBAArray(teal[600]),
    getFillColor: (d) => hexToRGBAArray(teal[600]),
    getTextColor: (d) => {
      if (d.properties.type === "track-identifier") hexToRGBAArray(teal[500]);
      return hexToRGBAArray(zinc[500]);
    },
    getTextAlignmentBaseline: (d) =>
      d.properties.type === "track-identifier" ? "center" : "bottom",
    getTextPixelOffset: (d) =>
      d.properties.type === "track-identifier" ? [40, 0] : [0, -5],
    getLineWidth: 1,
    lineWidthUnits: "pixels",
    getPointRadius: 2,
    getTextSize: (d: any) =>
      d.properties.type === "track-identifier" ? 16 : 8,

    visible: isEastNatTracksLayerVisible,
  });

  const westTrackLayer = new GeoJsonLayer({
    id: MAP_LAYERS.NAT_WEST_TRACKS_LAYER_ID,
    data: splitTracks ? getNatTracksInGeoJson(splitTracks.west) : null,
    stroked: true,
    filled: true,
    pointType: "circle+text",
    getText: (d: any) => d.properties.ident,
    getLineColor: (d) => hexToRGBAArray(yellow[600]),
    getFillColor: (d) => hexToRGBAArray(yellow[600]),
    getTextColor: (d) => {
      if (d.properties.type === "track-identifier") hexToRGBAArray(yellow[600]);
      return hexToRGBAArray(zinc[500]);
    },
    getTextAlignmentBaseline: (d) =>
      d.properties.type === "track-identifier" ? "center" : "top",
    getTextPixelOffset: (d) =>
      d.properties.type === "track-identifier" ? [-40, 0] : [0, 5],
    getLineWidth: 1,
    lineWidthUnits: "pixels",
    getPointRadius: 2,
    getTextSize: (d: any) =>
      d.properties.type === "track-identifier" ? 16 : 8,
    visible: isWestNatTracksLayerVisible,
  });

  return [eastNatTrackLayer, westTrackLayer];
};
