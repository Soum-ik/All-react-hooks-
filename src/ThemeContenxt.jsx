import React, { useState } from "react";
import { useContext } from "react";


// it's for createContext
export const ThemeContext = React.createContext();
export const ThemetoggleContext = React.createContext();

// if i use there context i don't need eport on main function
export function useThemeContext() {
  return useContext(ThemeContext);
}
// if i use there context i don't need eport on main function
export function useThemeContextUpdater() {
  return useContext(ThemetoggleContext);
}

// main logic and function is here is ThemeProvider provide all of this children
export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);

  console.log(darkMode);
  function toggleTheme() {
    setDarkMode((prevdarkMode) => !prevdarkMode);
  }

  return (
    <ThemeContext.Provider value={darkMode}>
      <ThemetoggleContext.Provider value={toggleTheme}>
        {children}
      </ThemetoggleContext.Provider>
    </ThemeContext.Provider>
  );
}
