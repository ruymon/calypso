interface PrescribedTrackWaypoint {
  ident: string;
  type: string;
  latitude: number;
  longitude: number;
}

interface PrescribedTrack {
  eastLevels: string[] | [];
  westLevels: string[] | [];
  ident: string;
  validFrom: string;
  validTo: string;
  waypoints: PrescribedTrackWaypoint[];
}

export type NatTracks = PrescribedTrack[];
