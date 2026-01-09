import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  buttonColorKeys,
  buttonSizeKeys,
  buttonShapeKeys,
} from "@repo/base-ui-design-system/Button";
import { IconKeys } from "@repo/design-system/components/Icon";
import { expect, userEvent, within } from "@storybook/test";

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
    startIcon: {
      options: Object.keys(IconKeys),
      control: "select",
    },
    endIcon: {
      options: Object.keys(IconKeys),
      control: "select",
    },
    toggle: {
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    render: {
      description: "Render the button as a custom element",
      table: { defaultValue: { summary: "<button/>" } },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// rendering
export const Default: Story = {
  args: {
    children: "Button",
    color: "filled",
    size: "s",
    shape: "round",
    disabled: false,
    startIcon: "Add",
    endIcon: "Add",
    toggle: false,
    render: <button />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const btn = canvas.getByRole("button", { name: "Button" });
    await expect(btn).toBeInTheDocument();
    await expect(btn).toBeEnabled();
  },
};

// disabled
export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "Button" });

    await expect(btn).toBeDisabled();
  },
};

// Toggle 기능
export const Toggle: Story = {
  args: { ...Default.args, toggle: true },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", { name: "Button" });

    await expect(btn).toHaveAttribute("aria-pressed", "false");
    await expect(btn).toHaveAttribute("data-pressed", "false");

    await userEvent.click(btn);
    await expect(btn).toHaveAttribute("aria-pressed", "true");
    await expect(btn).toHaveAttribute("data-pressed", "true");
  },
};
