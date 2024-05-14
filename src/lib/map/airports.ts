import { AIRPORT_SPRITE_ICON_MAPPING, MAP_SPRITES } from "@/config/map";
import { AirportSummary, AirportSummaryList } from "@/types/airports";
//@ts-ignore
import { CollisionFilterExtension } from "@deck.gl/extensions";
import { IconLayer } from "deck.gl";
import { indigo } from "tailwindcss/colors";
import { hexToRGBAArray } from "../utils";

interface AirportSummaryLayerProps {
  data: AirportSummaryList | null;
  options: {
    isVisible: boolean;
    onClick?: (arg: any) => void;
  };
}

export const getAirportSummaryLayer = ({
  data,
  options,
}: AirportSummaryLayerProps) => {
  return new IconLayer({
    id: "airports-layer",
    data: data,
    iconAtlas: MAP_SPRITES.AIRPORT_ICONS,
    iconMapping: AIRPORT_SPRITE_ICON_MAPPING,
    getIcon: (d: AirportSummary) => "airport",
    getSize: 14,
    getColor: (d: AirportSummary) => hexToRGBAArray(indigo[400]),
    sizeUnits: "pixels",
    getPosition: (d: AirportSummary) => [d.lng, d.lat],
    pickable: true,
    onClick: options.onClick,
    visible: options.isVisible,
    extensions: [new CollisionFilterExtension()],
    collisionTestProps: {
      alphaCutoff: -1,
      sizeScale: 10,
    },
  });
};
