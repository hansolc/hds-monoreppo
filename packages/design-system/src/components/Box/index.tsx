import {
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";
import type { Atoms } from "@/types/atoms";
import type { PolymorphicComponentPropWithRef } from "@/types/polymorphic";
import { atoms, extractAtoms } from "@/utils/atoms";

type HTMLProperties = Omit<
  HTMLAttributes<HTMLElement>,
  "className" | "color" | "height" | "width" | "size"
>;

export type BoxProps<C extends ElementType = ElementType> =
  PolymorphicComponentPropWithRef<C, HTMLProperties & Atoms>;

type BoxComponent = <C extends ElementType = "div">(
  props: BoxProps<C>,
) => ReactNode;

export const Box: BoxComponent = forwardRef<HTMLElement, BoxProps<ElementType>>(
  ({ as, className, ...props }, ref) => {
    const [atomsProps, propsToForward] = extractAtoms(props);
    const Component: ElementType = as || "div";
    const atomClassName = atoms({
      className,
      reset: typeof Component === "string" ? Component : "div",
      ...atomsProps,
    });

    return (
      <Component {...propsToForward} className={atomClassName} ref={ref} />
    );
  },
);
