export type AsProp<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = {},
> = AsProp<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof Props> &
  Props & {
    ref?: PolymorphicRef<T>;
  };

/**
 * 반복되는 컴포넌트 타입 정의를 줄이기 위한 유틸리티 타입
 * @template DefaultTag 기본으로 렌더링할 태그 (예: "div", "button")
 * @template Props 컴포넌트 고유의 Props
 */
export type PolymorphicComponent<
  DefaultTag extends React.ElementType,
  Props = {},
> = <C extends React.ElementType = DefaultTag>(
  props: PolymorphicComponentProps<C, Props>,
) => React.ReactElement | null;
