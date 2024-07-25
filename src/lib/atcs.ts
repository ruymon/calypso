import { API_BASE_URL } from "@/constants/api";
import { LiveATCDetail, LiveATCs } from "@/types/atcs";
import { Network } from "@/types/networks";
import { addErrorToastToQueue } from "./toast";

export async function getNetworkATCs(network: Network): Promise<LiveATCs> {
  const url = `${API_BASE_URL}/networks/${network}/atcs`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (!result.ok) {
    const errorMsg = `Error fetching ${network.toUpperCase()} ATCs: ${data.error}`;

    addErrorToastToQueue(errorMsg);
    throw new Error(errorMsg);
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
