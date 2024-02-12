import { create } from "zustand";
import { useMapLoadStore } from "./map-load-store";

export const MAP_INITIAL_VIEW_STATE: MapViewState = {
  longitude: -47.9210,
  latitude: -15.8700,
  zoom: 3
}

const MAP_FLY_TRANSITION_DURATION = 4 * 1000; // 4 seconds

export type MapViewState = {
  longitude: number;
  latitude: number;
  zoom: number;
};

export type MapFocusedLocationStore = {
  focusedLocation: MapViewState;
  setFocusedLocation: (focusedLocation: MapViewState) => void;
};

export const useMapFocusedLocationStore = create<MapFocusedLocationStore>(
  set => ({
    focusedLocation: MAP_INITIAL_VIEW_STATE,
    setFocusedLocation: ({ latitude, longitude, zoom }: MapViewState) => {
      set({ focusedLocation: { latitude, longitude, zoom } });
      const [mapRef] = [useMapLoadStore.getState().mapRef];

      if (!mapRef) return;

      mapRef.flyTo({
        center: [longitude, latitude],
        zoom: zoom,
        duration: MAP_FLY_TRANSITION_DURATION,
        essential: true
      })
    },
  }),
);