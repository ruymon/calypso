import { getAirportsSummary, getCurrentAiracCycle } from "@/lib/navdata";
import { InteractiveMap } from "./interactive-map";

interface InteractiveMapContainerProps {}

export async function InteractiveMapContainer({}: InteractiveMapContainerProps) {
  const [currentAiracCycle, airportsSummary] = await Promise.all([
    getCurrentAiracCycle(),
    getAirportsSummary(),
  ]);

  return (
    <InteractiveMap
      currentAiracCycle={currentAiracCycle}
      airportsSummary={airportsSummary}
    />
  );
}
