import type { Meta, StoryObj } from "@storybook/react";

import { Flex } from "@repo/design-system/components/Flex";
import { ALL_SEMANTIC_ELEMENTS } from "../../constant";
import { unresponsiveProperties } from "@repo/design-system/styles";

const meta: Meta<typeof Flex.Item> = {
  title: "LAYOUT/Flex/Flex.Item",
  component: Flex.Item,
  argTypes: {
    as: {
      control: "select",
      options: ALL_SEMANTIC_ELEMENTS,
      table: {
        defaultValue: { summary: "div" },
      },
    },
    flex: {
      control: "select",
      description:
        "flex 단축 속성 (grow shrink basis). 문자열 또는 숫자로 설정 가능합니다",
      options: ["1 1 0", "0 1 0", 1, 2, 3, "1 1 100px"],
      table: { type: { summary: "string | number" } },
    },
    grow: {
      control: "select",
      options: Object.keys(unresponsiveProperties.styles.flexGrow.values),
      table: {
        type: { summary: "number" },
      },
    },
    shrink: {
      control: "select",
      options: Object.keys(unresponsiveProperties.styles.flexShrink.values),
      table: {
        type: { summary: "number" },
      },
    },
    basis: {
      control: "text",
      table: {
        type: { summary: "string | number" },
      },
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Flex.Item>;

/**
 * Flex.Item 컴포넌트의 기본 사용 예시입니다.
 * Controls를 사용하여 다양한 flex 속성을 실시간으로 테스트할 수 있습니다.
 */
export const Default: Story = {
  args: {
    flex: 1,
  },
  render: (args) => {
    return (
      <Flex style={{ width: "500px", border: "1px solid #ccc" }}>
        <Flex.Item {...args} style={{ background: "#e0e0e0", padding: "8px" }}>
          Flex.Item with controls
        </Flex.Item>
        <div style={{ background: "#f5f5f5", padding: "8px" }}>Regular div</div>
      </Flex>
    );
  },
};
