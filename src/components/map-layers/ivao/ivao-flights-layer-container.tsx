import { FLIGHTS_REFETCH_INTERVAL_IN_SECONDS } from "@/constants/api";
import { LiveFlights } from "@/types/live-flights";
import { IvaoFlightsLayer } from "./ivao-flights-layer";

export async function getIvaoFlights(): Promise<LiveFlights | null> {
  const url = "https://static.skyscope.app/liveflights/ivao.json";

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: FLIGHTS_REFETCH_INTERVAL_IN_SECONDS,
      tags: ["ivao-live-flights"],
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    console.error("Error fetching IVAO flights", data);
    return null;
  }

  return data;
}

export async function IvaoFlightsLayerContainer() {
  const data = await getIvaoFlights();
  return <IvaoFlightsLayer initialData={data} />;
}
