import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { typeScale, sprinkles, vars } from "@repo/tokens";
import { makeInteractiveButtonStyles } from "@/utils/button";
import { hexToRgb } from "@/utils/color";
import { styleVariants } from "@vanilla-extract/css";

export const button = recipe({
  base: [
    sprinkles({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    }),
    {
      selectors: {
        "&:disabled": {
          backgroundColor: `rgba(${hexToRgb(vars.color.onSurface)}, 0.1)`,
          color: `rgba(${hexToRgb(vars.color.onSurface)}, 0.38)`,
          cursor: "default",
        },
      },
    },
  ],
  variants: {
    color: {
      elevated: [
        sprinkles({
          backgroundColor: "surfaceContainerLow",
          color: "primary",
          boxShadow: "level3",
        }),
        {
          ...makeInteractiveButtonStyles({
            hover: {
              bg: "primary",
              opacity: 0.08,
            },
            focus: {
              bg: "primary",
              opacity: 0.1,
            },
            active: {
              bg: "primary",
              opacity: 0.1,
            },
          }),
        },
      ],
      filled: [
        sprinkles({
          backgroundColor: "primary",
          color: "onPrimary",
        }),
        {
          ...makeInteractiveButtonStyles({
            hover: {
              bg: "primary",
              opacity: 0.08,
            },
            focus: {
              bg: "primary",
              opacity: 0.1,
            },
            active: {
              bg: "primary",
              opacity: 0.12,
            },
          }),
        },
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
        sprinkles({
          gap: 1,
        }),
        {
          ...typeScale.labelLarge,
          padding: "12px 6px",
        },
      ],
      s: [
        sprinkles({
          gap: 2,
        }),
        {
          ...typeScale.labelLarge,
          padding: "16px 10px",
        },
      ],
      m: [
        sprinkles({
          gap: 2,
        }),
        {
          ...typeScale.titleMedium,
          padding: "24px 16px",
        },
      ],
      l: [
        sprinkles({
          gap: 3,
        }),
        {
          ...typeScale.headlineSmall,
          padding: "48px 32px",
        },
      ],
      xl: [
        sprinkles({
          gap: 4,
        }),
        {
          ...typeScale.headlineLarge,
          padding: "64px 48px",
        },
      ],
    },
    shape: {
      square: [sprinkles({ borderRadius: "medium" })],
      round: [sprinkles({ borderRadius: "full" })],
    },
  },
  defaultVariants: {
    size: "s",
    shape: "round",
    color: "filled",
  },
});

export const buttonIcon = styleVariants({
  xs: { width: 20, height: 20 },
  s: { width: 20, height: 20 },
  m: { width: 24, height: 24 },
  l: { width: 32, height: 32 },
  xl: { width: 40, height: 40 },
});

export type ButtonStyleVariants = NonNullable<RecipeVariants<typeof button>>;
