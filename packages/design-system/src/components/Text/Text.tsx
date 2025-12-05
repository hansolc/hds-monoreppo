// packages/design-system/src/components/Text/Text.tsx
import { Box } from "@/components/Box";
import { forwardRef, ElementType } from "react"; // HTMLAttributes 제거
import { text, type TextStylesTypes } from "./Text.css";
import { AtomProps } from "@/types/atoms";
import clsx from "clsx";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/polymorphic";

// 1. 고유 Props 정의 (HTML 속성 제외)
interface TextBaseProps
  extends Pick<
    AtomProps,
    | "fontSize"
    | "fontWeight"
    | "lineHeight"
    | "letterSpacing"
    | "textAlign"
    | "whiteSpace"
    | "textDecoration"
    | "color"
  > {
  textStyles?: TextStylesTypes;
}

// 2. Polymorphic Props 정의
export type TextProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  TextBaseProps
>;

const TextImplementation = forwardRef(
  <C extends ElementType = "span">(
    props: TextProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const {
      children,
      as = "span",
      textStyles,
      className,
      ...restProps
    } = props;

    return (
      <Box
        as={as as ElementType}
        ref={ref}
        className={clsx(text({ textStyles }), className)}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
);

TextImplementation.displayName = "Text";

export default TextImplementation as PolymorphicComponent<
  "span",
  TextBaseProps
>;
