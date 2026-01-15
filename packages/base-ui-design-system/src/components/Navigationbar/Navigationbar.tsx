import {
  ToggleGroup,
  type ToggleGroupProps,
} from "@base-ui/react/toggle-group";
import { Toggle, type ToggleProps } from "@base-ui/react/toggle";
import { forwardRef } from "react";
import clsx from "clsx";
import { navigationbar } from "./Navigationbar.css";
import { CommonComponentProps, PolymorphicRenderProps } from "@/types";
import { mergeProps, useRender } from "@base-ui/react";
import Icon from "@repo/design-system/components/Icon";

/**
 * @Anatomy
 *<Navigationbar>
	  <Navigationbar.Link icon="" label="" href="" />
  </Navigationbar>

  @baseui
  ToggleGroup: https://base-ui.com/react/components/toggle-group
 */

export interface NavigationbarProps
  extends Pick<ToggleGroupProps, CommonComponentProps> {}

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
}

const Trigger = forwardRef<HTMLButtonElement, NavigationbarToggleProps>(
  (props, ref) => {
    const { children, className, render, ...rest } = props;
    return (
      <Toggle ref={ref} className={clsx(className)} render={render} {...rest}>
        <Icon icon="Star" />
        {children}
      </Toggle>
    );
  },
);

interface NavigationLinkProps extends useRender.ComponentProps<"button"> {}

const NavigationLink = (props: NavigationLinkProps) => {
  const { render, ...otherProps } = props;

  const element = useRender({
    defaultTagName: "button",
    render,
    props: mergeProps<"button">({ className: "" }, otherProps),
  });
};

export { NavigationBar, Trigger };
