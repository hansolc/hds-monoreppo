import type { Meta, StoryObj } from "@storybook/react";
import { Navigationbar, Link } from "@repo/base-ui-design-system/Navigationbar";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "md3/Navigationbar",
  component: Navigationbar,
  subcomponents: {
    Link,
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
      <Link>link1</Link>
      <Link>link2</Link>
      <Link>link3</Link>
    </Navigationbar>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
  },
};
