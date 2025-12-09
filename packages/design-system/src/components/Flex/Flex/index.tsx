import { Box } from "@/components/Box";
import { responsiveProperties } from "@/styles";
import { AtomProps } from "@/types/atoms";
import { PolymorphicComponentProps, PolymorphicRef } from "@/types/polymorphic";
import { forwardRef } from "react";

export interface _FlexProps
  extends Omit<
    AtomProps,
    | "display"
    | "flexWrap"
    | "flexDirection"
    | "alignItems"
    | "justifyContent"
    | "gap"
  > {
  wrap?: keyof typeof responsiveProperties.styles.flexWrap.values;
  direction?: keyof typeof responsiveProperties.styles.flexDirection.values;
  align?: keyof typeof responsiveProperties.styles.alignItems.values;
  justify?: keyof typeof responsiveProperties.styles.justifyContent.values;
  gap?: keyof typeof responsiveProperties.styles.gap.values;
}

export type FlexProps<C extends React.ElementType = "div"> =
  PolymorphicComponentProps<C, _FlexProps>;

export const Flex = forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      children,
      wrap,
      gap,
      direction,
      align,
      justify,
      ...restProps
    }: FlexProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const Element = as || "div";

    return (
      <Box
        as={Element}
        ref={ref}
        display="flex"
        flexWrap={wrap}
        flexDirection={direction}
        alignItems={align}
        justifyContent={justify}
        gap={gap}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
);

Flex.displayName = "Flex";
