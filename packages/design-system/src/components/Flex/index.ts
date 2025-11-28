import Flex from "./Flex";
import FlexItem from "./FlexItem";

const Compound = Object.assign(Flex, {
  Item: FlexItem,
});

export { Compound as Flex };
