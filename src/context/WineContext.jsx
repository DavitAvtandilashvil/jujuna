import { createContext, useState } from "react";

export const WineContext = createContext();

// eslint-disable-next-line react/prop-types
export function WineContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <WineContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </WineContext.Provider>
  );
}
