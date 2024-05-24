export type LiveATCs = LiveATC[];

export interface LiveATC {
  id: string;
  network: "IVAO" | "VATSIM"; // TODO: Revert to Network
  callsign: string;
  rating: string;
  user: {
    id: string;
    rating: string;
    name: string;
  };
  onlineAt: string;
  atis: string[];
  frequency: string;
  latitude: number;
  longitude: number;
  facility: ATCFacility;
  geometry: Array<[number, number]> | [];
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

export interface LiveATCDetail extends LiveATC {}
