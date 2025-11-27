import type { Meta, StoryObj } from "@storybook/react";

import {
  Text,
  TEXT_SEMANTICS,
  TextStylesTypesKeys,
} from "@repo/design-system/components/Text";
import { vars } from "@repo/design-system/styles";

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
      description: "Typography scale",
      table: {
        defaultValue: {},
      },
    },
    fontSize: {
      control: "select",
      options: Object.keys(vars.typography.fontSize),
    },
    fontWeight: {
      control: "select",
      options: Object.keys(vars.typography.fontWeights),
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

export type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
  args: {
    children: "Text",
    as: "span",
  },
  render: (args) => {
    return <Text {...args}>{args.children}</Text>;
  },
};
