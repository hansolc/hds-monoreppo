"use client";

import { HTMLAttributes, MouseEvent, useCallback, useState } from "react";

interface UseHoverProps {
  onMouseEnter?: HTMLAttributes<HTMLElement>["onMouseEnter"];
  onMouseLeave?: HTMLAttributes<HTMLElement>["onMouseLeave"];
  isDisabled?: boolean;
}

function useHover(props: UseHoverProps) {
  const { onMouseEnter, onMouseLeave, isDisabled } = props;
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      onMouseEnter?.(event);
      if (!isDisabled) {
        setIsHover(true);
      }
    },
    [isDisabled, onMouseEnter],
  );

  const handleMouseLeave = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      onMouseLeave?.(event);
      setIsHover(false);
    },
    [onMouseLeave],
  );

  return {
    handleMouseEnter,
    handleMouseLeave,
    isHover,
  };
}

export default useHover;
