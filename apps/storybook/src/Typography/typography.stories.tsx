import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@repo/design-system";

const meta: Meta<typeof Typography> = {
  title: "FOUNDATION/Typography",
  component: Typography,
  argTypes: {
    children: {
      control: "text",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Typography",
  },
  render: (args) => {
    return <Typography>{args.children}</Typography>;
  },
};
