export const fontSize = {
  "3xs": "0.6875rem", // 11px
  "2xs": "0.75rem", // 12px
  xs: "0.875rem", // 14px
  sm: "1rem", // 16px
  md: "1.375rem", // 22px
  lg: "1.5rem", // 24px
  xl: "1.75rem", // 28px
  "2xl": "2rem", // 32px
  "3xl": "2.25rem", // 36px
  "4xl": "2.8125rem", // 45px
  "5xl": "3.5625rem", // 57px
} as const;

export const lineHeight = {
  xs: "1rem", // 16px
  sm: "1.25rem", // 20px
  md: "1.5rem", // 24px
  lg: "1.75rem", // 28px
  xl: "2rem", // 32px
  "2xl": "2.25rem", // 36px
  "3xl": "2.5rem", // 40px
  "4xl": "2.75rem", // 44px
  "5xl": "3.25rem", // 52px
  "6xl": "4rem", // 64px
} as const;

export const fontWeights = {
  regular: "400",
  medium: "500",
} as const;

export const letterSpacing = {
  none: "0rem",
  tight: "-0.015625rem", // -0.25px
  normal: "0.00625rem", // 0.1px
  wide: "0.009375rem", // 0.15px
  wider: "0.015625rem", // 0.25px
  widest: "0.025rem", // 0.4px
  extraWide: "0.03125rem", // 0.5px
} as const;

// 타이포그래피 스타일 조합 정의
// export const typographyStyles = {
//   displayLarge: {
//     fontSize: fontSize.xxxxxl,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.xxxxxxl,
//     letterSpacing: letterSpacing.tight,
//   },
//   displayMedium: {
//     fontSize: fontSize.xxxxl,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.xxxxxl,
//     letterSpacing: letterSpacing.none,
//   },
//   displaySmall: {
//     fontSize: fontSize.xxxl,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.xxxxl,
//     letterSpacing: letterSpacing.none,
//   },
//   headlineLarge: {
//     fontSize: fontSize.xxl,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.xxxl,
//     letterSpacing: letterSpacing.none,
//   },
//   headlineMedium: {
//     fontSize: fontSize.xl,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.xxl,
//     letterSpacing: letterSpacing.none,
//   },
//   headlineSmall: {
//     fontSize: fontSize.lg,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.xl,
//     letterSpacing: letterSpacing.none,
//   },
//   titleLarge: {
//     fontSize: fontSize.md,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.lg,
//     letterSpacing: letterSpacing.none,
//   },
//   titleMedium: {
//     fontSize: fontSize.sm,
//     fontWeight: fontWeights.medium,
//     lineHeight: lineHeight.md,
//     letterSpacing: letterSpacing.wide,
//   },
//   titleSmall: {
//     fontSize: fontSize.xs,
//     fontWeight: fontWeights.medium,
//     lineHeight: lineHeight.sm,
//     letterSpacing: letterSpacing.normal,
//   },
//   bodyLarge: {
//     fontSize: fontSize.sm,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.md,
//     letterSpacing: letterSpacing.extraWide,
//   },
//   bodyMedium: {
//     fontSize: fontSize.xs,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.sm,
//     letterSpacing: letterSpacing.wider,
//   },
//   bodySmall: {
//     fontSize: fontSize.xxs,
//     fontWeight: fontWeights.regular,
//     lineHeight: lineHeight.xs,
//     letterSpacing: letterSpacing.widest,
//   },
//   labelLarge: {
//     fontSize: fontSize.xs,
//     fontWeight: fontWeights.medium,
//     lineHeight: lineHeight.sm,
//     letterSpacing: letterSpacing.normal,
//   },
//   labelMedium: {
//     fontSize: fontSize.xxs,
//     fontWeight: fontWeights.medium,
//     lineHeight: lineHeight.xs,
//     letterSpacing: letterSpacing.extraWide,
//   },
//   labelSmall: {
//     fontSize: fontSize.xxxs,
//     fontWeight: fontWeights.medium,
//     lineHeight: lineHeight.xs,
//     letterSpacing: letterSpacing.extraWide,
//   },
// } as const;
