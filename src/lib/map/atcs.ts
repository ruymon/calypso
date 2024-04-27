import {
  ATC_FACILITIES_ACCENT_COLOR,
  ATC_FACILITIES_SPRITE_ICON_MAPPING,
  ATC_FACILITIES_THAT_HAVE_LABEL,
  MAP_SPRITES,
} from "@/config/map";
import { ATCFacility, LiveATC, LiveATCGeometry, LiveATCs } from "@/types/atcs";
import { Network } from "@/types/networks";
import { IconLayer, PolygonLayer } from "deck.gl";
import { hexToRGBAArray } from "../utils";

interface NetworkATCsLayerProps {
  data: LiveATCs | null;
  network: Network;
  options: { isVisible: boolean; onClick?: (arg: any) => void };
}

export const getNetworkATCsPolygonLayer = ({
  data,
  network,
  options,
}: NetworkATCsLayerProps) => {
  const filteredFacilities = data?.filter((atc: LiveATC) => {
    return (
      !ATC_FACILITIES_THAT_HAVE_LABEL.includes(atc.facility) &&
      atc.geometry.length > 0
    );
  });

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
    data: filteredFacilities,
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
    onClick: options?.onClick,
  });
};

export const getNetworkATCsFacilitiesLabelLayer = ({
  data,
  network,
  options,
}: NetworkATCsLayerProps) => {
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
    visible: options.isVisible,
    onClick: options.onClick,
  });
};
