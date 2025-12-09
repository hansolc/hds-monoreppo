"use client";

import {
  KeyboardEvent,
  useCallback,
  ElementType,
  HTMLAttributes,
  MouseEvent,
} from "react";
import useHover from "@/hooks/Interactions/use-hover";
import useActive from "@/hooks/Interactions/use-active";
import useFocus from "@/hooks/Interactions/use-focus";

interface UseButtonProps
  extends Pick<
    HTMLAttributes<HTMLElement>,
    | "onKeyDown"
    | "onMouseDown"
    | "onMouseUp"
    | "onMouseEnter"
    | "onMouseLeave"
    | "onFocus"
    | "onBlur"
  > {
  as?: ElementType;
  role?: string;
  disabled?: boolean;
  loading?: boolean;
  selected?: boolean;
  type?: "button" | "submit" | "reset";
}

function useButton(props: UseButtonProps) {
  const {
    as: SemanticElement = "button",
    role = "button",
    disabled = false,
    loading = false,
    selected, // selected가 undefined일 경우 aria-pressed를 넣지 않는 것을 권장
    type = "button",
    onKeyDown,
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
  } = props;

  const isDisabled = disabled || loading;

  const {
    handleMouseEnter,
    handleMouseLeave: handleMouseLeaveHover,
    isHover,
  } = useHover({
    onMouseEnter,
    onMouseLeave,
    isDisabled,
  });

  const {
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave: handleMouseLeaveActive,
    isActive,
  } = useActive({
    onMouseDown,
    onMouseUp,
    onMouseLeave,
    isDisabled,
  });

  const { handleFocus, handleBlur, isFocused } = useFocus({
    onFocus,
    onBlur,
    isDisabled,
  });

  const handleMouseLeave = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      handleMouseLeaveHover(event);
      handleMouseLeaveActive(event);
    },
    [handleMouseLeaveHover, handleMouseLeaveActive],
  );

  // Native 요소인지 확인
  const isNativeButton =
    SemanticElement === "button" ||
    (SemanticElement === "input" &&
      ["button", "submit", "reset"].includes(type));
  const isNativeAnchor = SemanticElement === "a";
  const isNonInteractive = !isNativeButton && !isNativeAnchor;

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<any>) => {
      onKeyDown?.(event);

      if (isDisabled || event.defaultPrevented) return;

      const isSpace = event.key === " " || event.key === "Spacebar";
      const isEnter = event.key === "Enter";

      // Space 키 처리
      if (isSpace) {
        // 네이티브 버튼은 브라우저가 알아서 처리하므로 무시
        // a 태그나 div 등은 스크롤 방지 및 클릭 트리거 필요
        if (!isNativeButton) {
          event.preventDefault();
          // a 태그는 enter가 기본 클릭이지만 space는 아님, div는 둘 다 아님 -> 클릭 강제 실행
          event.currentTarget.click();
        }
        return;
      }

      // Enter 키 처리
      if (isEnter) {
        // 네이티브 버튼과 a 태그는 Enter로 클릭이 됨.
        // 그 외의 요소(div, span)만 처리
        if (!isNativeButton && !isNativeAnchor) {
          event.preventDefault();
          event.currentTarget.click();
        }
        return;
      }
    },
    [isDisabled, isNativeButton, isNativeAnchor, onKeyDown],
  );

  const baseButtonProps = {
    as: SemanticElement,
    role,
    // native button이 아닐 때만 type을 undefined로 설정하거나, 필요시 전달
    type: isNativeButton ? type : undefined,
    "aria-busy": loading,
    "aria-disabled": isDisabled,
    // selected가 명시적으로 boolean일 때만 aria-pressed 적용 (토글 버튼이 아닌 경우 불필요)
    "aria-pressed": typeof selected === "boolean" ? selected : undefined,
    // native 요소는 disabled 속성 사용, 그 외에는 aria-disabled만 사용
    disabled: isNativeButton ? isDisabled : undefined,
    // 비대화형 요소이면서 disabled가 아닐 때만 탭 포커스 허용
    tabIndex: isNonInteractive && !isDisabled ? 0 : undefined,
    onKeyDown: handleKeyDown,
    // data-attributes
    "data-hover": isHover || undefined,
    "data-focus": isFocused || undefined,
    "data-active": isActive || undefined,
    "data-disabled": isDisabled || undefined,
    "data-loading": loading || undefined,
    "data-selected": selected || undefined,
    // 이벤트 헨들러
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp,
    onFocus: handleFocus,
    onBlur: handleBlur,
  };

  return {
    baseButtonProps,
  };
}

export default useButton;
