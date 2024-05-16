import { create } from "zustand";

const useLayoutStore = create((set) => ({
  height: 0,
  headerHeight: 0,
  gnbHeight: 0,
  setHeight: (height) => set((prev) => ({ ...prev, height })),
  setHeaderHeight: (headerHeight) => set((prev) => ({ ...prev, headerHeight })),
  setGnbHeight: (gnbHeight) => set((prev) => ({ ...prev, gnbHeight })),
}));

export default useLayoutStore;
