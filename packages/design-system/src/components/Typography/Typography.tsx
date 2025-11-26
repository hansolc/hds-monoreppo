import { Box } from "@/components/Box";
import { forwardRef, HTMLAttributes, type ElementType } from "react";
import { AtomProps } from "@/types/atoms";
import clsx from "clsx";

export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLElement>, "color" | "weight">,
    AtomProps {
  as?: ElementType;
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ children, as = "p", className, ...props }, ref) => {
    return (
      <Box ref={ref} as={as} className={clsx(className)} {...props}>
        {children}
      </Box>
    );
  },
);
