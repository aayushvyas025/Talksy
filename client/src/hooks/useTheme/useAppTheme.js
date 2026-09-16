import { create } from "zustand";

const useAppTheme = create((set) => ({
  theme: localStorage.getItem("theme") || "light",
  setAppTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

export default useAppTheme;
