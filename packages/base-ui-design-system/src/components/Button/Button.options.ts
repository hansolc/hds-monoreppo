import { button, ButtonStyleVariants } from "./Button.css";

export const buttonColorKeys = Object.keys(
  button.classNames.variants.color,
) as ButtonStyleVariants["color"][];

export const buttonSizeKeys = Object.keys(
  button.classNames.variants.size,
) as ButtonStyleVariants["size"][];

export const buttonShapeKeys = Object.keys(
  button.classNames.variants.shape,
) as ButtonStyleVariants["shape"][];
