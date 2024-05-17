import { getAirportsSummary } from "@/lib/navdata";
import { Map } from "./map";
import { MapFooter } from "./map-footer";

interface MapContainerProps {}

export async function MapContainer({}: MapContainerProps) {
  const airportsSummary = await getAirportsSummary();

  return (
    <Map
      initialData={{
        airportsSummary,
      }}
    >
      <MapFooter />
    </Map>
  );
}
