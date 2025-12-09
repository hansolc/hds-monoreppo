import { forwardRef } from "react";
import type { Atoms } from "@/types/atoms";
import { atoms, extractAtoms } from "@/utils/atoms";
import { PolymorphicComponentProps, PolymorphicRef } from "@/types/polymorphic";

export type BoxProps<T extends React.ElementType> =
  PolymorphicComponentProps<T> & Atoms;

type BoxComponent = <T extends React.ElementType = "div">(
  props: BoxProps<T>,
) => React.ReactElement | null;

export const Box = forwardRef(
  <T extends React.ElementType = "div">(
    { as, className, ...restProps }: BoxProps<T>,
    ref: PolymorphicRef<T>["ref"],
  ) => {
    const [atomsProps, propsToForward] = extractAtoms(restProps);
    const Comp = as || "div";
    const atomClassName = atoms({
      className,
      reset: typeof Comp === "string" ? Comp : "div",
      ...atomsProps,
    });
    return <Comp {...propsToForward} className={atomClassName} ref={ref} />;
  },
) as BoxComponent;
