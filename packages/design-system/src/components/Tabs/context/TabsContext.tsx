import { createContext, useContext } from "react";

export interface TabContextState {
  baseId?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}

export const TabContext = createContext<TabContextState | null>(null);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabsProvider");
  }
  return context;
};
