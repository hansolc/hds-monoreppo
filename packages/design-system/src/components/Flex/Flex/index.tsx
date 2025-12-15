import { withPolymorphicComponent } from "@/factory/with-polymorphic-component";
import { AtomProps } from "@/types/atoms";
import { Box } from "@/components/Box";
import clsx from "clsx";
import { responsiveProperties } from "@/styles";

const DISPLAY_NAME = "Flex";

export interface FlexProps
  extends Omit<
    AtomProps,
    | "display"
    | "flexWrap"
    | "flexDirection"
    | "alignItems"
    | "justifyContent"
    | "gap"
  > {
  wrap?: keyof typeof responsiveProperties.styles.flexWrap.values;
  direction?: keyof typeof responsiveProperties.styles.flexDirection.values;
  align?: keyof typeof responsiveProperties.styles.alignItems.values;
  justify?: keyof typeof responsiveProperties.styles.justifyContent.values;
  gap?: keyof typeof responsiveProperties.styles.gap.values;
}

export const Flex = withPolymorphicComponent<"div", FlexProps>(
  (
    {
      as,
      children,
      className,
      // custom own props here
      wrap,
      direction,
      align,
      justify,
      gap,
      ...restProps
    },
    ref,
  ) => {
    const Component = (as || "div") as React.ElementType;

    return (
      <Box
        as={Component}
        ref={ref}
        className={clsx(className)}
        // add props
        display="flex"
        flexWrap={wrap}
        flexDirection={direction}
        alignItems={align}
        justifyContent={justify}
        gap={gap}
        {...restProps}
      >
        {children}
      </Box>
    );
  },
  DISPLAY_NAME,
);
