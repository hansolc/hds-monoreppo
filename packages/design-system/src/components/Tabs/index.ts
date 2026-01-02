"use client";

/**
 * @Anatomy
 *  <Tabs>
 *  <Tabs.Label/>
 * 	<Tabs.List>
 * 		<Tabs.Trigger value="1" />
 * 		<Tabs.Trigger value="2" />
 * 	</Tabs.List>
 * 	<Tabs.Panel value="1" />
 * 	<Tabs.Panel value="2" />
 *  </Tabs>
 */

import { Tab as TabRoot } from "./Tab";
import { TabLabel } from "./TabLabel";
import { TabList } from "./TabList";
import { TabTrigger } from "./TabTrigger";
import { TabPanel } from "./TabPanel";

export const Tabs = Object.assign(TabRoot, {
  Label: TabLabel,
  List: TabList,
  Trigger: TabTrigger,
  Panel: TabPanel,
});
