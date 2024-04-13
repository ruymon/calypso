import { getNetworkFlights } from "@/lib/flights";
import { IvaoFlightsLayer } from "./ivao-flights-layer";

export async function IvaoFlightsLayerContainer() {
  const data = await getNetworkFlights("ivao");
  return <IvaoFlightsLayer initialData={data} />;
}
