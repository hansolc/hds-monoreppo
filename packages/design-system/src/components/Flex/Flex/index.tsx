import { AtomProps } from "@/types/atoms";
import { ElementType, forwardRef, HTMLAttributes } from "react";
import { Box } from "@/components/Box";
import { responsiveProperties } from "@/styles";

export interface FlexProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    Omit<
      AtomProps,
      | "display"
      | "flexWrap"
      | "flexDirection"
      | "alignItems"
      | "justifyContent"
      | "gap"
    > {
  as?: ElementType;
  wrap?: keyof typeof responsiveProperties.styles.flexWrap.values;
  direction?: keyof typeof responsiveProperties.styles.flexDirection.values;
  align?: keyof typeof responsiveProperties.styles.alignItems.values;
  justify?: keyof typeof responsiveProperties.styles.justifyContent.values;
  gap?: keyof typeof responsiveProperties.styles.gap.values;
}

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      as = "div",
      direction = "row",
      gap = "small", // default 8px
      wrap,
      align,
      justify,
      ...props
    },
    ref,
  ) => {
    return (
      <Box
        as={as}
        ref={ref}
        display="flex"
        flexWrap={wrap}
        flexDirection={direction}
        alignItems={align}
        justifyContent={justify}
        gap={gap}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

export default Flex;
