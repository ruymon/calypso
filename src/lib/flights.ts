import {
  API_BASE_URL,
  FLIGHTS_REFETCH_INTERVAL_IN_SECONDS,
} from "@/constants/api";
import { LiveFlightDetail, LiveFlights, Network } from "@/types/live-flights";
import { getAccessToken } from "./auth";

export async function getNetworkFlights(
  network: Network,
): Promise<LiveFlights | null> {
  const accessToken = await getAccessToken();
  const url = `${API_BASE_URL}/networks/${network}/flights`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      revalidate: FLIGHTS_REFETCH_INTERVAL_IN_SECONDS,
      tags: [`${network}-live-flights`],
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    console.error(`Error fetching ${network} flights`, data);
    return null;
  }

  return data;
}

export async function getFlightDetails(
  flightId: string,
): Promise<LiveFlightDetail | null> {
  const accessToken = await getAccessToken();
  const url = `${API_BASE_URL}/networks/flights/${flightId}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
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
