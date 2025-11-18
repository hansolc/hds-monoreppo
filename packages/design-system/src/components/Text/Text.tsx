import { AtomProps } from "@/types/atoms";
import { ElementType, forwardRef, HTMLAttributes } from "react";
import { Box } from "@/components/Box";

export interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, "color">,
    AtomProps {
  as?: ElementType;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, as = "p", ...props }, ref) => {
    return (
      <Box as={as} ref={ref} {...props}>
        {children}
      </Box>
    );
  },
);
