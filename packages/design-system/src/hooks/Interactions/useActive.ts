"use client";

import { HTMLAttributes, MouseEvent, useCallback, useState } from "react";

interface UseActiveProps {
  onMouseDown?: HTMLAttributes<HTMLElement>["onMouseDown"];
  onMouseUp?: HTMLAttributes<HTMLElement>["onMouseUp"];
  onMouseLeave?: HTMLAttributes<HTMLElement>["onMouseLeave"];
  isDisabled?: boolean;
}

function useActive(props: UseActiveProps) {
  const { onMouseDown, onMouseUp, onMouseLeave, isDisabled } = props;
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      onMouseDown?.(event);
      if (!isDisabled) {
        setIsActive(true);
      }
    },
    [isDisabled, onMouseDown],
  );

  const handleMouseUp = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      onMouseUp?.(event);
      setIsActive(false);
    },
    [onMouseUp],
  );

  const handleMouseLeave = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      onMouseLeave?.(event);
      setIsActive(false);
    },
    [onMouseLeave],
  );

  return {
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    isActive,
  };
}

export default useActive;
