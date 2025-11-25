// packages/design-system/src/components/Text/Text.tsx
import { Box } from "@/components/Box";
import { forwardRef, HTMLAttributes, type ElementType } from "react";
import { text, type TextVariants } from "./Text.css";
import { AtomProps } from "@/types/atoms";

export interface TextProps
  extends Omit<HTMLAttributes<HTMLElement>, "color">,
    AtomProps {
  as?: ElementType;
  variants?: TextVariants["variants"];
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, as = "p", variants = "bodyLarge", ...props }, ref) => {
    return (
      <Box ref={ref} as={as} className={text({ variants })} {...props}>
        {children}
      </Box>
    );
  },
);
