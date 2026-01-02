import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import useRegisterRef from "@/hooks/use-register-ref";
import {
  useSelectContext,
  useSelectRefContext,
} from "@/components/Select/context/SelectContext";
import { useSelect } from "@/components/Select/hooks";

const DISPLAY_NAME = "SelectItem";

export interface SelectItemProps extends AtomProps {
  // custom own props
  value: string;
  disabled?: boolean;
}

export const SelectItem = withPolymorphicComponent<"div", SelectItemProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      value,
      disabled = false,
      onClick,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;
    const { onValueChange, onOpenChange } = useSelectContext();
    const { registerItemRef, unregisterItemRef } = useSelectRefContext();
    const { isSelected, itemId } = useSelect(value);

    const mergedRef = useRegisterRef(registerItemRef, unregisterItemRef, ref);

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (!disabled) {
        onValueChange(value);
        onOpenChange(false); // 선택되면 닫기
        onClick?.(event);
      }
    };

    return (
      <Box
        as={Component}
        ref={mergedRef}
        className={clsx(className)}
        // WAI-ARIA 속성
        id={itemId}
        role="option"
        aria-selected={isSelected}
        aria-disabled={disabled}
        // 이벤트
        onClick={handleClick}
        // tabIndex는 SelectContent에서 키보드로 관리
        tabIndex={-1}
        // data 속성
        data-value={value}
        data-state={isSelected ? "checked" : "unchecked"}
        data-disabled={disabled ? "" : undefined}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
