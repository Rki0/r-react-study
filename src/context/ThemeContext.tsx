import { createContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setDarkMode: () => void;
  setLightMode: () => void;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const setDarkMode = () => setTheme("dark");
  const setLightMode = () => setTheme("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider
      value={{ theme, setDarkMode, setLightMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// NOTE: If you check the presence of the context value, you don't need to use optional chaining(i.e. ?.) for every context.
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) throw new Error("useTheme must be used within ThemeProvider");
//   return context;
// };
