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
    throw new Error(`Error fetching weather radar data: ${data.error}`);
  }

  return data[0];
}
