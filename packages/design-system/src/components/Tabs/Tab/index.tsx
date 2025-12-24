import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import {
  TabContext,
  TabRefContext,
  type TabContextState,
} from "@/components/Tabs/context/TabsContext";
import {
  RefObject,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useState,
} from "react";
import useControllableState from "@/hooks/use-controllable-state";

const DISPLAY_NAME = "Tab";

export interface TabProps
  extends AtomProps,
    Omit<TabContextState, "value" | "onValueChange"> {
  // custom own props here
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
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

    const [triggerRefs, setTriggerRefs] = useState<
      RefObject<HTMLElement | null>[]
    >([]);

    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
    });

    // defaultValue가 없으면 첫 번째 TabTrigger의 value를 찾아서 사용
    useEffect(() => {
      if (!defaultValue && !valueProp && triggerRefs.length > 0) {
        const firstTrigger = triggerRefs[0]?.current;
        if (firstTrigger) {
          const firstValue = firstTrigger.getAttribute("data-value");
          if (firstValue) {
            setValue(firstValue);
          }
        }
      }
    }, [defaultValue, valueProp, setValue, triggerRefs.length]);

    const registerTriggerRef = useCallback(
      (ref: RefObject<HTMLElement | null>) => {
        setTriggerRefs((prev) => {
          // 이미 등록되어 있으면 추가하지 않음
          if (prev.indexOf(ref) !== -1) {
            return prev;
          }
          return [...prev, ref];
        });
      },
      [],
    );

    const unregisterTriggerRef = useCallback(
      (ref: RefObject<HTMLElement | null>) => {
        setTriggerRefs((prev) => prev.filter((r) => r !== ref));
      },
      [],
    );

    const tabRefContextValue = useMemo(
      () => ({
        triggerRef: triggerRefs,
        registerTriggerRef,
        unregisterTriggerRef,
      }),
      [triggerRefs, registerTriggerRef, unregisterTriggerRef],
    );

    return (
      <TabContext.Provider
        value={{ baseId: id, value, onValueChange: setValue }}
      >
        <TabRefContext.Provider value={tabRefContextValue}>
          <Box
            as={Component}
            ref={ref}
            className={clsx(className)}
            {...restProps}
          >
            {children}
          </Box>
        </TabRefContext.Provider>
      </TabContext.Provider>
    );
  },
  DISPLAY_NAME,
);
