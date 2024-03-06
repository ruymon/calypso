export type LiveFlights = LiveFlight[];

export type Network = "vatsim" | "ivao";
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
  pilot: Pilot;
  callsign: string;
  network: Network;
  position: Position;
  flightPlan?: FlightPlan;
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
  iata: string;
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
