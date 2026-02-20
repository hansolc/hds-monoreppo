"use client";

import { useToastStore } from "@/store/toast";
import { Alert, Snackbar, SnackbarCloseReason } from "@mui/material";

const Toast = () => {
  const { open, message, severity, actions } = useToastStore();

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === "clickaway") {
      return;
    }
    actions.closeToast();
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity={severity} onClose={handleClose}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
