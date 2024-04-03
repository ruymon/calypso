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
    next: {
      revalidate: 60 * 5, // 5 minutes
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    return null;
  }

  return data;
}

export interface AircraftImage {
  photos: {
    id: string;
    thumbnail: {
      src: string;
      size: {
        width: number;
        height: number;
      };
    };
    thumbnail_large: {
      src: string;
      size: {
        width: number;
        height: number;
      };
    };
    link: string;
    photographer: string;
  }[];
}

export async function getAircraftImage(
  registration: string,
): Promise<AircraftImage | null> {
  const url = `https://api.planespotters.net/pub/photos/reg/${registration}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    return null;
  }

  return data;
}
