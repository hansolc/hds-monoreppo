import type { Meta, StoryObj } from "@storybook/react";

import { Box } from "@repo/ui/ui/box";

const meta: Meta<typeof Box> = {
  component: Box,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Box>;

export const TextStory: Story = {
  args: {
    as: "p",
  },
  render: (args) => {
    return <Box {...args}>Text</Box>;
  },
};
