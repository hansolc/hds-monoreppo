"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

export const theme = createTheme({});

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
