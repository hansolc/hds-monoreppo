import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "@repo/design-system/components/Flex";
import { ALL_SEMANTIC_ELEMENTS } from "../../constant";
import { flexTokens } from "@repo/design-system/styles";
import { vars } from "@repo/design-system/styles";

const meta: Meta<typeof Flex> = {
  title: "LAYOUT/Flex",
  component: Flex,
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
      options: Object.keys(vars.spacing),
      table: {
        defaultValue: { summary: "small" },
      },
    },
    direction: {
      control: "select",
      options: flexTokens.flexDirection,
      table: {
        defaultValue: { summary: "row" },
      },
    },
    wrap: {
      control: "select",
      options: flexTokens.flexWrap,
    },
    align: {
      control: "select",
      options: flexTokens.alignItems,
    },
    justify: {
      control: "select",
      options: flexTokens.justifyContent,
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
