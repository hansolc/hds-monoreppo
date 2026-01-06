import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  buttonVariantsKeys,
  buttonSizeKeys,
} from "@repo/base-ui-design-system/Button";
// import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: "md3/Button",
  component: Button,
  subcomponents: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
    variant: {
      options: buttonVariantsKeys,
      control: "radio",
    },
    size: {
      options: buttonSizeKeys,
      control: "radio",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    disabled: false,
    variant: "elevated",
    size: "xs",
  },
};
