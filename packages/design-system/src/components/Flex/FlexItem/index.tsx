import { Box } from "@/components/Box";
import { AtomProps } from "@/types/atoms";
import { ElementType, forwardRef } from "react";
import { unresponsiveProperties } from "@/styles/sprinkles.css";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/polymorphic";

// 1. 고유 Props 선언 (필수)
interface FlexItemBaseProps
  extends Omit<AtomProps, "display" | "flex" | "flexGrow" | "flexShrink"> {
  grow?: keyof typeof unresponsiveProperties.styles.flexGrow.values;
  shrink?: keyof typeof unresponsiveProperties.styles.flexShrink.values;
  flex?: string | number;
  basis?: string | number;
}

// 2. 외부 사용을 위한 Props 타입 내보내기 (선택사항)
// 필요하다면 이 한 줄만 작성하면 됩니다.
export type FlexItemProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  FlexItemBaseProps
>;

// 3. 구현 (ForwardRef)
const FlexItemImplementation = forwardRef(
  <C extends ElementType = "div">(
    {
      children,
      as,
      grow,
      shrink,
      flex,
      basis,
      style,
      ...props
    }: FlexItemProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const inlineStyle = {
      ...style,
      ...(flex ? { flex } : {}),
      ...(basis ? { flexBasis: basis } : {}),
    };
    return (
      <Box
        ref={ref}
        as={as || "div"}
        style={inlineStyle}
        flexGrow={grow}
        flexShrink={shrink}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

FlexItemImplementation.displayName = "FlexItem";

// 4. 타입 단언을 통해 간결하게 export
export default FlexItemImplementation as PolymorphicComponent<
  "div",
  FlexItemBaseProps
>;
