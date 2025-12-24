import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { useTabContext } from "@/components/Tabs/context/TabsContext";
import useTabsKeyboard from "@/components/Tabs/hooks/use-tabs-keyboard";

const DISPLAY_NAME = "TabList";

export interface TabListProps extends AtomProps {
  // custom own props here
  // 탭 방향
  orientation?: "horizontal" | "vertical";
  // 자동 활성화 모드
  activationMode?: "automatic" | "manual";
  // 탭 순환 여부
  loop?: boolean;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export const TabList = withPolymorphicComponent<"div", TabListProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      orientation = "horizontal",
      activationMode = "automatic",
      loop = true,
      onKeyDown: onKeyDownProp,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;
    const { baseId } = useTabContext();

    const { handleKeyDown } = useTabsKeyboard({
      orientation,
      activationMode,
      loop,
      onKeyDown: onKeyDownProp,
    });

    const handleKeyDownWrapper = (event: React.KeyboardEvent<HTMLElement>) => {
      handleKeyDown(event);
    };

    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(className)}
        // add props
        role="tablist"
        aria-labelledby={baseId}
        aria-orientation={orientation}
        onKeyDown={handleKeyDownWrapper}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
