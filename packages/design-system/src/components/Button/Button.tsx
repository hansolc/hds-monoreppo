import { Atoms } from "@/types/atoms";
import { PolymorphicComponentProps, PolymorphicRef } from "@/types/polymorphic";
import { forwardRef } from "react";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { useButton } from "@/hooks/Button";

interface _ButtonProps {
  selected?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export type ButtonProps<C extends React.ElementType = "button"> =
  PolymorphicComponentProps<C, _ButtonProps> & Atoms;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonProps<C>,
) => React.ReactElement | null;

export const Button = forwardRef(
  <C extends React.ElementType = "button">(
    {
      as,
      children,
      selected,
      disabled,
      loading,
      className,
      ...restProps
    }: ButtonProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ) => {
    const { baseButtonProps } = useButton({
      as,
      role: "button",
      selected,
      disabled,
      loading,
      ...restProps,
    });
    return (
      <Box
        className={clsx(className)}
        ref={ref}
        {...baseButtonProps}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
) as ButtonComponent;
