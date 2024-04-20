import { TrackPosition } from "@/types/live-flights";
import { ParsedRoute } from "@/types/navigraph";
import { create } from "zustand";

export type SelectedFlightStore = {
  tracks: TrackPosition[] | [];
  setTracks: (tracks: TrackPosition[] | []) => void;
  parsedRoute: ParsedRoute | null;
  setParsedRoute: (parsedRoute: ParsedRoute | null) => void;
};

export const useSelectedFlightStore = create<SelectedFlightStore>((set) => ({
  tracks: [],
  setTracks: (tracks) => set({ tracks }),
  parsedRoute: null,
  setParsedRoute: (parsedRoute) => set({ parsedRoute }),
}));
