import { create } from "zustand";

const useLayoutStore = create((set) => ({
  height: 0,
  setHeight: (height) => set({ height }),
}));

export default useLayoutStore;
