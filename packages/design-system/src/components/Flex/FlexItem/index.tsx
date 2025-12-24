import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { unresponsiveProperties } from "@/styles/sprinkles.css";

const DISPLAY_NAME = "FlexItem";

export interface FlexItemProps
  extends Omit<AtomProps, "display" | "flex" | "flexGrow" | "flexShrink"> {
  grow?: keyof typeof unresponsiveProperties.styles.flexGrow.values;
  shrink?: keyof typeof unresponsiveProperties.styles.flexShrink.values;
  flex?: string | number;
  basis?: string | number;
}

export const FlexItem = withPolymorphicComponent<"div", FlexItemProps>(
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
