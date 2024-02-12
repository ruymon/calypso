import { create } from "zustand";

export type MapHoveredFeature = {
  longitude: number;
  latitude: number;
  feature: mapboxgl.MapboxGeoJSONFeature;
};

export type MapHoveredFeatureStore = {
  hoveredFeature: MapHoveredFeature | null;
  setHoveredFeature: (feature: MapHoveredFeature | null) => void;
};

export const useMapHoveredFeatureStore = create<MapHoveredFeatureStore>(
  set => ({
    hoveredFeature: null,
    setHoveredFeature: (feature: MapHoveredFeature | null) => set({ hoveredFeature: feature }),
  }),
);
