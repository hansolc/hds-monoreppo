import { KeyboardEvent, useCallback } from "react";
import { useTabRefContext } from "@/components/Tabs/context/TabsContext";

interface UseTabsKeyboardOptions {
  orientation?: "horizontal" | "vertical";
  activationMode?: "automatic" | "manual";
  loop?: boolean;
  onKeyDown?: (event: KeyboardEvent<HTMLElement>) => void;
}

function useTabsKeyboard(options: UseTabsKeyboardOptions = {}) {
  const {
    orientation = "horizontal",
    activationMode = "automatic",
    loop = true,
    onKeyDown,
  } = options;

  const { triggerRef } = useTabRefContext();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      const { key } = event;
      // Ref가 없으면 종료
      if (triggerRef.length === 0) {
        onKeyDown?.(event);
        return;
      }

      // 활성화되고 disabled 아닌 trigger만 필터링
      const activeTriggers = triggerRef
        .map((ref) => ref.current)
        .filter((el): el is HTMLElement => {
          if (!el) return false;
          // disabled 속성 체크
          if (el.hasAttribute("disabled")) return false;
          if (el.getAttribute("aria-disabled") === "true") return false;
          return true;
        });

      if (activeTriggers.length === 0) {
        onKeyDown?.(event);
        return;
      }

      // 현재 포커스된 요소 찾기
      const currentIndex = activeTriggers.findIndex(
        (el) => el === document.activeElement,
      );

      // 포커스가 탭 리스트 내부에 없으면 무시
      if (currentIndex === -1) {
        onKeyDown?.(event);
        return;
      }

      let nextIndex: number | null = null;

      // 방향에 따른 키 처리
      if (orientation === "horizontal") {
        if (key === "ArrowLeft") nextIndex = currentIndex - 1;
        if (key === "ArrowRight") nextIndex = currentIndex + 1;
        if (key === "Tab") nextIndex = currentIndex + 1;
      } else {
        if (key === "ArrowUp") nextIndex = currentIndex - 1;
        if (key === "ArrowDown") nextIndex = currentIndex + 1;
        if (key === "Tab") nextIndex = currentIndex + 1;
      }

      // Home/End 키
      if (key === "Home") nextIndex = 0;
      if (key === "End") nextIndex = activeTriggers.length - 1;

      // 인덱스 변경 없으면 종료
      if (nextIndex === null) {
        onKeyDown?.(event);
        return;
      }

      // 기본 동작 방지 (스크롤 등)
      event.preventDefault();

      // 순환 처리
      if (loop) {
        if (nextIndex < 0) nextIndex = activeTriggers.length - 1;
        if (nextIndex >= activeTriggers.length) nextIndex = 0;
      } else {
        if (nextIndex < 0) nextIndex = 0;
        if (nextIndex >= activeTriggers.length)
          nextIndex = activeTriggers.length - 1;
      }

      const nextTrigger = activeTriggers[nextIndex];

      // 포커스 이동
      nextTrigger.focus();

      // Automatic 모드: 즉시 활성화
      if (activationMode === "automatic") {
        nextTrigger.click();
      }

      // 외부 핸들러 호출
      onKeyDown?.(event);
    },
    [triggerRef, onKeyDown, orientation, activationMode, loop],
  );

  return {
    handleKeyDown,
  };
}

export default useTabsKeyboard;
