"use client";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

export const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#00687b",
    },
  },
});

const MUIThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MUIThemeProvider;
