import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { PolymorphicComponentPropsWithRef } from "@/types/polymorphic";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { text, TextStylesTypes } from "./Text.css";

const DISPLAY_NAME = "Text";

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

type TextComponent = <C extends React.ElementType = "div">(
  props: PolymorphicComponentPropsWithRef<C, _TextProps>,
) => React.ReactElement | null;

export const Text: TextComponent = withPolymorphicComponent<"div", _TextProps>(
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
