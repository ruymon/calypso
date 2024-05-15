import { getNetworkATCs, getNetworkFlights } from "@/lib/flights";
import { getAirportsSummary } from "@/lib/navdata";
import { Map } from "./map";
import { MapFooter } from "./map-footer";

interface MapContainerProps {}

export async function MapContainer({}: MapContainerProps) {
  const [
    airportsSummary,
    vatsimAtcsInitialData,
    ivaoAtcsInitialData,
    vatsimFlightsInitialData,
    ivaoFlightsInitialData,
  ] = await Promise.all([
    getAirportsSummary(),
    getNetworkATCs("vatsim"),
    getNetworkATCs("ivao"),
    getNetworkFlights("vatsim"),
    getNetworkFlights("ivao"),
  ]);

  return (
    <Map
      initialData={{
        ivaoAtcsInitialData,
        vatsimAtcsInitialData,
        vatsimFlightsInitialData,
        ivaoFlightsInitialData,
        airportsSummary,
      }}
    >
      <MapFooter />
    </Map>
  );
}
