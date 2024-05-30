import { create } from "zustand";

export interface SpotlightStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useSpotlightStore = create<SpotlightStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => set({ isOpen }),
}));
