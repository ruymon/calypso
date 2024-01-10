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