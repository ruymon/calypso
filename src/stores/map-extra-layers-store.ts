import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface MapExtraLayersStore {
  isAirportsLayerVisible: boolean;
  setIsAirportsLayerVisible: (visible: boolean) => void;
  isWeatherLayerVisible: boolean;
  setIsWeatherLayerVisible: (visible: boolean) => void;
  isEastNatTracksLayerVisible: boolean;
  setIsEastNatTracksLayerVisible: (visible: boolean) => void;
  isWestNatTracksLayerVisible: boolean;
  setIsWestNatTracksLayerVisible: (visible: boolean) => void;
}

export const useMapExtraLayersStore = create(
  persist<MapExtraLayersStore>(
    (set) => ({
      isAirportsLayerVisible: false,
      setIsAirportsLayerVisible: (visible: boolean) =>
        set({ isAirportsLayerVisible: visible }),
      isWeatherLayerVisible: false,
      setIsWeatherLayerVisible: (visible: boolean) =>
        set({ isWeatherLayerVisible: visible }),
      isEastNatTracksLayerVisible: false,
      setIsEastNatTracksLayerVisible: (visible: boolean) =>
        set({ isEastNatTracksLayerVisible: visible }),
      isWestNatTracksLayerVisible: false,
      setIsWestNatTracksLayerVisible: (visible: boolean) =>
        set({ isWestNatTracksLayerVisible: visible }),
    }),
    {
      name: "map-extra-layers-store",
    },
  ),
);
