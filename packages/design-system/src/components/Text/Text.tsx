import { Box } from "@/components/Box";
import { AtomProps } from "@/types/atoms";
import { PolymorphicComponentProps, PolymorphicRef } from "@/types/polymorphic";
import { forwardRef } from "react";
import { text, TextStylesTypes } from "./Text.css";
import clsx from "clsx";

export interface _TextProps
  extends Pick<
    AtomProps,
    | "fontSize"
    | "fontWeight"
    | "lineHeight"
    | "letterSpacing"
    | "textAlign"
    | "whiteSpace"
    | "textDecoration"
    | "color"
  > {
  textStyles?: TextStylesTypes;
}

export type TextProps<C extends React.ElementType = "span"> =
  PolymorphicComponentProps<C, _TextProps> & AtomProps;

export const Text = forwardRef(
  <C extends React.ElementType = "span">(
    { as, children, className, textStyles, ...restProps }: TextProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const Element = as || "span";

    return (
      <Box
        as={Element}
        ref={ref}
        className={clsx(text({ textStyles }), className)}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
);

Text.displayName = "Text";
