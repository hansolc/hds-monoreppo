import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";

const DISPLAY_NAME = "SelectGroup";

interface SelectGroupProps extends AtomProps {
  // custom own props here
}

export const SelectGroup = withPolymorphicComponent<"div", SelectGroupProps>(
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
