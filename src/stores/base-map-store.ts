import { create } from "zustand";
import { persist } from "zustand/middleware";

export type BaseMap = "light" | "dark" | "satellite" | "theme";

export interface BaseMapStore {
  baseMap: BaseMap;
  setBaseMap: (baseMap: BaseMap) => void;
}

const DEFAULT_BASE_MAP: BaseMap = "theme";

export const useBaseMapStore = create(
  persist<BaseMapStore>(
    (set) => ({
      baseMap: DEFAULT_BASE_MAP,
      setBaseMap: (baseMap: BaseMap) => set({ baseMap }),
    }),
    {
      name: "base-map-store",
    },
  ),
);
