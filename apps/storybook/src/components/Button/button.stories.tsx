import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@repo/design-system";
import { ALL_SEMANTIC_ELEMENTS } from "../../constant";

const meta: Meta<typeof Button> = {
  title: "COMPONENTS/Button",
  component: Button,
  argTypes: {
    as: {
      control: "select",
      options: ALL_SEMANTIC_ELEMENTS,
      table: {
        defaultValue: { summary: "button" },
      },
    },
    children: {
      control: "text",
    },
    disabled: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    loading: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    selected: {
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    as: "button",
    children: "Button Text",
    disabled: false,
    loading: false,
    selected: false,
  },
  render: ({ disabled, loading, selected, children, ...args }) => {
    return (
      <Button
        {...args}
        disabled={disabled}
        loading={loading}
        selected={selected}
      >
        {children}
      </Button>
    );
  },
};
