import type { Meta, StoryObj } from "@storybook/react";
import {
  Flex,
  Select,
  SelectContent,
  SelectIcon,
  SelectItem,
  SelectPortal,
  SelectTrigger,
  SelectValue,
} from "@repo/design-system";
import { expect, screen, userEvent, waitFor, within } from "@storybook/test";

const meta = {
  title: "Components/Select",
  component: Select,
  subcomponents: {
    "Select.Trigger": SelectTrigger,
    "Select.Value": SelectValue,
    "Select.Icon": SelectIcon,
    "Select.Content": SelectContent,
    "Select.Item": SelectItem,
    "Select.Portal": SelectPortal,
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {
      description: "Polymorphic component",
      table: {
        defaultValue: { summary: "div" },
      },
    },
    defaultValue: {
      description: "Default value",
      control: "text",
    },
    value: {
      description: "Value",
      control: "text",
    },
    onValueChange: {
      description: "onChange",
      action: "onValueChange",
    },
    open: {
      description: "Open",
      control: "boolean",
    },
    onOpenChange: {
      description: "onOpenChange",
      action: "onOpenChange",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    as: "div",
    baseId: "select",
  },
  render: () => {
    return (
      <Select>
        <SelectTrigger>
          <Flex>
            <SelectValue placeholder="Select an option"></SelectValue>
            <SelectIcon icon="ArrowDropDown" />
          </Flex>
        </SelectTrigger>
        <SelectPortal>
          <SelectContent>
            <SelectItem value="1">Option 1</SelectItem>
            <SelectItem value="2">Option 2</SelectItem>
            <SelectItem value="3">Option 3</SelectItem>
          </SelectContent>
        </SelectPortal>
      </Select>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = await userEvent.setup();

    const trigger = canvas.getByRole("combobox");

    await user.click(trigger);
    const option1 = screen.getByRole("option", { name: "Option 1" });
    await user.click(option1);

    // 포털이 닫히길 기다림
    await waitFor(() => {
      expect(
        screen.queryByRole("option", { name: "Option 1" }),
      ).not.toBeInTheDocument();
    });

    // 다시 열기
    await user.click(trigger);

    // 이제 aria-selected 확인
    await waitFor(async () => {
      const option1Reopened = screen.getByRole("option", { name: "Option 1" });
      await expect(option1Reopened).toHaveAttribute("aria-selected", "true");
    });

    // Escape로 포털 닫기
    await user.keyboard("{Escape}");
    await expect(trigger).toHaveFocus();

    // 키보드로 다시 열고 navigate
    await user.keyboard("{Enter}"); // 또는 {Space}
    await user.keyboard("{ArrowDown}");

    await waitFor(async () => {
      const option2 = screen.getByRole("option", { name: "Option 2" });
      await expect(option2).toHaveFocus();
    });
  },
};
