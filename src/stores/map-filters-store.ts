import { create } from "zustand";

export const MAP_FILTER_KEYS = [
  "callsign",
  "origin",
  "destination",
  "airport",
  "aircraft",
  "registration",
  "squawk",
] as const;

export type MapFilterKey = (typeof MAP_FILTER_KEYS)[number];
export type MapFilters = Record<MapFilterKey, string[]>;

export interface MapFilterStore {
  filters: MapFilters;
  setFilter: (key: MapFilterKey, value: string) => void;
  setFilters: (filters: MapFilters) => void;
}

const EMPTY_FILTERS: MapFilters = MAP_FILTER_KEYS.reduce(
  (acc, key) => ({ ...acc, [key]: [] }),
  {} as MapFilters,
);

export const useMapFiltersStore = create<MapFilterStore>((set) => {
  return {
    filters: EMPTY_FILTERS,
    setFilter: (key, value) =>
      set((state) => ({
        filters: {
          ...state.filters,
          [key]: [...state.filters[key], value],
        },
      })),
    setFilters: (filters) => set({ filters }),
  };
});
