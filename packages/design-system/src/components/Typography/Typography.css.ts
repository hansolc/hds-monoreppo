import { vars } from "@/styles/theme.css";
import { recipe } from "@vanilla-extract/recipes";

export const typography = recipe({
  base: {},
  variants: {
    weight: {
      bold: {
        fontWeight: vars.typography.fontWeights.bold,
      },
      medium: {
        fontWeight: vars.typography.fontWeights.medium,
      },
      regular: {
        fontWeight: vars.typography.fontWeights.regular,
      },
    },
  },
});
