import { SVGProps } from "react";
import { IconType } from "./types";
import * as Icons from "@/assets/icons";
import clsx from "clsx";
import { iconStyles, colorVar } from "./Icon.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";

interface IconProps extends SVGProps<SVGSVGElement> {
  icon: IconType;
}

const Icon = ({
  icon,
  width = 24,
  height = 24,
  className,
  ...restProps
}: IconProps) => {
  const Comp = Icons[icon];
  return (
    <Comp
      {...restProps}
      width={width}
      height={height}
      className={clsx(iconStyles, className)}
      style={assignInlineVars({
        [colorVar.fill]: restProps.fill,
        [colorVar.stroke]: restProps.stroke,
      })}
    />
  );
};

export default Icon;
export { Icons as IconKeys };
export type { IconType };
