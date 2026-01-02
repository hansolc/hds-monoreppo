import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import {
  SelectContext,
  SelectContextState,
  SelectRefContext,
} from "@/components/Select/context/SelectContext";
import { RefObject, useCallback, useId, useMemo, useState } from "react";
import useControllableState from "@/hooks/use-controllable-state";

const DISPLAY_NAME = "SelectGroup";

export interface SelectGroupProps
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
      baseId,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;
    const id = baseId || useId();

    // Select Trigger ref
    const [triggerRef, setTriggerRef] =
      useState<RefObject<HTMLElement | null> | null>(null);

    const [itemRefs, setItemRefs] = useState<RefObject<HTMLElement | null>[]>(
      [],
    );

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

    // Select Trigger ref 등록/해제
    const registerTriggerRef = useCallback(
      (ref: RefObject<HTMLElement | null>) => {
        setTriggerRef(ref);
      },
      [],
    );

    const unregisterTriggerRef = useCallback(() => {
      setTriggerRef(null);
    }, []);

    // Item ref 등록/해제
    const registerItemRef = useCallback(
      (ref: RefObject<HTMLElement | null>) => {
        setItemRefs((prev) => {
          // 이미 등록되어 있으면 추가하지 않음
          if (prev.indexOf(ref) !== -1) {
            return prev;
          }
          return [...prev, ref];
        });
      },
      [],
    );

    const unregisterItemRef = useCallback(
      (ref: RefObject<HTMLElement | null>) => {
        setItemRefs((prev) => prev.filter((r) => r !== ref));
      },
      [],
    );

    const selectRefContextValue = useMemo(
      () => ({
        triggerRef,
        registerTriggerRef,
        unregisterTriggerRef,
        itemRefs,
        registerItemRef,
        unregisterItemRef,
      }),
      [
        triggerRef,
        registerTriggerRef,
        unregisterTriggerRef,
        itemRefs,
        registerItemRef,
        unregisterItemRef,
      ],
    );
    return (
      <SelectContext.Provider
        value={{
          value,
          onValueChange: setValue,
          open,
          onOpenChange: setOpen,
          baseId: id,
        }}
      >
        <SelectRefContext.Provider value={selectRefContextValue}>
          <Box
            as={Component}
            ref={ref}
            className={clsx(className)}
            // add props
            {...restProps}
          >
            {children}
          </Box>
        </SelectRefContext.Provider>
      </SelectContext.Provider>
    );
  },
  DISPLAY_NAME,
);
