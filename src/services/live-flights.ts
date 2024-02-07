import { ivaoLiveFlightsAdapter } from "@/adapters/ivao-live-flights-adapter";
import { vatsimLiveFlightsAdapter } from "@/adapters/vatsim-live-flights-adapter";
import { LiveFlights } from "@/types/live-flights";
import { getIvaoData } from "./ivao";
import { getVatsimData } from "./vatsim";

export async function getLiveFlights(): Promise<LiveFlights | null> {
  const [vatsimRawData, ivaoRawData] = await Promise.all([
    getVatsimData(),
    getIvaoData(),
  ]);

  if (!vatsimRawData || !ivaoRawData) return null;

  const vatsimData = vatsimLiveFlightsAdapter(vatsimRawData.pilots);
  const ivaoData = ivaoLiveFlightsAdapter(ivaoRawData.clients.pilots);

  return [...ivaoData, ...vatsimData];
}

export async function getFlightDetails(id: string) {
  const liveFlights = await getLiveFlights();

  if (!liveFlights) {
    throw new Error('Error fetching network flights');
  }

  const requestedFlight = liveFlights.find(flight => flight.id === id);

  if (!requestedFlight) {
    throw new Error(`Error fetching details for ${id}`);
  }

  return requestedFlight;
}