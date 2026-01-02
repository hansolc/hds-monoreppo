import { KeyboardEvent, useCallback } from "react";
import { useSelectRefContext } from "@/components/Select/context/SelectContext";

interface UseSelectKeyboardOptions {
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
}

function useSelectKeyboard(options: UseSelectKeyboardOptions = {}) {
  const { onKeyDown } = options;
  const { itemRefs } = useSelectRefContext();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      const { key } = event;

      // Ref가 없으면 종료
      if (itemRefs.length === 0) {
        onKeyDown?.(event);
        return;
      }

      // 활성화되고 disabled 아닌 item만 필터링
      const activeItems = itemRefs
        .map((ref) => ref.current)
        .filter((el): el is HTMLElement => {
          if (!el) return false;
          if (el.hasAttribute("disabled")) return false;
          if (el.getAttribute("aria-disabled") === "true") return false;
          return true;
        });

      if (activeItems.length === 0) {
        onKeyDown?.(event);
        return;
      }

      // 현재 포커스된 요소 찾기
      const currentIndex = activeItems.findIndex(
        (el) => el === document.activeElement,
      );

      let nextIndex: number | null = null;

      // Arrow keys
      if (key === "ArrowDown") nextIndex = currentIndex + 1;
      if (key === "ArrowUp") nextIndex = currentIndex - 1;

      // Home/End keys
      if (key === "Home") nextIndex = 0;
      if (key === "End") nextIndex = activeItems.length - 1;

      // 인덱스 변경 없으면 종료
      if (nextIndex === null) {
        onKeyDown?.(event);
        return;
      }

      // 기본 동작 방지 (스크롤 등)
      event.preventDefault();

      // 경계 처리 (순환하지 않음)
      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= activeItems.length) nextIndex = activeItems.length - 1;

      const nextItem = activeItems[nextIndex];

      // 포커스 이동
      nextItem.focus();

      // 외부 핸들러 호출
      onKeyDown?.(event);
    },
    [itemRefs, onKeyDown],
  );

  return {
    handleKeyDown,
  };
}

export default useSelectKeyboard;
