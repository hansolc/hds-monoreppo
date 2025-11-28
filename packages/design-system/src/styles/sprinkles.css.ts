import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";
import { flex as flexTokens } from "@/tokens/layout";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    display: [
      "none",
      "block",
      "inline",
      "inline-block",
      "inline-flex",
      "flex",
      "grid",
    ],
    flexWrap: flexTokens.flexWrap,
    flexDirection: flexTokens.flexDirection,
    alignItems: flexTokens.alignItems,
    justifyContent: flexTokens.justifyContent,
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    marginTop: vars.spacing,
    marginBottom: vars.spacing,
    marginLeft: vars.spacing,
    marginRight: vars.spacing,
    gap: vars.spacing,

    // grid
    columnGap: vars.spacing,
    rowGap: vars.spacing,

    // typography
    fontSize: vars.typography.fontSize,
    lineHeight: vars.typography.lineHeight,
    fontWeight: vars.typography.fontWeights,
    letterSpacing: vars.typography.letterSpacing,
    textAlign: vars.typography.textAlign,
    whiteSpace: vars.typography.whiteSpace,
    textDecoration: vars.typography.textDecoration,
  },
  shorthands: {
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
  },
});

const colorProperties = defineProperties({
  properties: {
    backgroundColor: vars.color,
    color: vars.color,
  },
  defaultCondition: "lightMode",
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
});

export const unresponsiveProperties = defineProperties({
  properties: {
    position: ["absolute", "relative", "fixed", "sticky"],
    flexShrink: [0, 1],
    flexGrow: [0, 1],
    flex: [1],
    borderStyle: ["solid", "none"],
    cursor: ["default", "pointer", "not-allowed"],
    overflow: ["hidden", "auto"],
    textAlign: ["left", "center", "right"],
    zIndex: {
      "0": 0,
      "10": 10,
      "50": 50,
      "100": 100,
      auto: "auto",
    },
  },
});

// 3. Sprinkles 함수 생성
export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  unresponsiveProperties,
);

// 4. 타입 추출
export type Sprinkles = Parameters<typeof sprinkles>[0];
