import { UserIntegrations } from "@/app/[locale]/(map)/_components/map";
import {
  AIRCRAFT_SPRITE_ICON_MAPPING,
  FLIGHT_TRACK_ACCENT_COLOR,
  FLIGHT_TRACK_EMERGENCY_ACCENT_COLOR,
  FLIGHT_TRACK_USER_ACCENT_COLOR,
  MAP_LAYERS,
  MAP_SPRITES,
} from "@/config/map";
import { useBaseMapStore } from "@/stores/base-map-store";
import { useSelectedFlightStore } from "@/stores/selected-flight-store";
import { LiveFlightDetail } from "@/types/live-flights";
//@ts-ignore
import { PathStyleExtension } from "@deck.gl/extensions";
import { GeoJsonLayer, IconLayer } from "deck.gl";
import {
  convertHeadingToAngle,
  hexToRGBAArray,
  isEmergencyTransponder,
} from "../utils";
//@ts-expect-error
import { featureCollection, lineString } from "@turf/helpers";
import { useTheme } from "next-themes";
import { amber, white, zinc } from "tailwindcss/colors";
import { getIconBasedOnAircraftType, isUserFlight } from "./flights";

interface getSelectedFlightPathLayerProps {
  userIntegrations: UserIntegrations;
}

export const getSelectedFlightPathLayer = ({
  userIntegrations,
}: getSelectedFlightPathLayerProps) => {
  const { selectedFlight } = useSelectedFlightStore();
  const { baseMap } = useBaseMapStore();
  const { resolvedTheme } = useTheme();

  const getLineColor = ({ network, pilot, position }: LiveFlightDetail) => {
    const isEmergency = isEmergencyTransponder(position?.transponder);
    const isUser = isUserFlight(network, pilot, userIntegrations);

    if (isEmergency) {
      return FLIGHT_TRACK_EMERGENCY_ACCENT_COLOR;
    } else if (isUser) {
      return FLIGHT_TRACK_USER_ACCENT_COLOR;
    } else {
      return FLIGHT_TRACK_ACCENT_COLOR[network];
    }
  };

  const getTrackDataInGeoJson = (flightData: LiveFlightDetail | null) => {
    if (!flightData) return null;

    const { tracks, flightPlan } = flightData;

    const isEmptyTrack = !tracks || tracks.length < 2;

    if (isEmptyTrack) return null;

    const trackPoints = tracks.map(track => [track.lng, track.lat]);
    const currentPoint = [
      tracks[tracks.length - 1]?.lng,
      tracks[tracks.length - 1]?.lat,
    ];

    const arrivalPoint = flightPlan?.arrival && [
      flightPlan?.arrival?.lng,
      flightPlan?.arrival?.lat,
    ];
    const alternatePoint = flightPlan?.alternate && [
      flightPlan?.alternate?.lng,
      flightPlan?.alternate?.lat,
    ];

    const flightTrack = lineString(trackPoints, {
      dimmed: false,
      width: 4,
      dashArray: null,
      color: getLineColor(flightData),
    });

    const directPathToDestination =
      arrivalPoint &&
      lineString([currentPoint, arrivalPoint], {
        dimmed: true,
        width: 2,
        dashArray: [8, 8],
        color: getLineColor(flightData),
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

  const getPlaneIconColor = () => {
    switch (baseMap) {
      case "dark":
        return hexToRGBAArray(white);
      case "light":
        return hexToRGBAArray(zinc[950]);
      case "satellite":
        return hexToRGBAArray(zinc[950]);
      case "theme":
        return resolvedTheme === "dark"
          ? hexToRGBAArray(white)
          : hexToRGBAArray(zinc[950]);
      default:
        return hexToRGBAArray(zinc[950]);
    }
  };

  const trackLayer = new GeoJsonLayer({
    id: MAP_LAYERS.SELECTED_FLIGHT_TRACK_LAYER_ID,
    data: getTrackDataInGeoJson(selectedFlight),
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
    wrapLongitude: true,
    getPolygonOffset: ({ layerIndex }) => {
      return [0, -layerIndex * 900];
    },
  });

  const planeIconLayer = new IconLayer({
    id: MAP_LAYERS.SELECTED_FLIGHT_ICON_LAYER_ID,
    data: selectedFlight ? [selectedFlight] : null,
    iconAtlas: MAP_SPRITES.AIRCRAFT_ICONS,
    iconMapping: AIRCRAFT_SPRITE_ICON_MAPPING,
    getIcon: getIconBasedOnAircraftType,
    sizeUnits: "common",
    sizeMinPixels: 14,
    sizeMaxPixels: 40,
    sizeScale: 1.5,
    getPosition: ({ position }: LiveFlightDetail) => [
      position.lng,
      position.lat,
    ],
    getAngle: ({ position }: LiveFlightDetail) =>
      convertHeadingToAngle(position.heading),
    billboard: false,
    getColor: getPlaneIconColor,

    getPolygonOffset: ({ layerIndex }) => {
      return [0, -layerIndex * 1000];
    },
  });

  return [trackLayer, planeIconLayer];
};
