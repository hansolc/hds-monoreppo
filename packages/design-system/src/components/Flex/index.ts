import { FlexItem } from "./FlexItem";
import { Flex as FlexRoot } from "./Flex";

const Flex = Object.assign(FlexRoot, {
  Item: FlexItem,
});

export { Flex };
