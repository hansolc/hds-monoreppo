import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { useButton } from "@/hooks/Button";

const DISPLAY_NAME = "Button";

interface ButtonProps extends AtomProps {
  // custom own props here
  selected?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = withPolymorphicComponent<"button", ButtonProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      selected,
      disabled,
      loading,
      ...restProps
    },
    ref,
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
        ref={ref}
        className={clsx(className)}
        {...baseButtonProps}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
