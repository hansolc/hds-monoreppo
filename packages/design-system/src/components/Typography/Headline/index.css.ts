import { sprinkles } from "@/styles/sprinkles.css";
import { vars } from "@/styles/theme.css";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const typographyHeadline = recipe({
  base: [sprinkles({ fontWeight: "regular" })],
  variants: {
    size: {
      lg: [
        style({ letterSpacing: vars.typography.letterSpacing.tight }),
        sprinkles({
          fontSize: {
            desktop: "2xl",
            tablet: "2xl",
            mobile: "xl",
          },
          lineHeight: {
            desktop: "3xl",
            tablet: "3xl",
            mobile: "2xl",
          },
        }),
      ],
      md: [
        sprinkles({
          fontSize: {
            desktop: "xl",
            tablet: "xl",
            mobile: "lg",
          },
          lineHeight: {
            desktop: "2xl",
            tablet: "2xl",
            mobile: "xl",
          },
        }),
      ],
      sm: [
        sprinkles({
          fontSize: {
            desktop: "lg",
            tablet: "lg",
            mobile: "md",
          },
          lineHeight: {
            desktop: "xl",
            tablet: "xl",
            mobile: "lg",
          },
        }),
      ],
    },
    emphasized: {
      true: [sprinkles({ fontWeight: "medium" })],
      false: [],
    },
  },
});
