import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { SelectContextState } from "@/components/Select/context/SelectContext";
import { RefObject, useState } from "react";
import useControllableState from "@/hooks/use-controllable-state";

const DISPLAY_NAME = "SelectGroup";

interface SelectGroupProps
  extends AtomProps,
    Omit<
      SelectContextState,
      "value" | "onValueChange" | "open" | "onOpenChange"
    > {
  // custom own props here
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const SelectGroup = withPolymorphicComponent<"div", SelectGroupProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      defaultValue,
      value: valueProp,
      onValueChange,
      open: openProp,
      onOpenChange,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;

    // ref
    const [triggerRefs, setTriggerRefs] = useState<
      RefObject<HTMLElement | null>[]
    >([]);

    // state
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
    });
    const [open, setOpen] = useControllableState({
      prop: openProp,
      onChange: onOpenChange,
      defaultProp: false,
    });

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
