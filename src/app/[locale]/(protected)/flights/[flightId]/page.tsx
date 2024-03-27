import { API_BASE_URL } from "@/constants/api";
import { LiveFlightDetail } from "@/types/live-flights";
import { notFound } from "next/navigation";
import { FlightDetails } from "./_components/flight-details";

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

interface FlightsDetailPageProps {
  params: {
    flightId: string;
  };
}

export default async function FlightsDetailPage({
  params: { flightId },
}: FlightsDetailPageProps) {
  if (!flightId) {
    return notFound();
  }

  const data = await getFlightDetails(flightId);

  if (!data) {
    return notFound();
  }

  return <FlightDetails initialData={data} />;
}
