import { Airport, TrackPosition } from "@/types/live-flights";
import { create } from "zustand";

export type SelectedFlightStore = {
  tracks: TrackPosition[] | [];
  setTracks: (tracks: TrackPosition[] | []) => void;
  departure: Airport | null;
  setDeparture: (departure: Airport | null) => void;
  arrival: Airport | null;
  setArrival: (arrival: Airport | null) => void;
  alternate: Airport | null;
  setAlternate: (alternate: Airport | null) => void;
  alternate2: Airport | null;
  setAlternate2: (alternate2: Airport | null) => void;
  // parsedRoute: ParsedRoute | null;
  // setParsedRoute: (parsedRoute: ParsedRoute | null) => void;
};

export const useSelectedFlightStore = create<SelectedFlightStore>((set) => ({
  tracks: [],
  setTracks: (tracks) => set({ tracks }),
  departure: null,
  setDeparture: (departure) => set({ departure }),
  arrival: null,
  setArrival: (arrival) => set({ arrival }),
  alternate: null,
  setAlternate: (alternate) => set({ alternate }),
  alternate2: null,
  setAlternate2: (alternate2) => set({ alternate2 }),
}));
