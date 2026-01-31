import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Navigationbar,
  Trigger,
} from "@repo/base-ui-design-system/Navigationbar";
import { expect, userEvent, within } from "storybook/test";

const meta = {
  title: "md3/Navigationbar",
  component: Navigationbar,
  subcomponents: {
    Trigger,
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof Navigationbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Navigationbar>
      <Trigger render={<a href="#" />} icon="Star" label="link1" />
      <Trigger render={<a href="#" />} icon="Star" label="link2" />
      <Trigger render={<a href="#" />} icon="Star" label="link3" />
    </Navigationbar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
