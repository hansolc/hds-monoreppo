import { Box } from "@/components/Box";
import { ElementType, forwardRef, useId } from "react";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/polymorphic";
import {
  TabContext,
  type TabContextState,
} from "@/components/Tabs/context/TabsContext";
import useControllableState from "@/hooks/useControllableState";

export interface TabsBaseProps extends TabContextState {
  // Add your custom props here
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  baseId?: string;
}

export type TabsProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  TabsBaseProps
>;

const TabsImplementation = forwardRef(
  <C extends ElementType = "div">(
    props: TabsProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const {
      as = "div",
      children,
      // destructure your props here
      baseId,
      value: valueProp,
      defaultValue,
      onValueChange,
      ...restProps
    } = props;

    const id = baseId || useId();
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
    });

    return (
      <TabContext.Provider
        value={{ baseId: id, value, onValueChange: setValue }}
      >
        <Box
          as={as as ElementType}
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
