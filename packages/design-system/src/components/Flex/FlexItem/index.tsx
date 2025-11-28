import { Box } from "@/components/Box";
import { AtomProps } from "@/types/atoms";
import { ElementType, forwardRef, HTMLAttributes } from "react";
import { unresponsiveProperties } from "@/styles/sprinkles.css";

export interface FlexItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color">,
    Omit<AtomProps, "display" | "flex" | "flexGrow" | "flexShrink"> {
  as?: ElementType;
  grow?: keyof typeof unresponsiveProperties.styles.flexGrow.values;
  shrink?: keyof typeof unresponsiveProperties.styles.flexShrink.values;
  flex?: string | number;
  basis?: string | number;
}

const FlexItem = forwardRef<HTMLDivElement, FlexItemProps>(
  (
    { children, as = "div", grow, shrink, flex, basis, style, ...props },
    ref,
  ) => {
    const inlineStyle = {
      ...style,
      ...(flex ? { flex } : {}),
      ...(basis ? { flexBasis: basis } : {}),
    };
    return (
      <Box
        ref={ref}
        as={as}
        style={inlineStyle}
        flexGrow={grow}
        flexShrink={shrink}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

FlexItem.displayName = "FlexItem";

export default FlexItem;
