import { Box } from "@/components/Box";
import { forwardRef, HTMLAttributes, type ElementType } from "react";
import { AtomProps } from "@/types/atoms";
import { typography } from "./Typography.css";
import clsx from "clsx";
export interface TypographyProps
  extends Omit<HTMLAttributes<HTMLElement>, "color" | "weight">,
    AtomProps {
  as?: ElementType;
  weight?: "bold" | "medium" | "regular";
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ children, as = "p", weight = "regular", className, ...props }, ref) => {
    console.log(weight);
    return (
      <Box
        ref={ref}
        as={as}
        className={clsx(typography({ weight }), className)}
        {...props}
      >
        {children}
      </Box>
    );
  },
);
