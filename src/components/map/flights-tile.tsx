import { VatsimData } from '@/types/vatsim';
import { MapFlightMarker } from './flight-marker';
interface MapFlightsTileProps {};

export async function MapFlightsTile({}: MapFlightsTileProps) {
  const vatsimApiUrl = 'https://data.vatsim.net/v3/vatsim-data.json';
  const dataExpiry = 60 * 3; // 3 minutes

  const options: RequestInit = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
    next: {
      revalidate: dataExpiry
    }
  }
0
  const response = await fetch(vatsimApiUrl, options);
  const data = (await response.json()) as VatsimData;
  
  return data.pilots.map(flight => <MapFlightMarker key={flight.callsign} {...flight} />);
};
