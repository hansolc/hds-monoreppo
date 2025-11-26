import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@repo/design-system";

const meta: Meta<typeof Typography.Headline> = {
  title: "FOUNDATION/Typography/Headline",
  component: Typography.Headline,
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

export type Story = StoryObj<typeof Typography.Headline>;

export const Default: Story = {
  args: {
    children: "Headline",
    size: "md",
    emphasized: false,
  },
  render: (args) => {
    return (
      <Typography.Headline size={args.size} emphasized={args.emphasized}>
        {args.children}
      </Typography.Headline>
    );
  },
};
