import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { PolymorphicComponentPropsWithRef } from "@/types/polymorphic";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { unresponsiveProperties } from "@/styles/sprinkles.css";

const DISPLAY_NAME = "FlexItem";

export interface _FlexItemProps
  extends Omit<AtomProps, "display" | "flex" | "flexGrow" | "flexShrink"> {
  grow?: keyof typeof unresponsiveProperties.styles.flexGrow.values;
  shrink?: keyof typeof unresponsiveProperties.styles.flexShrink.values;
  flex?: string | number;
  basis?: string | number;
}

type FlexItemComponent = <C extends React.ElementType = "div">(
  props: PolymorphicComponentPropsWithRef<C, _FlexItemProps>,
) => React.ReactElement | null;

export const FlexItem: FlexItemComponent = withPolymorphicComponent<
  "div",
  _FlexItemProps
>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      grow,
      shrink,
      flex,
      basis,
      style,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;

    const inlineStyle = {
      ...style,
      ...(flex ? { flex } : {}),
      ...(basis ? { flexBasis: basis } : {}),
    };

    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(className)}
        // add props
        style={inlineStyle}
        flexGrow={grow}
        flexShrink={shrink}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
