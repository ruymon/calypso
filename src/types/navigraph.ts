export type ParsedRouteSegment =
  | "SID"
  | "STAR"
  | "AIRWAY"
  | "WAYPOINT"
  | "VOR"
  | "NDB";

export interface ParsedRoutePoint {
  latitude: number;
  longitude: number;
  identifier: string;
  segment: {
    type: ParsedRouteSegment;
    name: string;
  };
}

export interface ParsedRouteAirport {
  icao: string;
  name: string;
  latitude: number;
  longitude: number;
}

export interface ParsedRoute {
  departure: ParsedRouteAirport;
  points: ParsedRoutePoint[] | [];
  arrival: ParsedRouteAirport;
}

export type AiracCycleStatus = "current" | "outdated";

export interface AiracCycle {
  cycle: string;
  from: string;
  to: string;
  status: AiracCycleStatus;
}
