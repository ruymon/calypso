import { TrackPosition } from "@/types/live-flights";
import { create } from "zustand";

export type FlightTrackStore = {
  track: TrackPosition[] | [];
  setTrack: (track: TrackPosition[] | []) => void;
  trackToArrival: [number, number][] | [];
  setTrackToArrival: (track: [number, number][] | []) => void;
};

export const useFlightTrackStore = create<FlightTrackStore>((set) => ({
  track: [],
  setTrack: (track: TrackPosition[] | []) => set({ track }),
  trackToArrival: [],
  setTrackToArrival: (track: [number, number][] | []) =>
    set({ trackToArrival: track }),
}));
