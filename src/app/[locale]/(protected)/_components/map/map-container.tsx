import { getAirportsSummary } from "@/lib/navdata";
import { Suspense } from "react";
import { Map } from "./map";
import { MapFooter } from "./map-footer";

interface MapContainerProps {}

export async function MapContainer({}: MapContainerProps) {
  const airportsSummary = await getAirportsSummary();

  return (
    <Map airportsSummary={airportsSummary}>
      <Suspense fallback={null}>
        <MapFooter />
      </Suspense>
    </Map>
  );
}
