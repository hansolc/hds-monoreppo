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
  Text,
} from "@repo/design-system";
// import { expect, userEvent, within } from '@storybook/test'

const meta = {
  title: "Components/Select",
  component: Select,
  subcomponents: {},
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
};
