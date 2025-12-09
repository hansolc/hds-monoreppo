import { FlexItem } from "./FlexItem";
import { Flex as FlexRoot } from "./Flex";

export const Flex = Object.assign(FlexRoot, {
  Item: FlexItem,
});
