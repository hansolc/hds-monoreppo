import { button, ButtonStyleVariants } from "./Button.css";

export const buttonVariantsKeys = Object.keys(
  button.classNames.variants.variant,
) as ButtonStyleVariants["variant"][];

export const buttonSizeKeys = Object.keys(
  button.classNames.variants.size,
) as ButtonStyleVariants["size"][];
