import { createVar, globalStyle, style } from "@vanilla-extract/css";

export const colorVar = {
  fill: createVar(),
  stroke: createVar(),
};

export const iconStyles = style({
  fill: colorVar.fill,
  stroke: colorVar.stroke,
});

globalStyle(`${iconStyles} > *`, {
  fill: colorVar.fill,
  stroke: colorVar.stroke,
});
