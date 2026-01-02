import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import {
  useSelectContext,
  useSelectRefContext,
} from "@components/Select/context/SelectContext";
import { useSelect } from "@components/Select/hooks";
import useRegisterRef from "@/hooks/use-register-ref";

const DISPLAY_NAME = "SelectTrigger";

export interface SelectTriggerProps extends AtomProps {
  // custom own props here
  disabled?: boolean;
}

export const SelectTrigger = withPolymorphicComponent<
  "button",
  SelectTriggerProps
>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      disabled = false,
      onClick,
      onKeyDown,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "button") as React.ElementType;
    const { open, onOpenChange } = useSelectContext();
    const { registerTriggerRef, unregisterTriggerRef } = useSelectRefContext();
    const { triggerId, contentId } = useSelect();

    const mergedRef = useRegisterRef(
      registerTriggerRef,
      unregisterTriggerRef,
      ref,
    );

    // 클릭 핸들러 - 드롭다운 토글
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (!disabled) {
        onOpenChange(!open);
        onClick?.(event);
      }
    };

    // 키보드 핸들러
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;

      const { key } = event;

      // Enter 또는 Space로 드롭다운 열기/닫기
      if (key === "Enter" || key === " ") {
        event.preventDefault();
        onOpenChange(!open);
      }

      // ArrowDown으로 드롭다운 열기 (아직 열려있지 않은 경우)
      if (key === "ArrowDown" && !open) {
        event.preventDefault();
        onOpenChange(true);
        // TODO: SelectContent가 열리면 첫 번째 item에 포커스
      }

      // ArrowUp으로 드롭다운 열기 (아직 열려있지 않은 경우)
      if (key === "ArrowUp" && !open) {
        event.preventDefault();
        onOpenChange(true);
        // TODO: SelectContent가 열리면 마지막 item에 포커스
      }

      // Escape로 드롭다운 닫기
      if (key === "Escape" && open) {
        event.preventDefault();
        onOpenChange(false);
      }

      onKeyDown?.(event);
    };

    return (
      <Box
        as={Component}
        ref={mergedRef}
        className={clsx(className)}
        // WAI-ARIA 속성
        id={triggerId}
        type="button"
        role="combobox"
        aria-expanded={open}
        aria-controls={contentId}
        aria-disabled={disabled}
        aria-haspopup="listbox"
        // 이벤트 핸들러
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        // data 속성 (CSS 스타일링용)
        data-state={open ? "open" : "closed"}
        data-disabled={disabled ? "" : undefined}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
