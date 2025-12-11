import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { PolymorphicComponentPropsWithRef } from "@/types/polymorphic";
import { Box } from "@/components/Box";
import clsx from "clsx";

const DISPLAY_NAME = "TabList";

export interface _TabListProps extends AtomProps {
  // custom own props here
}

type TabListComponent = <C extends React.ElementType = "div">(
  props: PolymorphicComponentPropsWithRef<C, _TabListProps>,
) => React.ReactElement | null;

export const TabList: TabListComponent = withPolymorphicComponent<
  "div",
  _TabListProps
>(
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
    const Component = (as || "div") as React.ElementType;

    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(className)}
        // add props
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
