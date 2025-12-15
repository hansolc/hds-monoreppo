import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import {
  TabContext,
  type TabContextState,
} from "@/components/Tabs/context/TabsContext";
import { useId } from "react";
import useControllableState from "@/hooks/use-controllable-state";

const DISPLAY_NAME = "Tab";

export interface TabProps extends AtomProps, TabContextState {
  // custom own props here
  defaultValue?: string;
}

export const Tab = withPolymorphicComponent<"div", TabProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      baseId,
      value: valueProp,
      defaultValue,
      onValueChange,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;
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
          as={Component}
          ref={ref}
          className={clsx(className)}
          {...restProps}
        >
          {children}
        </Box>
      </TabContext.Provider>
    );
  },
  DISPLAY_NAME,
);
