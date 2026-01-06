import { vars } from "@repo/tokens";
import { hexToRgb } from "./color";

interface InteractiveButtonStylesTypes {
  hover: {
    bg: keyof typeof vars.color;
    opacity: number;
  };
  focus: {
    bg: keyof typeof vars.color;
    opacity: number;
  };
  active: {
    bg: keyof typeof vars.color;
    opacity: number;
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
      },
      "&:focus:not(:disabled)": {
        backgroundColor: `rgba(${hexToRgb(vars.color[focus.bg])}, ${focus.opacity})`,
      },
      "&:active:not(:disabled)": {
        backgroundColor: `rgba(${hexToRgb(vars.color[active.bg])}, ${active.opacity})`,
      },
    },
  };
}
