import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@repo/design-system";
// import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: "Components/Tabs/List",
  component: Tabs.List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      description: "Orientation",
      control: "radio",
      options: ["horizontal", "vertical"],
      table: {
        defaultValue: { summary: "horizontal" },
      },
    },
    activationMode: {
      description: "Activation mode",
      control: "radio",
      options: ["automatic", "manual"],
      table: {
        defaultValue: { summary: "automatic" },
      },
    },
    loop: {
      description: "Loop",
      control: "boolean",
      table: {
        defaultValue: { summary: "true" },
      },
    },
    onKeyDown: {
      description: "On key down",
      action: "onKeyDown",
    },
  },
} satisfies Meta<typeof Tabs.List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: "horizontal",
    activationMode: "automatic",
    loop: true,
  },
  render: (args) => {
    return (
      <Tabs>
        <Tabs.List {...args}>
          <Tabs.Trigger value="1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="3">tab3</Tabs.Trigger>
        </Tabs.List>
      </Tabs>
    );
  },
};
