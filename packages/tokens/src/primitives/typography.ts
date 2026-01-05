// Material Design 3 Typography Tokens
// Reference: https://m3.material.io/styles/typography/type-scale-tokens

/**
 * MD3 Type Scale
 * 5 categories × 3 sizes = 15 typographic styles
 */
export const typeScale = {
  // Display - For large, impactful text
  displayLarge: {
    fontSize: "3.5625rem", // 57px
    lineHeight: "4rem", // 64px
    fontWeight: "400",
    letterSpacing: "-0.015625rem", // -0.25px
  },
  displayMedium: {
    fontSize: "2.8125rem", // 45px
    lineHeight: "3.25rem", // 52px
    fontWeight: "400",
    letterSpacing: "0",
  },
  displaySmall: {
    fontSize: "2.25rem", // 36px
    lineHeight: "2.75rem", // 44px
    fontWeight: "400",
    letterSpacing: "0",
  },

  // Headline - For high-emphasis text
  headlineLarge: {
    fontSize: "2rem", // 32px
    lineHeight: "2.5rem", // 40px
    fontWeight: "400",
    letterSpacing: "0",
  },
  headlineMedium: {
    fontSize: "1.75rem", // 28px
    lineHeight: "2.25rem", // 36px
    fontWeight: "400",
    letterSpacing: "0",
  },
  headlineSmall: {
    fontSize: "1.5rem", // 24px
    lineHeight: "2rem", // 32px
    fontWeight: "400",
    letterSpacing: "0",
  },

  // Title - For medium-emphasis text
  titleLarge: {
    fontSize: "1.375rem", // 22px
    lineHeight: "1.75rem", // 28px
    fontWeight: "400",
    letterSpacing: "0",
  },
  titleMedium: {
    fontSize: "1rem", // 16px
    lineHeight: "1.5rem", // 24px
    fontWeight: "500",
    letterSpacing: "0.009375rem", // 0.15px
  },
  titleSmall: {
    fontSize: "0.875rem", // 14px
    lineHeight: "1.25rem", // 20px
    fontWeight: "500",
    letterSpacing: "0.00625rem", // 0.1px
  },

  // Body - For body text
  bodyLarge: {
    fontSize: "1rem", // 16px
    lineHeight: "1.5rem", // 24px
    fontWeight: "400",
    letterSpacing: "0.03125rem", // 0.5px
  },
  bodyMedium: {
    fontSize: "0.875rem", // 14px
    lineHeight: "1.25rem", // 20px
    fontWeight: "400",
    letterSpacing: "0.015625rem", // 0.25px
  },
  bodySmall: {
    fontSize: "0.75rem", // 12px
    lineHeight: "1rem", // 16px
    fontWeight: "400",
    letterSpacing: "0.025rem", // 0.4px
  },

  // Label - For labels, buttons
  labelLarge: {
    fontSize: "0.875rem", // 14px
    lineHeight: "1.25rem", // 20px
    fontWeight: "500",
    letterSpacing: "0.00625rem", // 0.1px
  },
  labelMedium: {
    fontSize: "0.75rem", // 12px
    lineHeight: "1rem", // 16px
    fontWeight: "500",
    letterSpacing: "0.03125rem", // 0.5px
  },
  labelSmall: {
    fontSize: "0.6875rem", // 11px
    lineHeight: "1rem", // 16px
    fontWeight: "500",
    letterSpacing: "0.03125rem", // 0.5px
  },
} as const;

/**
 * Extracted font sizes for flexible use
 */
export const fontSize = {
  displayLarge: typeScale.displayLarge.fontSize,
  displayMedium: typeScale.displayMedium.fontSize,
  displaySmall: typeScale.displaySmall.fontSize,
  headlineLarge: typeScale.headlineLarge.fontSize,
  headlineMedium: typeScale.headlineMedium.fontSize,
  headlineSmall: typeScale.headlineSmall.fontSize,
  titleLarge: typeScale.titleLarge.fontSize,
  titleMedium: typeScale.titleMedium.fontSize,
  titleSmall: typeScale.titleSmall.fontSize,
  bodyLarge: typeScale.bodyLarge.fontSize,
  bodyMedium: typeScale.bodyMedium.fontSize,
  bodySmall: typeScale.bodySmall.fontSize,
  labelLarge: typeScale.labelLarge.fontSize,
  labelMedium: typeScale.labelMedium.fontSize,
  labelSmall: typeScale.labelSmall.fontSize,
} as const;

export const lineHeight = {
  displayLarge: typeScale.displayLarge.lineHeight,
  displayMedium: typeScale.displayMedium.lineHeight,
  displaySmall: typeScale.displaySmall.lineHeight,
  headlineLarge: typeScale.headlineLarge.lineHeight,
  headlineMedium: typeScale.headlineMedium.lineHeight,
  headlineSmall: typeScale.headlineSmall.lineHeight,
  titleLarge: typeScale.titleLarge.lineHeight,
  titleMedium: typeScale.titleMedium.lineHeight,
  titleSmall: typeScale.titleSmall.lineHeight,
  bodyLarge: typeScale.bodyLarge.lineHeight,
  bodyMedium: typeScale.bodyMedium.lineHeight,
  bodySmall: typeScale.bodySmall.lineHeight,
  labelLarge: typeScale.labelLarge.lineHeight,
  labelMedium: typeScale.labelMedium.lineHeight,
  labelSmall: typeScale.labelSmall.lineHeight,
} as const;

export const fontWeight = {
  regular: "400",
  medium: "500",
  bold: "700",
} as const;

export const letterSpacing = {
  none: "0",
  tight: "-0.015625rem", // -0.25px
  normal: "0.00625rem", // 0.1px
  wide: "0.009375rem", // 0.15px
  wider: "0.015625rem", // 0.25px
  widest: "0.025rem", // 0.4px
  extraWide: "0.03125rem", // 0.5px
} as const;
