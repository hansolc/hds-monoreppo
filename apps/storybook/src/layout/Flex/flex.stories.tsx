import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "@repo/design-system/components/Flex";
import { ALL_SEMANTIC_ELEMENTS } from "../../constant";
import { responsiveProperties } from "@repo/design-system/styles";

const meta: Meta<typeof Flex> = {
  title: "LAYOUT/Flex",
  component: Flex,
  subcomponents: {
    "Flex.Item": Flex.Item,
  },
  argTypes: {
    as: {
      control: "select",
      options: ALL_SEMANTIC_ELEMENTS,
      description: "모든 시맨틱 태그를 허용합니다",
      table: {
        defaultValue: { summary: "div" },
      },
    },
    gap: {
      control: "select",
      options: Object.keys(responsiveProperties.styles.gap.values),
      table: {
        defaultValue: { summary: "small" },
      },
    },
    direction: {
      control: "select",
      options: Object.keys(responsiveProperties.styles.flexDirection.values),
      table: {
        defaultValue: { summary: "row" },
      },
    },
    wrap: {
      control: "select",
      options: Object.keys(responsiveProperties.styles.flexWrap.values),
    },
    align: {
      control: "select",
      options: Object.keys(responsiveProperties.styles.alignItems.values),
    },
    justify: {
      control: "select",
      options: Object.keys(responsiveProperties.styles.justifyContent.values),
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  args: {
    as: "div",
    gap: "small",
    direction: "row",
  },
  render: (args) => {
    return (
      <Flex {...args}>
        <div>item 1</div>
        <div>item 2</div>
        <div>item 3</div>
      </Flex>
    );
  },
};

export const FlexWithFlexItem: Story = {
  render: () => {
    return (
      <Flex style={{ width: "500px" }}>
        <Flex.Item flex="1 1 0">flex props</Flex.Item>
        <Flex.Item flex={1}>flex props with number</Flex.Item>
        <Flex.Item grow={1}>grow props</Flex.Item>
        <Flex.Item shrink={1}>shrink props</Flex.Item>
        <Flex.Item basis={100}>basis props</Flex.Item>
      </Flex>
    );
  },
};
