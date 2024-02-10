import { MapRef } from 'react-map-gl';
import { create } from 'zustand';

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

export type MapHoveredFeature = {
  longitude: number;
  latitude: number;
  feature: mapboxgl.MapboxGeoJSONFeature;
};

export type MapCursor = 'auto' | 'pointer' | 'grab' | 'grabbing';

type MapContext = {
  mapRef: MapRef | undefined;
  isMapLoaded: boolean;
  focusedLocation: MapViewState;
  hoveredFeature: MapHoveredFeature | undefined;
  cursor: MapCursor;
  setMapRef: (ref: MapRef) => void;
  setIsMapLoaded: (isLoaded: boolean) => void;
  setFocusedLocation: (focusedLocation: MapViewState) => void;
  setHoveredFeature: (feature: MapHoveredFeature | undefined) => void;
  setCursor: (cursor: MapCursor) => void;
};

export const useMapContext = create<MapContext>(
  set => ({
    mapRef: undefined,
    isMapLoaded: false,
    focusedLocation: MAP_INITIAL_VIEW_STATE,
    hoveredFeature: undefined,
    cursor: 'auto',
    setMapRef: (ref: MapRef) => set({ mapRef: ref }),
    setIsMapLoaded: (isLoaded: boolean) => set({ isMapLoaded: isLoaded }),
    setFocusedLocation: ({ latitude, longitude, zoom }: MapViewState) => {
      set({ focusedLocation: { latitude, longitude, zoom } });
      const mapRef = useMapContext.getState().mapRef;

      if (!mapRef) return;

      mapRef.flyTo({
        center: [longitude, latitude],
        zoom: zoom,
        duration: MAP_FLY_TRANSITION_DURATION,
        essential: true
      })
    },
    setHoveredFeature: (feature: MapHoveredFeature | undefined) => set({ hoveredFeature: feature }),
    setCursor: (cursor: MapCursor) => set({ cursor: cursor }),
  }),
);
