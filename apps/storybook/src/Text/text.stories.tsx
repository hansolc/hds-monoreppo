import type { Meta, StoryObj } from "@storybook/react";

import { Text, textVariantOptions } from "@repo/design-system";
import { ElementTypes } from "../Box/options";

const meta: Meta<typeof Text> = {
  title: "FOUNDATION/Text",
  component: Text,
  argTypes: {
    as: {
      control: "select",
      options: ElementTypes,
    },
    children: {
      control: "text",
      description: "The content of the text",
    },
    variants: {
      control: "select",
      options: textVariantOptions,
      description: "Typography scale",
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
    as: "p",
    variants: textVariantOptions[0],
  },
  render: (args) => {
    return <Text {...args}>{args.children}</Text>;
  },
};
