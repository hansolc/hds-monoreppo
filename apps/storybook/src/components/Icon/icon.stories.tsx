import type { Meta, StoryObj } from "@storybook/react";

import Icon, { IconKeys } from "@repo/design-system/components/Icon";

const meta: Meta<typeof Icon> = {
  title: "COMPONENTS/Icon",
  component: Icon,
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(IconKeys),
    },
    width: {
      control: "number",
      table: {
        defaultValue: { summary: "24" },
      },
    },
    height: {
      control: "number",
      table: {
        defaultValue: { summary: "24" },
      },
    },
    fill: {
      control: "color",
    },
    stroke: {
      control: "color",
    },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: [
          "아이콘은 *.svg 파일을 소스로 하여 React 컴포넌트로 변환해 사용합니다.",
          "아이콘이 추가될 경우 다음 순서로 React 컴포넌트로 변환해 주세요.",
          "",
          "1. 다음 경로에 svg 파일을 추가해주세요. `@repo/design-system/public/icons/*.svg`",
          "2. 변환 실행: `pnpm run icons:generate`",
          "3. 다음 경로에 생성된 파일을 확인해주세요. `@repo/design-system/src/assets/icons/*.tsx`",
        ].join("\n"),
      },
    },
  },
};

export default meta;

export type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    icon: "Add",
    width: 24,
    height: 24,
  },
  render: (args) => {
    return <Icon {...args} />;
  },
};

export const AllIcons = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
        gap: "16px",
        maxWidth: "800px",
      }}
    >
      {Object.keys(IconKeys).map((iconName) => (
        <div
          key={iconName}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "16px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
          }}
        >
          <Icon
            icon={iconName as keyof typeof IconKeys}
            style={{ marginBottom: "8px" }}
          />
          <span style={{ fontSize: "12px", textAlign: "center" }}>
            {iconName}
          </span>
        </div>
      ))}
    </div>
  ),
};
