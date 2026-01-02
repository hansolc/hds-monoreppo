import type { Meta, StoryObj } from "@storybook/react";

import {
  Text,
  TEXT_SEMANTICS,
  TextStylesTypesKeys,
} from "@repo/design-system/components/Text";
import { vars } from "@repo/design-system/styles";
import { useRef } from "react";

const meta: Meta<typeof Text> = {
  title: "FOUNDATION/Text",
  component: Text,
  argTypes: {
    children: {
      control: "text",
      description: "The content of the text",
    },
    as: {
      control: "select",
      options: TEXT_SEMANTICS,
      table: {
        defaultValue: { summary: "span" },
      },
    },
    textStyles: {
      control: "select",
      options: TextStylesTypesKeys,
      description:
        "font-size, font-weight, line-height, letter-spacing 정의. 설정시 다른 속성들은 적용되지 않아요",
    },
    color: {
      control: "select",
      options: Object.keys(vars.color),
      description: "color",
    },
    fontSize: {
      control: "select",
      options: Object.keys(vars.typography.fontSize),
      description: "font-size",
    },
    fontWeight: {
      control: "select",
      options: Object.keys(vars.typography.fontWeights),
      description: "font-weight",
    },
    lineHeight: {
      control: "select",
      options: Object.keys(vars.typography.lineHeight),
      description: "line-height",
    },
    letterSpacing: {
      control: "select",
      options: Object.keys(vars.typography.letterSpacing),
      description: "letter-spacing",
    },
    textAlign: {
      control: "select",
      options: Object.keys(vars.typography.textAlign),
      description: "text-align",
    },
    whiteSpace: {
      control: "select",
      options: Object.keys(vars.typography.whiteSpace),
      description: "white-space",
    },
    textDecoration: {
      control: "select",
      options: Object.keys(vars.typography.textDecoration),
      description: "text-decoration",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Text",
    as: "span",
  },
  render: (args) => {
    return <Text {...args}>{args.children}</Text>;
  },
};

export const TextStyles: Story = {
  render: () => {
    return (
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Text textStyles="displayLarge">Display Large</Text>
          <Text textStyles="displayMedium">Display Medium</Text>
          <Text textStyles="displaySmall">Display Small</Text>
          <Text textStyles="headlineLarge">Headline Large</Text>
          <Text textStyles="headlineMedium">Headline Medium</Text>
          <Text textStyles="headlineSmall">Headline Small</Text>
          <Text textStyles="titleLarge">Title Large</Text>
          <Text textStyles="titleMedium">Title Medium</Text>
          <Text textStyles="titleSmall">Title Small</Text>
          <Text textStyles="labelLarge">Label Large</Text>
          <Text textStyles="labelMedium">Label Medium</Text>
          <Text textStyles="labelSmall">Label Small</Text>
          <Text textStyles="bodyLarge">Body Large</Text>
          <Text textStyles="bodyMedium">Body Medium</Text>
          <Text textStyles="bodySmall">Body Small</Text>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Text textStyles="displayLargeBold">Display Large Bold</Text>
          <Text textStyles="displayMediumBold">Display Medium Bold</Text>
          <Text textStyles="displaySmallBold">Display Small Bold</Text>
          <Text textStyles="headlineLargeBold">Headline Large Bold</Text>
          <Text textStyles="headlineMediumBold">Headline Medium Bold</Text>
          <Text textStyles="headlineSmallBold">Headline Small Bold</Text>
          <Text textStyles="titleLargeBold">Title Large Bold</Text>
          <Text textStyles="titleMediumBold">Title Medium Bold</Text>
          <Text textStyles="titleSmallBold">Title Small Bold</Text>
          <Text textStyles="labelLargeBold">Label Large Bold</Text>
          <Text textStyles="labelMediumBold">Label Medium Bold</Text>
          <Text textStyles="labelSmallBold">Label Small Bold</Text>
          <Text textStyles="bodyLargeBold">Body Large Bold</Text>
          <Text textStyles="bodyMediumBold">Body Medium Bold</Text>
          <Text textStyles="bodySmallBold">Body Small Bold</Text>
        </div>
      </div>
    );
  },
};
