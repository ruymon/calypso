import { API_BASE_URL } from "@/constants/api";
import { LiveFlightDetail } from "@/types/live-flights";

export async function getFlightDetails(
  flightId: string,
): Promise<LiveFlightDetail | null> {
  const url = `${API_BASE_URL}/networks/flights/${flightId}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {},
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    return null;
  }

  return data;
}
