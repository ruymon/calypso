import {
  AIRPORT_SPRITE_ICON_MAPPING,
  MAP_LAYERS,
  MAP_SPRITES,
} from "@/config/map";
import { useMapExtraLayersStore } from "@/stores/map-extra-layers-store";
import { AirportSummary } from "@/types/airports";
//@ts-ignore
import { CollisionFilterExtension } from "@deck.gl/extensions";
import { useQuery } from "@tanstack/react-query";
import { IconLayer } from "deck.gl";
import { useRouter } from "next/navigation";
import { indigo } from "tailwindcss/colors";
import { getAirportsSummary } from "../navdata";
import { hexToRGBAArray } from "../utils";

export const getAirportsLayer = () => {
  const { isAirportsLayerVisible } = useMapExtraLayersStore();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ["airports-summary"],
    queryFn: () => getAirportsSummary(),
    retry: 3,
    retryDelay: 1000,
  });

  const handleClick = (d: any) => {
    const airport: AirportSummary = d.object;
    if (!airport) return;

    router.push(`/airports/${airport.icao.toLowerCase()}`);
  };

  return new IconLayer({
    id: MAP_LAYERS.AIRPORTS_LAYER_ID,
    data: data,
    iconAtlas: MAP_SPRITES.AIRPORT_ICONS,
    iconMapping: AIRPORT_SPRITE_ICON_MAPPING,
    getIcon: (d: AirportSummary) => "airport",
    getSize: 14,
    getColor: (d: AirportSummary) => hexToRGBAArray(indigo[400]),
    sizeUnits: "pixels",
    getPosition: (d: AirportSummary) => [d.lng, d.lat],
    pickable: true,
    onClick: handleClick,
    visible: isAirportsLayerVisible,
    extensions: [new CollisionFilterExtension()],
    collisionTestProps: {
      alphaCutoff: -1,
      sizeScale: 10,
    },
  });
};
