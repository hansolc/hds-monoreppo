// packages/design-system/src/components/Text/Text.tsx
import { Box } from "@/components/Box";
import { ElementType, Ref } from "react";
import { text, type TextStylesTypes } from "./Text.css";
import { AtomProps } from "@/types/atoms";
import clsx from "clsx";
import { Props, RefProp } from "@/types/props";
import { forwardRefWithAs } from "@/utils/forwardRef";

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

// 1. 고유 Props 정의 (HTML 속성 제외)
export type TextProps<TTag extends ElementType = "span"> = Props<
  TTag,
  TextBaseProps
> &
  AtomProps;

function TextFn<TTag extends ElementType = "span">(
  props: TextProps<TTag>,
  ref?: Ref<HTMLElement>,
) {
  const {
    children,
    as = "span" as ElementType,
    textStyles,
    className,
    ...restProps
  } = props;

  return (
    <Box
      as={as}
      ref={ref}
      className={clsx(text({ textStyles }), className)}
      {...restProps}
    >
      {children}
    </Box>
  );
}

export interface _internal_ComponentText {
  <TTag extends ElementType = "span">(
    props: TextProps<TTag> & RefProp<typeof TextFn>,
  ): React.JSX.Element;
}

export const Text = forwardRefWithAs(TextFn, "Text") as _internal_ComponentText;
