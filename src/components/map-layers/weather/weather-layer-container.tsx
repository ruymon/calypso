import { WeatherLayer } from "./weather-layer";

export interface WeatherRadarTile {
  time: number;
  path: string;
}

export interface WeatherRadarTilesData {
  version: string;
  generated: number;
  host: string;
  radar: {
    past: WeatherRadarTile[];
    nowcast: WeatherRadarTile[];
  };
  satellite: {
    infrared: WeatherRadarTile[];
  };
}

async function fetchWeatherRadarTilesData(): Promise<WeatherRadarTilesData | null> {
  const url = "https://api.rainviewer.com/public/weather-maps.json";

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 30 * 60, // 30 minutes in seconds
      tags: ["weather-radar-tiles"],
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    console.error("Error fetching RainViewer weather radar tiles", data);
    return null;
  }

  return data;
}

export async function WeatherLayerContainer() {
  const data = await fetchWeatherRadarTilesData();

  if (!data) return null;

  return (
    <WeatherLayer tilesData={data} />
  );
}
