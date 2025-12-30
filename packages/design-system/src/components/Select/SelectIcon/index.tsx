import Icon from "@/components/Icon";
import { ComponentProps } from "react";
import { useSelect } from "@/components/Select/hooks";
import clsx from "clsx";

export interface SelectIconProps extends ComponentProps<typeof Icon> {}

export const SelectIcon = ({
  icon = "ArrowDropDown",
  className,
  ...restProps
}: SelectIconProps) => {
  const { open } = useSelect();
  return (
    <Icon
      icon={icon}
      className={clsx(className)}
      aria-hidden="true"
      data-state={open ? "open" : "closed"}
      {...restProps}
    />
  );
};
