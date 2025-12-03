"use client";

// ref: https://github.com/radix-ui/primitives/blob/main/packages/react/use-controllable-state/src/use-controllable-state.tsx#L18

import {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useInsertionEffect,
  useRef,
  useState,
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
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] =
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
          onChangeRef.current?.(value);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef],
  );

  return [value, setValue];
}

function useUncontrollabledState<T>({
  defaultProp,
  onChange,
}: Omit<UseControllableStateParams<T>, "prop">): [
  Value: T,
  setValue: Dispatch<SetStateAction<T>>,
  onChangeRef: RefObject<ChangeHandler<T> | undefined>,
] {
  const [value, setValue] = useState(defaultProp);
  const prevValueRef = useRef(value);

  const onChangeRef = useRef(onChange);

  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);

  return [value, setValue, onChangeRef];
}

function isFunction(value: unknown): value is (...args: any[]) => any {
  return typeof value === "function";
}
