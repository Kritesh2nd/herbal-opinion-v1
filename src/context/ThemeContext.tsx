"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define context types
type ThemeContextType = {
  dark: boolean;
  color: string;
};

type ThemeUpdateContextType = {
  toggleTheme: () => void;
  changeColor: (newColor: string) => void;
};

// Create contexts with explicit types
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
const ThemeContextUpdate = createContext<ThemeUpdateContextType | undefined>(
  undefined
);

// Hook to load theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Hook to update theme
export const useThemeUpdate = (): ThemeUpdateContextType => {
  const context = useContext(ThemeContextUpdate);
  if (context === undefined) {
    throw new Error("useThemeUpdate must be used within a ThemeProvider");
  }
  return context;
};

// Props type for provider
interface ThemeProviderProps {
  children: ReactNode;
}

// Provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [dark, setDark] = useState<boolean>(true);
  const [color, setColor] = useState<string>("black");

  const toggleTheme = () => setDark((prev) => !prev);
  const changeColor = (newColor: string) => setColor(newColor);

  return (
    <ThemeContext.Provider value={{ dark, color }}>
      <ThemeContextUpdate.Provider value={{ toggleTheme, changeColor }}>
        {children}
      </ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
};

/*



entitties

pricing
faq
contact
clinic

auth
dashboard (mixture of contact+clinic)

*/
