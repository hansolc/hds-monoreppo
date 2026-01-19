import {
  ToggleGroup,
  type ToggleGroupProps,
} from "@base-ui/react/toggle-group";
import { Toggle, type ToggleProps } from "@base-ui/react/toggle";
import { forwardRef } from "react";
import clsx from "clsx";
import {
  navigationbar,
  navigationbarIcon,
  navigationbarLink,
} from "./Navigationbar.css";
import { CommonComponentProps } from "@/types";
import Icon, { IconType } from "@repo/design-system/components/Icon";
import { Text } from "@repo/design-system/components/Text";

/**
 * @Anatomy
 *<Navigationbar>
	  <Navigationbar.Link icon="" label="" href="" />
  </Navigationbar>

  @baseui
  ToggleGroup: https://base-ui.com/react/components/toggle-group
 */

export interface NavigationbarProps
  extends Pick<ToggleGroupProps, CommonComponentProps> {
  value?: ToggleGroupProps["value"];
  onValueChange?: ToggleGroupProps["onValueChange"];
  defaultValue?: ToggleGroupProps["defaultValue"];
}

const NavigationBar = forwardRef<HTMLDivElement, NavigationbarProps>(
  (props, ref) => {
    const { children, className, ...rest } = props;
    return (
      <ToggleGroup
        ref={ref}
        orientation="vertical"
        className={clsx(navigationbar, className)}
        {...rest}
      >
        {children}
      </ToggleGroup>
    );
  },
);

export interface NavigationbarToggleProps
  extends Pick<ToggleProps, CommonComponentProps> {
  render: ToggleProps["render"];
  icon: IconType;
  label: string;
  value?: ToggleProps["value"];
}

const Trigger = forwardRef<HTMLButtonElement, NavigationbarToggleProps>(
  (props, ref) => {
    const { children, className, render, icon, label, ...rest } = props;

    return (
      <Toggle
        ref={ref}
        className={clsx(navigationbarLink, className)}
        render={render}
        {...rest}
      >
        <Icon
          icon={icon}
          width={24}
          height={24}
          className={navigationbarIcon}
        />
        <Text textStyles="labelMedium">{label}</Text>
      </Toggle>
    );
  },
);

export { NavigationBar, Trigger };
