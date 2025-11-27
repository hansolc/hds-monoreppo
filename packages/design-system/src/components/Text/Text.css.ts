import { recipe, type RecipeVariants } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

const setFontProperties = ({
  fontSize,
  lineHeight,
  letterSpacing,
  fontWeight,
}: {
  fontSize: keyof typeof vars.typography.fontSize;
  lineHeight: keyof typeof vars.typography.lineHeight;
  letterSpacing?: keyof typeof vars.typography.letterSpacing;
  fontWeight?: keyof typeof vars.typography.fontWeights;
}) => {
  return {
    fontSize: vars.typography.fontSize[fontSize],
    lineHeight: vars.typography.lineHeight[lineHeight],
    ...(letterSpacing && {
      letterSpacing: vars.typography.letterSpacing[letterSpacing],
    }),
    ...(fontWeight && {
      fontWeight: vars.typography.fontWeights[fontWeight],
    }),
  };
};

export const text = recipe({
  base: {},
  variants: {
    textStyles: {
      displayLarge: {
        ...setFontProperties({
          fontSize: "5xl",
          lineHeight: "6xl",
          fontWeight: "regular",
          letterSpacing: "tight",
        }),
      },
      displayLargeBold: {
        ...setFontProperties({
          fontSize: "5xl",
          lineHeight: "6xl",
          fontWeight: "medium",
          letterSpacing: "tight",
        }),
      },
      displayMedium: {
        ...setFontProperties({
          fontSize: "4xl",
          lineHeight: "5xl",
          fontWeight: "regular",
        }),
      },
      displayMediumBold: {
        ...setFontProperties({
          fontSize: "4xl",
          lineHeight: "5xl",
          fontWeight: "medium",
        }),
      },
      displaySmall: {
        ...setFontProperties({
          fontSize: "3xl",
          lineHeight: "4xl",
          fontWeight: "regular",
        }),
      },
      displaySmallBold: {
        ...setFontProperties({
          fontSize: "3xl",
          lineHeight: "4xl",
          fontWeight: "medium",
        }),
      },
      headlineLarge: {
        ...setFontProperties({
          fontSize: "2xl",
          lineHeight: "3xl",
          fontWeight: "regular",
        }),
      },
      headlineLargeBold: {
        ...setFontProperties({
          fontSize: "2xl",
          lineHeight: "3xl",
          fontWeight: "medium",
        }),
      },
      headlineMedium: {
        ...setFontProperties({
          fontSize: "xl",
          lineHeight: "2xl",
          fontWeight: "regular",
        }),
      },
      headlineMediumBold: {
        ...setFontProperties({
          fontSize: "xl",
          lineHeight: "2xl",
          fontWeight: "medium",
        }),
      },
      headlineSmall: {
        ...setFontProperties({
          fontSize: "lg",
          lineHeight: "xl",
          fontWeight: "regular",
        }),
      },
      headlineSmallBold: {
        ...setFontProperties({
          fontSize: "lg",
          lineHeight: "xl",
          fontWeight: "medium",
        }),
      },
      titleLarge: {
        ...setFontProperties({
          fontSize: "md",
          lineHeight: "lg",
          fontWeight: "regular",
        }),
      },
      titleLargeBold: {
        ...setFontProperties({
          fontSize: "md",
          lineHeight: "lg",
          fontWeight: "medium",
        }),
      },
      titleMedium: {
        ...setFontProperties({
          fontSize: "sm",
          lineHeight: "md",
          fontWeight: "medium",
          letterSpacing: "wide",
        }),
      },
      titleMediumBold: {
        ...setFontProperties({
          fontSize: "sm",
          lineHeight: "md",
          fontWeight: "bold",
          letterSpacing: "wide",
        }),
      },
      titleSmall: {
        ...setFontProperties({
          fontSize: "xs",
          lineHeight: "sm",
          fontWeight: "medium",
          letterSpacing: "normal",
        }),
      },
      titleSmallBold: {
        ...setFontProperties({
          fontSize: "xs",
          lineHeight: "sm",
          fontWeight: "bold",
          letterSpacing: "normal",
        }),
      },
      labelLarge: {
        ...setFontProperties({
          fontSize: "xs",
          lineHeight: "sm",
          fontWeight: "medium",
          letterSpacing: "normal",
        }),
      },
      labelLargeBold: {
        ...setFontProperties({
          fontSize: "xs",
          lineHeight: "sm",
          fontWeight: "bold",
          letterSpacing: "normal",
        }),
      },
      labelMedium: {
        ...setFontProperties({
          fontSize: "2xs",
          lineHeight: "xs",
          fontWeight: "medium",
          letterSpacing: "extraWide",
        }),
      },
      labelMediumBold: {
        ...setFontProperties({
          fontSize: "2xs",
          lineHeight: "xs",
          fontWeight: "bold",
          letterSpacing: "extraWide",
        }),
      },
      labelSmall: {
        ...setFontProperties({
          fontSize: "3xs",
          lineHeight: "xs",
          fontWeight: "medium",
          letterSpacing: "extraWide",
        }),
      },
      labelSmallBold: {
        ...setFontProperties({
          fontSize: "3xs",
          lineHeight: "xs",
          fontWeight: "bold",
          letterSpacing: "extraWide",
        }),
      },
      bodyLarge: {
        ...setFontProperties({
          fontSize: "sm",
          lineHeight: "md",
          fontWeight: "regular",
          letterSpacing: "extraWide",
        }),
      },
      bodyLargeBold: {
        ...setFontProperties({
          fontSize: "sm",
          lineHeight: "md",
          fontWeight: "medium",
          letterSpacing: "extraWide",
        }),
      },
      bodyMedium: {
        ...setFontProperties({
          fontSize: "xs",
          lineHeight: "sm",
          fontWeight: "regular",
          letterSpacing: "wider",
        }),
      },
      bodyMediumBold: {
        ...setFontProperties({
          fontSize: "xs",
          lineHeight: "sm",
          fontWeight: "medium",
          letterSpacing: "wider",
        }),
      },
      bodySmall: {
        ...setFontProperties({
          fontSize: "2xs",
          lineHeight: "xs",
          fontWeight: "regular",
          letterSpacing: "widest",
        }),
      },
      bodySmallBold: {
        ...setFontProperties({
          fontSize: "2xs",
          lineHeight: "xs",
          fontWeight: "medium",
          letterSpacing: "widest",
        }),
      },
    },
  },
});

type TextVariants = NonNullable<RecipeVariants<typeof text>>;

export const TextStylesTypesKeys = Object.keys(
  text.classNames.variants.textStyles,
) as TextVariants["textStyles"][];

export type TextStylesTypes = (typeof TextStylesTypesKeys)[number];
