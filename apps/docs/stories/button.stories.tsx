import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui";

/**
 * Button 컴포넌트는 다양한 스타일과 크기를 지원하는 재사용 가능한 버튼입니다.
 * 
 * ## 주요 기능
 * - ✨ 5가지 variant (primary, secondary, outline, ghost, danger)
 * - 📏 3가지 size (sm, md, lg)
 * - 🔄 로딩 상태 지원
 * - 🎨 아이콘 지원 (leftIcon, rightIcon)
 * - ♿ 접근성 지원 (forwardRef, disabled)
 * - 💅 vanilla-extract로 스타일링
 */
const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
      description: "버튼의 시각적 스타일을 결정합니다",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "버튼의 크기를 결정합니다",
    },
    fullWidth: {
      control: "boolean",
      description: "버튼을 전체 너비로 표시할지 결정합니다",
    },
    isLoading: {
      control: "boolean",
      description: "로딩 상태를 표시합니다",
    },
    disabled: {
      control: "boolean",
      description: "버튼을 비활성화합니다",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 기본 Primary 버튼
 */
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

/**
 * Secondary 스타일 버튼
 */
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

/**
 * Outline 스타일 버튼
 */
export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

/**
 * Ghost 스타일 버튼
 */
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

/**
 * Danger 스타일 버튼 (위험한 액션용)
 */
export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

/**
 * Small 크기 버튼
 */
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

/**
 * Medium 크기 버튼 (기본)
 */
export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

/**
 * Large 크기 버튼
 */
export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

/**
 * 로딩 상태 버튼
 */
export const Loading: Story = {
  args: {
    isLoading: true,
    children: "Loading Button",
  },
};

/**
 * 비활성화된 버튼
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

/**
 * 왼쪽 아이콘이 있는 버튼
 */
export const WithLeftIcon: Story = {
  args: {
    leftIcon: "👈",
    children: "With Left Icon",
  },
};

/**
 * 오른쪽 아이콘이 있는 버튼
 */
export const WithRightIcon: Story = {
  args: {
    rightIcon: "👉",
    children: "With Right Icon",
  },
};

/**
 * 전체 너비 버튼
 */
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width Button",
  },
  parameters: {
    layout: "padded",
  },
};

/**
 * 다양한 크기 비교
 */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

/**
 * 모든 Variant 비교
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
    </div>
  ),
};
