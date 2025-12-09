// **
//  * Polymorpic 컴포넌트를 위한 Factory 함수
//  * @param render 실제 JSX를 반환하는 함수
//  * @template DefaultTag - 기본 HTML 렌더링 태그(예: `'div'`, `'button'` 등)
//  * @template ExtraProps - 해당 컴포넌트만의 추가 사용자 정의 props (예: `variant`, `size` 등)
//  * @returns
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
  ExtraProps = {},
>(
  render: (
    props: PolymorphicComponentProps<DefaultTag, ExtraProps>,
    ref: ComponentPropsWithRef<DefaultTag>["ref"],
  ) => React.ReactElement | null,
  displayName?: string,
) {
  type BaseProps = PolymorphicComponentPropsWithRef<DefaultTag, ExtraProps>;

  // 컴포넌트 반환타입
  type ComponentType = ForwardRefExoticComponent<
    BaseProps & RefAttributes<any>
  > & {
    <T extends ElementType = DefaultTag>(
      props: PolymorphicComponentPropsWithRef<T, ExtraProps>,
    ): ReactElement | null;
  };

  // forwardRef는 ref가 props 밖에 있어야 한다고 타입이 정의되어 있기 때문에
  // 매개변수로 전달받은 render를 바로 넘기면 오류 발생.
  // props 의 ref를 제외하기 위헤 PropsWitoutRef<T>를 사용
  const Component = forwardRef(
    render as (
      props: PropsWithoutRef<PolymorphicComponentProps<DefaultTag, ExtraProps>>,
      ref: ComponentPropsWithRef<DefaultTag>["ref"],
    ) => ReactElement | null,
  ) as unknown as ComponentType;

  if (displayName) {
    Component.displayName = displayName;
  }

  return Component;
}
