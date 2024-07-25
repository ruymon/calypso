import { API_BASE_URL } from "@/constants/api";
import { NatTracks } from "@/types/prescribed-tracks";
import { getAccessToken } from "./auth";
import { addErrorToastToQueue } from "./toast";

export async function getNatTracks(): Promise<NatTracks> {
  const accessToken = await getAccessToken();
  const url = `${API_BASE_URL}/navdata/nat`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (!result.ok) {
    const errorMsg = `Error fetching NAT tracks: ${data.error}`;

    addErrorToastToQueue(errorMsg);
    throw new Error(errorMsg);
  }

  return data;
}
