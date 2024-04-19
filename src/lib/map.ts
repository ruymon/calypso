import {
  AIRCRAFT_SPRITE_ICON_MAPPING,
  ATC_FACILITIES_ACCENT_COLOR,
  ATC_FACILITIES_SPRITE_ICON_MAPPING,
  ATC_FACILITIES_THAT_HAVE_LABEL,
  FLIGHT_ICON_ACCENT_COLOR,
  MAP_STYLES,
} from "@/config/map";
import { ATCFacility, LiveATC, LiveATCGeometry, LiveATCs } from "@/types/atcs";
import { LiveFlight, LiveFlights } from "@/types/live-flights";
import { Network } from "@/types/networks";
import { ResolvedTheme } from "@/types/themes";
import { IconLayer, PolygonLayer } from "deck.gl";
import { hexToRGBAArray } from "./utils";

export function getMapStyleBasedOnTheme(resolvedTheme: ResolvedTheme) {
  return resolvedTheme === "light" ? MAP_STYLES.light : MAP_STYLES.dark;
}

export function getMapCursor({
  isDragging,
  isHovering,
}: {
  isHovering: boolean;
  isDragging: boolean;
}): string {
  if (isDragging) return "grabbing";
  if (isHovering) return "pointer";
  return "grab";
}

export const getNetworkATCsPolygonLayer = (
  data: LiveATCs | null,
  network: Network,
) => {
  const atcHasGeometryFilteredData = data?.filter(
    (atc: LiveATC) => atc.geometry.length > 0,
  );

  const getATCPolygonShape = (data: LiveATC) => [
    data.geometry.map((coord: LiveATCGeometry) => [
      coord.longitude,
      coord.latitude,
    ]),
  ];

  const getATCColor = ({ facility }: LiveATC, opacity?: number) => {
    const accentColor = ATC_FACILITIES_ACCENT_COLOR[facility as ATCFacility];
    return hexToRGBAArray(accentColor, opacity);
  };

  return new PolygonLayer({
    id: `${network}-atcs-layer`,
    data: atcHasGeometryFilteredData,
    getPolygon: getATCPolygonShape,
    getLineColor: (d) => getATCColor(d),
    getFillColor: (d) => getATCColor(d, 40),
    colorFormat: "RGBA",
    filled: true,
    getLineWidth: 20,
    lineWidthMinPixels: 1,
    pickable: true,
  });
};

export const getNetworkFlightsLayer = (
  data: LiveFlights | null,
  network: Network,
  props: { visible: boolean; onClick: (arg: any) => void },
) => {
  const getIconBasedOnAircraftType = (flight: LiveFlight) => {
    const FALLBACK_AIRCRAFT_TYPE = "medium";
    const aircraftType = flight.flightPlan?.aircraft?.type;
    return aircraftType?.toLowerCase() || FALLBACK_AIRCRAFT_TYPE;
  };

  const getIconAccentColor = ({ network }: LiveFlight) => {
    const accentColor = FLIGHT_ICON_ACCENT_COLOR[network];
    return hexToRGBAArray(accentColor);
  };

  return new IconLayer({
    id: `${network}-flights-layer`,
    data: data,
    iconAtlas: "http://localhost:3000/assets/aircraft-sprite.png",
    iconMapping: AIRCRAFT_SPRITE_ICON_MAPPING,
    getIcon: getIconBasedOnAircraftType,
    getSize: 18,
    sizeUnits: "pixels",
    getPosition: (d: LiveFlight) => [d.position.lng, d.position.lat],
    getAngle: (d: LiveFlight) => d.position.heading + 90,
    getColor: getIconAccentColor,
    autoHighlight: true,
    pickable: true,
    ...props,
  });
};

export const getNetworkATCsFacilitiesLabelLayer = (
  data: LiveATCs | null,
  network: Network,
) => {
  const getFilteredATCsBasedOnLabelInclusion = (data: LiveATCs) => {
    return data.filter(({ facility }) =>
      ATC_FACILITIES_THAT_HAVE_LABEL.includes(facility),
    );
  };

  const layerData = data && getFilteredATCsBasedOnLabelInclusion(data);

  return new IconLayer({
    id: `${network}-atcs-facilities-icon`,
    data: layerData,
    iconAtlas: "http://localhost:3000/assets/atc-facilities-sprite.png",
    iconMapping: ATC_FACILITIES_SPRITE_ICON_MAPPING,
    getIcon: ({ facility }: LiveATC) => facility,
    getPixelOffset: ({ facility }: LiveATC) => {
      switch (facility) {
        case "GND":
          return [14, 0];
        case "DEL":
          return [28, 0];
        default:
          return [0, 0];
      }
    },
    getSize: 12,
    sizeUnits: "pixels",
    getPosition: (d: LiveATC) => [d.longitude, d.latitude],
    pickable: false,
  });
};
