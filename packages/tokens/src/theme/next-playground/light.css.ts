import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "@/theme/contract.css";
import {
  lightColors,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
  spacing,
  elevation,
  shape,
} from "@/primitives";

export const lightTheme = createTheme(themeContract, {
  color: lightColors,
  typography: {
    fontSize,
    lineHeight,
    fontWeight,
    letterSpacing,
  },
  spacing,
  elevation,
  shape,
});
