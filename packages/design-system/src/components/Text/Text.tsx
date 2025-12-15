import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { text, TextStylesTypes } from "./Text.css";

const DISPLAY_NAME = "Text";

export interface TextProps
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

export const Text = withPolymorphicComponent<"div", TextProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      textStyles,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;

    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(className, text({ textStyles }))}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
