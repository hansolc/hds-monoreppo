import FlexImplementation from "./Flex";
import FlexItem from "./FlexItem";
import { PolymorphicComponent } from "@/types/polymorphic";
import { FlexBaseProps } from "./Flex";

// Flex 컴포넌트의 최종 타입 정의
type FlexComponentType = PolymorphicComponent<"div", FlexBaseProps> & {
  Item: typeof FlexItem;
};

const Flex = FlexImplementation as FlexComponentType;

Flex.Item = FlexItem;

export { Flex };
