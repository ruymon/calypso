export interface AirportDetails {
  icao: string;
  iata: string | null;
  name: string;
  lat: number;
  lon: number;
  elevation: number;
  gates: AirportGate[];
  transitionAltitude: number;
  transitionLevel?: number;
  runways: AirportRunway[];
  metar: string | null;
  taf: string | null;
  stats: AirportStats;
}

export interface AirportStats {
  ivao: AirportNetworkStats;
  vatsim: AirportNetworkStats;
}

export interface AirportNetworkStats {
  departure: AirportNetworkFlight[] | [];
  arrival: AirportNetworkFlight[] | [];
}

export interface AirportNetworkFlight {
  id: string;
  callsign: string;
  departure: string | null;
  arrival: string | null;
}

export interface AirportGate {
  identifier: string;
  latitude: number;
  longitude: number;
}

export interface AirportRunway {
  identifier: string;
  latitude: number;
  longitude: number;
  gradient: number;
  magneticBearing: number;
  trueBearing: number;
  elevation: number;
  length: number;
  width: number;
  ilsCategory: string | null;
}

export interface AirportSummary {
  icao: string;
  iata: string | null;
  name: string;
  lat: number;
  lng: number;
}

export type AirportSummaryList = AirportSummary[];
