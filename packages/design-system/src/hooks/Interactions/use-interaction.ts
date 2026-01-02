"use client";

import { HTMLAttributes, MouseEvent, FocusEvent, useCallback } from "react";
import useHover from "./use-hover";
import useActive from "./use-active";
import useFocus from "./use-focus";

export interface UseInteractionsProps
  extends Pick<
    HTMLAttributes<HTMLElement>,
    | "onMouseEnter"
    | "onMouseLeave"
    | "onMouseDown"
    | "onMouseUp"
    | "onFocus"
    | "onBlur"
  > {
  /**
   * 인터랙션 비활성화 여부
   */
  disabled?: boolean;
  /**
   * 로딩 상태
   */
  loading?: boolean;
  /**
   * hover 인터랙션 활성화
   * @default true
   */
  enableHover?: boolean;
  /**
   * active 인터랙션 활성화
   * @default true
   */
  enableActive?: boolean;
  /**
   * focus 인터랙션 활성화
   * @default true
   */
  enableFocus?: boolean;
}

export interface UseInteractionsResult {
  /**
   * 인터랙션 이벤트 핸들러와 data attributes
   */
  interactionProps: {
    onMouseEnter: (event: MouseEvent<HTMLElement>) => void;
    onMouseLeave: (event: MouseEvent<HTMLElement>) => void;
    onMouseDown: (event: MouseEvent<HTMLElement>) => void;
    onMouseUp: (event: MouseEvent<HTMLElement>) => void;
    onFocus: (event: FocusEvent<HTMLElement>) => void;
    onBlur: (event: FocusEvent<HTMLElement>) => void;
    "data-hover"?: boolean;
    "data-active"?: boolean;
    "data-focus"?: boolean;
  };
  /**
   * 현재 hover 상태
   */
  isHover: boolean;
  /**
   * 현재 active 상태
   */
  isActive: boolean;
  /**
   * 현재 focus 상태
   */
  isFocused: boolean;
}

/**
 * 컴포넌트의 인터랙션 상태(hover, active, focus)를 관리하는 통합 hook
 *
 * @example
 * ```tsx
 * function InteractiveBox() {
 *   const { interactionProps, isHover, isActive, isFocused } = useInteractions({
 *     disabled: false,
 *     onMouseEnter: () => console.log('enter'),
 *   });
 *
 *   return <div {...interactionProps}>Hover me!</div>;
 * }
 * ```
 */
function useInteractions(
  props: UseInteractionsProps = {},
): UseInteractionsResult {
  const {
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
    onFocus,
    onBlur,
    disabled = false,
    loading = false,
    enableHover = true,
    enableActive = true,
    enableFocus = true,
  } = props;

  const isDisabled = disabled || loading;

  const {
    handleMouseEnter,
    handleMouseLeave: handleMouseLeaveHover,
    isHover,
  } = useHover({
    onMouseEnter,
    onMouseLeave,
    isDisabled: isDisabled || !enableHover,
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
    isDisabled: isDisabled || !enableActive,
  });

  const { handleFocus, handleBlur, isFocused } = useFocus({
    onFocus,
    onBlur,
    isDisabled: isDisabled || !enableFocus,
  });

  const handleMouseLeave = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      handleMouseLeaveHover(event);
      handleMouseLeaveActive(event);
    },
    [handleMouseLeaveHover, handleMouseLeaveActive],
  );

  return {
    interactionProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onFocus: handleFocus,
      onBlur: handleBlur,
      "data-hover": isHover || undefined,
      "data-active": isActive || undefined,
      "data-focus": isFocused || undefined,
    },
    isHover,
    isActive,
    isFocused,
  };
}

export default useInteractions;
