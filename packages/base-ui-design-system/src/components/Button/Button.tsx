import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
  type ButtonState,
} from "@base-ui/react/button";
import { forwardRef } from "react";
import { button, buttonIcon, type ButtonStyleVariants } from "./Button.css";
import clsx from "clsx";
import Icon, { IconType } from "@repo/design-system/components/Icon";
import useToggleButton, {
  UseToggleButtonProps,
} from "./hooks/use-toggle-button";

export interface ButtonProps
  extends ButtonState,
    ButtonStyleVariants,
    UseToggleButtonProps {
  children: React.ReactNode;
  className?: string;
  // leading icon
  startIcon?: IconType;
  // trailing icon
  endIcon?: IconType;
}

const Button = forwardRef<HTMLButtonElement, BaseButtonProps & ButtonProps>(
  (
    {
      children,
      color,
      size,
      shape,
      className,
      startIcon,
      endIcon,
      toggle,
      selected: selectedProp,
      defaultSelected,
      onSelectedChange,
      ...props
    },
    ref,
  ) => {
    const { toggleButton, toggleAttributes } = useToggleButton({
      toggle,
      selected: selectedProp,
      defaultSelected,
      onSelectedChange,
    });
    return (
      <BaseButton
        role="button"
        ref={ref}
        className={clsx(button({ color, size, shape }), className)}
        onClick={(e) => {
          toggleButton();
          props.onClick?.(e);
        }}
        {...toggleAttributes}
        {...props}
      >
        {/* start icon */}
        <ButtonIcon icon={startIcon} size={size} />
        {children}
        {/* end icon */}
        <ButtonIcon icon={endIcon} size={size} />
      </BaseButton>
    );
  },
);

Button.displayName = "Md3Button";

export default Button;

const ButtonIcon = ({
  icon,
  size,
}: {
  icon?: IconType;
  size?: ButtonProps["size"];
}) => {
  if (!icon || !size) return null;
  return <Icon icon={icon} fill="currentColor" className={buttonIcon[size]} />;
};
