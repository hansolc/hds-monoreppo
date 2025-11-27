import { sprinkles } from "@/styles";
import { recipe } from "@vanilla-extract/recipes";

/** Title
 * - fontweight
 *  - 각 사이즈별 font-weight 값이 다름
 *  - compoundVariants를 사용하여 각 사이즈별 font-weight 값을 설정
 */

export const typographyTitle = recipe({
  base: [],
  variants: {
    size: {
      lg: [
        sprinkles({
          fontSize: {
            desktop: "md",
            tablet: "md",
            mobile: "sm",
          },
          fontWeight: "regular",
        }),
      ],
      md: [
        sprinkles({
          fontSize: {
            desktop: "sm",
            tablet: "sm",
            mobile: "xs",
          },
          fontWeight: "medium",
        }),
      ],
      sm: [
        sprinkles({
          fontSize: {
            desktop: "xs",
            tablet: "xs",
            mobile: "2xs",
          },
          fontWeight: "medium",
        }),
      ],
    },
    emphasized: {
      true: [sprinkles({ fontWeight: "bold" })],
      false: [],
    },
  },
  compoundVariants: [
    {
      variants: {
        emphasized: true,
        size: "lg",
      },
      style: {
        fontWeight: [sprinkles({ fontWeight: "medium" })],
      },
    },
  ],
});
