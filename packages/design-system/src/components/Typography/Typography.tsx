import { Box } from "@/components/Box";
import { forwardRef, HTMLAttributes, type ElementType } from "react";
import { AtomProps } from "@/types/atoms";

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLElement>, "color">,
    AtomProps {
  as?: ElementType;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ children, as = "p", ...props }, ref) => {
    return (
      <Box ref={ref} as={as} {...props}>
        {children}
      </Box>
    );
  },
);
