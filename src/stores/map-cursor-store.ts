import { create } from "zustand";

export type MapCursor = 'auto' | 'pointer' | 'grab' | 'grabbing';

type MapCursorStore = {
  cursor: MapCursor;
  setCursor: (cursor: MapCursor) => void;
};

export const useMapCursorStore = create<MapCursorStore>(
  set => ({
    cursor: 'auto',
    setCursor: (cursor: MapCursor) => set({ cursor: cursor }),
  }),
);