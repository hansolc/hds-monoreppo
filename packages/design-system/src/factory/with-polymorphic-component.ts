import { ElementType, forwardRef, PropsWithoutRef, ReactElement } from "react";
import {
  PolymorphicComponentProps,
  PolymorphicRef,
  PolymorphicComponent,
} from "@/types/polymorphic";

export function withPolymorphicComponent<
  DefaultTag extends ElementType,
  ExtraProps = object,
>(
  render: (
    props: PolymorphicComponentProps<DefaultTag, ExtraProps>,
    ref: PolymorphicRef<DefaultTag>,
  ) => ReactElement | null,
  displayName?: string,
): PolymorphicComponent<DefaultTag, ExtraProps> {
  const Wrapped = forwardRef(
    render as (
      props: PropsWithoutRef<PolymorphicComponentProps<DefaultTag, ExtraProps>>,
      ref: PolymorphicRef<DefaultTag>,
    ) => ReactElement | null,
  );

  const Component = Wrapped as unknown as PolymorphicComponent<
    DefaultTag,
    ExtraProps
  >;

  if (displayName) {
    Component.displayName = displayName;
  }

  return Component;
}
