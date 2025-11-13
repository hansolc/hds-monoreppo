import React, { forwardRef } from "react";
import { buttonVariants, loading } from "./Button.css";
import type { ButtonProps } from "./types";

/**
 * Button 컴포넌트
 *
 * 다양한 스타일과 크기를 지원하는 재사용 가능한 버튼 컴포넌트입니다.
 * Next.js와 React 프로젝트 모두에서 사용할 수 있습니다.
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      className,
      as: Component = "button",
      ...props
    },
    ref
  ) => {
    const buttonClass = buttonVariants({
      variant,
      size,
      fullWidth,
      isLoading,
    });

    return (
      <Component
        ref={ref}
        className={`${buttonClass} ${className || ""}`}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className={loading} aria-label="loading">
            ⏳
          </span>
        )}
        {!isLoading && leftIcon && <span aria-hidden="true">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span aria-hidden="true">{rightIcon}</span>}
      </Component>
    );
  }
);

Button.displayName = "Button";
