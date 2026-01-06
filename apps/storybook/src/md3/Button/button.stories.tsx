import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  buttonColorKeys,
  buttonSizeKeys,
  buttonShapeKeys,
} from "@repo/base-ui-design-system/Button";
// import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: "md3/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    color: {
      options: buttonColorKeys,
      control: "radio",
      table: { defaultValue: { summary: "filled" } },
    },
    size: {
      options: buttonSizeKeys,
      control: "radio",
      table: { defaultValue: { summary: "s" } },
    },
    shape: {
      options: buttonShapeKeys,
      control: "radio",
      table: { defaultValue: { summary: "round" } },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    color: "filled",
    size: "s",
    shape: "round",
    disabled: false,
  },
};
