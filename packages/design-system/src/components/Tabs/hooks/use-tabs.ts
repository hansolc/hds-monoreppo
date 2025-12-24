import { useEffectEvent } from "react";
import { useTabContext } from "@/components/Tabs/context/TabsContext";

/**
 * 탭 상호작용을 위한 커스텀 훅
 *
 * @param value - 탭의 고유 값
 * @returns 탭 선택(상태), 클릭 핸들러, 탭 트리거와 패널의 ID(aria-controls)
 *
 * @example
 *
 * const { isSelected, clickTabTrigger } = useTab("tab1");
 *  */

function useTab(value: string) {
  const { value: currentValue, onValueChange, baseId } = useTabContext();

  const isSelected = currentValue === value;

  const triggerId = `${baseId}-trigger-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  const clickTabTrigger = useEffectEvent(() => {
    onValueChange(value);
  });

  return {
    isSelected,
    clickTabTrigger,
    triggerId,
    panelId,
  };
}

export default useTab;
