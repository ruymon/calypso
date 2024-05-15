import { WEATHER_REFETCH_INTERVAL_IN_SECONDS } from "@/constants/api";
import { WeatherRadar } from "@/types/weather";

export async function getWeatherRadar(): Promise<WeatherRadar> {
  const url = "https://api.rainviewer.com/public/weather-maps.json";

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: WEATHER_REFETCH_INTERVAL_IN_SECONDS,
      tags: ["weather-radar"],
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (!result.ok) {
    throw new Error(`Error fetching weather radar data: ${data.error}`);
  }

  return data;
}
