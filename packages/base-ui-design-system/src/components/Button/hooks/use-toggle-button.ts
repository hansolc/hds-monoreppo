import useControllableState from "@/hooks/use-controllable-state";
import { useCallback, useMemo } from "react";

export interface UseToggleButtonProps {
  toggle?: boolean;
  selected?: boolean;
  defaultSelected?: boolean;
  onSelectedChange?: (selected: boolean) => void;
}

function useToggleButton({ toggle, ...props }: UseToggleButtonProps) {
  const [selected, setSelected] = useControllableState({
    prop: props.selected,
    defaultProp: props.defaultSelected ?? false,
    onChange: props.onSelectedChange,
  });

  const toggleButton = useCallback(() => {
    if (toggle) {
      setSelected((prev) => !prev);
    }
  }, [toggle, setSelected]);

  const toggleAttributes = useMemo(() => {
    return toggle
      ? {
          "aria-pressed": selected,
          "data-pressed": selected,
        }
      : {};
  }, [selected, toggle]);

  return {
    toggleButton,
    toggleAttributes,
  };
}

export default useToggleButton;
