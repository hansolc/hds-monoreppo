"use client";

// ref: https://github.com/radix-ui/primitives/blob/main/packages/react/use-controllable-state/src/use-controllable-state.tsx#L18

import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
  useEffectEvent,
} from "react";

type ChangeHandler<T> = (state: T) => void;
type SetStateFn<T> = Dispatch<SetStateAction<T>>;

interface UseControllableStateParams<T> {
  prop?: T | undefined;
  defaultProp: T;
  onChange?: ChangeHandler<T>;
}

export default function useControllableState<T>({
  prop,
  defaultProp,
  onChange = () => {},
}: UseControllableStateParams<T>): [T, SetStateFn<T>] {
  const [uncontrolledProp, setUncontrolledProp, stableOnChange] =
    useUncontrollabledState({
      defaultProp,
      onChange,
    });

  const isControlled = prop !== undefined;
  const value = isControlled ? prop : uncontrolledProp;

  const setValue = useCallback<SetStateFn<T>>(
    (nextValue) => {
      if (isControlled) {
        const value = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value !== prop) {
          stableOnChange(value);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, stableOnChange],
  );

  return [value, setValue];
}

function useUncontrollabledState<T>({
  defaultProp,
  onChange,
}: Omit<UseControllableStateParams<T>, "prop">): [
  Value: T,
  setValue: Dispatch<SetStateAction<T>>,
  onChangeRef: ChangeHandler<T>,
] {
  const [value, setValue] = useState(defaultProp);
  const prevValueRef = useRef(value);

  const stableOnChange = useEffectEvent(onChange ?? (() => {}));

  useEffect(() => {
    if (prevValueRef.current !== value) {
      stableOnChange(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef, stableOnChange]);

  return [value, setValue, stableOnChange];
}

function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === "function";
}
