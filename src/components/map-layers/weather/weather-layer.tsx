"use client";

import { useMapLayersStore } from "@/stores/map-layers-store";
import { Layer, Source } from "react-map-gl";
import {
  WeatherRadarTile,
  WeatherRadarTilesData,
} from "./weather-layer-container";

interface WeatherLayerProps {
  tilesData: WeatherRadarTilesData;
}

const WEATHER_RADAR_TILE_SIZE = 256;
const SMOOTH_RADAR_TILE = true;
const SNOW_IN_SEPARATE_COLOR = true;
const WEATHER_RADAR_COLOR_SCHEMES = [
  {
    id: 0,
    name: "Black and white",
  },
  {
    id: 1,
    name: "RainViewer Standard",
  },
  {
    id: 2,
    name: "Universal Blue",
  },
  {
    id: 3,
    name: "TITAN",
  },
  {
    id: 4,
    name: "The Weather Channel (TWC)",
  },
  {
    id: 5,
    name: "Meteored",
  },
  {
    id: 6,
    name: "NEXRAD Level III",
  },
  {
    id: 7,
    name: "Rainbow @ SELEX-IS",
  },
  {
    id: 8,
    name: "Rainbow @ SELEX-IS",
  },
];

export function WeatherLayer({ tilesData }: WeatherLayerProps) {
  const [isWeatherLayerVisible] = useMapLayersStore((state) => [
    state.isWeatherLayerVisible,
  ]);

  const tileBaseUrl = tilesData.host;
  const nowcastTile = tilesData.radar.nowcast[0] as WeatherRadarTile;

  const tileUrl = `${tileBaseUrl}${
    nowcastTile.path
  }/${WEATHER_RADAR_TILE_SIZE}/{z}/{x}/{y}/${
    WEATHER_RADAR_COLOR_SCHEMES[3]?.id
  }/${+SMOOTH_RADAR_TILE}_${+SNOW_IN_SEPARATE_COLOR}.png`;

  return (
    <Source
      id="weather-radar-source"
      type="raster"
      tileSize={WEATHER_RADAR_TILE_SIZE}
      tiles={[tileUrl]}
    >
      <Layer
        id="weather-radar-layer"
        type="raster"
        source="weather-source"
        layout={{
          visibility: isWeatherLayerVisible ? "visible" : "none",
        }}
        paint={{
          "raster-opacity": 0.25,
        }}
      />
    </Source>
  );
}
