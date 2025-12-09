import type { Atoms } from "@/types/atoms";
import { atoms, extractAtoms } from "@/utils/atoms";
import { PolymorphicComponentPropsWithRef } from "@/types/polymorphic";
import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";

const DISPLAY_NAME = "Box";

export type BoxProps<T extends React.ElementType = "div"> =
  PolymorphicComponentPropsWithRef<T, Atoms>;

type BoxComponent = <T extends React.ElementType = "div">(
  props: PolymorphicComponentPropsWithRef<T, Atoms>,
) => React.ReactElement | null;

export const Box = withPolymorphicComponent<"div">(
  ({ as, className, ...restProps }, ref) => {
    const Component = (as || "div") as React.ElementType;
    const [atomsProps, propsToForward] = extractAtoms(restProps);
    const atomClassName = atoms({
      className,
      reset: typeof Component === "string" ? Component : "div",
      ...atomsProps,
    });
    return (
      <Component ref={ref} {...propsToForward} className={atomClassName} />
    );
  },
  DISPLAY_NAME,
) as BoxComponent;
