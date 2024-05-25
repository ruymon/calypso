import {
  AIRCRAFT_SPRITE_ICON_MAPPING,
  FLIGHT_ICON_ACCENT_COLOR,
  FLIGHT_ICON_EMERGENCY_ACCENT_COLOR,
  MAP_LAYERS,
  MAP_SPRITES,
} from "@/config/map";
import { FLIGHTS_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { useMapNetworkLayersStore } from "@/stores/map-network-layers-store";
import { LiveFlight, LiveFlights } from "@/types/live-flights";
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

export const getNetworkFlightsLayer = () => {
  const router = useRouter();
  const { isIvaoFlightsLayerVisible, isVatsimFlightsLayerVisible } =
    useMapNetworkLayersStore();

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

  const shouldBeVisible = (network: Network) => {
    switch (network) {
      case "vatsim":
        return isVatsimFlightsLayerVisible;
      case "ivao":
        return isIvaoFlightsLayerVisible;
    }
  };

  const getIconBasedOnAircraftType = (flight: LiveFlight) => {
    const FALLBACK_AIRCRAFT_TYPE = "medium";
    const aircraftType = flight.flightPlan?.aircraft?.type;
    return aircraftType?.toLowerCase() || FALLBACK_AIRCRAFT_TYPE;
  };

  const getIconAccentColor = ({ network, position }: LiveFlight) => {
    const opacity = shouldBeVisible(network) ? undefined : 0;
    const isEmergency = isEmergencyTransponder(position.transponder);

    const accentColor = isEmergency
      ? FLIGHT_ICON_EMERGENCY_ACCENT_COLOR
      : FLIGHT_ICON_ACCENT_COLOR[network];

    return hexToRGBAArray(accentColor, opacity);
  };

  const handleClick = (d: any) => {
    const flight: LiveFlight = d.object;
    if (!flight) return;

    router.push(`/flights/${flight.id}`, {
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
    sizeMinPixels: 12,
    sizeMaxPixels: 28,
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
