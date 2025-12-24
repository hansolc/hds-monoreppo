import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import useTab from "@/components/Tabs/hooks/use-tabs";
import { useEffect, useRef } from "react";
import { mergeRefs } from "@/utils/mergeRef";
import { useTabRefContext } from "@/components/Tabs/context/TabsContext";

const DISPLAY_NAME = "TabTrigger";

export interface TabTriggerProps extends AtomProps {
  // custom own props here
  value: string;
  disabled?: boolean;
}

export const TabTrigger = withPolymorphicComponent<"button", TabTriggerProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      value,
      onClick,
      disabled = false,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "button") as React.ElementType;
    const { clickTabTrigger, isSelected, triggerId, panelId } = useTab(value);
    const { registerTriggerRef, unregisterTriggerRef } = useTabRefContext();

    const localRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (localRef.current) {
        registerTriggerRef(localRef);
      }

      return () => {
        unregisterTriggerRef(localRef);
      };
    }, [registerTriggerRef, unregisterTriggerRef]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        clickTabTrigger();
        onClick?.(event);
      }
    };

    return (
      <Box
        as={Component}
        ref={mergeRefs(ref, localRef)}
        className={clsx(className)}
        // add props
        id={triggerId}
        type="button"
        role="tab"
        aria-selected={isSelected}
        aria-controls={panelId}
        aria-disabled={disabled}
        onClick={handleClick}
        disabled={disabled}
        tabIndex={isSelected && !disabled ? 0 : -1}
        data-value={value}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
