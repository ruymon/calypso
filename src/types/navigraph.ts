import { Airport } from "./live-flights";

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

export interface ParsedRoute {
  departure: Airport;
  points: ParsedRoutePoint[] | [];
  arrival: Airport;
}

export type AiracCycleStatus = "current" | "outdated";

export interface AiracCycle {
  cycle: string;
  from: string;
  to: string;
  status: AiracCycleStatus;
}
