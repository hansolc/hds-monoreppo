import { createTheme } from "@vanilla-extract/css";
import { themeContract } from "./contract.css";
import {
  darkColors,
  fontSize,
  lineHeight,
  fontWeight,
  letterSpacing,
  spacing,
  elevation,
  shape,
} from "../primitives";

export const darkTheme = createTheme(themeContract, {
  color: darkColors,
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
