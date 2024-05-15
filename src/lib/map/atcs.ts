import {
  ATC_FACILITIES_ACCENT_COLOR,
  ATC_FACILITIES_SPRITE_ICON_MAPPING,
  ATC_FACILITIES_THAT_HAVE_LABEL,
  MAP_LAYERS,
  MAP_SPRITES,
} from "@/config/map";
import { ATCS_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { useMapNetworkLayersStore } from "@/stores/map-network-layers-store";
import { ATCFacility, LiveATC, LiveATCGeometry, LiveATCs } from "@/types/atcs";
import { Network } from "@/types/networks";
import { useQuery } from "@tanstack/react-query";
import { IconLayer, PolygonLayer } from "deck.gl";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { getNetworkATCs } from "../flights";
import { hexToRGBAArray } from "../utils";

interface NetworkATCsLayerProps {
  vatsimAtcsInitialData: LiveATCs | null;
  ivaoAtcsInitialData: LiveATCs | null;
}

export const getNetworkATCsLayer = ({
  vatsimAtcsInitialData,
  ivaoAtcsInitialData,
}: NetworkATCsLayerProps) => {
  const router = useRouter();
  const { isIvaoATCsLayerVisible, isVatsimATCsLayerVisible } =
    useMapNetworkLayersStore();

  const { data: vatsimAtcsData } = useQuery({
    queryKey: ["vatsim-atcs"],
    initialData: vatsimAtcsInitialData,
    queryFn: () => getNetworkATCs("vatsim"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const { data: ivaoAtcsData } = useQuery({
    queryKey: ["ivao-atcs"],
    initialData: ivaoAtcsInitialData,
    queryFn: () => getNetworkATCs("ivao"),
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    refetchInterval: ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const handleClick = (d: any) => {
    const atc: LiveATC = d.object;
    if (!atc) return;

    router.push(`/atcs/${atc.callsign.toLowerCase()}`);
  };

  const atcsData = useMemo(() => {
    const joinedData = [...(vatsimAtcsData || []), ...(ivaoAtcsData || [])];
    const shapeFacilities = filterOnlyShapeFacilities(joinedData);
    const labelFacilities = filterOnlyLabelFacilities(joinedData);

    return {
      shapeFacilities,
      labelFacilities,
    };
  }, [
    ivaoAtcsData,
    vatsimAtcsData,
    isIvaoATCsLayerVisible,
    isVatsimATCsLayerVisible,
  ]);

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

  const shouldBeVisible = (network: Network) => {
    switch (network) {
      case "vatsim":
        return isVatsimATCsLayerVisible;
      case "ivao":
        return isIvaoATCsLayerVisible;
    }
  };

  const getATCColor = (
    { facility, network }: LiveATC,
    options?: { overrideOpacity: boolean },
  ) => {
    const DEFAULT_OPACITY = options?.overrideOpacity ? undefined : 40;

    const isVisible = shouldBeVisible(network);
    const opacity = isVisible ? DEFAULT_OPACITY : 0;

    const accentColor = ATC_FACILITIES_ACCENT_COLOR[facility as ATCFacility];
    return hexToRGBAArray(accentColor, opacity);
  };

  const shapesLayer = new PolygonLayer({
    id: MAP_LAYERS.NETWORK_ATCS_SHAPES_LAYER_ID,
    data: atcsData.shapeFacilities,
    getPolygon: getATCPolygonShape,
    getLineColor: (d) =>
      getATCColor(d, {
        overrideOpacity: true,
      }),
    getFillColor: (d) => getATCColor(d),
    colorFormat: "RGBA",
    filled: true,
    getLineWidth: 20,
    lineWidthMinPixels: 1,
    pickable: true,
    autoHighlight: true,
    onClick: handleClick,
  });

  const labelLayer = new IconLayer({
    id: MAP_LAYERS.NETWORK_ATCS_LABEL_LAYER_ID,
    data: atcsData.labelFacilities,
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
    getSize: ({ network }: LiveATC) => (shouldBeVisible(network) ? 12 : 0),
    sizeUnits: "pixels",
    getPosition: (d: LiveATC) => [d.longitude, d.latitude],
    pickable: true,
    onClick: handleClick,
  });

  return [shapesLayer, labelLayer];
};

function filterOnlyShapeFacilities(data: LiveATCs) {
  return data.filter((atc: LiveATC) => {
    return (
      !ATC_FACILITIES_THAT_HAVE_LABEL.includes(atc.facility) &&
      atc.geometry.length > 4
    );
  });
}

function filterOnlyLabelFacilities(data: LiveATCs) {
  return data.filter((atc: LiveATC) => {
    return ATC_FACILITIES_THAT_HAVE_LABEL.includes(atc.facility);
  });
}
