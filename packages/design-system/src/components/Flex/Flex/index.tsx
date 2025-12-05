import { AtomProps } from "@/types/atoms";
import { ElementType, forwardRef } from "react";
import { Box } from "@/components/Box";
import { responsiveProperties } from "@/styles";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/polymorphic";

export interface FlexBaseProps
  extends Omit<
    AtomProps,
    | "display"
    | "flexWrap"
    | "flexDirection"
    | "alignItems"
    | "justifyContent"
    | "gap"
  > {
  wrap?: keyof typeof responsiveProperties.styles.flexWrap.values;
  direction?: keyof typeof responsiveProperties.styles.flexDirection.values;
  align?: keyof typeof responsiveProperties.styles.alignItems.values;
  justify?: keyof typeof responsiveProperties.styles.justifyContent.values;
  gap?: keyof typeof responsiveProperties.styles.gap.values;
}

export type FlexProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  FlexBaseProps
>;

const FlexImplementation = forwardRef(
  <C extends ElementType = "div">(
    props: FlexProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const {
      children,
      as = "div",
      direction = "row",
      gap = "small",
      wrap,
      align,
      justify,
      ...restProps
    } = props;
    return (
      <Box
        as={as as ElementType}
        ref={ref}
        display="flex"
        flexWrap={wrap}
        flexDirection={direction}
        alignItems={align}
        justifyContent={justify}
        gap={gap}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
);

FlexImplementation.displayName = "Flex";

export default FlexImplementation as PolymorphicComponent<"div", FlexBaseProps>;
