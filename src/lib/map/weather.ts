import { MAP_LAYERS } from "@/config/map";
import { WEATHER_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { useMapExtraLayersStore } from "@/stores/map-extra-layers-store";
import { useQuery } from "@tanstack/react-query";
import { BitmapLayer, TileLayer } from "deck.gl";
import { getWeatherRadarTime } from "../weather";

export const getWeatherLayer = () => {
  const { isWeatherLayerVisible } = useMapExtraLayersStore();

  const { data: tileTimestamp } = useQuery({
    queryKey: ["weather-radar-timestamp"],
    queryFn: () => getWeatherRadarTime(),
    refetchInterval: WEATHER_REFETCH_INTERVAL_IN_MILLISECONDS,
    enabled: isWeatherLayerVisible,
  });

  const tileLayer = new TileLayer<ImageBitmap>({
    id: MAP_LAYERS.WEATHER_LAYER_ID,
    data: `https://tilecache.rainviewer.com/v2/radar/${tileTimestamp}/256/{z}/{x}/{y}/7/1_1.png`,

    tileSize: 256,
    visible: isWeatherLayerVisible,
    opacity: 0.05,
    renderSubLayers: (props: any) => {
      const { boundingBox } = props.tile;
      return new BitmapLayer(props, {
        id: MAP_LAYERS.WEATHER_BITMAP_LAYER_ID,
        data: undefined,
        image: props.data,
        bounds: [
          boundingBox[0][0],
          boundingBox[0][1],
          boundingBox[1][0],
          boundingBox[1][1],
        ],
        opacity: 0.05,
      });
    },
  });

  return tileLayer;
};
