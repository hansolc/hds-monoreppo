import { type ElementType, type HTMLAttributes, forwardRef } from "react";
import type { Atoms } from "@/types/atoms";
import type {
  PolymorphicComponentProps,
  PolymorphicRef,
} from "@/types/polymorphic";
import { atoms, extractAtoms } from "@/utils/atoms";

type HTMLProperties<C extends ElementType = "div"> = Omit<
  HTMLAttributes<C>,
  "className" | "color" | "height" | "width" | "size"
>;

type BoxProps<C extends ElementType = "div"> = PolymorphicComponentProps<
  C,
  HTMLProperties<C> & Atoms
>;

type BoxComponent = <C extends ElementType = "div">(
  props: BoxProps<C>,
) => React.ReactElement | null;

export const Box: BoxComponent = forwardRef(
  <C extends ElementType = "div">(
    { as, className, ...props }: BoxProps<C>,
    ref?: PolymorphicRef<C>["ref"],
  ): React.ReactElement | null => {
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
) as BoxComponent;
