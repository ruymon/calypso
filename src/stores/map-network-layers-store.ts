import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface MapNetworkLayersStore {
  isVatsimFlightsLayerVisible: boolean;
  setIsVatsimFlightsLayerVisible: (visible: boolean) => void;
  isIvaoFlightsLayerVisible: boolean;
  setIsIvaoFlightsLayerVisible: (visible: boolean) => void;
  isVatsimATCsLayerVisible: boolean;
  setIsVatsimATCsLayerVisible: (visible: boolean) => void;
  isIvaoATCsLayerVisible: boolean;
  setIsIvaoATCsLayerVisible: (visible: boolean) => void;
  isAirportsLayerVisible: boolean;
  setIsAirportsLayerVisible: (visible: boolean) => void;
}

export const useMapNetworkLayersStore = create(
  persist<MapNetworkLayersStore>(
    (set) => ({
      isVatsimFlightsLayerVisible: true,
      setIsVatsimFlightsLayerVisible: (visible: boolean) =>
        set({ isVatsimFlightsLayerVisible: visible }),
      isIvaoFlightsLayerVisible: true,
      setIsIvaoFlightsLayerVisible: (visible: boolean) =>
        set({ isIvaoFlightsLayerVisible: visible }),
      isVatsimATCsLayerVisible: true,
      setIsVatsimATCsLayerVisible: (visible: boolean) =>
        set({ isVatsimATCsLayerVisible: visible }),
      isIvaoATCsLayerVisible: true,
      setIsIvaoATCsLayerVisible: (visible: boolean) =>
        set({ isIvaoATCsLayerVisible: visible }),
      isAirportsLayerVisible: false,
      setIsAirportsLayerVisible: (visible: boolean) =>
        set({ isAirportsLayerVisible: visible }),
    }),
    {
      name: "map-network-layers-store",
    },
  ),
);
