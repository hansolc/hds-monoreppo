import { Box } from "@/components/Box";
import { ElementType, forwardRef, useId, useState } from "react";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/polymorphic";
import {
  TabContext,
  type TabContextState,
} from "@/components/Tabs/context/TabsContext";

interface TabsBaseProps extends TabContextState {
  // Add your custom props here
}

export type TabsProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  TabsBaseProps
>;

const TabsImplementation = forwardRef(
  <C extends ElementType = "div">(
    {
      as,
      children,
      // destructure your props here
      baseId,
      value: valueProp,
      onValueChange,
      ...restProps
    }: TabsProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const Component = as || "div";
    const id = baseId || useId();
    const isControlled = valueProp !== undefined;
    const [value, setValue] = useState(valueProp);

    return (
      <TabContext.Provider value={{ baseId: id, value, onValueChange }}>
        <Box
          as={Component}
          ref={ref}
          // Add Box props here
          {...restProps}
        >
          {children}
        </Box>
      </TabContext.Provider>
    );
  },
);

TabsImplementation.displayName = "Tabs";

export default TabsImplementation as PolymorphicComponent<"div", TabsBaseProps>;
