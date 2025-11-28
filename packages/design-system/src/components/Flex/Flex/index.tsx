import { AtomProps } from "@/types/atoms";
import { ElementType, forwardRef, HTMLAttributes } from "react";
import { Box } from "@/components/Box";
import { flexTokens } from "@/styles";
import { spacing } from "@/tokens";

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
  wrap?: (typeof flexTokens.flexWrap)[number];
  direction?: (typeof flexTokens.flexDirection)[number];
  align?: (typeof flexTokens.alignItems)[number];
  justify?: (typeof flexTokens.justifyContent)[number];
  gap?: keyof typeof spacing;
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
