"use client";

import {
  NavigationBar as BaseNavigationBar,
  Trigger as Link,
} from "./Navigationbar";

const Navigationbar = Object.assign(BaseNavigationBar, {
  Link,
});

export { Navigationbar, Link };
