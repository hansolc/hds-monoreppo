import { createGlobalTheme, createTheme } from "@vanilla-extract/css";
import {
  fontSize,
  lineHeight,
  fontWeights,
  letterSpacing,
  spacing,
  elevation,
  shape,
  lightColors,
  darkColors,
} from "@/tokens";
import { createThemeContract } from "@vanilla-extract/css";

export const colorTokens = createThemeContract({
  primary: "",
  surfaceTint: "",
  onPrimary: "",
  primaryContainer: "",
  onPrimaryContainer: "",
  secondary: "",
  onSecondary: "",
  secondaryContainer: "",
  onSecondaryContainer: "",
  tertiary: "",
  onTertiary: "",
  tertiaryContainer: "",
  onTertiaryContainer: "",
  error: "",
  onError: "",
  errorContainer: "",
  onErrorContainer: "",
  background: "",
  onBackground: "",
  surface: "",
  onSurface: "",
  surfaceVariant: "",
  onSurfaceVariant: "",
  outline: "",
  outlineVariant: "",
  shadow: "",
  scrim: "",
  inverseSurface: "",
  inverseOnSurface: "",
  inversePrimary: "",
  primaryFixed: "",
  onPrimaryFixed: "",
  primaryFixedDim: "",
  onPrimaryFixedVariant: "",
  secondaryFixed: "",
  onSecondaryFixed: "",
  secondaryFixedDim: "",
  onSecondaryFixedVariant: "",
  tertiaryFixed: "",
  onTertiaryFixed: "",
  tertiaryFixedDim: "",
  onTertiaryFixedVariant: "",
  surfaceDim: "",
  surfaceBright: "",
  surfaceContainerLowest: "",
  surfaceContainerLow: "",
  surfaceContainer: "",
  surfaceContainerHigh: "",
  surfaceContainerHighest: "",
});

// 라이트 모드 기본값 설정
createGlobalTheme(":root", colorTokens, lightColors);

// 다크 모드 값 설정
createGlobalTheme(
  "@media (prefers-color-scheme: dark)",
  colorTokens,
  darkColors,
);

export const lightThemeClass = createTheme(colorTokens, lightColors);

export const darkThemeClass = createTheme(colorTokens, darkColors);

export const vars = createGlobalTheme(":root", {
  color: colorTokens,
  typography: {
    fontSize,
    lineHeight,
    fontWeights,
    letterSpacing,
  },
  spacing,
  elevation,
  shape,
});
