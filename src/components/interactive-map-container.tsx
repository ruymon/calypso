import { getNetworkATCs, getNetworkFlights } from "@/lib/flights";
import { InteractiveMap } from "./interactive-map";

interface InteractiveMapContainerProps {}

export async function InteractiveMapContainer({}: InteractiveMapContainerProps) {
  const ivaoFlightsData = await getNetworkFlights("ivao");
  const vatsimFlightsData = await getNetworkFlights("vatsim");
  const vatsimAtcsData = await getNetworkATCs("vatsim");

  return (
    <InteractiveMap
      ivaoFlightsData={ivaoFlightsData}
      vatsimAtcsData={vatsimAtcsData}
      vatsimFlightsData={vatsimFlightsData}
    />
  );
}
