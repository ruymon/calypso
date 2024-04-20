import { getNetworkATCs, getNetworkFlights } from "@/lib/flights";
import { getCurrentAiracCycle } from "@/lib/navdata";
import { InteractiveMap } from "./interactive-map";

interface InteractiveMapContainerProps {}

export async function InteractiveMapContainer({}: InteractiveMapContainerProps) {
  const ivaoFlightsData = await getNetworkFlights("ivao");
  const vatsimFlightsData = await getNetworkFlights("vatsim");
  const vatsimAtcsData = await getNetworkATCs("vatsim");
  const currentAiracCycle = await getCurrentAiracCycle();

  return (
    <InteractiveMap
      ivaoFlightsData={ivaoFlightsData}
      vatsimAtcsData={vatsimAtcsData}
      vatsimFlightsData={vatsimFlightsData}
      currentAiracCycle={currentAiracCycle}
    />
  );
}
