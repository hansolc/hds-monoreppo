import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
  type ButtonState,
} from "@base-ui/react/button";
import { forwardRef } from "react";
import { button, type ButtonStyleVariants } from "./Button.css";
import clsx from "clsx";

export interface ButtonProps extends ButtonState, ButtonStyleVariants {
  children: React.ReactNode;
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant, size, className, ...props }, ref) => {
    return (
      <BaseButton
        ref={ref}
        className={clsx(button({ variant, size }), className)}
        {...props}
      >
        {children}
      </BaseButton>
    );
  },
);

Button.displayName = "MuiButton";

export default Button;
