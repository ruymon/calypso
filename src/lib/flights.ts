import { API_BASE_URL } from "@/constants/api";
import { LiveFlightDetail, LiveFlights } from "@/types/live-flights";
import { ParsedRoute } from "@/types/navigraph";
import { Network } from "@/types/networks";
import { getAccessToken } from "./auth";
import { addErrorToastToQueue } from "./toast";

export async function getNetworkFlights(
  network: Network
): Promise<LiveFlights> {
  const url = `${API_BASE_URL}/networks/${network}/flights`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (!result.ok) {
    const errorMsg = `Error fetching ${network.toUpperCase()} flights: ${data.error}`;

    addErrorToastToQueue(errorMsg);
    throw new Error(errorMsg);
  }

  return data;
}

export async function getFlightDetails(
  flightId: string
): Promise<LiveFlightDetail> {
  const url = `${API_BASE_URL}/networks/flights/${flightId}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (!result.ok) {
    throw new Error("Error fetching flight details:", data);
  }

  return data;
}

export async function getParsedRouted(
  route: string
): Promise<ParsedRoute | null> {
  const accessToken = await getAccessToken();

  const url = new URL(`${API_BASE_URL}/navigraph/route`);
  url.searchParams.append("route", route);

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    return null;
  }

  return data;
}

export interface AircraftImages {
  photos: AircraftImage[];
}

export interface AircraftImage {
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
}

export async function getAircraftImage(
  registration: string
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

  const singlePhotoData = data.photos[0] as AircraftImage;
  return singlePhotoData;
}
