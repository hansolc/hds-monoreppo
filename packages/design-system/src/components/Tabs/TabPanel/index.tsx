import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import useTab from "@/components/Tabs/hooks/use-tabs";

const DISPLAY_NAME = "TabPanel";

export interface TabPanelProps extends AtomProps {
  // custom own props here
  value: string;
}

export const TabPanel = withPolymorphicComponent<"div", TabPanelProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      value,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;
    const { panelId, triggerId, isSelected } = useTab(value);

    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(className)}
        // add props
        id={panelId}
        aria-labelledby={triggerId}
        role="tabpanel"
        hidden={!isSelected}
        tabIndex={isSelected ? 0 : -1}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
