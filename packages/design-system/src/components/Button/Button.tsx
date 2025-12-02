import { Box } from "@/components/Box";
import { ElementType, forwardRef } from "react";
import { useButton } from "@/hooks/Button";
import {
  PolymorphicComponent,
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/polymorphic";

interface ButtonBaseProps {
  selected?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export type ButtonProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  ButtonBaseProps
>;

const ButtonImplementation = forwardRef(
  <C extends ElementType = "button">(
    props: ButtonProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const {
      as = "button",
      children,
      selected = false,
      disabled = false,
      loading = false,
      ...restProps
    } = props;

    const { baseButtonProps } = useButton({
      as,
      role: "button",
      selected,
      disabled,
      loading,
      ...restProps,
    });

    return (
      <Box {...baseButtonProps} ref={ref} {...restProps}>
        {children}
      </Box>
    );
  },
);

ButtonImplementation.displayName = "Button";

export default ButtonImplementation as PolymorphicComponent<
  "button",
  ButtonBaseProps
>;
