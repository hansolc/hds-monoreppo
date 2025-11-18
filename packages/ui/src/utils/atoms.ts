/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { Sprinkles, sprinkles } from "@/styles/sprinkles.css";
import { elementResets } from "@/styles/reset.css";
import { JSX } from "react";

export interface Atoms extends Sprinkles {
  reset?: keyof JSX.IntrinsicElements;
  className?: string;
}

const keys = Array.from(sprinkles.properties.keys());

/**
 * @description
 * The `pick` function is used to extract the Sprinkles props from the `props` object.
 * The `keys` variable contains an array of all the property keys defined in the `sprinkles` object.
 * The `omit` function is used to extract the remaining props that are not Sprinkles props.
 * The function returns an array with two elements: the Sprinkles props and the remaining props.
 */

export function pick<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Pick<T, K> {
  const result = {} as Pick<T, K>;

  for (const key of keys) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = obj[key];
    }
  }

  return result;
}

export function omit<T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: readonly K[],
): Omit<T, K> {
  const result = { ...obj };

  for (const key of keys) {
    delete result[key];
  }

  return result as Omit<T, K>;
}

// sprinkles에 등록된 props을 pick하고 나머지를 omit
// return [등록된 sprinkles 값, 나머지 값]
export const extractAtoms = <P extends object>(props: P) => [
  pick(props, keys as any),
  omit(props, keys as any),
];

export function atoms(atoms: Atoms) {
  const { reset, className, ...rest } = atoms;
  const sprinklesClassNames = sprinkles(rest);

  return clsx(
    sprinklesClassNames,
    className,
    reset ? [elementResets[reset]] : null,
  );
}
