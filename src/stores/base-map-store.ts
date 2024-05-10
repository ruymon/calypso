import { create } from "zustand";

export type BaseMap = "light" | "dark" | "satellite" | "theme";

export interface BaseMapStore {
  baseMap: BaseMap;
  setBaseMap: (baseMap: BaseMap) => void;
}

export const useBaseMapStore = create<BaseMapStore>((set) => {
  return {
    baseMap: "theme",
    setBaseMap: (baseMap: BaseMap) => set({ baseMap }),
  };
});
