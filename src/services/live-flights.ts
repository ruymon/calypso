import { LiveFlights } from "@/types/live-flights"
import { getVatsimData } from "./vatsim";
import { getIvaoData } from "./ivao";
import { vatsimLiveFlightsAdapter } from "@/adapters/vatsim-live-flights-adapter";
import { ivaoLiveFlightsAdapter } from "@/adapters/ivao-live-flights-adapter";

export async function getLiveFlights(): Promise<LiveFlights | null> {
  const [ vatsimRawData, ivaoRawData ] = await Promise.all([
    getVatsimData(),
    getIvaoData(),
  ]);

  if (!vatsimRawData || !ivaoRawData) return null;

  const vatsimData = vatsimLiveFlightsAdapter(vatsimRawData.pilots);
  const ivaoData = ivaoLiveFlightsAdapter();

  return [...ivaoData, ...vatsimData];
}

export async function getFlightDetails(id:string) {
  const flights = await getLiveFlights();

  if (!flights) throw new Error('No flights found');

  const flight = flights.find(flight => flight.id === id);

  if (!flight) throw new Error('Flight not found');

  return flight;
}