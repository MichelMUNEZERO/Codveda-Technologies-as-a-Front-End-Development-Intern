import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState("Initial value");

  return (
    <AppContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
