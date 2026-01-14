import {
  ToggleGroup,
  type ToggleGroupProps,
} from "@base-ui/react/toggle-group";
import { Toggle, type ToggleProps } from "@base-ui/react/toggle";
import { forwardRef } from "react";

/**
 * @Anatomy
 *<Navigationbar>
	<Navigationbar.Link icon="" label="" href="" />
</Navigationbar>
 */

export interface NavigationbarProps
  extends Pick<ToggleGroupProps, "style" | "className" | "children"> {}

const NavigationBar = forwardRef<HTMLDivElement, NavigationbarProps>(
  ({ children }, ref) => {
    return (
      <ToggleGroup ref={ref} orientation="vertical">
        {children}
      </ToggleGroup>
    );
  },
);

const Trigger = forwardRef<
  HTMLButtonElement,
  Pick<ToggleProps, "style" | "className" | "children">
>(({ children }, ref) => {
  return <Toggle ref={ref}>{children}</Toggle>;
});

export { NavigationBar, Trigger };
