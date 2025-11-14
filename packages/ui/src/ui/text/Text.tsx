import { clsx } from "clsx";
import React, { ElementType, forwardRef } from "react";
import * as styles from "./Text.css";

type TextProps<T extends ElementType = "p"> = {
  as?: T;
  children?: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const _Text = <T extends ElementType = "p">(
  props: TextProps<T>,
  ref: React.ForwardedRef<unknown>
) => {
  const { as: Component = "p", children, className, ...rest } = props;

  return (
    <Component
      ref={ref as never}
      className={clsx([styles.text({}), className])}
      {...rest}
    >
      {children}
    </Component>
  );
};

const Text = forwardRef(_Text) as <T extends ElementType = "p">(
  props: TextProps<T> & { ref?: React.ForwardedRef<T> }
) => React.ReactElement;

export { Text };
export type { TextProps };
