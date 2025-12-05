"use client";

import { PolymorphicComponent } from "@/types/polymorphic";
import TabsImplementation, { TabsBaseProps } from "./Tab";
import TabList from "./TabList";

type TabComponentType = PolymorphicComponent<"div", TabsBaseProps> & {
  TabList: typeof TabList;
};

const Tabs = TabsImplementation as TabComponentType;

Tabs.TabList = TabList;

export { Tabs };
