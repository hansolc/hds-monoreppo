// packages/design-system/src/components/Text/Text.tsx
import { Box } from "@/components/Box";
import { forwardRef, HTMLAttributes } from "react";
import { text, type TextStylesTypes } from "./Text.css";
import { AtomProps } from "@/types/atoms";
import { TextSemantic } from "./types";
import clsx from "clsx";

/** CSS 우선순위 (Sprinkles, Recipes)
 * - utils/atoms 을 보면 sprinkles가 먼저, classname이 나중에 적용된다.
 * - 현재 상황에서는 textStyles가 recipes / fontSize가 sprinkles 이다.
 * - 따라서, textStyles가 우선순위가 높다.
 */

export interface TextProps
  extends Pick<
      AtomProps,
      | "fontSize"
      | "fontWeight"
      | "lineHeight"
      | "letterSpacing"
      | "textAlign"
      | "whiteSpace"
      | "maxLines"
      | "textDecoration"
    >,
    Omit<HTMLAttributes<HTMLSpanElement>, "color"> {
  as?: TextSemantic;
  textStyles?: TextStylesTypes;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  ({ children, as = "span", textStyles, className, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        as={as}
        className={clsx(text({ textStyles }), className)}
        {...props}
      >
        {children}
      </Box>
    );
  },
);
