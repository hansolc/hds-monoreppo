// ref: https://kciter.so/posts/polymorphic-react-component/
// ref: https://thisyujeong.dev/blog/polymorphic-component

type AsProp<T extends React.ElementType> = {
  as?: T;
};

type OwnProps<T extends React.ElementType, Props> = keyof (AsProp<T> & Props);

export type PolymorphicComponentProps<
  T extends React.ElementType,
  Props = object,
> = (Props & AsProp<T>) &
  Omit<React.ComponentPropsWithoutRef<T>, OwnProps<T, Props>>;

export type PolymorphicRef<T extends React.ElementType> =
  React.ComponentPropsWithRef<T>["ref"];

export type PolymorphicComponentPropsWithRef<
  T extends React.ElementType,
  Props = object,
> = PolymorphicComponentProps<T, Props> & {
  ref: PolymorphicRef<T>;
};
