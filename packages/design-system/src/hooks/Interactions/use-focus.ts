"use client";

import { HTMLAttributes, FocusEvent, useCallback, useState } from "react";

interface UseFocusProps {
  onFocus?: HTMLAttributes<HTMLElement>["onFocus"];
  onBlur?: HTMLAttributes<HTMLElement>["onBlur"];
  isDisabled?: boolean;
}

function useFocus(props: UseFocusProps) {
  const { onFocus, onBlur, isDisabled } = props;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      onFocus?.(event);
      if (!isDisabled) {
        setIsFocused(true);
      }
    },
    [isDisabled, onFocus],
  );

  const handleBlur = useCallback(
    (event: FocusEvent<HTMLElement>) => {
      onBlur?.(event);
      setIsFocused(false);
    },
    [onBlur],
  );

  return {
    handleFocus,
    handleBlur,
    isFocused,
  };
}

export default useFocus;
