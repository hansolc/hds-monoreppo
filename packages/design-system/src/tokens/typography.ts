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
  bold: "700",
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

export const textAlign = {
  left: "left",
  center: "center",
  right: "right",
} as const;

export const whiteSpace = {
  normal: "normal",
  nowrap: "nowrap",
  pre: "pre",
  "pre-wrap": "pre-wrap",
  "pre-line": "pre-line",
} as const;

export const textDecoration = {
  none: "none",
  underline: "underline",
  "line-through": "line-through",
  overline: "overline",
} as const;
