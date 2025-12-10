// ref: https://thisyujeong.dev/blog/polymorphic-component

import {
  PolymorphicComponentProps,
  PolymorphicComponentPropsWithRef,
} from "@/types/polymorphic";
import {
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  ReactElement,
  RefAttributes,
} from "react";

//  */
export function withPolymorphicComponent<
  DefaultTag extends React.ElementType,
  ExtraProps = object,
>(
  render: (
    props: PolymorphicComponentProps<DefaultTag, ExtraProps>,
    ref: ComponentPropsWithRef<DefaultTag>["ref"],
  ) => React.ReactElement | null,
  displayName?: string,
) {
  type BaseProps = PolymorphicComponentPropsWithRef<DefaultTag, ExtraProps>;

  type ComponentType = ForwardRefExoticComponent<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    BaseProps & RefAttributes<any>
  > & {
    <T extends ElementType = DefaultTag>(
      props: PolymorphicComponentPropsWithRef<T, ExtraProps>,
    ): ReactElement | null;
  };

  const Component = forwardRef(
    render as (
      // props에는 ref가 전달되지 않아야 한다. PropsWithoutRef 사용
      props: PropsWithoutRef<PolymorphicComponentProps<DefaultTag, ExtraProps>>,
      ref: ComponentPropsWithRef<DefaultTag>["ref"],
    ) => ReactElement | null,
  ) as unknown as ComponentType;

  if (displayName) {
    Component.displayName = displayName;
  }

  return Component;
}
