import { API_BASE_URL } from "@/constants/api";
import { AirportDetails } from "@/types/airports";
import { differenceInMinutes } from "date-fns";
import { decode } from "metar-decoder";
import { DecodedMetar } from "metar-decoder/lib/types";
import { getAccessToken } from "./auth";

export async function getAirportDetails(
  icaoCode: string
): Promise<AirportDetails> {
  const accessToken = await getAccessToken();
  const url = `${API_BASE_URL}/airports/${icaoCode}`;

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
    throw new Error("Error fetching airport details:", data);
  }

  return data;
}

export function getDecodedMetar(metar: string): DecodedMetar | null {
  return decode(metar);
}

export function getAltimeterValueInHpa(qnh: number): number {
  return qnh * 33.8639;
}

export type MetarExpirationStatus = "expired" | "fresh" | "closeToExpiration";

export function getMetarExpirationStatus(
  recordedAt: Date | string
): MetarExpirationStatus {
  if (typeof recordedAt === "string") {
    recordedAt = new Date(recordedAt);
  }

  const diffInMinutes = differenceInMinutes(new Date(), recordedAt);

  if (diffInMinutes > 60) return "expired";
  if (diffInMinutes > 45) return "closeToExpiration";

  return "fresh";
}
