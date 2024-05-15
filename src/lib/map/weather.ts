import { WEATHER_REFETCH_INTERVAL_IN_MILLISECONDS } from "@/constants/api";
import { WeatherRadar } from "@/types/weather";
import { useQuery } from "@tanstack/react-query";
import { BitmapLayer, TileLayer } from "deck.gl";
import { getWeatherRadar } from "../weather";

export interface WeatherLayerProps {
  weatherRadarInitialData: WeatherRadar;
}
export const getWeatherLayer = ({
  weatherRadarInitialData,
}: WeatherLayerProps) => {
  const { data: weatherData } = useQuery({
    queryKey: ["weather"],
    queryFn: () => getWeatherRadar(),
    initialData: weatherRadarInitialData,
    refetchInterval: WEATHER_REFETCH_INTERVAL_IN_MILLISECONDS,
  });

  const weatherTilePath = weatherData.radar.nowcast.pop()?.path;

  const tileLayer = new TileLayer<ImageBitmap>({
    id: "weather-tile-layer",
    data: `https://tilecache.rainviewer.com/v2/radar/${weatherTilePath}/256/{z}/{x}/{y}/1/0_1.png`,

    tileSize: 256,
    renderSubLayers: (props: any) => {
      const { boundingBox } = props.tile;
      return new BitmapLayer(props, {
        id: "weather-bitmap-layer",
        data: undefined,
        image: props.data,
        bounds: [
          boundingBox[0][0],
          boundingBox[0][1],
          boundingBox[1][0],
          boundingBox[1][1],
        ],
      });
    },
  });

  return tileLayer;
};
