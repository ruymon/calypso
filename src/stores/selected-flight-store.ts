import { LiveFlightDetail } from "@/types/live-flights";
import { create } from "zustand";

export type SelectedFlightStore = {
  selectedFlight: LiveFlightDetail | null;
  setSelectedFlight: (liveFlight: LiveFlightDetail | null) => void;
};

export const useSelectedFlightStore = create<SelectedFlightStore>((set) => ({
  selectedFlight: null,
  setSelectedFlight: (liveFlight) => set({ selectedFlight: liveFlight }),
}));
