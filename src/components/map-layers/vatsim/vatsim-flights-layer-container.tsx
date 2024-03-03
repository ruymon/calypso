import { FLIGHTS_REFETCH_INTERVAL_IN_SECONDS } from "@/constants/api";
import { LiveFlights } from "@/types/live-flights";
import { VatsimFlightsLayer } from "./vatsim-flights-layer";

export async function getVatsimFlights(): Promise<LiveFlights | null> {
  const url = "https://static.skyscope.app/liveflights/vatsim.json";

  const options: RequestInit = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: FLIGHTS_REFETCH_INTERVAL_IN_SECONDS,
      tags: ["vatsim-live-flights"],
    },
  };

  const result = await fetch(url, options);
  const data = await result.json();

  if (result.status !== 200) {
    console.error("Error fetching Vatsim flights", data);
    return null;
  }

  return data;
}

export async function VatsimFlightsLayerContainer() {
  const data = await getVatsimFlights();
  return <VatsimFlightsLayer initialData={data} />;
}
