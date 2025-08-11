'use client'
import { createContext, ReactNode } from "react";
import { doctors } from "../../../constants";

// Define the type for your context value
interface AppContextValue {
  doctors: typeof doctors;
}

export const AppContext = createContext<AppContextValue>({} as AppContextValue);

// Define props type for the provider component
interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider: React.FC<AppContextProviderProps> = (props) => {
  const value: AppContextValue = {
      doctors
  };

  return (
    <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
