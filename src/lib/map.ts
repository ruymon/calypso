import {
  AIRCRAFT_SPRITE_ICON_MAPPING,
  AIRPORT_SPRITE_ICON_MAPPING,
  ATC_FACILITIES_ACCENT_COLOR,
  ATC_FACILITIES_SPRITE_ICON_MAPPING,
  ATC_FACILITIES_THAT_HAVE_LABEL,
  DECK_GL_TOOLTIP_STYLE_OVERRIDE,
  FLIGHT_ICON_ACCENT_COLOR,
  FLIGHT_ICON_EMERGENCY_ACCENT_COLOR,
  MAP_SPRITES,
  MAP_STYLES,
} from "@/config/map";
import { AirportSummary, AirportSummaryList } from "@/types/airports";
import { ATCFacility, LiveATC, LiveATCGeometry, LiveATCs } from "@/types/atcs";
import { LiveFlight, LiveFlights } from "@/types/live-flights";
import { Network } from "@/types/networks";
import { Theme } from "@/types/themes";
import { IconLayer, PickingInfo, PolygonLayer } from "deck.gl";
import { indigo } from "tailwindcss/colors";
import {
  convertHeadingToAngle,
  hexToRGBAArray,
  isEmergencyTransponder,
} from "./utils";

export function getMapStyleBasedOnTheme(theme: Theme) {
  return theme === "light" ? MAP_STYLES.light : MAP_STYLES.dark;
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
  options?: { isVisible: boolean },
) => {
  const atcHasGeometryFilteredData = data?.filter(
    (atc: LiveATC) => atc.geometry.length > 0,
  );

  const getATCPolygonShape = (data: LiveATC) => {
    if (data.network === "vatsim") {
      return [
        data.geometry.map((coord: LiveATCGeometry) => [
          coord.longitude,
          coord.latitude,
        ]),
      ];
    }
    if (data.network === "ivao") {
      return [
        data.geometry.map((coord: LiveATCGeometry) => [
          coord.latitude,
          coord.longitude,
        ]),
      ];
    }
  };

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
    autoHighlight: true,
    visible: options?.isVisible ?? true,
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

  const getIconAccentColor = ({ network, position }: LiveFlight) => {
    const squawkCode = position.transponder;
    const isEmergency = isEmergencyTransponder(squawkCode);

    const accentColor = isEmergency
      ? FLIGHT_ICON_EMERGENCY_ACCENT_COLOR
      : FLIGHT_ICON_ACCENT_COLOR[network];

    return hexToRGBAArray(accentColor);
  };

  return new IconLayer({
    id: `${network}-flights-layer`,
    data: data,
    iconAtlas: MAP_SPRITES.AIRCRAFT_ICONS,
    iconMapping: AIRCRAFT_SPRITE_ICON_MAPPING,
    getIcon: getIconBasedOnAircraftType,
    sizeUnits: "common",
    sizeMinPixels: 12,
    sizeMaxPixels: 28,
    sizeScale: 1,
    getPosition: (d: LiveFlight) => [d.position.lng, d.position.lat],
    getAngle: (d: LiveFlight) => convertHeadingToAngle(d.position.heading),
    billboard: false,
    getColor: getIconAccentColor,
    autoHighlight: true,
    pickable: true,
    ...props,
  });
};

export const getNetworkATCsFacilitiesLabelLayer = (
  data: LiveATCs | null,
  network: Network,
  options?: { isVisible: boolean },
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
    iconAtlas: MAP_SPRITES.ATC_FACILITIES,
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
    pickable: true,
    visible: options?.isVisible ?? true,
  });
};

export const getAirportSummaryLayer = (
  data: AirportSummaryList | null,
  options: {
    currentZoom: number;
    isVisible: boolean;
    onClick?: (arg: any) => void;
  },
) => {
  return new IconLayer({
    id: "airports-layer",
    data: data ?? [],
    iconAtlas: MAP_SPRITES.AIRPORT_ICONS,
    iconMapping: AIRPORT_SPRITE_ICON_MAPPING,
    getIcon: (d: AirportSummary) => "airport",
    getSize: 14,
    getColor: (d: AirportSummary) => hexToRGBAArray(indigo[400]),
    sizeUnits: "pixels",
    getPosition: (d: AirportSummary) => [d.lng, d.lat],
    pickable: true,
    visible: options.currentZoom > 6 && options.isVisible,
    onClick: options.onClick,
  });
};
export const flightLayerTooltip = ({
  callsign,
  flightPlan,
  network,
}: LiveFlight) => {
  return {
    html: `
      <div class="flex flex-col border bg-card text-card-foreground gap-1 rounded-sm py-2 px-3">
        <span class="text-sm font-semibold">${callsign}</span>
        <span class="text-xs text-muted-foreground">${flightPlan?.departure?.icao || "TBN"} - ${flightPlan?.arrival?.icao || "TBN"}</span>
        <span class="text-2xs text-muted-foreground">${flightPlan?.aircraft?.icao} ${flightPlan?.aircraft?.icao && "&bull;"} <span class="uppercase">${network}</span></span>
      </div>
    `,
    style: DECK_GL_TOOLTIP_STYLE_OVERRIDE,
  };
};

export const atcLayerTooltip = ({
  callsign,
  facility,
  network,
  frequency,
  atis,
}: LiveATC) => {
  return {
    html: `
      <div class="flex flex-col border bg-card text-card-foreground gap-1 rounded-sm py-2 px-3">
        <span class="text-sm font-semibold">${callsign}</span>
        <span class="text-2xs text-muted-foreground">${frequency} <span class="uppercase">${network}</span></span>
      </div>
    `,
    style: DECK_GL_TOOLTIP_STYLE_OVERRIDE,
  };
};

export const airportLayerTooltip = ({ icao, iata, name }: AirportSummary) => {
  return {
    html: `
    <div class="flex flex-col border bg-card text-card-foreground gap-1 rounded-sm py-2 px-3">
    <span class="text-sm font-semibold">${icao}</span>
    <span class="text-2xs text-muted-foreground">${name}</span>
  </div>
    `,
    style: DECK_GL_TOOLTIP_STYLE_OVERRIDE,
  };
};

export const getTooltipContentBasedOnLayer = ({
  layer,
  object,
}: PickingInfo) => {
  if (!layer || !object) return null;

  if (layer.id.includes("flights-layer")) {
    return flightLayerTooltip(object);
  }

  if (
    layer.id.includes("atcs-layer") ||
    layer.id.includes("atcs-facilities-icon")
  ) {
    return atcLayerTooltip(object);
  }

  if (layer.id.includes("airports-layer")) {
    return airportLayerTooltip(object);
  }

  return null;
};
