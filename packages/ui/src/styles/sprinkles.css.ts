import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { vars } from "./theme.css";

const responsiveProperties = defineProperties({
  conditions: {
    sm: {},
    md: { "@media": "screen and (min-width: 768px)" },
    lg: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "sm",
  responsiveArray: ["sm", "md", "lg"],
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
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    justifyContent: ["flex-start", "center", "flex-end", "space-between"],
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
  },
  defaultCondition: "lightMode",
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
});
// 3. Sprinkles 함수 생성
export const sprinkles = createSprinkles(responsiveProperties, colorProperties);

// 4. 타입 추출
export type Sprinkles = Parameters<typeof sprinkles>[0];
