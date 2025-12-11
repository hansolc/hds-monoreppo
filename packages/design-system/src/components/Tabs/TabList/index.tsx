import { Box } from "@/components/Box";
import { ElementType, forwardRef } from "react";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/polymorphic";

interface TabListBaseProps {
  // Add your custom props here
}

export type TabListProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  TabListBaseProps
>;

const TabListImplementation = forwardRef(
  <C extends ElementType = "div">(
    props: TabListProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const { as = "div", children, ...restProps } = props;
    return (
      <Box
        as={as}
        ref={ref}
        // Add Box props here
        {...restProps}
      >
        {children}
      </Box>
    );
  },
);

TabListImplementation.displayName = "TabList";

export default TabListImplementation as PolymorphicComponent<
  "div",
  TabListBaseProps
>;
