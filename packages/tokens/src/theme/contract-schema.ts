/**
 * Theme contract schema (순수 데이터)
 * vanilla-extract 의존성 없음!
 */
export const themeContractColorSchema = {
  color: {
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
  },
} as const;

/**
 * ColorTokens 타입: 실제 hex 값을 받는 타입
 */
export type ColorTokens = {
  [K in keyof typeof themeContractColorSchema.color]: string;
};
