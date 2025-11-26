import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@repo/design-system";

const meta: Meta<typeof Typography.Title> = {
  title: "FOUNDATION/Typography/Title",
  component: Typography.Title,
  argTypes: {
    children: {
      control: "text",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    emphasized: {
      control: "boolean",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Typography.Title>;

export const Default: Story = {
  args: {
    children: "Title",
    size: "md",
    emphasized: false,
  },
  render: (args) => {
    return (
      <Typography.Title size={args.size} emphasized={args.emphasized}>
        {args.children}
      </Typography.Title>
    );
  },
};
