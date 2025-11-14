import {
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";
import { PolymorphicComponentPropWithRef } from "../../types/polymorphic";

type HTMLProperties = Omit<HTMLAttributes<HTMLElement>, "">;

export type BoxProps<C extends ElementType = "div"> =
  PolymorphicComponentPropWithRef<C, HTMLProperties>;

type BoxComponent = <C extends ElementType = "div">(
  props: BoxProps<C>
) => ReactNode;

export const Box: BoxComponent = forwardRef<HTMLElement, BoxProps<ElementType>>(
  ({ as, className, ...other }, ref) => {
    const Component: ElementType = as || "div";
    return <Component className={className} ref={ref} {...other}></Component>;
  }
);
