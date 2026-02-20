import { create } from "zustand";

type Severity = "success" | "error" | "warning" | "info";

interface ToastStore {
  open: boolean;
  message: string;
  severity: Severity;
}

interface ToastActions {
  actions: {
    showToast: (message: string, severity?: Severity) => void;
    showSuccess: (message: string) => void;
    showError: (message: string) => void;
    showWarning: (message: string) => void;
    showInfo: (message: string) => void;
    closeToast: () => void;
  };
}

const initialState: ToastStore = {
  open: false,
  message: "",
  severity: "info",
};

export const useToastStore = create<ToastStore & ToastActions>((set) => ({
  ...initialState,
  actions: {
    showToast: (message, severity = "info") => {
      set({ open: true, message, severity });
    },
    showSuccess: (message) => {
      set({ open: true, message, severity: "success" });
    },
    showError: (message) => {
      set({ open: true, message, severity: "error" });
    },
    showWarning: (message) => {
      set({ open: true, message, severity: "warning" });
    },
    showInfo: (message) => {
      set({ open: true, message, severity: "info" });
    },
    closeToast: () => {
      set({ open: false });
    },
  },
}));
