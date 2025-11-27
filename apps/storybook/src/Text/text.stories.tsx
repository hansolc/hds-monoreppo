import type { Meta, StoryObj } from "@storybook/react";

import { Text, TEXT_SEMANTICS, TextStylesTypesKeys } from "@repo/design-system";

const meta: Meta<typeof Text> = {
  title: "FOUNDATION/Text",
  component: Text,
  argTypes: {
    children: {
      control: "text",
      description: "The content of the text",
    },
    as: {
      control: "select",
      options: TEXT_SEMANTICS,
    },
    textStyles: {
      control: "select",
      options: TextStylesTypesKeys,
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
  args: {
    children: "Text",
    as: "p",
  },
  render: (args) => {
    return <Text {...args}>{args.children}</Text>;
  },
};
