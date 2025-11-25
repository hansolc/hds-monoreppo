import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";

const setFontProperties = (
  fontSize: number,
  lineHeight: number,
  letterSpacing?: number,
) => {
  return {
    fontSize: `calc(${fontSize} / var(--body-font-size, 16) * 1rem)`,
    lineHeight: `calc(${lineHeight} / var(--body-font-size, 16) * 1rem)`,
    ...(letterSpacing && {
      letterSpacing: `calc(${letterSpacing} / var(--body-font-size, 16) * 1rem)`,
    }),
  };
};

export const text = recipe({
  base: {},
  variants: {
    variants: {
      displayLarge: {
        ...setFontProperties(57, 64, -0.25),
      },
      displayMedium: {
        ...setFontProperties(45, 52),
      },
      displaySmall: {
        ...setFontProperties(36, 44),
      },
      headlineLarge: {
        ...setFontProperties(32, 40),
      },
      headlineMedium: {
        ...setFontProperties(28, 36),
      },
      headlineSmall: {
        ...setFontProperties(24, 32),
      },
      titleLarge: {
        ...setFontProperties(22, 28),
      },
      titleMedium: {
        ...setFontProperties(16, 24, 0.15),
      },
      titleSmall: {
        ...setFontProperties(14, 20, 0.1),
      },
      labelLarge: {
        ...setFontProperties(14, 20, 0.1),
      },
      labelMedium: {
        ...setFontProperties(12, 16, 0.5),
      },
      labelSmall: {
        ...setFontProperties(11, 16, 0.5),
      },
      bodyLarge: {
        ...setFontProperties(16, 24, 0.5),
      },
      bodyMedium: {
        ...setFontProperties(14, 20, 0.25),
      },
      bodySmall: {
        ...setFontProperties(12, 16, 0.5),
      },
    },
  },
});

export type TextVariants = NonNullable<RecipeVariants<typeof text>>;
export const textVariantOptions = Object.keys(
  text.classNames.variants.variants,
) as Array<TextVariants["variants"]>;
