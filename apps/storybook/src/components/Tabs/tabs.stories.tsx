import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "@repo/design-system";
import { expect, userEvent, within } from "@storybook/test";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  subcomponents: {
    // if is compounds pattern
    "Tabs.Label": Tabs.Label,
    "Tabs.List": Tabs.List,
    "Tabs.Trigger": Tabs.Trigger,
    "Tabs.Panel": Tabs.Panel,
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
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    // const Component = ({ children }: { children: React.ReactNode }) => {
    //   return <div id={"test"}>{children}</div>;
    // };
    return (
      <Tabs defaultValue="1">
        <Tabs.Label>Tabs</Tabs.Label>
        <Tabs.List>
          <Tabs.Trigger value="1">tab1</Tabs.Trigger>
          <Tabs.Trigger value="2">tab2</Tabs.Trigger>
          <Tabs.Trigger value="3">tab3</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Panel value="1">panel1</Tabs.Panel>
        <Tabs.Panel value="2">panel2</Tabs.Panel>
        <Tabs.Panel value="3">panel3</Tabs.Panel>
      </Tabs>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = await userEvent.setup();

    const tab1 = canvas.getByRole("tab", { name: "tab1" });
    const tab2 = canvas.getByRole("tab", { name: "tab2" });
    const tab3 = canvas.getByRole("tab", { name: "tab3" });

    // defaultValue에 정의한 대로 첫 번째 탭이 선택되어 있음
    await expect(tab1).toHaveAttribute("aria-selected", "true");
    await expect(tab1).toHaveAttribute("tabIndex", "0");

    // Tab 키로 focus를 잡음
    await user.keyboard("{Tab}");
    await expect(tab1).toHaveFocus();

    // Tab 키로 horizontal시 다음 방향으로 이동
    await user.keyboard("{Tab}");
    await expect(tab2).toHaveFocus();
    await expect(tab2).toHaveAttribute("aria-selected", "true");
    await expect(tab2).toHaveAttribute("tabIndex", "0");

    // ArrowRight 키로 horizontal시 다음 방향으로 이동
    await user.keyboard("{ArrowRight}");
    await expect(tab3).toHaveFocus();
    await expect(tab3).toHaveAttribute("aria-selected", "true");
    await expect(tab3).toHaveAttribute("tabIndex", "0");

    // ArrowLeft 키로 horizontal시 이전 방향으로 이동
    await user.keyboard("{ArrowLeft}");
    await expect(tab2).toHaveFocus();
    await expect(tab2).toHaveAttribute("aria-selected", "true");
    await expect(tab2).toHaveAttribute("tabIndex", "0");
  },
};
