import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { useSelect } from "@components/Select/hooks";

const DISPLAY_NAME = "SelectValue";

export interface SelectValueProps extends AtomProps {
  // custom own props here
  placeholder?: string;
  children?: React.ReactNode | ((value: string) => React.ReactNode);
}

export const SelectValue = withPolymorphicComponent<"div", SelectValueProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      placeholder,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;
    const { selectedValue, valueId } = useSelect();

    // children이 함수인 경우 render prop 패턴 지원
    const renderContent = () => {
      if (children) {
        return typeof children === "function"
          ? children(selectedValue)
          : children;
      }

      // 선택된 값이 있으면 표시, 없으면 placeholder
      return selectedValue || placeholder;
    };

    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(className)}
        // add props
        id={valueId}
        data-placeholder={!selectedValue ? "" : undefined}
        {...restProps}
      >
        {renderContent()}
      </Box>
    );
  },
  DISPLAY_NAME,
);
