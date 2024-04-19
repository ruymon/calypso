import { Network } from "./networks";

export type LiveATCs = LiveATC[];

export interface LiveATC {
  network: Network;
  callsign: string;
  rating: string;
  user: {
    id: string;
    name: string;
    rating: string;
  };
  onlineAt: string;
  atis: string[];
  frequency: string;
  latitude: number;
  longitude: number;
  facility: ATCFacility;
  geometry: LiveATCGeometry[];
}

export interface LiveATCGeometry {
  latitude: number;
  longitude: number;
}

export type ATCFacility =
  | "DEL"
  | "GND"
  | "TWR"
  | "APP"
  | "DEP"
  | "CTR"
  | "FSS"
  | "UNKNOWN";
