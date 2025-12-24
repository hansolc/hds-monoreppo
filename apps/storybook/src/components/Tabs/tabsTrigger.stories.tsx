import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@repo/design-system";
// import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: "Components/Tabs/Trigger",
  component: Tabs.Trigger,
  subcomponents: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      description: "Value",
      control: "text",
    },
    disabled: {
      description: "Disabled",
      control: "boolean",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    children: { control: "text" },
  },
} satisfies Meta<typeof Tabs.Trigger>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "tab1",
    disabled: false,
  },
  render: (args) => {
    return (
      <Tabs>
        <Tabs.Trigger {...args}>tab1</Tabs.Trigger>
      </Tabs>
    );
  },
};
