import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";
import { themeContract } from "../theme/contract.css";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    display: ["none", "block", "inline", "inline-block", "flex", "grid"],
    flexDirection: ["row", "column", "row-reverse", "column-reverse"],
    flexWrap: ["nowrap", "wrap", "wrap-reverse"],
    alignItems: ["flex-start", "center", "flex-end", "stretch", "baseline"],
    justifyContent: [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
      "space-evenly",
    ],
    gap: themeContract.spacing,
    paddingTop: themeContract.spacing,
    paddingBottom: themeContract.spacing,
    paddingLeft: themeContract.spacing,
    paddingRight: themeContract.spacing,
    marginTop: themeContract.spacing,
    marginBottom: themeContract.spacing,
    marginLeft: themeContract.spacing,
    marginRight: themeContract.spacing,
    fontSize: themeContract.typography.fontSize,
    lineHeight: themeContract.typography.lineHeight,
    fontWeight: themeContract.typography.fontWeight,
    letterSpacing: themeContract.typography.letterSpacing,
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
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: themeContract.color,
    backgroundColor: themeContract.color,
    borderColor: themeContract.color,
  },
});

const unresponsiveProperties = defineProperties({
  properties: {
    position: ["relative", "absolute", "fixed", "sticky"],
    overflow: ["hidden", "auto", "scroll", "visible"],
    cursor: ["default", "pointer", "not-allowed"],
    borderRadius: themeContract.shape,
    boxShadow: themeContract.elevation,
    flexShrink: [0, 1],
    flexGrow: [0, 1],
    zIndex: {
      "0": 0,
      "10": 10,
      "50": 50,
      "100": 100,
      auto: "auto",
    },
  },
});

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  unresponsiveProperties,
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
