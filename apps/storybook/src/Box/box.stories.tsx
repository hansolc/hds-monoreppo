import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@repo/ui/ui/box";
import { ElementTypes } from "./options";

const meta: Meta<typeof Box> = {
  title: "POLYMORPHIC/Box",
  component: Box,
  argTypes: {
    as: {
      control: "select",
      options: ElementTypes,
    },
    children: {
      control: "text",
      description: "The content of the box",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Box>;

export const TextStory: Story = {
  args: {
    as: "p",
    children: "Content",
  },
  render: (args) => {
    return <Box {...args}>{args.children}</Box>;
  },
};
