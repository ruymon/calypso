import { Network } from "./networks";

export type LiveFlights = LiveFlight[];

export type AircraftWakeTurbulenceCategory =
  | "heavy"
  | "helicopter"
  | "super"
  | "light"
  | "medium"
  | "supersonic"
  | "unknown";

export interface LiveFlight {
  id: string;
  callsign: string;
  departure: string | null;
  departureLat: number | null;
  departureLng: number | null;
  arrival: string | null;
  arrivalLat: number | null;
  arrivalLng: number | null;
  alternative: string | null;
  alternativeLat: number | null;
  alternativeLng: number | null;
  alternative2: string | null;
  alternative2Lat: number | null;
  alternative2Lng: number | null;
  aircraft: string | null;
  aircraftRegistration: string | null;
  aircraftType: AircraftWakeTurbulenceCategory | null;
  transponder: string;
  network: Network;
  pilotId: string;
  lat: number;
  lng: number;
  heading: number;
}

export interface TrackPosition {
  lat: number;
  lng: number;
  altitude: number;
  groundSpeed: number;
  heading: number;
  ground: boolean;
  timestamp: number;
}

export interface LiveFlightDetail {
  id: string;
  pilot: Pilot;
  callsign: string;
  network: Network;
  position: Position;
  flightPlan?: FlightPlan;
  airline?: Airline;
  tracks: TrackPosition[];
}

export interface Pilot {
  id: number;
  name: string;
  rating: string;
}

export interface Position {
  altitude: number;
  lat: number;
  lng: number;
  groundSpeed: number;
  heading: number;
  onGround: boolean;
  transponder: string;
}

export interface FlightPlan {
  flightRules: string;
  flightType: string;
  departure?: Airport;
  arrival?: Airport;
  aircraft?: Aircraft;
  level: number;
  route: string;
  remarks: string;
  cruiseTas: string;
  departureTime: string;
  enrouteTime: string;
  endurance: string;
  alternate?: Airport;
  alternate2?: Airport;
}

export interface Airport {
  icao: string;
  iata?: string;
  name: string;
  lat: number;
  lng: number;
}

export interface Aircraft {
  icao: string;
  wakeTurbulence: string;
  registration: string;
  transponderTypes: string;
  equipment: string;
  type: AircraftWakeTurbulenceCategory;
}

export interface Airline {
  id: string;
  name: string;
  icao: string;
  image: string;
  callsign: string;
}

export type EmergencyTransponder = "7500" | "7600" | "7700";
