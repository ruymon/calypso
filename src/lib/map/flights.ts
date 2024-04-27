import {
  AIRCRAFT_SPRITE_ICON_MAPPING,
  FLIGHT_ICON_ACCENT_COLOR,
  FLIGHT_ICON_EMERGENCY_ACCENT_COLOR,
  MAP_SPRITES,
} from "@/config/map";
import { LiveFlight, LiveFlights } from "@/types/live-flights";
import { Network } from "@/types/networks";
import { IconLayer } from "deck.gl";
import {
  convertHeadingToAngle,
  hexToRGBAArray,
  isEmergencyTransponder,
} from "../utils";

interface NetworkFlightsLayerProps {
  data: LiveFlights | null;
  network: Network;
  options: { isVisible: boolean; onClick?: (arg: any) => void };
}

export const getNetworkFlightsLayer = ({
  data,
  network,
  options,
}: NetworkFlightsLayerProps) => {
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
    visible: options.isVisible,
    onClick: options.onClick,
  });
};
