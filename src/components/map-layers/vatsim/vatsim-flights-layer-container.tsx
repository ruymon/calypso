import { getNetworkFlights } from "@/lib/flights";
import { VatsimFlightsLayer } from "./vatsim-flights-layer";

export async function VatsimFlightsLayerContainer() {
  const data = await getNetworkFlights("vatsim");
  return <VatsimFlightsLayer initialData={data} />;
}
