import { sprinkles, vars } from "@/styles";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const typographyDisplay = recipe({
  base: [],
  variants: {
    size: {
      lg: [
        style({ letterSpacing: vars.typography.letterSpacing.tight }),
        sprinkles({
          fontSize: {
            mobile: "4xl",
            tablet: "5xl",
            desktop: "5xl",
          },
          lineHeight: {
            mobile: "5xl",
            tablet: "6xl",
            desktop: "6xl",
          },
        }),
      ],
      md: [
        sprinkles({
          fontSize: {
            mobile: "3xl",
            tablet: "4xl",
            desktop: "4xl",
          },
          lineHeight: {
            mobile: "4xl",
            tablet: "5xl",
            desktop: "5xl",
          },
        }),
      ],
      sm: [
        sprinkles({
          fontSize: {
            mobile: "2xl",
            tablet: "3xl",
            desktop: "3xl",
          },
          lineHeight: {
            mobile: "3xl",
            tablet: "4xl",
            desktop: "4xl",
          },
        }),
      ],
    },
  },
});
