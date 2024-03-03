import { create } from "zustand";

export type MapLayersStore = {
  isVatsimFlightsLayerVisible: boolean;
  setIsVatsimFlightsLayerVisible: (visible: boolean) => void;
  isIvaoFlightsLayerVisible: boolean;
  setIsIvaoFlightsLayerVisible: (visible: boolean) => void;
  isWeatherLayerVisible: boolean;
  setIsWeatherLayerVisible: (visible: boolean) => void;
};

export const useMapLayersStore = create<MapLayersStore>(
  set => ({
    isVatsimFlightsLayerVisible: true,
    setIsVatsimFlightsLayerVisible: (visible: boolean) => set({ isVatsimFlightsLayerVisible: visible }),
    isIvaoFlightsLayerVisible: true,
    setIsIvaoFlightsLayerVisible: (visible: boolean) => set({ isIvaoFlightsLayerVisible: visible }),
    isWeatherLayerVisible: false,
    setIsWeatherLayerVisible: (visible: boolean) => set({ isWeatherLayerVisible: visible }),
  }),
);
