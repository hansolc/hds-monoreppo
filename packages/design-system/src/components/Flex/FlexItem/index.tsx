import { Box } from "@/components/Box";
import { AtomProps } from "@/types/atoms";
import { forwardRef } from "react";
import { unresponsiveProperties } from "@/styles/sprinkles.css";
import { PolymorphicComponentProps, PolymorphicRef } from "@/types/polymorphic";

// 1. 고유 Props 선언 (필수)
interface _FlexItemProps
  extends Omit<AtomProps, "display" | "flex" | "flexGrow" | "flexShrink"> {
  grow?: keyof typeof unresponsiveProperties.styles.flexGrow.values;
  shrink?: keyof typeof unresponsiveProperties.styles.flexShrink.values;
  flex?: string | number;
  basis?: string | number;
}

// 2. 외부 사용을 위한 Props 타입 내보내기 (선택사항)
// 필요하다면 이 한 줄만 작성하면 됩니다.
export type FlexItemProps<C extends React.ElementType = "div"> =
  PolymorphicComponentProps<C, _FlexItemProps>;

export const FlexItem = forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      children,
      grow,
      shrink,
      flex,
      basis,
      style,
      ...restProps
    }: FlexItemProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const Element = as || "div";

    const inlineStyle = {
      ...style,
      ...(flex ? { flex } : {}),
      ...(basis ? { flexBasis: basis } : {}),
    };

    return (
      <Box
        as={Element}
        ref={ref}
        style={inlineStyle}
        flexGrow={grow}
        flexShrink={shrink}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
);

FlexItem.displayName = "FlexItem";
