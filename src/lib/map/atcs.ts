import { UserIntegrations } from "@/app/[locale]/(protected)/_components/map";
import {
  ATC_FACILITIES_ACCENT_COLOR,
  ATC_FACILITIES_SPRITE_ICON_MAPPING,
  ATC_FACILITIES_THAT_HAVE_LABEL,
  ATC_FACILITIES_Z_INDEX,
  MAP_LAYERS,
  MAP_SPRITES,
} from "@/config/map";
import { ATCS_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { useMapNetworkLayersStore } from "@/stores/map-network-layers-store";
import { ATCFacility, LiveATC, LiveATCs } from "@/types/atcs";
import { useQuery } from "@tanstack/react-query";
import { IconLayer, PolygonLayer } from "deck.gl";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { getNetworkATCs } from "../atcs";
import { hexToRGBAArray } from "../utils";

interface getNetworkATCsLayerProps {
  userIntegrations: UserIntegrations;
}

export const getNetworkATCsLayer = ({
  userIntegrations,
}: getNetworkATCsLayerProps) => {
  const router = useRouter();
  const { isIvaoATCsLayerVisible, isVatsimATCsLayerVisible } =
    useMapNetworkLayersStore();

  const { data: vatsimAtcsData } = useQuery({
    queryKey: ["vatsim-atcs"],
    queryFn: () => getNetworkATCs("vatsim"),
    refetchInterval: ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const { data: ivaoAtcsData } = useQuery({
    queryKey: ["ivao-atcs"],
    queryFn: () => getNetworkATCs("ivao"),
    refetchInterval: ATCS_REFETCH_INTERVAL_IN_MILLISECONDS,
    retry: 3,
    retryDelay: 1000,
  });

  const handleClick = (d: any) => {
    const atc: LiveATC = d.object;
    if (!atc) return;

    router.push(`/atcs/${atc.id}`);
  };

  const vatsimData = useMemo(() => {
    if (!vatsimAtcsData) return { shapeFacilities: [], labelFacilities: [] };
    const filteredShapesFacilites = filterOnlyShapeFacilities(vatsimAtcsData);
    const filteredLabelFacilites = filterOnlyLabelFacilities(vatsimAtcsData);

    const sortedShapeFacilitiesByZIndex = filteredShapesFacilites.sort(
      (a, b) => {
        const aIndex = ATC_FACILITIES_Z_INDEX[a.facility as ATCFacility];
        const bIndex = ATC_FACILITIES_Z_INDEX[b.facility as ATCFacility];

        return aIndex - bIndex;
      },
    );

    return {
      shapeFacilities: sortedShapeFacilitiesByZIndex,
      labelFacilities: filteredLabelFacilites,
    };
  }, [
    vatsimAtcsData,
    ivaoAtcsData,
    isIvaoATCsLayerVisible,
    isVatsimATCsLayerVisible,
  ]);

  const ivaoData = useMemo(() => {
    if (!ivaoAtcsData) return { shapeFacilities: [], labelFacilities: [] };

    const filteredShapesFacilites = filterOnlyShapeFacilities(ivaoAtcsData);
    const filteredLabelFacilites = filterOnlyLabelFacilities(ivaoAtcsData);

    const sortedShapeFacilitiesByZIndex = filteredShapesFacilites.sort(
      (a, b) => {
        const aIndex = ATC_FACILITIES_Z_INDEX[a.facility as ATCFacility];
        const bIndex = ATC_FACILITIES_Z_INDEX[b.facility as ATCFacility];

        return aIndex - bIndex;
      },
    );

    return {
      shapeFacilities: sortedShapeFacilitiesByZIndex,
      labelFacilities: filteredLabelFacilites,
    };
  }, [ivaoAtcsData, isIvaoATCsLayerVisible]);

  const getATCColor = (
    { facility }: LiveATC,
    options?: { overrideOpacity: boolean; opacity?: number },
  ) => {
    const opacity = options?.overrideOpacity
      ? undefined
      : options?.opacity || 20;

    const accentColor = ATC_FACILITIES_ACCENT_COLOR[facility as ATCFacility];
    return hexToRGBAArray(accentColor, opacity);
  };

  const shouldBeVisible = (network: "IVAO" | "VATSIM") => {
    switch (network) {
      case "VATSIM":
        return isVatsimATCsLayerVisible;
      case "IVAO":
        return isIvaoATCsLayerVisible;
    }
  };

  const ivaoShapesLayer = new PolygonLayer({
    id: MAP_LAYERS.IVAO_ATCS_SHAPES_LAYER_ID,
    data: ivaoData.shapeFacilities,
    getPolygon: ({ geometry }: LiveATC) => geometry,
    getLineColor: (d) =>
      getATCColor(d, {
        overrideOpacity: true,
      }),
    getFillColor: (d) => getATCColor(d),
    colorFormat: "RGBA",
    depthTest: true,
    filled: true,
    getLineWidth: 20,
    lineWidthMinPixels: 1,
    pickable: true,
    transitions: {
      getFillColor: 250,
      getLineColor: 250,
    },
    autoHighlight: true,
    highlightColor({ object }) {
      return getATCColor(object, { overrideOpacity: false, opacity: 60 });
    },
    visible: isIvaoATCsLayerVisible,
    onClick: handleClick,
  });

  const vatsimShapesLayer = new PolygonLayer({
    id: MAP_LAYERS.VATSIM_ATCS_SHAPES_LAYER_ID,
    data: vatsimData.shapeFacilities,
    getPolygon: ({ geometry }: LiveATC) => geometry,
    getLineColor: (d) =>
      getATCColor(d, {
        overrideOpacity: true,
      }),
    getFillColor: (d) => getATCColor(d),
    colorFormat: "RGBA",
    depthTest: true,
    filled: true,
    getLineWidth: 20,
    lineWidthMinPixels: 1,
    pickable: true,
    transitions: {
      getFillColor: 250,
      getLineColor: 250,
    },
    autoHighlight: true,
    highlightColor({ object }) {
      return getATCColor(object, { overrideOpacity: false, opacity: 60 });
    },
    visible: isVatsimATCsLayerVisible,
    onClick: handleClick,
  });

  const labelLayer = new IconLayer({
    id: MAP_LAYERS.NETWORK_ATCS_LABEL_LAYER_ID,
    data: [...vatsimData.labelFacilities, ...ivaoData.labelFacilities],
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

  return [ivaoShapesLayer, vatsimShapesLayer, labelLayer];
};

function filterOnlyShapeFacilities(data: LiveATCs) {
  return data.filter((atc: LiveATC) => {
    return !ATC_FACILITIES_THAT_HAVE_LABEL.includes(atc.facility);
  });
}

function filterOnlyLabelFacilities(data: LiveATCs) {
  return data.filter((atc: LiveATC) => {
    return ATC_FACILITIES_THAT_HAVE_LABEL.includes(atc.facility);
  });
}
