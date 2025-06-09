import { create } from "zustand";

interface ThemeStore {
  isDarkMode: boolean;
  convertTheme: () => void;
}

export const useThemeStore = create<ThemeStore>()((set) => ({
  isDarkMode: false,
  convertTheme: () =>
    set((state) => ({
      isDarkMode: !state.isDarkMode,
    })),
}));
