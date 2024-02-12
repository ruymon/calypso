import { MapRef } from 'react-map-gl';
import { create } from 'zustand';

export type MapLoadStore = {
  mapRef: MapRef | null;
  setMapRef: (ref: MapRef | null) => void;
  isMapLoaded: boolean;
  setIsMapLoaded: (isLoaded: boolean) => void;
};

export const useMapLoadStore = create<MapLoadStore>(
  set => ({
    mapRef: null,
    isMapLoaded: false,
    setMapRef: (ref: MapRef | null) => set({ mapRef: ref }),
    setIsMapLoaded: (isLoaded: boolean) => set({ isMapLoaded: isLoaded }),
  }),
);
