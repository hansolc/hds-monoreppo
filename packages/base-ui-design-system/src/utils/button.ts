import { vars } from "@repo/tokens";
import { hexToRgb } from "./color";

interface InteractiveButtonStylesTypes {
  hover: {
    bg: keyof typeof vars.color;
    opacity: number;
    borderColor?: keyof typeof vars.color;
  };
  focus: {
    bg: keyof typeof vars.color;
    opacity: number;
    borderColor?: keyof typeof vars.color;
  };
  active: {
    bg: keyof typeof vars.color;
    opacity: number;
    borderColor?: keyof typeof vars.color;
  };
}

export function makeInteractiveButtonStyles({
  hover,
  focus,
  active,
}: InteractiveButtonStylesTypes) {
  return {
    selectors: {
      "&:hover:not(:disabled)": {
        backgroundColor: `rgba(${hexToRgb(vars.color[hover.bg])}, ${hover.opacity})`,
        ...(hover.borderColor && { borderColor: hover.borderColor }),
      },
      "&:focus-visible:not(:disabled)": {
        backgroundColor: `rgba(${hexToRgb(vars.color[focus.bg])}, ${focus.opacity})`,
      },
      "&:active:not(:disabled)": {
        backgroundColor: `rgba(${hexToRgb(vars.color[active.bg])}, ${active.opacity})`,
        borderRadius: vars.shape.medium,
      },
      "&[data-pressed='true']:not(:disabled)": {
        borderRadius: vars.shape.medium,
      },
    },
  };
}
