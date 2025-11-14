import { createTheme, createThemeContract } from "@vanilla-extract/css";
import { colors, lightColors, darkColors } from "./colors";

// Material 3 디자인 토큰 계약
export const themeContract = createThemeContract({
  colors,

  // Typography - Material 3 Type Scale
  typography: {
    displayLarge: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    displayMedium: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    displaySmall: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    headlineLarge: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    headlineMedium: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    headlineSmall: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    titleLarge: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    titleMedium: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    titleSmall: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    bodyLarge: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    bodyMedium: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    bodySmall: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    labelLarge: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    labelMedium: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
    labelSmall: {
      fontFamily: "",
      fontSize: "",
      fontWeight: "",
      lineHeight: "",
      letterSpacing: "",
    },
  },

  // Spacing - Material 3 Space Scale
  spacing: {
    none: "",
    extraSmall: "",
    small: "",
    medium: "",
    large: "",
    extraLarge: "",
    extraExtraLarge: "",
    extraExtraExtraLarge: "",
  },

  // Elevation - Material 3 Elevation Scale
  elevation: {
    level0: "",
    level1: "",
    level2: "",
    level3: "",
    level4: "",
    level5: "",
  },

  // Border Radius - Material 3 Shape Scale
  shape: {
    none: "",
    extraSmall: "",
    small: "",
    medium: "",
    large: "",
    extraLarge: "",
    full: "",
  },
});

// Material 3 Light Theme 값
export const defaultThemeClasses = createTheme(themeContract, {
  colors: lightColors,

  typography: {
    displayLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "57px",
      fontWeight: "400",
      lineHeight: "64px",
      letterSpacing: "-0.25px",
    },
    displayMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "45px",
      fontWeight: "400",
      lineHeight: "52px",
      letterSpacing: "0px",
    },
    displaySmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "36px",
      fontWeight: "400",
      lineHeight: "44px",
      letterSpacing: "0px",
    },
    headlineLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "32px",
      fontWeight: "400",
      lineHeight: "40px",
      letterSpacing: "0px",
    },
    headlineMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "28px",
      fontWeight: "400",
      lineHeight: "36px",
      letterSpacing: "0px",
    },
    headlineSmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "32px",
      letterSpacing: "0px",
    },
    titleLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "22px",
      fontWeight: "400",
      lineHeight: "28px",
      letterSpacing: "0px",
    },
    titleMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    titleSmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    bodyLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    bodyMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    bodySmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "16px",
      letterSpacing: "0.4px",
    },
    labelLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    labelMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "16px",
      letterSpacing: "0.5px",
    },
    labelSmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "11px",
      fontWeight: "500",
      lineHeight: "16px",
      letterSpacing: "0.5px",
    },
  },

  spacing: {
    none: "0px",
    extraSmall: "4px",
    small: "8px",
    medium: "12px",
    large: "16px",
    extraLarge: "24px",
    extraExtraLarge: "32px",
    extraExtraExtraLarge: "48px",
  },

  elevation: {
    level0: "none",
    level1:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    level2:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    level3:
      "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)",
    level4:
      "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)",
    level5:
      "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)",
  },

  shape: {
    none: "0px",
    extraSmall: "4px",
    small: "8px",
    medium: "12px",
    large: "16px",
    extraLarge: "28px",
    full: "9999px",
  },
});

// Dark Theme
export const darkThemeClasses = createTheme(themeContract, {
  colors: darkColors,

  typography: {
    displayLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "57px",
      fontWeight: "400",
      lineHeight: "64px",
      letterSpacing: "-0.25px",
    },
    displayMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "45px",
      fontWeight: "400",
      lineHeight: "52px",
      letterSpacing: "0px",
    },
    displaySmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "36px",
      fontWeight: "400",
      lineHeight: "44px",
      letterSpacing: "0px",
    },
    headlineLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "32px",
      fontWeight: "400",
      lineHeight: "40px",
      letterSpacing: "0px",
    },
    headlineMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "28px",
      fontWeight: "400",
      lineHeight: "36px",
      letterSpacing: "0px",
    },
    headlineSmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "24px",
      fontWeight: "400",
      lineHeight: "32px",
      letterSpacing: "0px",
    },
    titleLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "22px",
      fontWeight: "400",
      lineHeight: "28px",
      letterSpacing: "0px",
    },
    titleMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "16px",
      fontWeight: "500",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    titleSmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    bodyLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    bodyMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    bodySmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "16px",
      letterSpacing: "0.4px",
    },
    labelLarge: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "14px",
      fontWeight: "500",
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    labelMedium: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "16px",
      letterSpacing: "0.5px",
    },
    labelSmall: {
      fontFamily: "Roboto, system-ui, sans-serif",
      fontSize: "11px",
      fontWeight: "500",
      lineHeight: "16px",
      letterSpacing: "0.5px",
    },
  },

  spacing: {
    none: "0px",
    extraSmall: "4px",
    small: "8px",
    medium: "12px",
    large: "16px",
    extraLarge: "24px",
    extraExtraLarge: "32px",
    extraExtraExtraLarge: "48px",
  },

  elevation: {
    level0: "none",
    level1:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    level2:
      "0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    level3:
      "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)",
    level4:
      "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)",
    level5:
      "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)",
  },

  shape: {
    none: "0px",
    extraSmall: "4px",
    small: "8px",
    medium: "12px",
    large: "16px",
    extraLarge: "28px",
    full: "9999px",
  },
});
