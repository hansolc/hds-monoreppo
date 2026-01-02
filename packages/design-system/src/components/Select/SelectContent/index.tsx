import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { useSelectContext } from "@/components/Select/context/SelectContext";
import { useSelect, useSelectKeyboard } from "@/components/Select/hooks";
import { KeyboardEvent, useEffect, useRef } from "react";
import { mergeRefs } from "@/utils/mergeRef";

const DISPLAY_NAME = "SelectContent";

export interface SelectContentProps extends AtomProps {
  autoFocus?: boolean;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
}

export const SelectContent = withPolymorphicComponent<
  "div",
  SelectContentProps
>(
  (
    {
      as,
      children,
      className,
      autoFocus = true,
      onKeyDown: onKeyDownProp,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;
    const { open, onOpenChange } = useSelectContext();
    const { contentId, triggerId } = useSelect();
    const { handleKeyDown } = useSelectKeyboard({
      onKeyDown: onKeyDownProp,
    });

    const contentRef = useRef<HTMLElement | null>(null);

    // Content가 열릴 때 첫 번째 item에 포커스
    useEffect(() => {
      if (open && autoFocus && contentRef.current) {
        // 약간의 딜레이 후 포커스 (Portal 렌더링 대기)
        const timeoutId = setTimeout(() => {
          const firstOption = contentRef.current?.querySelector(
            '[role="option"]:not([aria-disabled="true"])',
          ) as HTMLElement;

          if (firstOption) {
            firstOption.focus();
          }
        }, 0);

        return () => clearTimeout(timeoutId);
      }
    }, [open, autoFocus]);

    // Escape 키 처리
    const handleKeyDownWrapper = (event: React.KeyboardEvent<HTMLElement>) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onOpenChange(false);

        // Trigger로 포커스 복원
        const triggerElement = document.getElementById(triggerId);
        triggerElement?.focus();
        return;
      }

      // Enter 또는 Space로 선택
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        const target = event.target as HTMLElement;
        if (target.getAttribute("role") === "option") {
          target.click();
        }
        return;
      }

      // Arrow keys 처리
      handleKeyDown(event);
    };

    return (
      <Box
        as={Component}
        ref={mergeRefs(ref, contentRef)}
        className={clsx(className)}
        // WAI-ARIA 속성
        id={contentId}
        role="listbox"
        aria-labelledby={triggerId}
        // 키보드 이벤트
        onKeyDown={handleKeyDownWrapper}
        // data 속성
        data-state={open ? "open" : "closed"}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
