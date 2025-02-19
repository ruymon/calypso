import { API_BASE_URL } from "@/constants/api";
import { AirportSummaryList } from "@/types/airports";
import { AiracCycle } from "@/types/navigraph";
import { getAccessToken } from "./auth";
import { addErrorToastToQueue } from "./toast";

export async function getCurrentAiracCycle(): Promise<AiracCycle | null> {
  const accessToken = await getAccessToken();

  const url = `${API_BASE_URL}/navigraph/airac`;

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

export async function getAirportsSummary(): Promise<AirportSummaryList> {
  const accessToken = await getAccessToken();

  const url = `${API_BASE_URL}/airports/summary`;

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
    const errorMsg = `Error fetching airports summary: ${data.error}`;

    addErrorToastToQueue(errorMsg);
    throw new Error(errorMsg);
  }

  return data;
}
