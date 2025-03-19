import React, { createContext, useContext, useState } from "react";

export const ThemeContext = createContext(); // Ensure 'ThemeContext' is exported

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Correct export for consuming context
export const useTheme = () => useContext(ThemeContext);