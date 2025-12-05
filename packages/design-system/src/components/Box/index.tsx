import { type ElementType, Ref } from "react";
import type { Atoms } from "@/types/atoms";
import { atoms, extractAtoms } from "@/utils/atoms";
import { Props, RefProp } from "@/types/props";
import { forwardRefWithAs } from "@/utils/forwardRef";

type BoxProps<TTag extends ElementType = "div"> = Props<TTag, {}> & Atoms;

function BoxFn<TTag extends ElementType = "div">(
  props: BoxProps<TTag>,
  ref?: Ref<HTMLElement>,
) {
  const { as = "div", className, ...restProps } = props;
  const [atomsProps, propsToForward] = extractAtoms(restProps);
  const Comp = (as || "div") as ElementType;
  const atomClassName = atoms({
    className,
    reset: typeof Comp === "string" ? Comp : "div",
    ...atomsProps,
  });

  return <Comp {...propsToForward} className={atomClassName} ref={ref} />;
}

export interface _internal_ComponentBox {
  <TTag extends ElementType = "div">(
    props: BoxProps<TTag> & RefProp<typeof BoxFn>,
  ): React.JSX.Element;
}

export const Box = forwardRefWithAs(BoxFn, "Box") as _internal_ComponentBox;
