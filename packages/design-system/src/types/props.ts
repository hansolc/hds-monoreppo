import { Ref } from "react";

export type OurProps<TTag extends React.ElementType> = {
  as?: TTag;
  children?: React.ReactNode;
};

export type Props<TTag extends React.ElementType, Overrides = {}> = Omit<
  React.ComponentProps<TTag>,
  "ref"
> &
  OurProps<TTag> &
  Overrides;

export type RefProp<T extends Function> = T extends (
  props: any,
  ref: Ref<infer RefType>,
) => any
  ? { ref?: Ref<RefType> }
  : never;
