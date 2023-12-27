import { createContext, useContext } from "react";

/*The new method consolidates the context creation,
 provider, and hook into a single file, improving code organization. */

export const ThemeContext = createContext({
  themeMode: "light",
  darkMode: () => {},
  lightMode: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default useTheme = () => {
  return useContext(ThemeContext);
};
