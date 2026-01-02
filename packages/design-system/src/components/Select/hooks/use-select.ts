import { useSelectContext } from "@/components/Select/context/SelectContext";

function useSelect(value?: string) {
  const {
    value: selectedValue,
    onValueChange,
    open,
    baseId,
  } = useSelectContext();

  const isSelected = value !== undefined && selectedValue === value;

  const triggerId = `${baseId}-trigger`;
  const contentId = `${baseId}-content`;
  const valueId = `${baseId}-value`;
  const itemId = value !== undefined ? `${baseId}-item-${value}` : undefined;

  const selectItem = (itemValue: string) => {
    onValueChange(itemValue);
  };

  return {
    isSelected,
    open,
    selectedValue,
    selectItem,
    triggerId,
    contentId,
    valueId,
    itemId,
  };
}

export default useSelect;
