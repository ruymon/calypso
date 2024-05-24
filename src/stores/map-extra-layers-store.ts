import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface MapExtraLayersStore {
  isAirportsLayerVisible: boolean;
  setIsAirportsLayerVisible: (visible: boolean) => void;
  isWeatherLayerVisible: boolean;
  setIsWeatherLayerVisible: (visible: boolean) => void;
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
    }),
    {
      name: "map-extra-layers-store",
    },
  ),
);
