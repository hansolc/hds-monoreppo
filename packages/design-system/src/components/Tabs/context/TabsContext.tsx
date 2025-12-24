import { createContext, RefObject, useContext } from "react";

export interface TabContextState {
  baseId?: string;
  value: string;
  onValueChange: (value: string) => void;
}

export interface TabRefState {
  triggerRef: RefObject<HTMLElement | null>[];
  registerTriggerRef: (ref: RefObject<HTMLElement | null>) => void;
  unregisterTriggerRef: (ref: RefObject<HTMLElement | null>) => void;
}

export const TabContext = createContext<TabContextState | null>(null);

export const TabRefContext = createContext<TabRefState | null>(null);

export const useTabContext = () => {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error("useTabContext must be used within a TabsProvider");
  }
  return context;
};

export const useTabRefContext = () => {
  const context = useContext(TabRefContext);
  if (!context) {
    throw new Error("useTabRefContext must be used within a TabsProvider");
  }
  return context;
};
