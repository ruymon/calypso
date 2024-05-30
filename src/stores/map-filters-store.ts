import { create } from "zustand";

export type MapFilterKey =
  | "airline"
  | "callsign"
  | "origin"
  | "destination"
  | "airport"
  | "aircraft"
  | "registration"
  | "squawk";

export interface MapFilter {
  key: MapFilterKey;
  value: string;
}

export interface MapFilterStore {
  filters: MapFilter[];
  setFilter: (filters: MapFilter) => void;
  setFilters: (filters: MapFilter[]) => void;
}

export const useMapFiltersStore = create<MapFilterStore>((set) => {
  return {
    filters: [],
    setFilter: (filter: MapFilter) => {
      set((state) => {
        const newFilters = state.filters.filter(
          ({ key }) => key !== filter.key,
        );
        return { filters: [...newFilters, filter] };
      });
    },
    setFilters: (filters: MapFilter[]) => {
      set({ filters });
    },
  };
});
