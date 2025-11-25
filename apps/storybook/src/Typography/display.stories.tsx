import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@repo/design-system";

const meta: Meta<typeof Typography.Display> = {
  title: "FOUNDATION/Typography/Display",
  component: Typography.Display,
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Typography.Display>;

export const Default: Story = {
  args: {
    children: "Display",
    size: "md",
  },
  render: (args) => {
    return (
      <Typography.Display size={args.size}>{args.children}</Typography.Display>
    );
  },
};
