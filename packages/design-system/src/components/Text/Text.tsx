// packages/design-system/src/components/Text/Text.tsx
import { Box } from "@/components/Box";
import { forwardRef, HTMLAttributes } from "react";
import { text, type TextStylesTypes } from "./Text.css";
import { AtomProps } from "@/types/atoms";
import { TextSemantic } from "./types";

export interface TextProps
  extends AtomProps,
    Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  as?: TextSemantic;
  textStyles?: TextStylesTypes;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, as = "span", textStyles = "bodyLarge", ...props }, ref) => {
    return (
      <Box ref={ref} as={as} className={text({ textStyles })} {...props}>
        {children}
      </Box>
    );
  },
);
