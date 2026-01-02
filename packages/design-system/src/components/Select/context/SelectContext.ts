import { createContext, RefObject, useContext } from "react";

export interface SelectContextState {
  value: string;
  onValueChange: (value: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  baseId?: string;
}

export interface SelectRefState {
  triggerRef: RefObject<HTMLElement | null> | null;
  registerTriggerRef: (ref: RefObject<HTMLElement | null>) => void;
  unregisterTriggerRef: (ref: RefObject<HTMLElement | null>) => void;

  // Item refs (배열) - ✨ 추가
  itemRefs: RefObject<HTMLElement | null>[];
  registerItemRef: (ref: RefObject<HTMLElement | null>) => void;
  unregisterItemRef: (ref: RefObject<HTMLElement | null>) => void;
}

export const SelectContext = createContext<SelectContextState | null>(null);

export const SelectRefContext = createContext<SelectRefState | null>(null);

export const useSelectContext = () => {
  const context = useContext(SelectContext);
  if (!context) {
    throw new Error("useSelectContext must be used within a SelectProvider");
  }
  return context;
};

export const useSelectRefContext = () => {
  const context = useContext(SelectRefContext);
  if (!context) {
    throw new Error("useSelectRefContext must be used within a SelectProvider");
  }
  return context;
};
