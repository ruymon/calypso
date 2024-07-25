import { addErrorToastToQueue } from "./toast";

export async function getWeatherRadarTime(): Promise<number> {
  const url = "https://tilecache.rainviewer.com/api/maps.json";

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (!result.ok) {
    const errorMsg = `Error fetching weather radar time: ${data.error}`;

    addErrorToastToQueue(errorMsg);
    throw new Error(errorMsg);
  }

  return data[0];
}
