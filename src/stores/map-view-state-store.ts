import { MAP_INITIAL_VIEW_STATE } from "@/config/map";
import { MapViewState } from "@deck.gl/core";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface MapViewStateStore {
  viewState: MapViewState;
  setViewState: (viewState: MapViewState) => void;
}

export const useMapViewStateStore = create(
  persist<MapViewStateStore>(
    (set) => ({
      viewState: MAP_INITIAL_VIEW_STATE,
      setViewState: (viewState) => {
        set({ viewState });
      },
    }),
    {
      name: "map-view-state",
    },
  ),
);
