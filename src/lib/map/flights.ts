import { UserIntegrations } from "@/app/[locale]/(protected)/_components/map";
import {
  AIRCRAFT_SPRITE_ICON_MAPPING,
  FLIGHT_ICON_ACCENT_COLOR,
  FLIGHT_ICON_EMERGENCY_ACCENT_COLOR,
  FLIGHT_ICON_USER_ACCENT_COLOR,
  MAP_LAYERS,
  MAP_SPRITES,
} from "@/config/map";
import { FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { useMapNetworkLayersStore } from "@/stores/map-network-layers-store";
import { useSelectedFlightStore } from "@/stores/selected-flight-store";
import { LiveFlight, LiveFlights, Pilot } from "@/types/live-flights";
import { Network } from "@/types/networks";
import { useQuery } from "@tanstack/react-query";
import { IconLayer } from "deck.gl";
import { useRouter } from "next/navigation";
import { getNetworkFlights } from "../flights";
import {
  convertHeadingToAngle,
  hexToRGBAArray,
  isEmergencyTransponder,
} from "../utils";

interface getNetworkFlightsLayerProps {
  userIntegrations: UserIntegrations;
}

export const isUserFlight = (
  network: Network,
  pilot: Pilot,
  userIntegrations: UserIntegrations,
) => {
  switch (network) {
    case "vatsim":
      return pilot.id === Number(userIntegrations.vatsimId);
    case "ivao":
      return pilot.id === Number(userIntegrations.ivaoId);
    default:
      return false;
  }
};

export const getIconBasedOnAircraftType = (flight: LiveFlight) => {
  const FALLBACK_AIRCRAFT_TYPE = "medium";
  const aircraftType = flight.flightPlan?.aircraft?.type;
  return aircraftType?.toLowerCase() || FALLBACK_AIRCRAFT_TYPE;
};

export const getNetworkFlightsLayer = ({
  userIntegrations,
}: getNetworkFlightsLayerProps) => {
  const router = useRouter();
  const { isIvaoFlightsLayerVisible, isVatsimFlightsLayerVisible } =
    useMapNetworkLayersStore();
  const { selectedFlight } = useSelectedFlightStore();

  const { data: vatsimFlightsData } = useQuery({
    queryKey: ["vatsim-flights"],
    queryFn: () => getNetworkFlights("vatsim"),
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const { data: ivaoFlightsData } = useQuery({
    queryKey: ["ivao-flights"],
    queryFn: () => getNetworkFlights("ivao"),
    refetchInterval: FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const joinedData = [
    ...(vatsimFlightsData || []),
    ...(ivaoFlightsData || []),
  ] as LiveFlights;

  const shouldBeVisible = (network: Network, flightId: LiveFlight["id"]) => {
    if (selectedFlight?.id === flightId) return false;

    switch (network) {
      case "vatsim":
        return isVatsimFlightsLayerVisible;
      case "ivao":
        return isIvaoFlightsLayerVisible;
    }
  };

  const getIconAccentColor = ({ network, position, pilot, id }: LiveFlight) => {
    const opacity = shouldBeVisible(network, id) ? undefined : 0;
    const isEmergency = isEmergencyTransponder(position.transponder);

    const isUser = isUserFlight(network, pilot, userIntegrations);

    if (isEmergency) {
      return hexToRGBAArray(FLIGHT_ICON_EMERGENCY_ACCENT_COLOR, opacity);
    } else if (isUser) {
      return hexToRGBAArray(FLIGHT_ICON_USER_ACCENT_COLOR, opacity);
    } else {
      return hexToRGBAArray(FLIGHT_ICON_ACCENT_COLOR[network], opacity);
    }
  };

  const handleClick = (d: any) => {
    const flight: LiveFlight = d.object;
    if (!flight) return;

    router.push(`/flights/${flight.id}?skipFlyTo=true`, {
      scroll: false,
    });
  };

  return new IconLayer({
    id: MAP_LAYERS.NETWORK_FLIGHTS_LAYER_ID,
    data: joinedData,
    iconAtlas: MAP_SPRITES.AIRCRAFT_ICONS,
    iconMapping: AIRCRAFT_SPRITE_ICON_MAPPING,
    getIcon: getIconBasedOnAircraftType,
    sizeUnits: "common",
    sizeMinPixels: 14,
    sizeMaxPixels: 32,
    sizeScale: 1,
    getPosition: ({ position }: LiveFlight) => [position.lng, position.lat],
    getAngle: ({ position }: LiveFlight) =>
      convertHeadingToAngle(position.heading),
    billboard: false,
    getColor: getIconAccentColor,
    autoHighlight: true,
    pickable: true,
    onClick: handleClick,
  });
};
