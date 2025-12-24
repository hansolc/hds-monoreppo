import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@repo/design-system";
// import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: "Components/Tabs/Label",
  component: Tabs.Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "Polymorphic component",
      table: {
        defaultValue: { summary: "h3" },
      },
    },
    children: {
      description: "Children",
      control: "text",
    },
  },
} satisfies Meta<typeof Tabs.Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <Tabs defaultValue="1">
        <Tabs.Label>Tab Label</Tabs.Label>
      </Tabs>
    );
  },
};
