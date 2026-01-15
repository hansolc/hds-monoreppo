import { sprinkles } from "@repo/tokens";
import { style } from "@vanilla-extract/css";

export const navigationbar = style([
  sprinkles({
    display: "flex",
    py: {
      compact: 1.5,
      medium: 3,
    },
    backgroundColor: "surfaceContainer",
  }),
]);
