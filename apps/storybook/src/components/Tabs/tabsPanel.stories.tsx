import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@repo/design-system";
// import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: "Components/Tabs/Panel",
  component: Tabs.Panel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    value: {
      description: "Value",
      control: "text",
    },
  },
} satisfies Meta<typeof Tabs.Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: "tab1",
  },
  render: (args) => {
    return (
      <Tabs>
        <Tabs.Trigger value="1">tab1</Tabs.Trigger>
        <Tabs.Panel {...args}>panel1</Tabs.Panel>
      </Tabs>
    );
  },
};
