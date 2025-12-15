import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { PolymorphicComponentPropsWithRef } from "@/types/polymorphic";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { useId } from "react";
import { useTabContext } from "@/components/Tabs/context/TabsContext";

const DISPLAY_NAME = "TabLabel";

interface TabLabelProps extends AtomProps {
  // custom own props here
}

export const TabLabel = withPolymorphicComponent<"div", TabLabelProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "h3") as React.ElementType;
    const { baseId } = useTabContext();

    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(className)}
        // add props
        id={baseId}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
