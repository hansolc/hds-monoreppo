import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
  type ButtonState,
} from "@base-ui/react/button";
import { forwardRef } from "react";
import { button, buttonIcon, type ButtonStyleVariants } from "./Button.css";
import clsx from "clsx";
import Icon, { IconType } from "@repo/design-system/components/Icon";

export interface ButtonProps extends ButtonState, ButtonStyleVariants {
  children: React.ReactNode;
  className?: string;
  // leading icon
  startIcon?: IconType;
  // trailing icon
  endIcon?: IconType;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, color, size, shape, className, startIcon, endIcon, ...props },
    ref,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={clsx(button({ color, size, shape }), className)}
        {...props}
      >
        {startIcon && size && (
          <Icon
            icon={startIcon}
            fill="currentColor"
            className={buttonIcon[size]}
          />
        )}
        {children}
        {endIcon && size && (
          <Icon
            icon={endIcon}
            fill="currentColor"
            className={buttonIcon[size]}
          />
        )}
      </BaseButton>
    );
  },
);

Button.displayName = "Md3Button";

export default Button;
