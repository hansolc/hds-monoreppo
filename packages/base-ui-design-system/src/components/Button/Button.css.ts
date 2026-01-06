import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { typeScale, sprinkles } from "@repo/tokens";

export const button = recipe({
  base: [
    sprinkles({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      borderRadius: "full",
    }),
  ],
  variants: {
    variant: {
      elevated: [
        sprinkles({
          backgroundColor: "surfaceContainerLow",
          color: "primary",
          boxShadow: "level3",
        }),
      ],
      filled: [
        sprinkles({
          backgroundColor: "primary",
          color: "onPrimary",
        }),
      ],
      tonal: [
        sprinkles({
          backgroundColor: "secondaryContainer",
          color: "onSecondaryContainer",
        }),
      ],
      outlined: [
        sprinkles({
          borderColor: "outlineVariant",
          color: "onSurfaceVariant",
        }),
        {
          border: "1px solid",
        },
      ],
      text: [
        sprinkles({
          color: "primary",
        }),
      ],
    },
    size: {
      xs: [
        {
          ...typeScale.labelLarge,
          padding: "12px 6px",
        },
      ],
      sm: [
        {
          ...typeScale.labelLarge,
          padding: "16px 10px",
        },
      ],
      md: [
        {
          ...typeScale.titleMedium,
          padding: "24px 16px",
        },
      ],
      lg: [
        {
          ...typeScale.headlineSmall,
          padding: "48px 32px",
        },
      ],
      xl: [
        {
          ...typeScale.headlineLarge,
          padding: "64px 48px",
        },
      ],
    },
    square: {
      true: [
        sprinkles({
          borderRadius: "medium",
        }),
      ],
      false: [],
    },
  },
  defaultVariants: {
    size: "md",
    square: false,
  },
});

export type ButtonStyleVariants = NonNullable<RecipeVariants<typeof button>>;
