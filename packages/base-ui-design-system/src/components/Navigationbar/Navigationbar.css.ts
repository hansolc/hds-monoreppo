import { sprinkles } from "@repo/tokens";
import { style } from "@vanilla-extract/css";
import { vars } from "@repo/tokens";
import { hexToRgb } from "@/utils/color";

const navigationbarBase = style({
  width: "100%",
  height: "64px",
});

export const navigationbar = style([
  sprinkles({
    display: "flex",
    py: {
      compact: 1.5,
      medium: 3,
    },
    backgroundColor: "surfaceContainer",
    boxShadow: "level3",
  }),
  navigationbarBase,
]);

export const navigationbarLink = style([
  sprinkles({
    display: "flex",
    flexDirection: {
      compact: "column",
      medium: "row",
    },
    gap: 1, //4px
    color: "onSurfaceVariant",
    backgroundColor: "secondaryContainer",
    alignItems: "center",
    justifyContent: "center",
    px: { compact: 4 },
    py: { compact: 1, medium: 2 },
  }),
  {
    borderRadius: 20,
    selectors: {
      "&:hover": {
        backgroundColor: `rgba(${hexToRgb(vars.color.secondaryContainer)}, 0.08)`,
      },
      "&:focus-visible, &[data-pressed]": {
        backgroundColor: `rgba(${hexToRgb(vars.color.secondaryContainer)}, 0.1)`,
      },
    },
  },
]);

export const navigationbarIcon = style([]);
