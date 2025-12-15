import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@repo/design-system";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  subcomponents: {
    // if is compounds pattern
  },
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    as: {},
    children: {},
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const Component = ({ children }: { children: React.ReactNode }) => {
      return <div id={"test"}>{children}</div>;
    };
    return (
      <Tabs as={Component}>
        <Tabs.List>list1</Tabs.List>
      </Tabs>
    );
  },
};
