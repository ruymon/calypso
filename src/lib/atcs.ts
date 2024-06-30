import {
  API_BASE_URL,
  FLIGHTS_REFETCH_INTERVAL_IN_SECONDS,
} from "@/constants/api";
import { LiveATCDetail, LiveATCs } from "@/types/atcs";
import { Network } from "@/types/networks";

export async function getNetworkATCs(network: Network): Promise<LiveATCs> {
  // const accessToken = await getAccessToken();
  const url = `${API_BASE_URL}/networks/${network}/atcs`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${accessToken}`,
    },
    next: {
      revalidate: FLIGHTS_REFETCH_INTERVAL_IN_SECONDS,
      tags: [`${network}-live-atcs`],
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (!result.ok) {
    throw new Error(`Error fetching ${network} ATCs: ${data.error}`);
  }

  return data;
}

export async function getATCDetails(atcId: string): Promise<LiveATCDetail> {
  const url = `${API_BASE_URL}/networks/atcs/${atcId}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (!result.ok) {
    throw new Error(`Error fetching ATC details: ${data.error}`);
  }

  return data;
}
